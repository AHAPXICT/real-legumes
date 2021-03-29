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
        try:
            # category = Category.query.filter_by(name=kwargs['category']).first()
            # if not category:
            #     return {'message': "Category not found."}, 404

            save_path = '/static/product_images/'
            file_name = 'test.txt'
            my_str = kwargs['images'][0]
            absolute_path = os.path.abspath("static/product_images")
            print(p)
            try:
                f = open(absolute_path + r'\test.txt', 'w+')
                f.write(my_str)
                f.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            # print(os.path.join(save_path, file_name))

            # print(my_str[0:20])
            # with open("imageToSave.jpg", "wb") as fh:
            #     fh.write(base64.decodebytes(str.encode(my_str)))

            # img = Image(is_title=False, image_data_base64=str.encode(my_str))
            # db.session.commit()
            # img.save_to_db()

            # images = []
            # for image_url in kwargs['images']:
            #     image = Image.query.filter_by(image_url=image_url).first()
            #     if not image:
            #         return {'message': "Image not found."}, 404
            #     images.append(image)
            #
            # print('test')
            #
            # ingredients = []
            # for ingredient in kwargs['ingredients']:
            #     ingredient = Ingredient.query.filter_by(name=ingredient).first()
            #     if not ingredient:
            #         return {'message': "Ingredient not found."}, 404
            #     ingredients.append(ingredient)
            #
            # product = p(name=kwargs['name'],
            #             price=kwargs['price'],
            #             calories=kwargs['calories'],
            #             description=kwargs['description'],
            #             count=kwargs['count'],
            #             weight=kwargs['weight'],
            #             category=category,
            #             images=images,
            #             ingredients=ingredients,
            #             is_special=kwargs['is_special']
            #             )
            # product.save_to_db()
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
