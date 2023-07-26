from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


class UserDetailsForm(FlaskForm):
    biography = StringField('biography', validators=[Length(max=100)])
    profile_photo = StringField('profile_photo',validators=[Length(max=255)])
    cover_photo = StringField('cover_photo', validators=[Length(max=255)])
    occupation = StringField('occupation', validators=[Length(max=50)])
    hometown = StringField('hometown', validators=[Length(max=50)])
    city = StringField('city', validators=[Length(max=50)])
    country = StringField('country', validators=[Length(max=50)])
    website = StringField('website', validators=[Length(max=50)])
    facebook = StringField('facebook', validators=[Length(max=50)])
    twitter = StringField('twitter', validators=[Length(max=50)])
    instagram = StringField('instagram',  validators=[Length(max=50)])
    pinterest = StringField('pinterest', validators=[Length(max=50)])
    tumblr = StringField('tumblr', validators=[Length(max=50)])
    submit = SubmitField('submit', validators=[Length(max=50)])
