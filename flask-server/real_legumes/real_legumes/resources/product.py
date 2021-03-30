import os

from flask_restful import Resource, request
from flask_apispec.views import MethodResource
from flask import abort
from flask_apispec import marshal_with, doc, use_kwargs
import math
import base64

from ..models import Product as p, Category, Image, Ingredient
from .schemas import ProductResponseSchema, ProductRequestSchema, ProductListSchema
from real_legumes import db


def find_images(images_urls):
    images = []
    for image_url in images_urls:
        image = Image.query.filter_by(image_url=image_url).first()
        if not image:
            return False
        images.append(image)
    return images


class SpecialProducts(MethodResource, Resource):

    @doc(description="Special product list.", tags=['Product'])
    @marshal_with(ProductResponseSchema(many=True))
    def get(self):
        products = p.query.filter_by(is_special=True)
        return products


class ProductList(MethodResource, Resource):

    @doc(description="Product list. Params: "
                     "\n page (optional): page number. "
                     "\n count (optional): count products on page.", tags=['Product'])
    @marshal_with(ProductListSchema)
    def get(self):

        args = request.args.to_dict()
        page = 0
        count = 3

        if 'page' in args:
            try:
                page = int(args['page'])
            except ValueError:
                return {'message': "Params: page must be integer."}, 500

        if 'count' in args:
            try:
                count = int(args['count'])
            except ValueError:
                return {'message': "Params: count must be integer."}, 500

        products = p.query.all()[page*count:page*count+count]
        response = {
            'count': len(p.query.all()),
            'pages': math.ceil(len(p.query.all()) / count),
            'products': products
        }

        return response

    @doc(description="Add new product.", tags=['Product'])
    @use_kwargs(ProductRequestSchema, location=('json'))
    def post(self, **kwargs):

        # product = p(name='name',
        #             price=2,
        #             calories=2,
        #             description='description',
        #             count=2,
        #             weight=1,
        #             category_id=1,
        #             is_special=True
        #             )
        # product.save_to_db()

        # try:
        #     img = kwargs['images'][0]
        #
        #
        #     image = Image(
        #         is_title=img['is_title'],
        #         image_data=img['img_data'].encode('utf-8'),
        #         product_id=1
        #     )
        #     image.save_to_db()
        #     print(image.image_data[0:20])
        #     return 'done', 200
        # except Exception:
        #
        #     return 'done', 500

        ingredients = []
        for ingredient in kwargs['ingredients']:
            ingredient = Ingredient.query.filter_by(name=ingredient).first()
            if not ingredient:
                return {'message': "Ingredient not found."}, 404
            ingredients.append(ingredient)

        category = Category.query.filter_by(name=kwargs['category']).first()
        if not category:
            return {'message': "Category not found."}, 404

        try:
            product = p(name=kwargs['name'],
                        price=kwargs['price'],
                        calories=kwargs['calories'],
                        description=kwargs['description'],
                        count=kwargs['count'],
                        weight=kwargs['weight'],
                        category=category,
                        ingredients=ingredients,
                        is_special=kwargs['is_special']
                        )
            product.save_to_db()

            images = []
            try:
                print(kwargs['images'])
                for img in kwargs['images']:
                    try:
                        image = Image(
                            is_title=img['is_title'],
                            image_data=img['img_data'].encode('utf-8'),
                            product_id=product.id
                        )
                        image.save_to_db()
                    except Exception:
                        return {'message': "img db exception."}, 500
                    images.append(image)
            except Exception:
                return {'message': "img exception."}, 500
        except AssertionError:
            return {'message': "Product name already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Product(MethodResource, Resource):

    @doc(description="Get product by name.", tags=['Product'])
    @marshal_with(ProductResponseSchema)
    def get(self, product_name):
        product = p.query.filter_by(name=product_name).first()
        if product:
            return product, 200
        abort(404, description="Product not found.")

    @doc(description="Update product.", tags=['Product'])
    @use_kwargs(ProductRequestSchema, location=('json'))
    def put(self, product_name, **kwargs):
        product = p.query.filter_by(name=product_name).first()

        images = find_images(kwargs['images'])

        if not images:
            return {'message': "Image not found."}, 404

        category = Category.query.filter_by(name=kwargs['category']).first()
        if not category:
            return {'message': "Category not found."}, 404

        if product:
            try:
                product.name = kwargs['name']
                product.price = kwargs['price']
                product.calories = kwargs['calories']
                product.description = kwargs['description']
                product.count = kwargs['count']
                product.weight = kwargs['weight']
                product.images = images
                product.category = category
                db.session.commit()
                db.session.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Updated.'}, 200
        abort(404, description="Product not found.")

    @doc(description="Delete product.", tags=['Product'])
    def delete(self, product_name):
        product = p.query.filter_by(name=product_name).first()
        if product:
            try:
                product.delete_from_db()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return None, 204
        abort(404, description="Product not found.")
