from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_apispec.extension import FlaskApiSpec
from flask_cors import CORS
from flask_bcrypt import Bcrypt

from config import config

db = SQLAlchemy()
migrate = Migrate()
docs = FlaskApiSpec()
cors = CORS()
bcrypt = Bcrypt()

from real_legumes.real_legumes.models import *
from real_legumes.accounts.models import *


def _access_control(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET,HEAD,PUT,PATCH,POST,DELETE'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


def register_blueprints(app):
    from .api import api_v1

    app.register_blueprint(api_v1, url_prefix='/api')


def register_docs(docs):
    from .real_legumes.resources.category import CategoryList, Category
    from .real_legumes.resources.image import ImageList, Image
    from .real_legumes.resources.ingredient import IngredientList, Ingredient
    from .real_legumes.resources.product import ProductList, Product, SpecialProducts
    from .accounts.resources.user import Register

    docs.register(CategoryList, blueprint="api_v1")
    docs.register(Category, blueprint="api_v1")

    docs.register(ImageList, blueprint="api_v1")
    docs.register(Image, blueprint="api_v1")

    docs.register(IngredientList, blueprint="api_v1")
    docs.register(Ingredient, blueprint="api_v1")

    docs.register(ProductList, blueprint="api_v1")
    docs.register(Product, blueprint="api_v1")
    docs.register(SpecialProducts, blueprint="api_v1")

    docs.register(Register, blueprint="api_v1")


def create_app(config_name: str):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    migrate.init_app(app, db)

    register_blueprints(app)

    docs.init_app(app)
    register_docs(docs)

    cors.init_app(app)
    app.after_request(_access_control)

    bcrypt.init_app(app)

    return app
