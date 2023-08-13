// Mobile Navigation //
const home_btn = document.querySelector('.home-btn');
const product_btn = document.querySelector('.product-btn');
const pelatihan_btn = document.querySelector('.pelatihan-btn');
const about_btn = document.querySelector('.about-btn');

home_btn.addEventListener('click', () =>{
    window.location.href = 'home.html';
});

product_btn.addEventListener('click', () =>{
    window.location.href = 'product.html';
});

pelatihan_btn.addEventListener('click', () =>{
    window.location.href = 'pelatihan.html';
});

about_btn.addEventListener('click', () =>{
    window.location.href = 'about.html';
});

// Modal Dropdown
const modal_dropdown = document.getElementById('modal-dropdown');
const icon_profile = document.querySelector('.icon-profile');
const overlay_dropdown = document.getElementById('overlay-dropdown');

icon_profile.addEventListener('click', () => {
    modal_dropdown.classList.toggle('opacity-0');
    modal_dropdown.classList.toggle('invisible');
    overlay_dropdown.classList.toggle('hidden');
});

overlay_dropdown.addEventListener('click', () => {
    modal_dropdown.classList.toggle('opacity-0');
    modal_dropdown.classList.toggle('invisible');
    overlay_dropdown.classList.toggle('hidden');
});