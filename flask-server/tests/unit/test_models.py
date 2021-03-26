from real_legumes.real_legumes.models import Category, Ingredient, Image, Product
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


def test_new_image():
    with app.app_context():
        image = Image(image_url='image_url')

        assert image.image_url == 'image_url'


def test_new_product():
    with app.app_context():
        category = Category(name='category')
        ingredient = Ingredient(name='ingredient')
        image = Image(image_url='image_url')

        product =Product(
            name='product',
            price=1,
            calories=2,
            description='description',
            count=3,
            weight=4,
            category=category,
            is_special=True,
            ingredients=[ingredient],
            images=[image]
        )

        assert product.name == 'product'
        assert product.price == 1
        assert product.calories == 2
        assert product.description == 'description'
        assert product.count == 3
        assert product.weight == 4
        assert product.category.name == 'category'
        assert product.is_special == True
        assert len(product.ingredients) == 1
        assert product.ingredients[0].name == 'ingredient'
        assert len(product.images) == 1
        assert product.images[0].image_url == 'image_url'
