from marshmallow import Schema, fields


class ProductBaseSchema:
    name = fields.String(required=True)
    price = fields.Integer(required=True)
    calories = fields.Integer(required=True)
    description = fields.String(default='')
    count = fields.Integer(required=True)
    weight = fields.Integer(required=True)
    category = fields.String(required=True)
    images = fields.List(fields.String(), required=True)
    ingredients = fields.List(fields.String(), required=True)
    is_special = fields.Boolean(default=False)


class ProductResponseSchema(Schema, ProductBaseSchema):
    created_at = fields.String()
    updated_at = fields.String()


class ProductRequestSchema(Schema, ProductBaseSchema):
    pass


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
