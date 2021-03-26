from real_legumes.real_legumes.models import Category
from real_legumes import create_app

app = create_app('development')


def test_new_category():
    with app.app_context():
        category = Category(name='category')
        print(category.updated_at)

        assert category.name == 'category'
