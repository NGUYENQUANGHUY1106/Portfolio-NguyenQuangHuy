# Portfolio — Nguyễn Quang Huy

Website tĩnh, không cần cài dependency hoặc build. Nội dung và ảnh lấy từ tài liệu portfolio người dùng cung cấp.

Chạy xem trước tại thư mục này:

```powershell
python -m http.server 4173 --directory dist
```

Mở http://localhost:4173. Sửa nội dung dự án và kỹ năng trong `dist/app.js`, nội dung cá nhân trong `dist/index.html`, giao diện trong `dist/styles.css`.

Ảnh chân dung: `dist/assets/portrait.jpg`. CV gốc: `dist/assets/Nguyen-Quang-Huy-CV.pdf`. Các bìa dự án hiện là đồ họa có nhãn “Ảnh minh họa · Chờ ảnh thực tế”, không phải ảnh sản phẩm.

StorePro đã đối chiếu README ngày 12/11/2026: một số giao diện vẫn dùng dữ liệu mẫu và chưa nối backend. Không tuyên bố đã triển khai production. Các dự án chưa được chạy kiểm thử từ repository.

Font Google Fonts cần kết nối mạng; website vẫn dùng font dự phòng khi không tải được.
