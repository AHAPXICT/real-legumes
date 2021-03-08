from flask import Blueprint
from flask_restful import Api

from ..real_legumes.resources.Category import CategoryList


api_v1 = Blueprint('api_v1', __name__)
api = Api(api_v1)

api.add_resource(CategoryList, '/categories')
