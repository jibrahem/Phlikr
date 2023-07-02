from .db import db, environment, SCHEMA, add_prefix_for_prod

class Image(db.Model):
    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
        
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(512))
    img = db.Column(db.String(255), nullable=False)
    taken_on = db.Column(db.Date)
    uploaded_on = db.Column(db.Date)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    view_count = db.Column(db.Integer)

    user = db.relationship("User", back_populates="images")
    comments = db.relationship("Comment", back_populates="image")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'img': self.img,
            'taken_on': self.taken_on,
            'uploaded_on': self.uploaded_on,
            'user_id': self.user_id,
            'user': self.user,
            'view_count': self.view_count,
        }
