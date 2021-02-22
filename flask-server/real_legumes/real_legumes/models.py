from sqlalchemy.sql import func
from sqlalchemy.orm import validates

from real_legumes import db


class TimestampMixin(object):
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())

    @validates('created_at')
    def validate_created_at(self, key, value):
        if self.created_at or value:
            raise AssertionError('Created_at cannot be modified.')

    @validates('updated_at')
    def validate_updated_at(self, key, value):
        if self.created_at or value:
            raise AssertionError('Updated_at cannot be modified.')


class Product(TimestampMixin, db.Model):
    """Product model."""

    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    calories = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    count = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)

    ingredients = db.relationship('Ingredient', secondary='product_ingredients', backref='products')
    images = db.relationship('Image', secondary='product_images', backref='products')

    @validates('name')
    def validate_name(self, key, value):
        if Product.query.filter(Product.name == value).first():
            raise AssertionError('Product name already exist.')
        return value

    @validates('price', 'calories', 'count', 'weight')
    def validate_integer_fields(self, key, value):
        if value < 0:
            raise AssertionError(f'Field {key} cannot be negative.')
        return value

    def __repr__(self):
        return f"<Product {self.id}: {self.name}>"


class Category(TimestampMixin, db.Model):
    """Category model."""

    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

    products = db.relationship('Product', backref='category', lazy=True)

    @validates('name')
    def validate_name(self, key, value):
        if Category.query.filter(Category.name == value).first():
            raise AssertionError('Category name already exist.')
        return value

    def __repr__(self):
        return f"<Category {self.id}: {self.name}>"


class Ingredient(TimestampMixin, db.Model):
    """Ingredient model."""

    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

    @validates('name')
    def validate_name(self, key, value):
        if Ingredient.query.filter(Ingredient.name == value).first():
            raise AssertionError('Ingredient name already exist.')
        return value

    def __repr__(self):
        return f"<Ingredient {self.id}: {self.name}>"


product_ingredients = db.Table('product_ingredients',
                               db.Column('product_id', db.Integer, db.ForeignKey('products.id')),
                               db.Column('ingredient_id', db.Integer, db.ForeignKey('ingredients.id'))
                               )


class Image(TimestampMixin, db.Model):
    """Image model."""

    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(255), unique=True, nullable=False)

    @validates('image_url')
    def validate_image_url(self, key, value):
        if Image.query.filter(Image.image_url == value).first():
            raise AssertionError('Image url already exist.')
        return value

    def __repr__(self):
        return f"<Image {self.id}: {self.image_url}"


product_images = db.Table('product_images',
                          db.Column('product_id', db.Integer, db.ForeignKey('products.id')),
                          db.Column('image_id', db.Integer, db.ForeignKey('images.id'))
                          )
