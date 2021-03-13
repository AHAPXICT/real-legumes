from marshmallow import Schema, fields


productFields = {
    'name': fields.String,
    'price': fields.Integer,
    'calories': fields.Integer,
    'description': fields.String,
    'count': fields.Integer,
    'weight': fields.Integer,
    'category': fields.String,
    'images': fields.List(fields.String),
}


class CategoryResponseSchema(Schema):
    name = fields.String()
    created_at = fields.String()
    updated_at = fields.String()


class CategoryRequestSchema(Schema):
    name = fields.String(required=True, allow_none=False)


class IngredientResponseSchema(Schema):
    name = fields.String()
    created_at = fields.String()
    updated_at = fields.String()


class IngredientRequestSchema(Schema):
    name = fields.String(required=True, allow_none=False)


class ImageResponseSchema(Schema):
    image_url = fields.String()
    created_at = fields.String()
    updated_at = fields.String()


class ImageRequestSchema(Schema):
    image_url = fields.String(required=True, allow_none=False)
