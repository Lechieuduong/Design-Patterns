1. Factory Pattern là gì?
- Một mẫu thiết kế được sử dụng hpoor biến nhất trong lập trình hướng đối tượng, thông thường cái chúng ta gọi là factory thì ta đề cập đến một nhà máy trong lập trình thì nó như kiểu sơ đồ của một nhà máy vậy.
- 1 nhà máy sản xuất ra nhiều sản phẩm, và có thể nhiều nhà máy sản xuất một sản phẩm chung

Factory Pattern có 3 loại: 
1. Simple Factory Pattern
2. Factory Method Pattern
3. Abstract Factory Pattern

Ví dụ khởi đầu: (Gang of Four)
Ta có 1 thương hiệu vận chuyển và ta xây dựng 1 ứng dụng để làm điều đó, khởi đầu ta sẽ chỉ vận chuyển bằng xe tải (truck) vì vậy hầu hết code của chúng ta sẽ nằm trong class là Truck đó
-> Sau một thời gian, ứng dụng của chúng ta trở nên khá phổ biến, mỗi ngày ta tiếp nhận hàng nghìn yêu cầu từ các đơn vị vận tải để kết hợp với hệ thống logistic của chúng ta. Nhưng, có 1 thời điểm chúng ta mở rộng dịch vụ sang cả mảng đường thủy. Đó là điều vô cùng tuyệt vời, nhưng chúng ta phải phát triển code thế nào? Bởi vì hấu hết code của chúng ta đều kết hợp với Truck thì việc thêm Ship vào ứng dụng, nó sẽ ảnh hưởng đến csdl, code của chúng ta hay thậm chỉ sau này bổ sung thêm nhiều loại hình vấn tải khác, thì chúng ta sẽ làm gì để không cần phải viết lại code nhiều và không tốn thêm nhân công làm phức tạp hóa đội hình dự án?

- Ưu điểm: 
+ nó cung cấp cho chúng ta cơ chế đặc biệt để tạo đối tượng, tách biệt việc tạo đối tượng và việc sử dụng đối tượng
+ Chứa logic phán đoán khi cần thiết, nó có thể quyết định khi nào sử dụng
- Nhược điểm:
+ Vì pattern này tập trung vào tính logic để tạo ra các sản phẩm, nên trách nhiệm cảu hàm này rất nặng nề, nó không hoạt động bình thường nhưng chúng ta nghĩ, chỉ cần lỗi sẽ lỗi toàn bộ code, và nếu cần phải mở rộng sẽ cần phải vào tận code điều đó vi phạm nguyên tắc của SOLID