let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    
    // Ẩn tất cả các ảnh
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Tăng chỉ số slideIndex để hiển thị ảnh kế tiếp
    slideIndex++;
    
    // Nếu vượt quá số lượng ảnh, quay lại ảnh đầu tiên
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Hiển thị ảnh hiện tại
    slides[slideIndex - 1].style.display = "block";
    
    // Thay đổi ảnh sau 3 giây
    setTimeout(showSlides, 3000); // 3000ms = 3 giây
}
