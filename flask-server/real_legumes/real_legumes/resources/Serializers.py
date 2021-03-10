from flask_restful import fields


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

categoryFields = {
    'name': fields.String,
    'created_at': fields.String,
    'updated_at': fields.String,
}

ingredientFields = {
    'name': fields.String,
    'created_at': fields.String,
    'updated_at': fields.String,
}

imageFields = {
    'image_url': fields.String,
    'created_at': fields.String,
    'updated_at': fields.String,
}
