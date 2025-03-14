from flask import Flask, request, jsonify
import pyodbc
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Cho phép gọi API từ frontend

# Cấu hình kết nối SQL Server
server = 'localhost'
database = 'your_database_name'
username = 'sa'  # Thay bằng user của bạn
password = 'yourpassword'  # Thay bằng password của bạn
conn_string = f'DRIVER={{SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'

# Kết nối CSDL
conn = pyodbc.connect(conn_string)
cursor = conn.cursor()

# API lấy danh sách sản phẩm
@app.route('/products', methods=['GET'])
def get_products():
    cursor.execute("SELECT * FROM SP")
    products = [{"MaSP": row[0], "MaNSX": row[1], "loai": row[2]} for row in cursor.fetchall()]
    return jsonify(products)

# API thêm sản phẩm
@app.route('/products', methods=['POST'])
def add_product():
    data = request.json
    cursor.execute("INSERT INTO SP (MaSP, MaNSX, loai) VALUES (?, ?, ?)", 
                   (data["MaSP"], data["MaNSX"], data["loai"]))
    conn.commit()
    return jsonify({"message": "Thêm sản phẩm thành công!"})

# API xóa sản phẩm
@app.route('/products/<ma_sp>', methods=['DELETE'])
def delete_product(ma_sp):
    cursor.execute("DELETE FROM SP WHERE MaSP = ?", (ma_sp,))
    conn.commit()
    return jsonify({"message": "Xóa sản phẩm thành công!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
