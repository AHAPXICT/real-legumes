from flask_restful import Resource, marshal_with, reqparse
from flask import abort

from ..models import Image as i
from .Serializers import imageFields
from real_legumes import db


def add_parser():
    parser = reqparse.RequestParser()
    parser.add_argument('image_url', type=str, help="Unique image_url for image.", required=True)
    return parser


class ImageList(Resource):
    parser = add_parser()

    @marshal_with(imageFields)
    def get(self):
        images = i.query.all()
        return images

    def post(self):
        try:
            args = self.parser.parse_args()
            image = i(image_url=args['image_url'])
            image.save_to_db()
        except AssertionError:
            return {'message': "Image_url already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Image(Resource):
    parser = add_parser()

    @marshal_with(imageFields)
    def get(self, image_url):
        image = i.query.filter_by(image_url=image_url).first()
        if image:
            return image, 200
        abort(404, description="Image not found.")

    def put(self, image_url):
        image = i.query.filter_by(image_url=image_url).first()
        if image:
            try:
                args = self.parser.parse_args()
                image.image_url = args['image_url']
                db.session.commit()
                db.session.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Updated.'}, 200
        abort(404, description="Category not found.")

    @staticmethod
    def delete(image_url):
        image = i.query.filter_by(image_url=image_url).first()
        if image:
            try:
                image.delete_from_db()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Deleted.'}, 200
        abort(404, description="Image not found.")
