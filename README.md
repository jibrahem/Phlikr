# Snapr

### Snapr is our clone of the image posting site Flickr!

### Live link: https://snapr.onrender.com/ 

### Technologies used:
* Python
* Flask
* React
* Redux
* CSS
* HTML
* AWS

<img width="1505" alt="Screenshot 2023-08-02 at 4 36 43 PM" src="https://github.com/jibrahem/Snapr/assets/118121002/d31789fd-5330-4b93-8848-f2cdfa774fc3">

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

