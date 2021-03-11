from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from config import config


db = SQLAlchemy()
migrate = Migrate()


def register_blueprints(app):
    from .api import api_v1

    app.register_blueprint(api_v1, url_prefix='/api')


def create_app(config_name: str):

    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    migrate.init_app(app, db)

    register_blueprints(app)

    return app
