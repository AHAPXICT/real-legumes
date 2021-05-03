from marshmallow import Schema, fields


class UserBaseSchema(Schema):
    email = fields.String(required=True)


class UserResponseSchema(UserBaseSchema):
    user_id = fields.String()
    admin = fields.Boolean()
    registered_on = fields.String()


class UserRequestSchema(UserBaseSchema):
    password = fields.String(required=True)
