from flask import Blueprint, jsonify, render_template
from flask_login import login_required, current_user
from app.models import User, Image
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

#get user showcase
@user_routes.route('/showcase/<int:userId>')
def get_user_showcase(userId):
    showcase_images = Image.query.filter(Image.user_id == userId).filter(Image.showcase == True)
    return {'showcase_images': [image.to_dict() for image in showcase_images]}

#user detail edit route
@user_routes.route('/<int:user_id>/details/<form_type>', methods=["POST"])
def user_details(user_id,form_type):
    update_user = User.query.get(user_id)
    form = UserDetailsForm(user=update_user)
    print('form data in backend before submission',form.data['occupation'])
    print(form.data)
    if (form_type == 'bio'):
        update_user.biography = form.data['biography']
    if (form_type == 'profile_photo'):
        update_user.profile_photo = form.data['profile_photo']
    if (form_type == 'cover_photo'):
        update_user.cover_photo = form.data['cover_photo']
    if (form_type == 'details'):
        update_user.occupation = form.data['occupation']
        update_user.hometown = form.data['hometown']
        update_user.city = form.data['city']
        update_user.country = form.data['country']
        update_user.website = form.data['website']
        update_user.facebook = form.data['facebook']
        update_user.twitter = form.data['twitter']
        update_user.instagram = form.data['instagram']
        update_user.pinterest = form.data['pinterest']
        update_user.tumblr = form.data['tumblr']
    db.session.commit()
    return 'user details updated'
