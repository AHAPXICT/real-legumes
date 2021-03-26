from sqlalchemy import desc
import json

from real_legumes import create_app
from real_legumes.real_legumes.models import Category


app = create_app('testing')
app.app_context().push()


def test_category_list():
    with app.test_client() as test_client:
        response = test_client.get('/api/categories')
        objects = json.loads(response.get_data(as_text=True))
        assert response.status_code == 200
        assert len(Category.query.all()) == len(objects)


def test_category_post():
    with app.test_client() as test_client:
        category_name = Category.query.first().name

        response = test_client.post(
            '/api/categories',
            json=dict(
                name=f'{category_name + str(Category.query.order_by(desc(Category.id)).first().id)}'
            )
        )

        category = Category.query.order_by(desc(Category.id)).first()

        assert response.status_code == 201
        assert category.name == f'{category_name + str(Category.query.order_by(desc(Category.id))[1].id)}'


def test_category_delete():
    with app.test_client() as test_client:

        len_before_delete = len(Category.query.all())
        category = Category.query.first()

        response = test_client.delete(
            f'/api/category/{category.name}'.replace(' ', '%20'),
        )

        assert response.status_code == 204
        assert len_before_delete - 1 == len(Category.query.all())
