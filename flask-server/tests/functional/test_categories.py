from sqlalchemy import desc

from real_legumes import create_app
from real_legumes.real_legumes.models import Category


app = create_app('testing')


def test_category_list():
    with app.test_client() as test_client:
        response = test_client.get('/api/categories')
        assert response.status_code == 200


def test_category_post():
    with app.test_client() as test_client:
        response = test_client.post(
            '/api/categories',
            json=dict(
                name='test category'
            )
        )

        category = Category.query.order_by(desc(Category.id)).first()

        assert response.status_code == 201
        assert category.name == 'test category'
