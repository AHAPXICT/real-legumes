from flask_restful import Resource, marshal_with, reqparse
from flask import abort

from ..models import Product as p, Category, Image, Ingredient
from .schemas import productFields
from real_legumes import db


def add_parser():
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, help="Unique name for product.", required=True)
    parser.add_argument('price', type=int, help="Positive price for product.", required=True)
    parser.add_argument('calories', type=int, help="Positive calories count for product.", required=True)
    parser.add_argument('description', type=str, help="Description for product.", required=True)
    parser.add_argument('count', type=int, help="Positive product count.", required=True)
    parser.add_argument('weight', type=int, help="Positive weight for product.", required=True)
    parser.add_argument('category_name', type=str, help="Unique name for exist category.", required=True)
    parser.add_argument('image_urls', type=str, help="Unique names for exist images.", required=True, action='append')
    parser.add_argument('ingredients', type=str, help="Unique names for exist ingredients.", required=True, action='append')
    return parser


def find_images(images_urls):
    images = []
    for image_url in images_urls:
        image = Image.query.filter_by(image_url=image_url).first()
        if not image:
            return False
        images.append(image)
    return images


class ProductList(Resource):
    parser = add_parser()

    @marshal_with(productFields)
    def get(self):
        products = p.query.all()
        return products

    def post(self):
        try:
            args = self.parser.parse_args()
            category = Category.query.filter_by(name=args['category_name']).first()
            if not category:
                return {'message': "Category not found."}, 404

            images = []
            print(args)
            for image_url in args['image_urls']:
                image = Image.query.filter_by(image_url=image_url).first()
                if not image:
                    return {'message': "Image not found."}, 404
                images.append(image)

            ingredients = []
            for ingredient in args['ingredients']:
                ingredient = Ingredient.query.filter_by(name=ingredient).first()
                if not ingredient:
                    return {'message': "Ingredient not found."}, 404
                ingredients.append(ingredient)

            product = p(name=args['name'],
                        price=args['price'],
                        calories=args['calories'],
                        description=args['description'],
                        count=args['count'],
                        weight=args['weight'],
                        category=category,
                        images=images,
                        ingredients=ingredients
                        )
            product.save_to_db()
        except AssertionError:
            return {'message': "Product name already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Product(Resource):
    parser = add_parser()

    @marshal_with(productFields)
    def get(self, product_name):
        product = p.query.filter_by(name=product_name).first()
        if product:
            return product, 200
        abort(404, description="Product not found.")

    def put(self, product_name):
        product = p.query.filter_by(name=product_name).first()
        args = self.parser.parse_args()

        images = find_images(args['image_urls'])

        if not images:
            return {'message': "Image not found."}, 404

        category = Category.query.filter_by(name=args['category_name']).first()
        if not category:
            return {'message': "Category not found."}, 404

        if product:
            try:
                product.name = args['name']
                product.price = args['price']
                product.calories = args['calories']
                product.description = args['description']
                product.count = args['count']
                product.weight = args['weight']
                product.images = images
                product.category = category
                db.session.commit()
                db.session.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Updated.'}, 200
        abort(404, description="Product not found.")

    @staticmethod
    def delete(product_name):
        product = p.query.filter_by(name=product_name).first()
        if product:
            try:
                product.delete_from_db()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Deleted.'}, 200
        abort(404, description="Product not found.")
