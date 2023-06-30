from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates

class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(500))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    # image_id = db.Column(db.Integer, db.ForeignKey("images.id"))

    user = db.relationship("User", back_populates="comments")
    # image = db.relationship(Image, back_populates="comments")
    # print(user)

    @validates("description")
    def validate_description(self, key, value):
        if len(value) < 1:
            raise ValueError('Description must have at least 1 character.')
        return value

    def to_dict(self):
        return {
            "id": self.id,
            "description": self.description,
            "user_id": self.user_id,
            # "image_id": self.image_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "user": self.user
        }