from ..models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_images():
    img1 = Image(
        title = "Img1 Title",
        description = "Img1 Description",
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIXvCaZ_H2il-MlPGXBpAJx0NGONELeePn2z1BbWZ&s",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 1,
        view_count = 0,
    )
    img2 = Image(
        title = "Img2 Title",
        description = "Img2 Description",
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIXvCaZ_H2il-MlPGXBpAJx0NGONELeePn2z1BbWZ&s",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
    )
    img3 = Image(
        title = "Img3 Title",
        description = "Img3 Description",
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIXvCaZ_H2il-MlPGXBpAJx0NGONELeePn2z1BbWZ&s",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
    )
    img4 = Image(
        title = "Img4 Title",
        description = "Img4 Description",
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIXvCaZ_H2il-MlPGXBpAJx0NGONELeePn2z1BbWZ&s",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 3,
        view_count = 0,
    )
    img5 = Image(
        title = "Img5 Title",
        description = "Img5 Description",
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIXvCaZ_H2il-MlPGXBpAJx0NGONELeePn2z1BbWZ&s",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 3,
        view_count = 0,
    )
    img6 = Image(
        title = "Img6 Title",
        description = "Img6 Description",
        img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIXvCaZ_H2il-MlPGXBpAJx0NGONELeePn2z1BbWZ&s",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
    )

    db.session.add(img1)
    db.session.add(img2)
    db.session.add(img3)
    db.session.add(img4)
    db.session.add(img5)
    db.session.add(img6)
    db.session.commit()
    print("Images seeded to db")

def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
