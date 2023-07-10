from ..models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_images():
    img1 = Image(
        title = "Love Birds <3",
        description = "sweet cuple",
        img = "https://images.unsplash.com/photo-1609331703848-928fc5de247c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 1,
        view_count = 0,
    )
    img2 = Image(
        title = "umbrellas ☂",
        description = "Let's feel the festive spirit",
        img = "https://images.unsplash.com/photo-1597283712405-819a6021326c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
    )
    img3 = Image(
        title = "Autumn road",
        description = "The way lead me to home",
        img = "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 3,
        view_count = 0,
    )
    img4 = Image(
        title = "A walk by the lake",
        description = "dog standing between wooden fence under dark cloudy sky",
        img = "https://images.unsplash.com/photo-1527764397528-0e8cd19bc8f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 4,
        view_count = 0,
    )
    img5 = Image(
        title = "Paridise",
        description = "green and brown mountains under blue sky and white clouds during daytime",
        img = "https://images.unsplash.com/photo-1619994948937-ef1e758d46ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 5,
        view_count = 0,
    )
    img6 = Image(
        title = "woman viewing abstract art",
        description = "A woman standing near a painting in a modern art gallery",
        img = "https://images.unsplash.com/photo-1502078889459-923ef351c722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 1,
        view_count = 0,
    )
    img7 = Image(
        title = "Holiday season",
        description = "a tray of sliced oranges sitting on a table",
        img = "https://images.unsplash.com/photo-1637541615205-8654ee01a032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 3,
        view_count = 0,
    )
    img8 = Image(
        title = "San Francisco 1.4",
        description = "My imagination",
        img = "https://images.unsplash.com/photo-1508004680771-708b02aabdc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 3,
        view_count = 0,
    )
    img9 = Image(
        title = "The old time",
        description = "hanging grayscale photos",
        img = "https://images.unsplash.com/photo-1523698120758-030a38a90d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 4,
        view_count = 0,
    )
    img10 = Image(
        title = "Amazing townscape in Hallstatt, Austria.",
        description = "The picturesque townscape of Hallstatt unfolds before your eyes, revealing a breathtaking fusion of natural wonders and architectural marvels. ",
        img = "https://images.unsplash.com/photo-1621328406204-01060d16bf24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
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
    db.session.add(img6)
    db.session.add(img7)
    db.session.add(img8)
    db.session.add(img9)
    db.session.add(img10)

    db.session.commit()
    print("Images seeded to db")

def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
