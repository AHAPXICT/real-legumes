from marshmallow import Schema, fields


class ImageRequestSchema(Schema):
    img_data = fields.Raw(required=True, allow_none=False)
    is_title = fields.Boolean(required=True)


class ImageResponseSchema(Schema):
    image_data = fields.String(required=True, allow_none=False)
    is_title = fields.Boolean(required=True)


class ProductBaseSchema:
    name = fields.String(required=True)
    price = fields.Integer(required=True)
    calories = fields.Integer(required=True)
    description = fields.String(default='')
    count = fields.Integer(required=True)
    weight = fields.Integer(required=True)
    category = fields.String(required=True)
    images = fields.List(fields.Nested(ImageRequestSchema), required=True)
    ingredients = fields.List(fields.String(), required=True)
    is_special = fields.Boolean(default=False)


class ProductResponseSchema(Schema, ProductBaseSchema):
    created_at = fields.String()
    updated_at = fields.String()
    images = fields.List(fields.Nested(ImageResponseSchema))


class ProductListSchema(Schema):
    count = fields.Integer()
    pages = fields.Integer()
    products = fields.List(fields.Nested(ProductResponseSchema))


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
