from real_legumes.real_legumes.models import Category, Ingredient, Image, Product
from real_legumes import create_app


app = create_app('testing')


def test_new_category():
    """
        GIVEN a Category model
        WHEN a new Category is created
        THEN check the name are defined correctly.
    """
    with app.app_context():
        category = Category(name='category')

        assert category.name == 'category'


def test_new_ingredient():
    """
        GIVEN a Ingredient model
        WHEN a new Ingredient is created
        THEN check the name are defined correctly.
    """
    with app.app_context():
        ingredient = Ingredient(name='ingredient')

        assert ingredient.name == 'ingredient'


def test_new_image():
    """
        GIVEN a Image model
        WHEN a new Image is created
        THEN check the image_url are defined correctly.
    """
    with app.app_context():
        image = Image(_image_data=b'3456789', is_title=False, product_id=1)

        assert image.is_title == False
        assert image.product_id == 1
        assert image.image_data == '3456789'


def test_new_product():
    """
        GIVEN a Product model
        WHEN a new Product is created
        THEN check the name, price, calories, description, count,
         weight, category name, is_special, ingredients, images are defined correctly.
    """
    with app.app_context():
        category = Category(name='category')
        ingredient = Ingredient(name='ingredient')

        product = Product(
            name='product',
            price=1,
            calories=2,
            description='description',
            count=3,
            weight=4,
            category=category,
            is_special=True,
            ingredients=[ingredient]
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
