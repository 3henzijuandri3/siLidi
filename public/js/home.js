let vw = window.innerWidth;


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

// Desktop Top Navigation //
const navbar = document.getElementById('navigation');
const target_hitam = document.querySelectorAll('.target-hitam');
const target_hitam_pucat = document.querySelectorAll('.target-hitam-pucat');
const input_search = document.querySelector('.input-search');
const logo_search = document.querySelector('.logo-search');
const icon_profile = document.querySelector('.icon-profile');

function text_to_black(){
    target_hitam.forEach(e => {
        e.classList.remove('text-white');
        e.classList.add('text-hitam-primary');
    });

    target_hitam_pucat.forEach(e => {
        e.classList.remove('text-white');
        e.classList.add('text-hitam-pucat');
    });

    input_search.classList.remove('text-white');
    input_search.classList.remove('placeholder-white');
    input_search.classList.remove('border-[#C5D8A4]');
    input_search.classList.add('text-hitam-pucat');
    input_search.classList.add('placeholder-hitam-pucat');
    input_search.classList.add('border-hitam-pucat');

    logo_search.classList.remove('text-white');
    logo_search.classList.add('text-hitam-pucat');

    icon_profile.classList.remove('text-white');
    icon_profile.classList.add('text-hitam-pucat');
}

function text_to_white(){
    target_hitam.forEach(e => {
        e.classList.add('text-white');
        e.classList.remove('text-hitam-primary');
    });

    target_hitam_pucat.forEach(e => {
        e.classList.add('text-white');
        e.classList.remove('text-hitam-pucat');
    });

    input_search.classList.add('text-white');
    input_search.classList.add('placeholder-white');
    input_search.classList.add('border-[#C5D8A4]');
    input_search.classList.remove('text-hitam-pucat');
    input_search.classList.remove('placeholder-hitam-pucat');
    input_search.classList.remove('border-hitam-pucat');

    logo_search.classList.add('text-white');
    logo_search.classList.remove('text-hitam-pucat');

    icon_profile.classList.add('text-white');
    icon_profile.classList.remove('text-hitam-pucat');
}

window.onscroll = () => {

    if (vw >= 1024){
        const scrolled = window.scrollY;

        if (scrolled > 350){
            navbar.classList.add('scrolled_navbar');
            navbar.classList.remove('lg:p-3');
            navbar.classList.remove('bg-cokelat');
    
            text_to_black();
    
        } else if (scrolled < 350){
            navbar.classList.remove('scrolled_navbar');
            navbar.classList.add('lg:p-3');
            navbar.classList.add('bg-cokelat');
    
            text_to_white();
        };
    }

};

// navbar.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//         e.preventDefault();
//         window.location.href = 'product.html#our-product';
//     }
// });


// Button Navigation //
const btn_tentang = document.querySelector('.btn-tentang');
const btn_lihat = document.querySelector('.btn-lihat');

btn_tentang.addEventListener('click', () => {
    window.location.href = 'about.html';
});

btn_lihat.addEventListener('click', () => {
    window.location.href = 'product.html';
});

// Modal Dropdown
const modal_dropdown = document.getElementById('modal-dropdown');
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
