from flask import Flask, request, jsonify
import pickle
import os
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Load trained model
with open("flower_model_2.pkl", "rb") as f:
    model = pickle.load(f)

# Optional: Encode flowers to numeric values (match training setup)
flower_encoder = {
    "Rose Bouquet": 0,
    "Lily Arrangement": 1,
    "Orchid Special": 2,
    "Sunflower": 3
    # Add more if your model was trained with additional types
}


@app.route("/")
def home():
    return "🌸 Flower Stock Predictor API is running!"


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        flower = data["flower"]
        quantity = int(data["quantity"])

        # Encode flower type
        flower_encoded = flower_encoder.get(flower)
        if flower_encoded is None:
            return jsonify({"error": f"Unknown flower type: {flower}"}), 400

        # Model expects input as 2D array
        input_features = np.array([[flower_encoded, quantity]])
        prediction = model.predict(input_features)[0]

        return jsonify({"prediction": int(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=81)
