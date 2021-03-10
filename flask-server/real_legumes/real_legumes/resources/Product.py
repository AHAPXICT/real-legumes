from flask_restful import Resource, marshal_with, reqparse
from flask import abort

from ..models import Product as p
from .Serializers import categoryFields
from real_legumes import db
