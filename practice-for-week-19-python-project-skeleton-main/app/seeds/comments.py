from ..models import db, Comment, environment, SCHEMA
from sqlalchemy import text
from datetime import datetime

def seed_comments():
    comment1 = Comment(
        description="Omg this is so cool",
        user_id=1,
        image_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    comment2 = Comment(
        description="This picture is one of one.",
        user_id=1,
        image_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    comment3 = Comment(
        description="Wow this is funny!",
        user_id=1,
        image_id=3,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    comment4 = Comment(
        description="Really this is just amazing!",
        user_id=2,
        image_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )
    comment5 = Comment(
        description="I have never seen anything like this before.",
        user_id=2,
        image_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now()
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.commit()
    print("Comments seeded to db")

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTIY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
