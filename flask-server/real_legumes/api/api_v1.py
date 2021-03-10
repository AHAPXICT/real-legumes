from flask import Blueprint
from flask_restful import Api

from ..real_legumes.resources.Category import CategoryList, Category
from ..real_legumes.resources.Ingredient import IngredientList, Ingredient
from ..real_legumes.resources.Image import Image, ImageList


api_v1 = Blueprint('api_v1', __name__)
api = Api(api_v1)

api.add_resource(CategoryList, '/categories')
api.add_resource(Category, '/category/<category_name>')

api.add_resource(IngredientList, '/ingredients')
api.add_resource(Ingredient, '/ingredient/<ingredient_name>')

api.add_resource(ImageList, '/images')
api.add_resource(Image, '/image/<image_url>')
