from flask import Blueprint, jsonify, redirect, render_template
from flask_login import login_required, current_user
from ..models import Image, User, db
from app.forms import ImageForm

image_routes = Blueprint("images", __name__)

#get all images, add user info to their image
@image_routes.route('/')
@login_required
def get_all_images():
    images = Image.query.join(User).all()
    for image in images:
        print('USER', image)

    # user = User.query.filter(images.user_id == id)
    # print('USSSEEEERRRRRRR', user)
    print('USERINFO', [image.user_id for image in images])
    return {'images' : [image.to_dict() for image in images]}

#get image by id
@image_routes.route('/<int:id>')
@login_required
def get_image(id):
    image = Image.query.get(id)
    return image.to_dict()

#get all images for logged in user
@image_routes.route('/current')
@login_required
def get_logged_user_images():
    images = Image.query.filter(Image.user_id == current_user.id).all()
    return {'images' : [image.to_dict() for image in images]}

#Get all images for a certain user
@image_routes.route('/user/<int:userId>')
@login_required
def get_user_images(userId):
    images = Image.query.filter(Image.user_id == userId).all()
    return {'images' : [image.to_dict() for image in images]}

# @image_routes.route('/new_image')
# def get_new_image():
#     form=ImageForm()
#     return render_template('simple_form.html', form=form)


# @image_routes.route('/new_image', methods=['POST'])
# # @login_required
# def post_image():
#     form = ImageForm()
#     if form.validate_on_submit():
#         title = form.data['title']
#         description = form.data['description']
#         img = form.data['img']
#         new_image = Image(title=title, description=description, img=img, view_count=0, user_id=1)
#         db.session.add(new_image)
#         db.session.commit()
#         return redirect('/')
