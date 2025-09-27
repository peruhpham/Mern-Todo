# Mern Todo


## Hướng dẫn sử dụng sau khi clone dự án về

### 1. Yêu cầu môi trường (Prerequisites)
- **Node.js** >= 16.x  
- **npm** >= 8.x  
- **MongoDB** (cài local hoặc sử dụng **MongoDB Atlas**)  
- **Git** (để clone repository)

---

### 2. Cài đặt Backend

1. Mở terminal và chuyển vào thư mục backend:
    ```bash
    cd backend
    ```

2. Cài đặt dependencies:
    ```bash
    npm install
    ```

3. Tạo file `.env` trong thư mục `backend` với nội dung ví dụ:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/mern_todo
    ```

4. Chạy server backend:
    - Chạy với node:
      ```bash
      node server.js
      ```
    - Hoặc chạy bình thường:
      ```bash
      npm start
      ```
    - Chạy với chế độ dev (tự reload khi sửa code):
      ```bash
      npm run dev
      ```

---

### 3. Cài đặt Frontend

1. Mở terminal mới, chuyển vào thư mục frontend:
    ```bash
    cd frontend
    ```

2. Cài đặt dependencies:
    ```bash
    npm install
    ```

3. Chạy ứng dụng React:
    ```bash
    npm run dev
    ```

---

### 4. Truy cập website

Mở trình duyệt và truy cập:  
[http://localhost:5173/](http://localhost:5173/)

![Mô tả ảnh](image\Giao dien.png)
![Mô tả ảnh](image\Giao dien 2.png)
![Logo của project](image\Screenshot 2025-09-27 190911.png)

---

### 5. Lưu ý (Notes)

- Đảm bảo backend chạy ở **cổng 5000** (hoặc cập nhật API endpoint trong frontend nếu đổi cổng).  
- Nếu sử dụng **MongoDB Atlas**, thay đổi `MONGO_URI` trong file `.env` cho phù hợp.  
- Nếu gặp lỗi **CORS**, kiểm tra cấu hình `cors` trong backend.  
- Nên cài **nodemon** toàn cục để tự reload khi code backend thay đổi:  
  ```bash
  npm install -g nodemon


