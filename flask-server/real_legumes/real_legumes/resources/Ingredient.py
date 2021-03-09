from flask_restful import Resource, marshal_with, reqparse
from flask import abort

from ..models import Ingredient as i
from .Serializers import ingredientFields
from real_legumes import db


class IngredientList(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, help="Unique name for Ingredient.", required=True)

    @marshal_with(ingredientFields)
    def get(self):
        ingredients = i.query.all()
        return ingredients

    def post(self):
        args = self.parser.parse_args()
        try:
            ingredient = i(name=args['name'])
            ingredient.save_to_db()
        except AssertionError:
            return {'message': "Ingredient name already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Ingredient(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('name', type=str, help="Unique name for Ingredient.", required=True)

    @marshal_with(ingredientFields)
    def get(self, ingredient_name):
        ingredient = i.query.filter_by(name=ingredient_name).first()
        if ingredient:
            return ingredient, 200
        abort(404, description="Ingredient not found.")

    def put(self, ingredient_name):
        ingredient = i.query.filter_by(name=ingredient_name).first()
        if ingredient:
            try:
                args = self.parser.parse_args()
                ingredient.name = args['name']
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
