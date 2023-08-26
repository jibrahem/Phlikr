# Snapr

### Snapr is our clone of the image posting site Flickr! You are able to upload images, comment, and create your profile.

- Live Link:  [snapr](https://snapr.onrender.com/)
<br></br>

### Technologies used: Python, JavaScript, Flask, React, Redux, CSS, HTML, AWS
<div align='center'>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/4dfcb44e-7fb1-4901-90c1-17151bc6cb84" width="80" height="80"/>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/48158bb3-15fc-4824-8964-c781f6fed5f7" width="80" height="80"/>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/138b1b40-c209-46ab-8c3c-25cc5759bdad" width="80" height="80"/>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/3fad113d-be43-49d9-940e-ec7f27acfe77" width="80" height="80"/>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/b609f32a-efeb-472f-8755-ac8a920e5ec1" width="80" height="80"/>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/5e508d97-f758-43fc-b903-c1d9cf2aebda" width="80" height="80"/>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/d3cbb227-bf49-4408-a208-2eb65777c5d7" width="80" height="80"/>
<img src="https://github.com/jibrahem/Snapr/assets/6230804/c85ddbd2-d468-46cc-9a94-0706dc901751" width="80" height="80"/>
</div>
<br></br>

## Screen Shots: 
### Landing page: 
- The landing page is the first page the user will see when they arrive at the site. You are able to click the start for free button or the log in/ sign up button in the top right corner.

<div align="center">
<img src='https://github.com/jibrahem/Snapr/assets/108157183/647d03cf-95c2-45bc-bfd2-6661eef134b1' alt="" width="750">
</div>

### Log in/Sign up page:
- The log in page is where existing users can log in. If you don't have an account you may click the 'Sign up here' and you will be directed to the sign up page. Also if you don't want to create an account, you can use the demo user, which is an already created account.

<div align="center">
<img src='https://github.com/jibrahem/Snapr/assets/108157183/0f356a39-5571-4aba-a16a-c1d29d843e25' alt="" width="750">
</div>


### User profile page: 
- This is where you are able to see all users images. By clicking on their name it will take you to their profile. You can also like the photo at the star in the bottom right corner. In addition, clicking on the photo will take you to the single image page.

<div align="center">
<img src='https://github.com/jibrahem/Snapr/assets/108157183/3220280c-621d-4f4d-b12f-06b2e226c5af' alt="" width="800" height="600">
</div>

### Single image page: 
- On this page, if it isn't your photo, you are able to comment as well as favorite the photo. If you posted the photo, you are able to favorite, comment on, update, and delete the photo. Once you post a comment, you are then able to edit or delete the comment.

<div align="center">
<img src='https://github.com/jibrahem/Snapr/assets/108157183/99e3d5ca-e3d4-4c84-82e0-37a88687c292' alt="" width="800" height="600">
</div>

### User's about page: 
- Here you can create and update your profile. We have a section to write about yourself, a place to showcase photos you have uploaded, and a place for socials.

<div align="center">
<img src='https://github.com/jibrahem/Snapr/assets/108157183/d6a1de2f-20d4-48df-9f75-852503a39050' alt="" width="800" height="600">
</div>
<br></br>

## AWS code snippet
```
def get_unique_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename = uuid.uuid4().hex
    return f"{unique_filename}.{ext}"


def upload_file_to_s3(file, acl="public-read"):
    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}
```

- get_unique_filename(filename): This helper function generates a unique and random UUID (Universally Unique Identifier) filename using Python "uuid" module.
- upload_file_to_s3(file, acl="public-read"): This function uploads the selected file to the assigned AWS (Amazon Web Service) S3 bucket and returns a URL when the file is successfully uploaded. It also returns an error statement if the upload fails.
<br></br>

### LinkedIn of developers: 
* Ben Lee: https://www.linkedin.com/in/benkalee/
* Isaiah Barrett: https://www.linkedin.com/in/isaiah-barrett1/
* Jehan Ibrahem: https://www.linkedin.com/in/jehan-ibrahem/
* Leslie Chou: https://www.linkedin.com/in/lesliechou921/

