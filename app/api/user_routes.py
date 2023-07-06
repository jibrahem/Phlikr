from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User
from ..models import db

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



