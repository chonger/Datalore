from webapp import db

class Article(db.Model):

    id = db.Column(db.BigInteger, primary_key=True)
    title = db.Column(db.String)
    abstract = db.Column(db.String)
    date = db.Column(db.Date)

    def __init__(self, title, abstract, date):
        self.title = title
        self.abstract = abstract
        self.date = date

class Author(db.Model):

    id = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String)

    def __init__(self, name):
        self.name = name

class Publication(db.Model):
    id = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String)

    def __init__(self, name):
        self.name = name
        
class Department(db.Model):
    id = db.Column(db.BigInteger, primary_key=True)
    name = db.Column(db.String)

    def __init__(self, name):
        self.name = name

class ArticleAuthor(db.Model):
    
    id = db.Column(db.Integer, primary_key = True)
    art = db.Column(db.BigInteger, db.ForeignKey('article.id'))
    auth = db.Column(db.BigInteger, db.ForeignKey('author.id'))

    def __init__(self, art, auth):
        self.art = art
        self.auth = auth
