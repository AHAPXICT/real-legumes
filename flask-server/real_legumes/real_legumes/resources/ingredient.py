from flask_restful import Resource
from flask_apispec.views import MethodResource
from flask import abort
from flask_apispec import marshal_with, doc, use_kwargs

from ..models import Ingredient as i
from .schemas import IngredientRequestSchema, IngredientResponseSchema
from real_legumes import db


class IngredientList(MethodResource, Resource):

    @doc(description="Ingredient list.", tags=['Ingredient'])
    @marshal_with(IngredientResponseSchema(many=True))
    def get(self):
        ingredients = i.query.all()
        print(ingredients)
        return ingredients

    @doc(description="Add new category.", tags=['Ingredient'])
    @use_kwargs(IngredientRequestSchema, location=('json'))
    def post(self, **kwargs):
        try:
            ingredient = i(name=kwargs['name'])
            ingredient.save_to_db()
        except AssertionError:
            return {'message': "Ingredient name already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Ingredient(MethodResource, Resource):

    @doc(description="Get ingredient by name.", tags=['Ingredient'])
    @marshal_with(IngredientResponseSchema)
    def get(self, ingredient_name):
        ingredient = i.query.filter_by(name=ingredient_name).first()
        if ingredient:
            return ingredient, 200
        abort(404, description="Ingredient not found.")

    @doc(description="Update ingredient.", tags=['Ingredient'])
    @use_kwargs(IngredientRequestSchema, location=('json'))
    def put(self, ingredient_name, **kwargs):
        ingredient = i.query.filter_by(name=ingredient_name).first()
        if ingredient:
            try:
                ingredient.name = kwargs['name']
                db.session.commit()
                db.session.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': "Updated."}, 200
        abort(404, description="Category not found.")

    @doc(description="Delete ingredient.", tags=['Ingredient'])
    def delete(self, ingredient_name):
        ingredient = i.query.filter_by(name=ingredient_name).first()
        if ingredient:
            try:
                ingredient.delete_from_db()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return None, 204
        abort(404, description="Category not found.")
