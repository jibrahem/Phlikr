from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demetrius', email='demo@aa.io', password='password',
        first_name = "Demetrius", last_name="Lander", profile_photo="https://images.unsplash.com/photo-1676532223498-0164d21f1b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80", cover_photo="https://free4kwallpapers.com/uploads/wallpaper/werewolf--wallpaper-1024x768-wallpaper.jpg", age=20)
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password',
        first_name = "Marnie", last_name="Loder", profile_photo='https://as1.ftcdn.net/v2/jpg/01/62/80/28/1000_F_162802836_bnhUGn0BxR14SjzByrCn2i2cdvxaPi6r.jpg', cover_photo='https://images.unsplash.com/photo-1688746515540-61243f2012b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', age=32)
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', occupation='ice cream taster',
        first_name = "Bobbie", last_name="Halloway", profile_photo='https://free4kwallpapers.com/uploads/wallpaper/some-pain--i-made-wallpaper-1024x768-wallpaper.jpg', cover_photo='https://images.unsplash.com/photo-1651420079042-c16bb74c2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80', age=25)
    jimmy = User(
        username='jimmy', email='jimmy@aa.io', password='password',
        first_name = "Jimmy", last_name="Cain", profile_photo='https://images.unsplash.com/photo-1629318986794-e7e9c9890016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60', cover_photo='https://free4kwallpapers.com/uploads/wallpaper/a-collection-of-colorful-splatoon--wallpaper-1024x768-wallpaper.jpg', age=27)
    rodney = User(
        username='rodney', email='rodney@aa.io', password='password',
        first_name = "Rodney", last_name="Smith", profile_photo='https://free4kwallpapers.com/uploads/wallpaper/toy-story--uhd-amp-mobile-s-wallpaper-1024x768-wallpaper.jpg', cover_photo='https://images.unsplash.com/photo-1688291091364-9658c26c1749?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80', age=39)
    wilson = User(
        username='wilson', email='wilson@aa.io', password='password',
        first_name = "Wilson", last_name="Wallenberg", profile_photo='https://free4kwallpapers.com/uploads/wallpaper/219-5120x2160-gaming--wallpaper-1024x768-wallpaper.jpg', cover_photo='https://free4kwallpapers.com/uploads/wallpaper/mechanical-key-switch-patent--wallpaper-1024x768-wallpaper.jpg', age=20)
    alexandria = User(
        username='alexandria', email='alexandria@aa.io', password='password',
        first_name = "Alexandria", last_name="Stopper", profile_photo='https://images.unsplash.com/photo-1682687220198-88e9bdea9931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60', cover_photo='https://images.unsplash.com/photo-1688550378756-866114814fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80', age=22)
    
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(jimmy)
    db.session.add(rodney)
    db.session.add(wilson)
    db.session.add(alexandria)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
