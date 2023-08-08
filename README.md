# Snapr

### Snapr is our clone of the image posting site Flickr!

### Live Link: [snapr](https://snapr.onrender.com/)


### Technologies used:
![image](https://github.com/jibrahem/Snapr/assets/6230804/4dfcb44e-7fb1-4901-90c1-17151bc6cb84)
![image](https://github.com/jibrahem/Snapr/assets/6230804/48158bb3-15fc-4824-8964-c781f6fed5f7)
![image](https://github.com/jibrahem/Snapr/assets/6230804/138b1b40-c209-46ab-8c3c-25cc5759bdad)
![image](https://github.com/jibrahem/Snapr/assets/6230804/3fad113d-be43-49d9-940e-ec7f27acfe77)
![image](https://github.com/jibrahem/Snapr/assets/6230804/b609f32a-efeb-472f-8755-ac8a920e5ec1)
![image](https://github.com/jibrahem/Snapr/assets/6230804/5e508d97-f758-43fc-b903-c1d9cf2aebda)
![image](https://github.com/jibrahem/Snapr/assets/6230804/d3cbb227-bf49-4408-a208-2eb65777c5d7)
![image](https://github.com/jibrahem/Snapr/assets/6230804/c85ddbd2-d468-46cc-9a94-0706dc901751)


Python, JavaScript, Flask, React, Redux, CSS, HTML, AWS

## Screen Shots: 
### Landing page: 
![image](https://github.com/jibrahem/Snapr/assets/108157183/647d03cf-95c2-45bc-bfd2-6661eef134b1)

### Log in/Sign up page:
![image](https://github.com/jibrahem/Snapr/assets/108157183/0f356a39-5571-4aba-a16a-c1d29d843e25)

### User profile page: 
![image](https://github.com/jibrahem/Snapr/assets/108157183/3220280c-621d-4f4d-b12f-06b2e226c5af)

### Single image page: 
![image](https://github.com/jibrahem/Snapr/assets/108157183/4acd691a-dfd2-487a-9fe5-3a6b42419cc3)

### User's about page: 
![image](https://github.com/jibrahem/Snapr/assets/108157183/d6a1de2f-20d4-48df-9f75-852503a39050)







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


### LinkedIn of developers: 
* Ben Lee: https://www.linkedin.com/in/benkalee/
* Isaiah Barrett: https://www.linkedin.com/in/isaiah-barrett1/
* Jehan Ibrahem: https://www.linkedin.com/in/jehan-ibrahem/
* Leslie Chou: https://www.linkedin.com/in/lesliechou921/

