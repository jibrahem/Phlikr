from flask import Blueprint, jsonify, redirect, render_template, request
from flask_login import login_required, current_user
from ..models import Image, User, db, Comment
from app.forms import ImageForm



image_routes = Blueprint("images", __name__)

#Get all comments by image id
@image_routes.route('/<int:image_id>/comments')
def get_comment_by_image_id(image_id):
    comments = Comment.query.filter(Comment.image_id == image_id).all()
    return {'comments': [comment.to_dict() for comment in comments]}


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
    image.view_count += 1
    db.session.commit()
    return image.to_dict()


#DELETE AN IMAGE BY ID
@image_routes.route('/delete/<int:id>')
# @login_required
def delete_image(id):
    if current_user.is_authenticated :
        image_to_delete = Image.query.get(id)
        if image_to_delete.User.id == current_user.id:
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
@image_routes.route('/<int:id>/update', methods=['GET', 'POST'])
# @login_required
def update_image(id):
    if current_user.is_authenticated :
        form = ImageForm()
        image_to_update = Image.query.get(id)
        print("form data: ", form.data, "image: ", image_to_update.view_count)

        # print("form errors", form.errors)
        # form data {'title': None, 'description': None, 'img': None, 'submit': False, 'csrf_token': None}
        #evaluating to false so form.validate() is not running
        if image_to_update.User.id == current_user.id:

            if form.validate_on_submit():
                # image_to_update = Image.query.get(id)
                image_to_update.img = form.data['img']
                # image_to_update.view_count = form.data['view_count']
                image_to_update.user_id = current_user.id
                image_to_update.title = form.data['title']
                image_to_update.description = form.data['description']
                image_to_update.view_count = image_to_update.view_count
                db.session.commit()
                return 'image updated'
        return 'bad data'

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

#GET USER SHOWCASE IMAGES
@image_routes.route('/showcase/<int:userId>')
def get_user_showcase(userId):
    showcase_images = Image.query.filter(Image.user_id == userId).filter(Image.showcase == True)
    return {'showcase_images': [image.to_dict() for image in showcase_images]}

def set_showcase(imageId, val):
    print(imageId)
    image = Image.query.get(imageId)
    if current_user.id == image.user_id:
        image.showcase = val
        db.session.commit()
        return 'showcase toggled'
    return 'not your image'

@image_routes.route('/update/showcase/<int:userId>', methods=["POST"])
def update_showcase_form(userId):
    showcase_update = request.get_json()
    print('showcase requestjson', showcase_update)
    for img in showcase_update:
        set_showcase(img, showcase_update[img])
    return 'nice'

#POST AN IMAGE
@image_routes.route('/<int:userId>/images', methods=['POST'])
# @login_required
def post_image(userId):
    if current_user.is_authenticated :
        form = ImageForm()
        print("form", form.data)
        # if form.validate_on_submit():
        title = form.data['title']
        description = form.data['description']
        img = form.data['img']
        new_image = Image(title=title, description=description, img=img, view_count=0, user_id=userId)
        db.session.add(new_image)
        db.session.commit()
        print(form.data['title'])
        print(form.data['description'])
        print(form.data['img'])
        return new_image.to_dict()
        # return 'bad data'



# add fav in favorite table by user id
@image_routes.route('/user_favorite', methods=['POST'])
def user_favorite_toggle():
    # with app.app_context(): #not need in image route file
        # Get the user_id and image_id from the request data
        user_id = request.json.get('user_id')
        print("request user_id: ", user_id)
        image_id = request.json.get('image_id')
        print("request image_id: ", image_id)

        # Retrieve the User and image objects
        user = User.query.get(user_id)
        image = Image.query.get(image_id)

        if not user or not image:
            return 'User or image not found!', 404

        # user.favorites.append(image)
        # db.session.add(user)
        # db.session.commit()
        # return 'Favorite image added to user successfully!'

        print("join table in the route: ", user.favorites)
        # return 'hi'
        favorite_list = []
        for favorite in user.favorites:
            favorite_list.append(favorite.id)
        print("favorite list in the route: ", favorite_list)
        # # Add the user to the role and commit the changes
        user.favorites.append(image)
        db.session.commit()
        return 'Bad request'


#get user favorite images from user_favorite table
@image_routes.route('/<int:userId>/user_favorite', methods=['GET'])
def get_user_favorite(userId):
    # user_id = request.json.get('user_id')

    try:
        user = User.query.get(userId)

        if not user:
            return 'user not found', 404

        favorites = user.favorites
        print("favotrites in the route: ", favorites)

        result= [image.to_dict() for image in  favorites]
        print("result in the route: ", result)

        return  result

    except Exception as e:
        return {"error": str(e)}, 500

#delete user favorite image from user_favorite table
@image_routes.route('/delete/<int:userId>/user_favorite/<int:imageId>', methods=['GET'])
def delete_user_favorite(userId, imageId):
    try:
        print("userId in the delete user fav route: ", userId)
        print("imageId in the delete user fav route: ", imageId)
        user = User.query.get(userId)
        image = Image.query.get(imageId)

        if not user:
            return 'user not found', 404

        user.favorites.remove(image)
        db.session.commit()
        return 'image succefully deleted'

    except Exception as e:
        return {"error" : str(e)}, 500
