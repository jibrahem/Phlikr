from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password',
        first_name = "Demo", last_name="lition", profile_photo="https://as2.ftcdn.net/v2/jpg/03/03/62/45/1000_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg", cover_photo="https://as2.ftcdn.net/v2/jpg/03/03/62/45/1000_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg", age=20)
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password',
        first_name = "Marnie", last_name="Lovely", profile_photo='https://as1.ftcdn.net/v2/jpg/01/62/80/28/1000_F_162802836_bnhUGn0BxR14SjzByrCn2i2cdvxaPi6r.jpg', cover_photo='https://as1.ftcdn.net/v2/jpg/01/62/80/28/1000_F_162802836_bnhUGn0BxR14SjzByrCn2i2cdvxaPi6r.jpg', age=32)
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', occupation='ice cream taster',
        first_name = "Bobbie", last_name="Handsome", profile_photo='https://as2.ftcdn.net/v2/jpg/02/02/15/43/1000_F_202154347_jMRcgoxz7PuoWxe2IviHY3YFXVZUltIK.jpg', cover_photo='https://as2.ftcdn.net/v2/jpg/02/02/15/43/1000_F_202154347_jMRcgoxz7PuoWxe2IviHY3YFXVZUltIK.jpg', age=5)
    sophie = User(
        username='Sophie', email='st@aa.io', password='password', occupation='kindergarten teacher',
        first_name = "Sophie", last_name="Thomson", profile_photo='https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=719&q=80', cover_photo='https://images.unsplash.com/photo-1629067816434-55465e4f061f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80', age=28)
    benjamin = User(
        username='Benjamin', email='br@aa.io', password='password', occupation='SWE',
        first_name = "Benjamin", last_name="Reynolds", profile_photo='https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2570&q=80', cover_photo='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', age=28)

   


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(sophie)
    db.session.add(benjamin)
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
