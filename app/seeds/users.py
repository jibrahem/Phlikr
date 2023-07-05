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

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
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
