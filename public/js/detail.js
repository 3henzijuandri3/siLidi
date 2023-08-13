// Mobile //

// Mobile Modal Konfirmasi
const btn_tertarik = document.getElementById('tertarik');
const modal_mobile = document.getElementById('modal');
const garis_undo_modal = document.getElementById('garis-kecil');
const overlay = document.querySelector('.overlay');

btn_tertarik.addEventListener('click', () => {
    modal_mobile.classList.remove('translate-y-[2000px]');
    overlay.classList.remove('hidden');
});

garis_undo_modal.addEventListener('click', () => {
    modal_mobile.classList.add('translate-y-[2000px]');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
    modal_mobile.classList.add('translate-y-[2000px]');
    overlay.classList.add('hidden');
});


// Desktop //

// Desktop Modal Konfirmasi
const modal_desktop = document.getElementById('modal-desktop');
const exit = document.getElementById('exit');
const btn_tertarik_desktop = document.getElementById('tertarik-desktop');

btn_tertarik_desktop.addEventListener('click', () => {
    modal_desktop.classList.remove('scale-0');
    overlay.classList.remove('hidden');
    document.body.style.overflow = "hidden";
});

overlay.addEventListener('click', () => {
    modal_desktop.classList.add('scale-0');
    overlay.classList.add('hidden');
    document.body.style.overflow = "auto";
});

exit.addEventListener('click', () => {
    modal_desktop.classList.add('scale-0');
    overlay.classList.add('hidden');
    document.body.style.overflow = "auto";
});


// Image Showcase
const showcase = document.querySelector('.showcase');

const spotlight = document.querySelector('.spotlight');

showcase.addEventListener('click', (e) => {
    if (e.target.classList.contains('thumb')){
        spotlight.src = e.target.src;
    };
});

// Spesifikasi & Deskripsi
const underline_hijau = document.getElementById('underline');
const text_spesifikasi = document.getElementById('spesifikasi');
const text_deskripsi = document.getElementById('deskripsi');
const tombol_spesifikasi = document.getElementById('tombol-spesifikasi');
const tombol_deskripsi = document.getElementById('tombol-deskripsi');

let vw = window.innerWidth;

tombol_deskripsi.addEventListener('click', () =>{
    text_deskripsi.classList.remove('hidden');
    text_spesifikasi.classList.add('hidden');

    if (vw >= 768 && vw < 1024){
        underline_hijau.classList.remove('translate-x-[93px]');

    } else if (vw >= 1024 && vw < 1280){    
        underline_hijau.classList.remove('translate-x-[118px]');

    } else if (vw >= 1280 && vw < 1320){
        underline_hijau.classList.remove('translate-x-[120px]');

    } else if (vw >= 1320){
        underline_hijau.classList.remove('translate-x-[120px]');
    };
    
});

tombol_spesifikasi.addEventListener('click', () =>{
    text_deskripsi.classList.add('hidden');
    text_spesifikasi.classList.remove('hidden');
    
    if (vw >= 768 && vw < 1024){
        underline_hijau.classList.add('translate-x-[93px]');

    } else if (vw >= 1024 && vw < 1280){    
        underline_hijau.classList.add('translate-x-[118px]');

    } else if (vw >= 1280 && vw < 1320){
        underline_hijau.classList.add('translate-x-[120px]');

    } else if (vw >= 1320){
        underline_hijau.classList.add('translate-x-[120px]');
    };
    
});


