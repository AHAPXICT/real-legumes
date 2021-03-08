from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from config import config

from .api import api_v1


db = SQLAlchemy()
migrate = Migrate()


def create_app(config_name: str):
    app = Flask(__name__)
    app.config.from_object(config[config_name])

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(api_v1, url_prefix='/api')

    return app
