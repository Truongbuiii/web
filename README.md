<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiệm cái đồng hồ</title>
    <!-- Liên kết đến css bên ngoài -->
    <link rel="stylesheet" href="style.css">

</head>
<body>
       <!-- Thanh điều hướng -->
    <div class="navbar">
        <!-- Logo bên trái -->
        <div class="logo">
            <a href="#"><img src="images bán đồng hồ/logo_tiemcaidongho.png" alt="Logo"></a>
        </div>

        <div class="search-container">
            <input type="text" placeholder="Hãy tìm tôi...">
            <img src="images bán đồng hồ/bieutuongtimkiem.jpg" alt="Tìm kiếm"> <!-- Đường dẫn đến biểu tượng tìm kiếm -->
        </div>

        <div class="icon-container">
            <img src="images bán đồng hồ/bieutuongtrangchu.jpg" alt="Trang chủ"> 
            <img src="images bán đồng hồ/bieutuonggiohang2.jpg" alt="Giỏ hàng"> <!-- Đường dẫn đến biểu tượng 2 -->
<img src="images bán đồng hồ/bieutuongdangnhap.jpg" alt="Đăng nhập"> <!-- Đường dẫn đến biểu tượng 3 -->
        </div>
    </div>

     <!-- Thanh menu hàng ngang màu xám -->
     <div class="horizontal-menu">
        <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Sản phẩm</a></li>
            <li><a href="#">Đơn hàng</a></li>
            <li><a href="#">Lịch sử đơn hàng</a></li>
            <li><a href="#">Liên hệ</a></li>
        </ul>
    </div>

    <!-- Phần banner giới thiệu khu vực sản phẩm -->
<div class="carousel">
    <img class="slides" src="images bán đồng hồ/quangcao1.png" alt="Banner 1">
    <img class="slides" src="images bán đồng hồ/quangcao2.png" alt="Banner 2">
    <img class="slides" src="images bán đồng hồ/quangcao3.png" alt="Banner 3">
    <img class="slides" src="images bán đồng hồ/quangcao4.png" alt="Banner 4">

    <!-- Nút bấm để di chuyển ảnh -->
    <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
    <button class="next" onclick="changeSlide(1)">&#10095;</button>
</div>


    <!-- Khu vực sản phẩm -->
    <div class="product-container">
        <!-- Sản phẩm 1 -->
        <div class="product">
            <img src="images bán đồng hồ/sanpham1.jpg" alt="Sản phẩm 1">
            <div class="price">1.500.000 VND</div>
        </div>
    
        <!-- Sản phẩm 2 -->
        <div class="product">
            <img src="images bán đồng hồ/sanpham2.jpg" alt="Sản phẩm 2">
            <div class="price">2.200.000 VND</div>
        </div>
    
        <!-- Sản phẩm 3 -->
        <div class="product">
            <img src="images bán đồng hồ/sanpham3.jpg" alt="Sản phẩm 3">
            <div class="price">3.100.000 VND</div>
        </div>

        <div class="product">
            <img src="images bán đồng hồ/quangcao1.png" alt="Sản phẩm 3">
            <div class="price">3.100.000 VND</div>
        </div>

        <div class="product">
            <img src="images bán đồng hồ/quangcao2.png" alt="Sản phẩm 3">
            <div class="price">3.100.000 VND</div>
        </div>

        <div class="product">
            <img src="images bán đồng hồ/quangcao3.png" alt="Sản phẩm 3">
            <div class="price">3.100.000 VND</div>
        </div>

        <div class="product">
            <img src="images bán đồng hồ/quangcao3.png" alt="Sản phẩm 3">
            <div class="price">3.100.000 VND</div>
        </div>

        <div class="product">
            <img src="images bán đồng hồ/quangcao4.png" alt="Sản phẩm 3">
            <div class="price">3.100.000 VND</div>
        </div>
    </div>

    <!-- Thanh đếm số trang -->
    <div class="pagination-wrapper">
        <div class="pagination">
            <a href="#">&laquo;</a> <!-- Nút chuyển trang trước -->
            <a href="#" class="active">1</a> <!-- Trang hiện tại -->
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">&raquo;</a> <!-- Nút chuyển trang tiếp theo -->
        </div>
    </div>

    <script src="main.js"></script>

    <div class="lienhe">
        
    </div>

    

</body>
</html>
