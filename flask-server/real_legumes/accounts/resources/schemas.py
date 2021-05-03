from marshmallow import Schema, fields


class UserBaseSchema(Schema):
    email = fields.String(required=True)
    password = fields.String(required=True)


class UserResponseSchema(UserBaseSchema):
    pass


class UserRequestSchema(UserBaseSchema):
    pass
