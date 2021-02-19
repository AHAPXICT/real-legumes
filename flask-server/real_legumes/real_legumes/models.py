from sqlalchemy.sql import func

from real_legumes import db


class Product(db.Model):
    """Product model."""

    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    calories = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    count = db.Column(db.Integer, nullable=False)
    weight = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)

    ingredients = db.relationship('Ingredient', secondary='product_ingredients', backref='products')
    images = db.relationship('Image', secondary='product_images', backref='products')

    def __init__(self,
                 name: str,
                 price: int,
                 calories: int,
                 description: str,
                 count: int,
                 weight: int,
                 category_id: int):

        self.name = name
        self.price = price
        self.calories = calories
        self.description = description
        self.count = count
        self.weight = weight
        self.category_id = category_id

    def __repr__(self):
        return f"<Product {self.id}: {self.name}>"


class Category(db.Model):
    """Category model."""

    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())

    products = db.relationship('Product', backref='category', lazy=True)

    def __init__(self, name: str):
        self.name = name

    def __repr__(self):
        return f"<Category {self.id}: {self.name}>"


class Ingredient(db.Model):
    """Ingredient model."""

    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())

    def __init__(self, name: str):
        self.name = name

    def __repr__(self):
        return f"<Ingredient {self.id}: {self.name}>"


product_ingredients = db.Table('product_ingredients',
                               db.Column('product_id', db.Integer, db.ForeignKey('products.id')),
                               db.Column('ingredient_id', db.Integer, db.ForeignKey('ingredients.id'))
                               )


class Image(db.Model):
    """Image model."""

    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(255), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())


product_images = db.Table('product_images',
                          db.Column('product_id', db.Integer, db.ForeignKey('products.id')),
                          db.Column('image_id', db.Integer, db.ForeignKey('images.id'))
                          )
