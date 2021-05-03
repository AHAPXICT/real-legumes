from flask import Blueprint
from flask_restful import Api

from ..real_legumes.resources.category import CategoryList, Category
from ..real_legumes.resources.ingredient import IngredientList, Ingredient
from ..real_legumes.resources.image import Image, ImageList
from ..real_legumes.resources.product import Product, ProductList, SpecialProducts

from ..accounts.resources.user import UserRegistration, Login, TokenRefresh, SecretResource, \
    UserLogoutAccess, UserLogoutRefresh


api_v1 = Blueprint('api_v1', __name__)
api = Api(api_v1)

api.add_resource(CategoryList, '/categories')
api.add_resource(Category, '/category/<category_name>')

api.add_resource(IngredientList, '/ingredients')
api.add_resource(Ingredient, '/ingredient/<ingredient_name>')

api.add_resource(ImageList, '/images')
api.add_resource(Image, '/image/<image_url>')

api.add_resource(ProductList, '/products')
api.add_resource(SpecialProducts, '/products/special')
api.add_resource(Product, '/product/<product_name>')

api.add_resource(UserRegistration, '/users/register')
api.add_resource(Login, '/users/login')
api.add_resource(UserLogoutAccess, '/users/logout/access')
api.add_resource(UserLogoutRefresh, '/users/logout/refresh')
api.add_resource(TokenRefresh, '/users/refresh')
api.add_resource(SecretResource, '/secret')
