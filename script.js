
//JS array objects for products info store
const products = [
  { id: 'book-1', title: 'জালালউদ্দিন রুমি — রবিকুল রনি', price: 350, rating: 4.7, img: './images/jalauddin.jpeg' },
  { id: 'book-2', title: 'যদি ও সন্ধ্যা — হুমায়ুন আহমেদ', price: 290, rating: 4.4, img: './images/jodiosondha.jpeg' },
  { id: 'book-3', title: 'আগুন ডানার পাখি', price: 420, rating: 4.9, img: './images/agun.jpg' },
  { id: 'book-4', title: 'আমাদের শহরের মেয়ে', price: 220, rating: 4.1, img: './images/amader_sohorer.png' },
  { id: 'book-5', title: 'আপন কথা', price: 350, rating: 4.7, img: './images/apon_ktha.jpg' },
  { id: 'book-6', title: 'দূরের সবুজ বনভুমি', price: 250, rating: 4.1, img: './images/durer.png' },
  { id: 'book-7', title: 'এইসব দিনরাত্রি', price: 520, rating: 4.1, img: './images/eisob_dinrat.jpg' },
  { id: 'book-8', title: 'জয়বাবা ফেলুনাথ', price: 225, rating: 4.1, img: './images/jombaba.jpg' },
  { id: 'book-9', title: 'নীড়হারা পাখি', price: 255, rating: 4.1, img: './images/nirhara_pakhi.jpg' },
  { id: 'book-10', title: 'অম্রতায়ন', price: 555, rating: 4.1, img: './images/omritoyayon.jpeg' },
  { id: 'book-11', title: 'পুতুলনাচের ইতিকথা', price: 250, rating: 4.1, img: './images/putul.jpg' },
  { id: 'book-12', title: 'শ্রেষ্ঠ গল্প', price: 550, rating: 4.1, img: './images/shersto_golpo.jpeg' }
];

// using DOM------like a bridge between html and JS
const productsGrid = document.getElementById('products-grid');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
document.getElementById('year').textContent = new Date().getFullYear();

// function for show products info from products array in webpage using loop
function renderProducts(list = products) {
  productsGrid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded shadow p-4 flex flex-col';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" class="h-44 object-contain mb-3 mx-auto" />
      <h4 class="font-semibold text-sm">${p.title}</h4>
      <div class="mt-2 text-xs text-gray-600">Rating: ${'⭐'.repeat(Math.round(p.rating))} (${p.rating})</div>
      <div class="mt-2 font-semibold">${p.price} BDT</div>
    `;
    productsGrid.appendChild(card);
  });
}
renderProducts();


function sortAndRender() {
  const q = (searchInput.value || '').toLowerCase().trim();
  const sort = sortSelect.value;
  let list = products.filter(p => p.title.toLowerCase().includes(q));

  if (sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
  if (sort === 'price-desc') list.sort((a,b)=>b.price-a.price);
  if (sort === 'rating-asc') list.sort((a,b)=>a.rating-b.rating);
  if (sort === 'rating-desc') list.sort((a,b)=>b.rating-a.rating);

  renderProducts(list);
}
sortSelect.addEventListener('change', sortAndRender);
searchInput.addEventListener('input', debounce(sortAndRender, 200));

function debounce(fn, wait=200) {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(()=> fn.apply(this, args), wait);
  };
}






const reviewForm = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');
const nameInput = document.getElementById('reviewer-name');
const textInput = document.getElementById('review-text');

reviewForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const text = textInput.value.trim();
  if (!name || !text) return;

  const div = document.createElement('div');
  div.className = 'p-4 bg-white rounded shadow';
  div.innerHTML = `<strong>${name}</strong><p class="mt-1 text-gray-700">${text}</p>`;
  reviewsList.prepend(div);

  reviewForm.reset();
});



