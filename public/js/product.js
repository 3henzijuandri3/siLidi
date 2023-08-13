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



// Logic See all //
const see_all = document.querySelector('.see-all');

const slider_kategori = document.querySelector('.slider-kategori');

const list_item_kategori = document.querySelectorAll('.item-kategori')

function see_all_changer(){
    see_all.innerText == 'See All' ? see_all.innerText = 'See Less' : see_all.innerText = 'See All';
}

function item_kategori_wider(){
    list_item_kategori.forEach(item => {
        item.classList.toggle('lg:w-[20%]');
        item.classList.toggle('w-[35%]');
        item.classList.toggle('w-[30%]');
    });
}

function slider_expand(){
    slider_kategori.classList.toggle('overflow-x-auto');
    slider_kategori.classList.toggle('justify-evenly');
    slider_kategori.classList.toggle('flex-wrap');
}

see_all.addEventListener('click', () => {
    see_all_changer();
    item_kategori_wider();
    slider_expand();
});

// Logic Filter By Category
list_item_kategori.forEach(item => {
    item.addEventListener('click', () => {
        let kategori_filter = item.children.item(0).href;

        window.location.href = kategori_filter;
    });
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


// Live Search
const item_product = document.querySelectorAll('.item-product');

document.getElementById('live-search').addEventListener('input', () => {
    const input_live_search = document.getElementById('live-search');

    const filter = input_live_search.value.toLocaleLowerCase();

    item_product.forEach((prod) => {
        let nama_barang = prod.children.item(1).textContent;

        if(nama_barang.toLocaleLowerCase().includes(filter.toLocaleLowerCase())){
            prod.style.display = '';
        } else {
            prod.style.display = 'none';
        };
    });
});

document.getElementById('live-search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
});
// Logic Pergerakan Best Seller
// const best_1 = document.getElementById('best1');
// const best_2 = document.getElementById('best2');
// const best_3 = document.getElementById('best3');

// window.addEventListener('scroll', () => {
//     const scrolled = window.scrollY;
//     const smooth_scroll = scrolled * 0.5;


//     best_1.style.transform = `translateY(${10}%)`;

//     console.log(window.scrollY);
// });