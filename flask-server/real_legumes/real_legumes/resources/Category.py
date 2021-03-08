from flask_restful import Resource


class CategoryList(Resource):

    @staticmethod
    def get():
        return {'Category': 'List'}
