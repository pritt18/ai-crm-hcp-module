from sqlalchemy import create_engine, Column, String
from sqlalchemy.orm import declarative_base, sessionmaker

engine = create_engine("sqlite:///crm.db")  # change to postgres in prod
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()

class Interaction(Base):
    __tablename__ = "interactions"

    id = Column(String, primary_key=True)
    hcp_name = Column(String)
    sentiment = Column(String)
    topics = Column(String)

Base.metadata.create_all(engine)