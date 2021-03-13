from flask_restful import Resource
from flask import abort
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs

from ..models import Image as i
from .schemas import ImageRequestSchema, ImageResponseSchema
from real_legumes import db


class ImageList(MethodResource, Resource):

    @doc(description="Images list.", tags=['Image'])
    @marshal_with(ImageResponseSchema(many=True))
    def get(self):
        images = i.query.all()
        return images

    @doc(description="Add mew image.", tags=['Image'])
    @use_kwargs(ImageRequestSchema, location=('json'))
    def post(self, **kwargs):
        try:
            image = i(image_url=kwargs['image_url'])
            image.save_to_db()
        except AssertionError:
            return {'message': "Image_url already exist."}, 500
        except Exception:
            return {'message': "Backend exception."}, 500
        else:
            return {'message': 'Done.'}, 201


class Image(MethodResource, Resource):

    @doc(description="Get image by url.", tags=['Image'])
    @marshal_with(ImageResponseSchema)
    def get(self, image_url):
        image = i.query.filter_by(image_url=image_url).first()
        if image:
            return image, 200
        abort(404, description="Image not found.")

    @doc(description="Update image.", tags=['Image'])
    @use_kwargs(ImageRequestSchema, location=('json'))
    def put(self, image_url, **kwargs):
        image = i.query.filter_by(image_url=image_url).first()
        if image:
            try:
                image.image_url = kwargs['image_url']
                db.session.commit()
                db.session.close()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return {'message': 'Updated.'}, 200
        abort(404, description="Category not found.")

    @doc(description="Delete image.", tags=['Image'])
    def delete(self, image_url):
        image = i.query.filter_by(image_url=image_url).first()
        if image:
            try:
                image.delete_from_db()
            except Exception:
                return {'message': "Backend exception."}, 500
            else:
                return None, 204
        abort(404, description="Image not found.")
