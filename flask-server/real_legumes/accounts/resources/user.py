from flask.views import MethodView
from flask_restful import Resource
from flask_apispec.views import MethodResource
from flask import abort, jsonify
from flask_apispec import marshal_with, doc, use_kwargs
from flask import request

from ..models import User as u
from ..models import BlacklistToken
from real_legumes import db, bcrypt
from .schemas import UserResponseSchema, UserRequestSchema, UserLogoutSchema


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


class Login(MethodResource, Resource):

    @doc(description="Login user.", tags=['User'])
    @use_kwargs(UserRequestSchema, location=('json'))
    def post(self, **kwargs):
        try:
            user = u.query.filter_by(
                email=kwargs['email']
            ).first()

            if user and bcrypt.check_password_hash(
                    user.password, kwargs['password']
            ):
                auth_token = user.encode_auth_token(user.id)
                if auth_token:
                    responseObject = {
                        'status': 'success',
                        'message': "Successfully logged in.",
                        'auth_token': auth_token
                    }
                    return responseObject, 200
            else:
                return {'message': "User does not exist."}, 500
        except Exception:
            return {'message': "Try again."}, 500


class UserAPI(MethodResource, Resource):

    @doc(description="Get user.", tags=['User'])
    @marshal_with(UserResponseSchema)
    def get(self):
        # get the auth token
        auth_header = request.headers.get('Authorization')
        print(auth_header)

        if auth_header:
            try:
                auth_token = auth_header.split(" ")[0]
            except IndexError:
                responseObject = {
                    'status': 'fail',
                    'message': 'Bearer token malformed.'
                }
                return responseObject, 401
        else:
            auth_token = ''
        if auth_token:
            print('3')
            resp = u.decode_auth_token(auth_token)
            print(resp)
            if not isinstance(resp, str):
                user = u.query.filter_by(id=resp).first()
                responseObject = {
                        'user_id': user.id,
                        'email': user.email,
                        'admin': user.admin,
                        'registered_on': str(user.registered_on)
                }
                return responseObject, 200
            responseObject = {
                'status': 'fail',
                'message': resp
            }
            return responseObject, 401
        else:
            responseObject = {
                'status': 'fail',
                'message': 'Provide a valid auth token.'
            }
            return responseObject, 401


class Logout(MethodResource, Resource):
    """
    Logout Resource
    """

    @doc(description="Logout user.", tags=['User'])
    @use_kwargs(UserLogoutSchema, location=('json'))
    def post(self):
        # get auth token
        auth_header = request.headers.get('Authorization')
        if auth_header:
            auth_token = auth_header.split(" ")[0]
        else:
            auth_token = ''
        if auth_token:
            resp = u.decode_auth_token(auth_token)
            if not isinstance(resp, str):
                # mark the token as blacklisted
                blacklist_token = BlacklistToken(token=auth_token)
                try:
                    # insert the token
                    db.session.add(blacklist_token)
                    db.session.commit()
                    responseObject = {
                        'status': 'success',
                        'message': 'Successfully logged out.'
                    }
                    return responseObject, 200
                except Exception as e:
                    responseObject = {
                        'status': 'fail',
                        'message': e
                    }
                    return responseObject, 200
            else:
                responseObject = {
                    'status': 'fail',
                    'message': resp
                }
                return responseObject, 401
        else:
            responseObject = {
                'status': 'fail',
                'message': 'Provide a valid auth token.'
            }
            return responseObject, 403
