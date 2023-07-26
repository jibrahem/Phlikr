from ..models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date



def seed_images():

    imgArr = [
        Image(
        title = "Signs to Nowhere",
        description = "Discover the enigma of signs leading nowhere, a captivating scene.",
        img = "https://images.pexels.com/photos/2009968/pexels-photo-2009968.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 1,
        view_count = 0,
        ),
        Image(
        title = "In the sky",
        description = "Serene and boundless, the beauty of the sky unfolds.",
        img = "https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 1,
        view_count = 5,
        ),
        Image(
        title = "Meadow",
        description = "",
        img = "https://images.pexels.com/photos/2829336/pexels-photo-2829336.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 1,
        view_count = 0,
        ),
        Image(
        title = "Blue Refractions",
        description = "",
        img = "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 5,
        view_count = 0,
        ),
        Image(
        title = "White",
        description = "White Dome Building Interior",
        img = "https://images.pexels.com/photos/911758/pexels-photo-911758.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 5,
        view_count = 0,
        ),
        Image(
        title = "紅 心",
        description = "Woman in Red Dress Standing under Taipei Performing Arts Center in Taiwan",
        img = "https://images.pexels.com/photos/17253381/pexels-photo-17253381/free-photo-of-woman-in-red-dress-standing-under-taipei-performing-arts-center-in-taiwan.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 5,
        view_count = 0,
        ),
        Image(
        title = "Pool",
        description = "Trees Near Body of Water Painting",
        img = "https://images.pexels.com/photos/9063025/pexels-photo-9063025.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
        ),
        Image(
        title = "Paintbrushes",
        description = "Shallow Focus Photo of Paint Brushes",
        img = "https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
        ),
        Image(
        title = "Woman at Artwork Gallery",
        description = "Woman at Artwork Gallery",
        img = "https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
        ),
        Image(
        title = "",
        description = "",
        img = "",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
        ),
        Image(
        title = "",
        description = "",
        img = "",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
        ),
        Image(
        title = "",
        description = "",
        img = "",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 2,
        view_count = 0,
        ),
    ]

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
        title = "dog standing between wooden fence under dark cloudy sky",
        description = "A walk by the lake",
        img = "https://images.unsplash.com/photo-1527764397528-0e8cd19bc8f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 4,
        view_count = 0,
    )
    img5 = Image(
        title = "green and brown mountains under blue sky and white clouds during daytime",
        description = "4K Drone shot in High Quality as wallpaper or desktop image with a blue sky and green hillsides with snow-capped peaks.",
        img = "https://images.unsplash.com/photo-1619994948937-ef1e758d46ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1633&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 5,
        view_count = 0,
    )
    img6 = Image(
        title = "A woman standing near a painting in a modern art gallery",
        description = "woman viewing abstract art",
        img = "https://images.unsplash.com/photo-1502078889459-923ef351c722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80",
        taken_on = date.today(),
        uploaded_on = date.today(),
        user_id = 1,
        view_count = 0,
    )
    img7 = Image(
        title = "a tray of sliced oranges sitting on a table",
        description = "Download this free HD photo of christmas, fruit, festive and holiday by Priscilla Du Preez",
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
        title = "hanging grayscale photos",
        description = "Download this free HD photo of film photography, analogue photography, display and show by Brigitta Schneiter",
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
        user_id = 5,
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
    db.session.add(img6)
    db.session.add(img7)
    db.session.add(img8)
    db.session.add(img9)
    db.session.add(img10)
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

    for img in imgArr :
        db.session.add(img)

    db.session.commit()
    print("Images seeded to db")

def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
