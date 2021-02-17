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


class Category(db.Model):

    """Category model."""

    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())

    products = db.relationship('Product', backref='category', lazy=True)


class Ingredient(db.Model):
    # TODO: Add relationship.

    """Ingredient model."""

    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())


class Image(db.Model):
    # TODO: Add relationship.

    """Image model."""

    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(255), unique=True, nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True), default=func.now(), nullable=False,
                           onupdate=func.now())
