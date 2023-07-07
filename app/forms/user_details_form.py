from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class UserDetailsForm(FlaskForm):
    biography = StringField('biography')
    profile_photo = StringField('profile_photo')
    cover_photo = StringField('cover_photo')
    occupation = StringField('occupation')
    hometown = StringField('hometown')
    city = StringField('city')
    country = StringField('country')
    website = StringField('website')
    facebook = StringField('facebook')
    twitter = StringField('twitter')
    instagram = StringField('instagram')
    pinterest = StringField('pinterest')
    tumblr = StringField('tumblr')
    submit = SubmitField('submit')
