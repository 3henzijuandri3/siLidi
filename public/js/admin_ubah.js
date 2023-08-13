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

const loadFile = function(event) {
	let image = document.getElementById('gambar-input');
	image.src = URL.createObjectURL(event.target.files[0]);
};
