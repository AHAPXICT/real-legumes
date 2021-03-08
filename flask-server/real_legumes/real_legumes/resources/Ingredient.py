from flask_restful import Resource, marshal_with, reqparse
from flask import abort

from ..models import Ingredient as i
from .Serializers import ingredientFields
from real_legumes import db


parser = reqparse.RequestParser()
parser.add_argument('name', type=str, help="Unique name for Ingredient.", required=True)
args = parser.parse_args()


class IngredientList(Resource):

    @staticmethod
    @marshal_with(ingredientFields)
    def get():
        ingredients = i.query.all()
        return ingredients

    @staticmethod
    def post():
        try:
            ingredient = i(name=args['name'])
            db.session.add(ingredient)
            db.session.commit()
            db.session.close()
        except AssertionError:
            return "Ingredient name already exist.", 500
        except Exception:
            return "Backend exception.", 500
        else:
            return 'Done.', 201


class Ingredient(Resource):

    @marshal_with(ingredientFields)
    def get(self, category_name):
        category = c.query.filter_by(name=category_name).first()
        if category:
            return category, 200
        abort(404, description="Category not found.")

    @staticmethod
    def put(category_name):
        category = c.query.filter_by(name=category_name).first()
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
