from flask_restful import Resource, marshal_with, reqparse

from ..models import Category
from .Serializers import categorySerializer
from real_legumes import db


class CategoryList(Resource):

    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', type=str, help="Unique name for category.")

    @staticmethod
    @marshal_with(categorySerializer)
    def get():
        categories = Category.query.all()
        return categories

    def post(self):
        args = self.parser.parse_args()
        try:
            category = Category(name=args['name'])
            db.session.add(category)
            db.session.commit()
            db.session.close()
        except AssertionError:
            return "Category name already exist.", 500
        except Exception:
            return "Backend exception.", 500
        else:
            return 'Done', 201
