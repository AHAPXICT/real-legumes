from real_legumes import create_app
from real_legumes.real_legumes.models import Category


app = create_app('testing')


def test_category_list():
    with app.test_client() as test_client:
        response = test_client.get('/api/categories')
        print(Category.query.all() == response.data)
        print(response)
        print(response.data)
        assert response.status_code == 200


test_category_list()