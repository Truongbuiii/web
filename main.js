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




// Hàm hiển thị hoặc ẩn container chứa các nút
function toggleChoiceContainer() {
    const choiceContainer = document.getElementById("choiceContainer");
    if (choiceContainer.style.display === "none" || choiceContainer.style.display === "") {
        choiceContainer.style.display = "block"; // Hiển thị container
    } else {
        choiceContainer.style.display = "none"; // Ẩn container
    }
}

// Hiển thị hoặc ẩn container chứa các nút khi nhấp vào icon
function toggleChoiceContainer() {
    const choiceContainer = document.getElementById("choiceContainer");
    choiceContainer.style.display = choiceContainer.style.display === "none" || choiceContainer.style.display === ""
        ? "block"
        : "none";
}

// Chuyển hướng đến trang đăng nhập
function redirectToLogin() {
    window.location.href = "dangnhap.html"; // URL trang đăng nhập của bạn
}

// Chuyển hướng đến trang đăng ký
function redirectToRegister() {
    window.location.href = "dangky.html"; // URL trang đăng ký của bạn
}

// Lấy icon user và submenu
const userIcon = document.querySelector('.toggle-submenu');
const submenu = document.querySelector('.submenu');

// Hiển thị hoặc ẩn submenu khi nhấn vào icon user
userIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Dừng sự kiện để không kích hoạt ngoài icon
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Ẩn submenu khi nhấn ra ngoài
document.addEventListener('click', function(event) {
    if (!userIcon.contains(event.target) && !submenu.contains(event.target)) {
        submenu.style.display = 'none';
    }
});


