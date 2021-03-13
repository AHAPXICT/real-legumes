from flask_restful import Resource
from flask_apispec.views import MethodResource
from flask import abort
from marshmallow import Schema, fields
from flask_apispec import marshal_with, doc, use_kwargs

from ..models import Category as c
from .Serializers import categoryFields
from real_legumes import db


class CategoryResponseSchema(Schema):
    name = fields.String()
    created_at = fields.String()
    updated_at = fields.String()


class CategoryRequestSchema(Schema):
    name = fields.String(required=True, allow_none=False)


class CategoryList(MethodResource, Resource):

    @doc(description='Category list.', tags=['Category'])
    @marshal_with(CategoryResponseSchema(many=True))
    def get(self):
        categories = c.query.all()
        return categories

    @doc(description='Add new category.', tags=['Category'])
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

    @doc(description='Get category by name.', tags=['Category'])
    @marshal_with(CategoryResponseSchema)
    def get(self, category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            return category, 200
        abort(404, description="Category not found.")

    @doc(description='Update category.', tags=['Category'])
    @use_kwargs(CategoryRequestSchema, location=('json'))
    def put(self, category_name, **kwargs):
        category = c.query.filter_by(name=category_name).first()
        if category:
            try:
                category.name = kwargs['name']
                db.session.commit()
                db.session.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Updated.'}, 200
        abort(404, description="Category not found.")

    @staticmethod
    @doc(description='Delete category.', tags=['Category'])
    def delete(category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            try:
                category.delete_from_db()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Deleted.'}, 200
        abort(404, description="Category not found.")
