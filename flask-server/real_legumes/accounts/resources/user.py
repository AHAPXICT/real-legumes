from flask_restful import Resource
from flask_apispec.views import MethodResource
from flask import abort, jsonify
from flask_apispec import marshal_with, doc, use_kwargs

from ..models import User as u
from real_legumes import db, bcrypt
from .schemas import UserResponseSchema, UserRequestSchema


class Register(MethodResource, Resource):

    @doc(description="Register user.", tags=['User'])
    @use_kwargs(UserRequestSchema, location=('json'))
    def post(self, **kwargs):
        user = u.query.filter_by(email=kwargs['email']).first()
        if not user:
            try:
                user = u(email=kwargs['email'], password=kwargs['password'])
                db.session.add(user)
                db.session.commit()
                auth_token = user.encode_auth_token(user.id)
                responseObject = {
                    'status': 'success',
                    'message': 'Successfully registered.',
                    'auth_token': auth_token
                }
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return responseObject, 201
        else:
            return {'message': "User already exists. Please Log in."}, 500



