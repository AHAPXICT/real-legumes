from sqlalchemy import desc
import json

from real_legumes import create_app
from real_legumes.real_legumes.models import Category


app = create_app('testing')
app.app_context().push()


def test_category_list():
    """
        GIVEN a Flask application configured for testing
        WHEN the '/api/categories' page is requested (GET)
        THEN check that the response is valid.
    """
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


def test_category_post_500_name_already_exist():
    with app.test_client() as test_client:
        category_name = Category.query.first().name

        response = test_client.post(
            '/api/categories',
            json=dict(
                name=f'{category_name}'
            )
        )
        response_dict = json.loads(response.get_data(as_text=True))
        print(response_dict['message'])

        assert response.status_code == 500
        assert response_dict['message'] == 'Category name already exist.'


def test_category_get_by_name_200():
    with app.test_client() as test_client:
        category_name = Category.query.first().name

        response = test_client.get(f'/api/category/{category_name}')
        category = json.loads(response.get_data(as_text=True))

        assert response.status_code == 200
        assert category['name'] == category_name


def test_category_get_by_name_404():
    with app.test_client() as test_client:
        response = test_client.get(f'/api/category/name that no exist'.replace(' ', '%20'))

        assert response.status_code == 404


def test_category_update():
    with app.test_client() as test_client:
        category_name = Category.query.first().name
        last_id = Category.query.order_by(desc(Category.id)).first().id
        response = test_client.put(
            f'/api/category/{category_name}',
            json=dict(
                name=f'updated category name{last_id}'
            )
        )

        response_dict = json.loads(response.get_data(as_text=True))

        assert response.status_code == 200
        assert Category.query.first().name == f'updated category name{last_id}'
        assert response_dict['message'] == 'Updated.'


def test_category_update_500_name_already_exist():
    with app.test_client() as test_client:
        category_name = Category.query.first().name
        response = test_client.put(
            f'/api/category/{category_name}',
            json=dict(
                name=f'{category_name}'
            )
        )

        response_dict = json.loads(response.get_data(as_text=True))

        assert response.status_code == 500
        assert response_dict['message'] == 'Category name already exist.'


def test_category_delete_200():
    with app.test_client() as test_client:

        len_before_delete = len(Category.query.all())
        category = Category.query.first()

        response = test_client.delete(
            f'/api/category/{category.name}'.replace(' ', '%20'),
        )

        assert response.status_code == 204
        assert len_before_delete - 1 == len(Category.query.all())


def test_category_delete_404():
    with app.test_client() as test_client:
        response = test_client.delete(
            f'/api/category/name that no exist'.replace(' ', '%20'),
        )

        assert response.status_code == 404
