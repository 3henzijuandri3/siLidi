// Modal Dropdown //
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


// Desktop Modal Konfirmasi //
const overlay = document.querySelector('.overlay');
const form_tambah_barang = document.getElementById('form-tambah-barang')
let image = document.getElementById('gambar-input');

overlay.addEventListener('click', () => {
    modal_desktop_tambah.classList.add('scale-0');
    modal_desktop_delete.classList.add('scale-0');
    overlay.classList.add('hidden');

    form_tambah_barang.reset()
    image.removeAttribute('src');

    document.body.style.overflow = "auto";
});

// Show input image
const loadFile = function(event) {
	image.src = URL.createObjectURL(event.target.files[0]);
};

// Tambah Barang
const modal_desktop_tambah = document.getElementById('modal-desktop-tambah');
const tambah_barang = document.getElementById('tambah-barang');
const exit_tambah = document.getElementById('exit-tambah');


tambah_barang.addEventListener('click', () => {
    modal_desktop_tambah.classList.remove('scale-0');
    overlay.classList.remove('hidden');
    document.body.style.overflow = "hidden";
});

exit_tambah.addEventListener('click', () => {
    modal_desktop_tambah.classList.add('scale-0');
    overlay.classList.add('hidden');

    form_tambah_barang.reset()
    image.removeAttribute('src');

    document.body.style.overflow = "auto";
});

// Hapus Barang
const modal_desktop_delete = document.getElementById('modal-desktop-delete');
const hapus_barang = document.querySelectorAll('.btn-delete');
const exit_delete = document.getElementById('exit-delete');
const btn_tidak = document.getElementById('tidak');

hapus_barang.forEach(e => {
    e.addEventListener('click', () => {
        modal_desktop_delete.classList.remove('scale-0');
        overlay.classList.remove('hidden');
        document.body.style.overflow = "hidden";
    });
});

exit_delete.addEventListener('click', () => {
    modal_desktop_delete.classList.add('scale-0');
    overlay.classList.add('hidden');
    document.body.style.overflow = "auto";
});

btn_tidak.addEventListener('click', () => {
    modal_desktop_delete.classList.add('scale-0');
    overlay.classList.add('hidden');
    document.body.style.overflow = "auto";
});

