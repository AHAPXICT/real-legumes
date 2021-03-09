from flask import Blueprint
from flask_restful import Api

from ..real_legumes.resources.Category import CategoryList, Category


api_v1 = Blueprint('api_v1', __name__)
api = Api(api_v1)

api.add_resource(CategoryList, '/categories')
api.add_resource(Category, '/category/<category_name>')

# api.add_resource(CategoryList, '/categories')
# api.add_resource(Category, '/category/<category_name>')
