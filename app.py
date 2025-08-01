# app.py
import sklearn
# https://flower-stock-api.mwchege1.repl.co/predict

from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load("flower_model_2.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    X = [[data["quantity"], data["flower_type_encoded"]]]
    prediction = model.predict(X)[0]
    return jsonify({"result": int(prediction)})

if __name__ == "__main__":
    app.run()
