from . import app

from flask import jsonify




values = []

@app.route('/api/values', methods=['GET'])
def get_values():
    return jsonify(values)

@app.route('/api/values/<string:value>', methods=['POST'])
def add_value(value):
    values.append(value)
    return jsonify({'message': f'{value} added successfully'})