from flask import Blueprint, jsonify, redirect, render_template
from flask_login import login_required, current_user
from ..models import Image, User, db
from app.forms import ImageForm

image_routes = Blueprint("images", __name__)

#GET ALL IMAGES
@image_routes.route('/')
# @login_required
def get_all_images():
    images = Image.query.all()
    for image in images:
        return {'images' : [image.to_dict() for image in images]}


#GET AN IMAGE BY IMAGE ID
@image_routes.route('/<int:id>')
# @login_required
def get_image(id):
    image = Image.query.get(id)
    return image.to_dict()


#DELETE AN IMAGE BY ID
@image_routes.route('/delete/<int:id>')
# @login_required
def delete_image(id):
    if current_user.is_authenticated :
        image_to_delete = Image.query.get(id)
        db.session.delete(image_to_delete)
        db.session.commit()
        return {'image': 'your image has been deleted'}

# Edit image form

@image_routes.route('/<int:id>/update')
# @login_required
def update_image_form(id):
    if current_user.is_authenticated :
        form = ImageForm()

        return render_template("simple_form.html", form=form)


#EDIT AN IMAGE BY ID
@image_routes.route('/<int:id>/update', methods=['GET','POST'])
# @login_required
def update_image(id):
    if current_user.is_authenticated :
        form = ImageForm()
        image_to_update = Image.query.get(id)
        print("form data: ", form.data, "image: ", image_to_update.view_count)

        # print("form errors", form.errors)
        # form data {'title': None, 'description': None, 'img': None, 'submit': False, 'csrf_token': None}
        #evaluating to false so form.validate() is not running

        if form.validate_on_submit():
            # image_to_update = Image.query.get(id)
            image_to_update.img = form.data['img']
            # image_to_update.view_count = form.data['view_count']
            image_to_update.user_id = current_user.id
            image_to_update.title = form.data['title']
            image_to_update.description = form.data['description']
            image_to_update.view_count = image_to_update.view_count
            db.session.commit()
            return redirect("/api/images")
        return {'bye': 'bad data'}

#GET ALL CURRENT USER IMAGES
@image_routes.route('/current')
# @login_required
def get_logged_user_images():
    images = Image.query.filter(Image.user_id == current_user.id).all()
    return {'images' : [image.to_dict() for image in images]}


#GET ALL USER IMAGES
@image_routes.route('/user/<int:userId>')
# @login_required
def get_user_images(userId):
    images = Image.query.filter(Image.user_id == userId).all()
    return {'images' : [image.to_dict() for image in images]}


#POST AN IMAGE
@image_routes.route('/<int:userId>/images', methods=['POST'])
# @login_required
def post_image(userId):
    if current_user.is_authenticated :
        form = ImageForm()
        if form.validate_on_submit():
            title = form.data['title']
            description = form.data['description']
            img = form.data['img']
            new_image = Image(title=title, description=description, img=img, view_count=0, user_id=userId)
            db.session.add(new_image)
            db.session.commit()
            return 'that worked'
        return 'bad data'
