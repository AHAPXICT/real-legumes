from flask_restful import fields


categorySerializer = {
    'name': fields.String,
    'created_at': fields.String,
    'updated_at': fields.String,
}
