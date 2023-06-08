from flask import Flask, current_app, request
import pickle

app= Flask(__name__)

with open('model.pkl', 'rb') as fin:
    vectorizer, classifier = pickle.load(fin)

@app.route('/')
def index():
    return current_app.send_static_file('SNLP.html')

@app.route('/classify', methods=['POST'])
def classify():
    text= request.form['text']

    #use model
    response=classifier.predict(vectorizer.transform([text]))[0]
    
    return { "response" : response }

if __name__ == '__main__':  
   app.run()
