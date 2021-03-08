from flask_restful import Resource, marshal_with, reqparse
from flask import abort, request

from ..models import Category as c
from .Serializers import categorySerializer
from real_legumes import db


parser = reqparse.RequestParser()
parser.add_argument('name', type=str, help="Unique name for category.", required=True)


class CategoryList(Resource):

    @staticmethod
    @marshal_with(categorySerializer)
    def get():
        categories = c.query.all()
        return categories

    @staticmethod
    def post():
        args = parser.parse_args()
        try:
            category = c(name=args['name'])
            db.session.add(category)
            db.session.commit()
            db.session.close()
        except AssertionError:
            return "Category name already exist.", 500
        except Exception:
            return "Backend exception.", 500
        else:
            return 'Done.', 201


class Category(Resource):

    @marshal_with(categorySerializer)
    def get(self, category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            return category, 200
        abort(404, description="Category not found.")

    @staticmethod
    def put(category_name):
        category = c.query.filter_by(name=category_name).first()
        args = parser.parse_args()
        if category:
            try:
                category.name = args['name']
                db.session.commit()
                db.session.close()
            except Exception:
                return "Backend exception.", 500
            else:
                return 'Updated.', 200
        abort(404, description="Category not found.")

    @staticmethod
    def delete(category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            try:
                db.session.delete(category)
                db.session.commit()
                db.session.close()
            except Exception:
                return "Backend exception.", 500
            else:
                return 'Deleted.', 200
        abort(404, description="Category not found.")
