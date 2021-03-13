from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_apispec.extension import FlaskApiSpec

from config import config

db = SQLAlchemy()
migrate = Migrate()
docs = FlaskApiSpec()


def register_blueprints(app):
    from .api import api_v1

    app.register_blueprint(api_v1, url_prefix='/api')


def register_docs(docs):
    from .real_legumes.resources.category import CategoryList, Category
    from .real_legumes.resources.image import ImageList, Image
    from .real_legumes.resources.ingredient import IngredientList, Ingredient
    from .real_legumes.resources.product import ProductList, Product

    docs.register(CategoryList, blueprint="api_v1")
    docs.register(Category, blueprint="api_v1")

    docs.register(ImageList, blueprint="api_v1")
    docs.register(Image, blueprint="api_v1")

    docs.register(IngredientList, blueprint="api_v1")
    docs.register(Ingredient, blueprint="api_v1")

    docs.register(ProductList, blueprint="api_v1")
    docs.register(Product, blueprint="api_v1")


def create_app(config_name: str):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    migrate.init_app(app, db)

    register_blueprints(app)

    docs.init_app(app)
    register_docs(docs)

    return app
