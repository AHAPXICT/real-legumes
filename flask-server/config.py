import os


class BaseConfig:
    """Base config class."""

    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(BaseConfig):
    """Development environment specific config."""

    DEBUG = True
    TESTING = False

    SQLALCHEMY_DATABASE_URI = os.environ.get('DEVELOPMENT_DATABASE_URI')


class TestingConfig(BaseConfig):
    """Testing environment specific config."""

    TESTING = True
    DEBUG = False


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,

    'default': DevelopmentConfig
}
