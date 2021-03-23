from apispec import APISpec
from apispec.ext.marshmallow import MarshmallowPlugin
import os


class BaseConfig:
    """Base config class."""

    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(BaseConfig):
    """Development environment specific config."""

    DEBUG = True
    TESTING = False

    SQLALCHEMY_DATABASE_URI = os.environ.get('DEVELOPMENT_DATABASE_URI')

    #register swagger
    APISPEC_SPEC = APISpec(
        title='Real Legumes',
        version='v1',
        plugins=[MarshmallowPlugin()],
        openapi_version='2.0.0'
    )
    APISPEC_SWAGGER_URL = '/swagger/'
    APISPEC_SWAGGER_UI_URL = '/swagger-ui/'

    CORS_ALLOW_HEADERS = 'http://localhost:3000/'


class TestingConfig(BaseConfig):
    """Testing environment specific config."""

    TESTING = True
    DEBUG = False


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,

    'default': DevelopmentConfig
}
