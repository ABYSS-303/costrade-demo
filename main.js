// HAMBURGER
const hamburger = document.getElementById("menu-icon");
const menu = document.querySelector(".menu-overlay");
const closeIcon = document.getElementById("close-icon");
hamburger.addEventListener('click', function() {
    menu.style.display = "flex";
    hamburger.style.display = "none";
    closeIcon.style.display = "block";
})
closeIcon.addEventListener('click', function() {
    hamburger.style.display = "block";
    menu.style.display = "none";
    closeIcon.style.display = "none";
})
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        hamburger.style.display = "none";
        menu.style.display = "none";
        closeIcon.style.display = "none";
    } else {
        hamburger.style.display = "block";
    }
});


// SWIPER
const servicesBox = document.querySelector('.services-box');
const items = Array.from(servicesBox.children);

let startX = 0;
let scrollPosition = 0;
let isDragging = false;

// Xử lý sự kiện touchstart khi người dùng chạm vào màn hình
servicesBox.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  scrollPosition = servicesBox.scrollLeft;
  isDragging = true;
});

// Xử lý sự kiện touchmove khi người dùng lướt trên màn hình
servicesBox.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const distance = startX - touchX;
  servicesBox.scrollLeft = scrollPosition + distance;
});

// Xử lý sự kiện touchend khi người dùng nhả tay
servicesBox.addEventListener('touchend', () => {
  isDragging = false;
  snapToClosestItem();
});

// Xử lý sự kiện mousedown khi người dùng bắt đầu kéo chuột
servicesBox.addEventListener('mousedown', (e) => {
  startX = e.clientX;
  scrollPosition = servicesBox.scrollLeft;
  isDragging = true;
  servicesBox.style.cursor = 'grabbing';
});

// Xử lý sự kiện mousemove khi người dùng kéo chuột
servicesBox.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const mouseX = e.clientX;
  const distance = startX - mouseX;
  servicesBox.scrollLeft = scrollPosition + distance;
});

// Xử lý sự kiện mouseup khi người dùng nhả chuột
servicesBox.addEventListener('mouseup', () => {
  isDragging = false;
  servicesBox.style.cursor = 'grab';
  snapToClosestItem();
});

// Xử lý sự kiện mouseleave khi chuột ra khỏi vùng kéo
servicesBox.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    servicesBox.style.cursor = 'grab';
    snapToClosestItem();
  }
});

