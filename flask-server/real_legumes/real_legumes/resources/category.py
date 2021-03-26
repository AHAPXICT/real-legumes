from flask_restful import Resource
from flask_apispec.views import MethodResource
from flask import abort
from flask_apispec import marshal_with, doc, use_kwargs

from ..models import Category as c
from .schemas import CategoryResponseSchema, CategoryRequestSchema
from real_legumes import db


class CategoryList(MethodResource, Resource):

    @doc(description="Category list.", tags=['Category'])
    @marshal_with(CategoryResponseSchema(many=True))
    def get(self):
        categories = c.query.all()
        return categories

    @doc(description="Add new category.", tags=['Category'])
    @use_kwargs(CategoryRequestSchema, location=('json'))
    def post(self, **kwargs):
        try:
            category = c(name=kwargs['name'])
            category.save_to_db()
        except AssertionError:
            return {'message': "Category name already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Category(MethodResource, Resource):

    @doc(description="Get category by name.", tags=['Category'])
    @marshal_with(CategoryResponseSchema)
    def get(self, category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            return category, 200
        abort(404, description="Category not found.")

    @doc(description="Update category.", tags=['Category'])
    @use_kwargs(CategoryRequestSchema, location=('json'))
    def put(self, category_name, **kwargs):
        category = c.query.filter_by(name=category_name).first()
        if category:
            try:
                category.name = kwargs['name']
                db.session.commit()
                db.session.close()
            except AssertionError:
                return {'message': "Category name already exist."}, 500
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Updated.'}, 200
        abort(404, description="Category not found.")

    @doc(description="Delete category.", tags=['Category'])
    def delete(self, category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            try:
                category.delete_from_db()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return None, 204
        abort(404, description="Category not found.")
