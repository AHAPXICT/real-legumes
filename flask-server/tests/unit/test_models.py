from real_legumes.real_legumes.models import Category, Ingredient
from real_legumes import create_app

app = create_app('development')


def test_new_category():
    with app.app_context():
        category = Category(name='category')

        assert category.name == 'category'


def test_new_ingredient():
    with app.app_context():
        ingredient = Ingredient(name='ingredient')

        assert ingredient.name == 'ingredient'
