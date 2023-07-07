from flask import Blueprint, jsonify, render_template
from flask_login import login_required, current_user
from app.models import User
from ..models import db
from app.forms import UserDetailsForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return jsonify({'users': [user.to_dict() for user in users]})


@user_routes.route('/delete/<int:id>', methods=["DELETE"])
@login_required
def delete_user(id):
    deleted_user = User.query.get(id)
    if deleted_user.id == current_user.id:
        db.session.delete(deleted_user)
        db.session.commit()
    return 'User deleted'



@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

#user detail test edit route
@user_routes.route('/<int:user_id>/details')
def edit_user_details(user_id):
    form  = UserDetailsForm()
    return render_template("user_details_form.html", form=form)

#user detail edit route
@user_routes.route('/<int:user_id>/details', methods=["POST"])
def user_details(user_id):
    update_user = User.query.get(user_id)
    form = UserDetailsForm(user=update_user)
    form.populate_obj(user)
    if form.data['profile_photo']:
        update_user.profile_photo = form.data['profile_photo']
    if form.data['cover_photo']:
        update_user.cover_photo = form.data['cover_photo']
    if form.data['occupation']:
        update_user.occupation = form.data['occupation']
    if form.data['hometown']:
        update_user.hometown = form.data['hometown']
    if form.data['city']:
        update_user.city = form.data['city']
    if form.data['country']:
        update_user.country = form.data['country']
    if form.data['website']:
        update_user.website = form.data['website']
    if form.data['facebook']:
        update_user.facebook = form.data['facebook']
    if form.data['twitter']:
        update_user.twitter = form.data['twitter']
    if form.data['instagram']:
        update_user.instagram = form.data['instagram']
    if form.data['pinterest']:
        update_user.pinterest = form.data['pinterest']
    if form.data['tumblr']:
        update_user.tumblr = form.data['tumblr']
    db.session.commit()
    return 'user details updated'
