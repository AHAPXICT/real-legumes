from flask_restful import Resource, marshal_with, reqparse
from flask import abort

from ..models import Category as c
from .Serializers import categoryFields
from real_legumes import db


class CategoryList(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, help="Unique name for category.", required=True)

    @marshal_with(categoryFields)
    def get(self):
        categories = c.query.all()
        return categories

    def post(self):
        try:
            args = self.parser.parse_args()
            category = c(name=args['name'])
            category.save_to_db()
        except AssertionError:
            return {'message': "Category name already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Category(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, help="Unique name for category.", required=True)

    @marshal_with(categoryFields)
    def get(self, category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            return category, 200
        abort(404, description="Category not found.")

    def put(self, category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            try:
                args = self.parser.parse_args()
                category.name = args['name']
                db.session.commit()
                db.session.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Updated.'}, 200
        abort(404, description="Category not found.")

    @staticmethod
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
