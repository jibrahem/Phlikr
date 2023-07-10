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
    image6 = Image(
        title = "Shells and Shells",
        description = "I accumulated the most alluring shells today!",
        img = "https://images.unsplash.com/photo-1682685797168-613fd0cae41d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
    )
    image7 = Image(
        title = "Franco",
        description = "This is literally my bestfriend haha",
        img = "https://images.unsplash.com/photo-1685177094118-2f5d753680cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 4,
        view_count = 0,
    )
    image8 = Image(
        title = "Take a Spin or Not?",
        description = "Such an elegant photo.",
        img = "https://images.unsplash.com/photo-1687992659809-db04dbcaee2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MzJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 3,
        view_count = 0,
    )
    image9 = Image(
        title = "Buddy",
        description = "Buddy had an amazing time despite his allergies lol!",
        img = "https://images.unsplash.com/photo-1688071758131-2895d09443f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
    )
    image10 = Image(
        title = "12:22AM",
        description = "Captivating landscape.",
        img = "https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0ODl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 5,
        view_count = 0,
    )
    image11 = Image(
        title = "12:22AM",
        description = "Captivating landscape.",
        img = "https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0ODl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 6,
        view_count = 0,
    )
    image12 = Image(
        title = "San Francisco",
        description = "The most beautiful city on earth.",
        img = "https://images.unsplash.com/photo-1687913161653-7cddb0ba09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 7,
        view_count = 0,
    )
    image13 = Image(
        title = "Colors",
        description = "This shot is DOPE!",
        img = "https://images.unsplash.com/photo-1687955192776-5e45639ad1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OTR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 6,
        view_count = 0,
    )
    image14 = Image(
        title = "Unwind",
        description = "All you need after a long day.",
        img = "https://images.unsplash.com/photo-1688115237214-d22431b62fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 7,
        view_count = 0,
    )
    image15 = Image(
        title = "A Glowing SF",
        description = "Wow an interesting look of the city",
        img = "https://images.unsplash.com/photo-1687922731543-e745035d0280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MzR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 5,
        view_count = 0,
    )

    db.session.add(img1)
    db.session.add(img2)
    db.session.add(img3)
    db.session.add(img4)
    db.session.add(img5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    # db.session.add()
    db.session.commit()
    print("Images seeded to db")

def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
