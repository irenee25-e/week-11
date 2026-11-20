// ============================================================
// ProStroke Billiard — Data Katalog (6 Kategori, 30 Tongkat)
// ============================================================

const imageFolder = "Tongkat Billiard";
const storeWhatsApp = "6281234567890";

const kategoriBilliard = [
  {
    id: "custom-play",
    namaNav: "Custom Play",
    judul: "Custom Play Cue Series",
    deskripsi: "Tongkat custom dengan inlay maple, ebony, dan turquoise yang dirancang untuk pukulan harian maupun turnamen.",
    cue: [
      { id: 1, name: "Vortex Custom Series 01", image: "Custom_billiard_cue_02ce6446.jpg", tip: "12.5 mm", weight: "19.0 oz", joint: "Radial", material: "Canadian Maple", price: 4500000, oldPrice: 4950000, rating: 4.9, status: "Tersedia", limited: false },
      { id: 2, name: "Royal Inlay Maple 02", image: "Custom_billiard_cue_449213b8.jpg", tip: "12.4 mm", weight: "19.2 oz", joint: "Uni-Loc", material: "Hard Maple & Ebony", price: 5200000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false },
      { id: 3, name: "Obsidian Point Cue 03", image: "Custom_billiard_cue_c4261d68.jpg", tip: "12.5 mm", weight: "19.0 oz", joint: "3/8x10", material: "Turquoise & Maple", price: 5850000, oldPrice: 6300000, rating: 5.0, status: "Stok Terbatas", limited: true },
      { id: 11, name: "Silver Ring Custom 11", image: "Custom_billiard_cue_for_catalog_1ea1f7d3.jpg", tip: "12.5 mm", weight: "19.0 oz", joint: "Radial", material: "Maple & Silver Ring", price: 4650000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false },
      { id: 12, name: "Imperial 6-Point 12", image: "Custom_billiard_cue_for_catalog_22fa7ef1.jpg", tip: "12.5 mm", weight: "19.2 oz", joint: "3/8x10", material: "6-Point Sharp Inlay", price: 5950000, oldPrice: null, rating: 4.9, status: "Stok Terbatas", limited: true },
      { id: 16, name: "Crimson Edge 16", image: "Custom_billiard_cue_for_catalog_3b8ba64a.jpg", tip: "12.5 mm", weight: "19.0 oz", joint: "Uni-Loc", material: "Red Veneer & Ebony", price: 5350000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false },
      { id: 20, name: "Billiard Prestige 20", image: "Custom_billiard_cue_for_catalog_a2b68c65.jpg", tip: "12.5 mm", weight: "19.4 oz", joint: "5/16x18", material: "Irish Linen Wrap", price: 4450000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false },
      { id: 22, name: "Golden Crest 22", image: "Custom_billiard_cue_for_catalog_b2ab08f5.jpg", tip: "12.5 mm", weight: "19.2 oz", joint: "Radial", material: "Gold Ring & Maple", price: 5150000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false }
    ]
  },
  {
    id: "pro-series",
    namaNav: "Pro Series",
    judul: "Pro Tournament & Low Deflection",
    deskripsi: "Dilengkapi shaft Low Deflection berdiameter presisi untuk kontrol spin dan akurasi tembakan jarak jauh.",
    cue: [
      { id: 4, name: "Apex Catalog Edition 04", image: "Custom_billiard_cue_catalog_photo_3a62e815.jpg", tip: "12.25 mm", weight: "18.8 oz", joint: "Radial", material: "Low Deflection Maple", price: 6100000, oldPrice: null, rating: 4.9, status: "Tersedia", limited: false },
      { id: 5, name: "Grandmaster Gold 05", image: "Custom_billiard_cue_catalog_photo_dd25ab0f.jpg", tip: "12.5 mm", weight: "19.5 oz", joint: "5/16x14", material: "Rosewood & Maple", price: 4900000, oldPrice: 5400000, rating: 4.8, status: "Tersedia", limited: false },
      { id: 15, name: "Mirage Pro Line 15", image: "Custom_billiard_cue_for_catalog_38b33cce.jpg", tip: "12.25 mm", weight: "18.9 oz", joint: "Radial", material: "Pro Taper Shaft", price: 5600000, oldPrice: null, rating: 4.9, status: "Tersedia", limited: false },
      { id: 21, name: "Velocity Tournament 21", image: "Custom_billiard_cue_for_catalog_b0b1cef0.jpg", tip: "12.25 mm", weight: "19.0 oz", joint: "Uni-Loc", material: "Low Deflection Pro", price: 5750000, oldPrice: 6200000, rating: 4.9, status: "Tersedia", limited: false }
    ]
  },
  {
    id: "collector",
    namaNav: "Collector",
    judul: "Collector & Handcrafted Inlay",
    deskripsi: "Edisi kolektor dengan detail inlay rumit berbahan Abalone, Cocobolo, dan Ebony pilihan.",
    cue: [
      { id: 6, name: "Heritage Display 06", image: "Custom_billiard_cue_displayed_1dd74f5e.jpg", tip: "12.75 mm", weight: "19.0 oz", joint: "Brass Pin", material: "Linen Wrap Classic", price: 6750000, oldPrice: null, rating: 5.0, status: "Stok Terbatas", limited: true },
      { id: 7, name: "Sovereign Wrap 07", image: "Custom_billiard_cue_displayed_5166e83f.jpg", tip: "12.5 mm", weight: "19.3 oz", joint: "Uni-Loc", material: "Textured Leather Grip", price: 5400000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false },
      { id: 8, name: "Emerald Crown 08", image: "Custom_billiard_cue_displayed_b7118a8b.jpg", tip: "12.4 mm", weight: "19.0 oz", joint: "Radial", material: "Green Veneer Inlay", price: 6300000, oldPrice: 6850000, rating: 4.9, status: "Tersedia", limited: false },
      { id: 17, name: "Artisan Ivory-Style 17", image: "Custom_billiard_cue_for_catalog_4c6fa4a6.jpg", tip: "12.4 mm", weight: "19.1 oz", joint: "3/8x10", material: "Handcrafted Inlay", price: 7400000, oldPrice: 7900000, rating: 5.0, status: "Stok Terbatas", limited: true },
      { id: 23, name: "Monarch 8-Point 23", image: "Custom_billiard_cue_for_catalog_c14de881.jpg", tip: "12.4 mm", weight: "19.0 oz", joint: "3/8x10", material: "Cocobolo & Ebony", price: 6600000, oldPrice: null, rating: 4.9, status: "Stok Terbatas", limited: true }
    ]
  },
  {
    id: "carbon-break",
    namaNav: "Carbon & Break",
    judul: "Carbon Core & Break Power Cue",
    deskripsi: "Konstruksi Carbon Fiber kaku dengan transfer tenaga maksimal untuk break bertenaga maupun play shot stabil.",
    cue: [
      { id: 9, name: "Stealth Strike 09", image: "Custom_billiard_cue_for_catalog_08e04600.jpg", tip: "12.4 mm", weight: "19.0 oz", joint: "Quick Release", material: "Carbon Core Composite", price: 7100000, oldPrice: null, rating: 5.0, status: "Tersedia", limited: false },
      { id: 13, name: "Titan Force 13", image: "Custom_billiard_cue_for_catalog_2ebb5a70.jpg", tip: "13.0 mm", weight: "20.0 oz", joint: "Uni-Loc", material: "Heavy Break Maple", price: 4300000, oldPrice: 4700000, rating: 4.8, status: "Tersedia", limited: false },
      { id: 19, name: "Shadow Carbon 19", image: "Custom_billiard_cue_for_catalog_86b7dce7.jpg", tip: "12.4 mm", weight: "19.0 oz", joint: "Radial", material: "Full Carbon Matte", price: 6900000, oldPrice: null, rating: 5.0, status: "Tersedia", limited: false }
    ]
  },
  {
    id: "classic-wood",
    namaNav: "Classic Wood",
    judul: "Classic Wood Play Cue",
    deskripsi: "Menonjolkan serat alami kayu Mahogany, Curly Maple, dan Selected Ash dengan rasa pukulan tradisional.",
    cue: [
      { id: 10, name: "Mahogany Precision 10", image: "Custom_billiard_cue_for_catalog_0e081528.jpg", tip: "12.75 mm", weight: "19.5 oz", joint: "5/16x18", material: "Selected Mahogany", price: 3750000, oldPrice: 4100000, rating: 4.7, status: "Tersedia", limited: false },
      { id: 14, name: "Amber Wood Cue 14", image: "Custom_billiard_cue_for_catalog_326eb45a.jpg", tip: "12.5 mm", weight: "19.0 oz", joint: "5/16x14", material: "Curly Maple", price: 4800000, oldPrice: null, rating: 4.7, status: "Tersedia", limited: false },
      { id: 18, name: "Nordic Ash Cue 18", image: "Custom_billiard_cue_for_catalog_58994981.jpg", tip: "12.5 mm", weight: "18.5 oz", joint: "Brass", material: "Selected Ash Wood", price: 3550000, oldPrice: null, rating: 4.7, status: "Tersedia", limited: false }
    ]
  },
  {
    id: "studio-signature",
    namaNav: "Signature",
    judul: "Studio & Signature Series",
    deskripsi: "Lini flagship ProStroke Billiard dengan finishing premium dan keseimbangan bobot standar kejuaraan.",
    cue: [
      { id: 24, name: "Midnight Velvet 24", image: "Custom_billiard_cue_on_background_1a1ff74c.jpg", tip: "12.5 mm", weight: "19.0 oz", joint: "Uni-Loc", material: "Textured Leather Grip", price: 4950000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false },
      { id: 25, name: "Walnut Classic 25", image: "Custom_billiard_cue_on_background_89060ad2.jpg", tip: "12.75 mm", weight: "19.5 oz", joint: "5/16x14", material: "Dark Walnut", price: 3900000, oldPrice: 4250000, rating: 4.7, status: "Tersedia", limited: false },
      { id: 26, name: "Cobalt Strike 26", image: "Custom_billiard_cue_on_background_a14b26b1.jpg", tip: "12.4 mm", weight: "19.0 oz", joint: "Radial", material: "Blue Pearl Inlay", price: 5450000, oldPrice: null, rating: 4.9, status: "Tersedia", limited: false },
      { id: 27, name: "Zenith Maple Pro 27", image: "Custom_billiard_cue_on_background_a8b1883c.jpg", tip: "12.5 mm", weight: "18.8 oz", joint: "3/8x10", material: "AAA Birdseye Maple", price: 5800000, oldPrice: null, rating: 4.9, status: "Tersedia", limited: false },
      { id: 28, name: "Onyx & Brass 28", image: "Custom_billiard_cue_on_background_edc20a43.jpg", tip: "12.5 mm", weight: "19.2 oz", joint: "Brass Pin", material: "Sleek Black Finish", price: 4700000, oldPrice: null, rating: 4.8, status: "Tersedia", limited: false },
      { id: 29, name: "Masterpiece Signature 29", image: "Custom_billiard_cue_photorealist._75336355.jpg", tip: "12.25 mm", weight: "19.0 oz", joint: "Radial", material: "Limited Custom Build", price: 7800000, oldPrice: 8500000, rating: 5.0, status: "Stok Terbatas", limited: true },
      { id: 30, name: "Champion Legacy 30", image: "Custom_billiard_cue_photo_8e3036ea.jpg", tip: "12.5 mm", weight: "19.3 oz", joint: "Uni-Loc", material: "Pro Balance Weight", price: 6200000, oldPrice: null, rating: 4.9, status: "Tersedia", limited: false }
    ]
  }
];

// State Persisten (Cart & Wishlist)
let cart = [];
let favorites = [];
let promoDiscountRate = 0;

try {
  cart = JSON.parse(localStorage.getItem("prostroke_cart") || "[]");
  favorites = JSON.parse(localStorage.getItem("prostroke_favs") || "[]");
} catch (e) {
  cart = [];
  favorites = [];
}

function saveStorage() {
  try {
    localStorage.setItem("prostroke_cart", JSON.stringify(cart));
    localStorage.setItem("prostroke_favs", JSON.stringify(favorites));
  } catch (e) {}
}

function getAllCues() {
  const list = [];
  kategoriBilliard.forEach(kat => {
    kat.cue.forEach(item => {
      list.push({
        ...item,
        kategoriId: kat.id,
        kategoriNama: kat.namaNav,
        kategoriJudul: kat.judul,
        kategoriDeskripsi: kat.deskripsi
      });
    });
  });
  return list;
}

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function handleImgError(imgEl, originalFile) {
  const step = parseInt(imgEl.dataset.fallbackStep || "0", 10);
  if (step === 0 && originalFile.includes("._")) {
    imgEl.dataset.fallbackStep = "1";
    imgEl.src = `${imageFolder}/${originalFile.replace("._", "_")}`;
  } else if (step <= 1) {
    imgEl.dataset.fallbackStep = "2";
    imgEl.src = `${imageFolder}/${originalFile.replace(/\.jpg$/i, ".png")}`;
  } else if (step <= 2) {
    imgEl.dataset.fallbackStep = "3";
    imgEl.src = `${imageFolder}/Custom_billiard_cue_photo_8e3036ea.jpg`;
  } else {
    imgEl.onerror = null;
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

// ============================================================
// Kartu Produk HTML
// ============================================================
function renderCueCard(cue) {
  const isFav = favorites.includes(cue.id);
  const badgeClass = cue.limited ? "stock-pill limited" : "stock-pill";
  const imgSrc = `${imageFolder}/${cue.image}`;
  const specsText = `Tip: ${cue.tip} | Berat: ${cue.weight} | Joint: ${cue.joint} | ${cue.material}`;

  return `
    <article class="product-card">
      <a class="product-media" href="index.html?produk=${cue.id}">
        <img src="${imgSrc}" alt="${cue.name}" loading="lazy" onerror="handleImgError(this, '${cue.image}')">
        <button class="fav-btn ${isFav ? "active" : ""}" type="button" title="Simpan ke Favorit"
          onclick="event.preventDefault(); event.stopPropagation(); toggleFavorite(${cue.id})">&#9829;</button>
        <span class="${badgeClass}">${cue.status}</span>
      </a>
      <div class="product-body">
        <div class="meta-row">
          <span class="cat-label">${cue.kategoriNama}</span>
          <span class="rating-label">&#9733; ${cue.rating.toFixed(1)}</span>
        </div>
        <a class="product-title-link" href="index.html?produk=${cue.id}">${cue.name}</a>
        <p class="product-specs">${specsText}</p>
        <div class="product-foot">
          <div class="price-now">
            ${formatRupiah(cue.price)}
            ${cue.oldPrice ? `<span class="price-old">${formatRupiah(cue.oldPrice)}</span>` : ""}
          </div>
          <button class="add-btn" type="button" onclick="addToCart(${cue.id}, 1, '${cue.tip} / ${cue.weight} / Softcase', 0)">+ Beli</button>
        </div>
      </div>
    </article>
  `;
}

// ============================================================
// 1. Render Halaman Beranda
// ============================================================
function renderHomeView(container) {
  const allCues = getAllCues();
  const spotlight = allCues.find(c => c.id === 29) || allCues[0];

  const categoryCardsHTML = kategoriBilliard.map(kat => {
    const cover = kat.cue[0];
    return `
      <a class="cat-card" href="index.html?kategori=${kat.id}">
        <div class="cat-thumb">
          <img src="${imageFolder}/${cover.image}" alt="${kat.namaNav}" onerror="handleImgError(this, '${cover.image}')">
        </div>
        <div>
          <h3>${kat.namaNav}</h3>
          <span>${kat.cue.length} Tongkat</span>
        </div>
      </a>
    `;
  }).join("");

  const categoryOptions = kategoriBilliard.map(k => `<option value="${k.id}">${k.namaNav}</option>`).join("");

  container.innerHTML = `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <div class="hero-badge"><span class="hero-dot"></span> Koleksi Custom 2026 &bull; Ready Stock</div>
          <h1>Koleksi Tongkat Billiard <span>Custom &amp; Presisi</span></h1>
          <p class="hero-desc">
            Jelajahi 30 pilihan tongkat billiard berbahan Canadian Maple, Ebony, Ash, hingga Carbon Fiber dengan kalibrasi kelurusan &amp; keseimbangan presisi.
          </p>
          <div class="hero-actions">
            <a href="#katalog" class="btn-gold">Belanja Sekarang</a>
            <a href="#kategori" class="btn-outline">Lihat 6 Kategori</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item"><strong>30+</strong><span>Model Tongkat</span></div>
            <div class="stat-item"><strong>100%</strong><span>QC Kelurusan</span></div>
            <div class="stat-item"><strong>4.9 &#9733;</strong><span>Rating Pemain</span></div>
          </div>
        </div>

        <a class="spotlight-card" href="index.html?produk=${spotlight.id}">
          <div class="spotlight-head">
            <span class="spotlight-tag">Spotlight Unggulan</span>
            <span class="rating-label">&#9733; ${spotlight.rating.toFixed(1)}</span>
          </div>
          <div class="spotlight-img">
            <img src="${imageFolder}/${spotlight.image}" alt="${spotlight.name}" onerror="handleImgError(this, '${spotlight.image}')">
          </div>
          <div class="cat-label">${spotlight.kategoriJudul}</div>
          <div class="spotlight-title">${spotlight.name}</div>
          <div class="spotlight-specs">Tip: ${spotlight.tip} | Berat: ${spotlight.weight} | Joint: ${spotlight.joint}</div>
          <div class="spotlight-foot">
            <div>
              <strong style="color:#c9a24d; font-size:1.15rem;">${formatRupiah(spotlight.price)}</strong>
              ${spotlight.oldPrice ? `<span class="price-old">${formatRupiah(spotlight.oldPrice)}</span>` : ""}
            </div>
            <span style="font-size:0.84rem; font-weight:700; color:#ffffff;">Lihat Detail &rarr;</span>
          </div>
        </a>
      </div>
    </section>

    <section class="section-block" id="kategori">
      <div class="container">
        <div class="section-header">
          <h2>Jelajahi Kategori</h2>
          <span>Pilih kategori untuk melihat halaman koleksi khusus</span>
        </div>
        <div class="category-grid">${categoryCardsHTML}</div>
      </div>
    </section>

    <section class="section-block" id="katalog" style="padding-top:0.5rem;">
      <div class="container">
        <div class="controls-bar">
          <input type="text" id="search-input" class="search-input" placeholder="Cari nama tongkat, bahan kayu, atau tipe joint...">
          <select id="category-filter" class="filter-select">
            <option value="all">Semua Kategori</option>
            ${categoryOptions}
          </select>
          <select id="sort-filter" class="filter-select">
            <option value="default">Urutkan: Default</option>
            <option value="price-asc">Harga: Terendah</option>
            <option value="price-desc">Harga: Tertinggi</option>
            <option value="rating-desc">Rating Tertinggi</option>
          </select>
        </div>

        <div class="section-header">
          <h2>Katalog Lengkap Tongkat Billiard</h2>
          <span id="product-count">Menampilkan ${allCues.length} produk</span>
        </div>

        <div class="catalog-grid" id="catalog-container"></div>
      </div>
    </section>
  `;

  const searchInput = document.getElementById("search-input");
  const catSelect = document.getElementById("category-filter");
  const sortSelect = document.getElementById("sort-filter");

  function refreshCatalog() {
    const q = searchInput.value.toLowerCase().trim();
    const cat = catSelect.value;
    const sort = sortSelect.value;

    let filtered = allCues.filter(c => {
      const matchCat = cat === "all" || c.kategoriId === cat;
      const matchText =
        c.name.toLowerCase().includes(q) ||
        c.material.toLowerCase().includes(q) ||
        c.joint.toLowerCase().includes(q) ||
        c.kategoriNama.toLowerCase().includes(q);
      return matchCat && matchText;
    });

    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    if (sort === "rating-desc") filtered.sort((a, b) => b.rating - a.rating);

    document.getElementById("product-count").textContent = `Menampilkan ${filtered.length} produk`;
    const grid = document.getElementById("catalog-container");
    grid.innerHTML = filtered.length
      ? filtered.map(renderCueCard).join("")
      : `<p style="color:#9ba8a2;">Produk tidak ditemukan.</p>`;
  }

  searchInput.addEventListener("input", refreshCatalog);
  catSelect.addEventListener("change", refreshCatalog);
  sortSelect.addEventListener("change", refreshCatalog);
  refreshCatalog();
}

// ============================================================
// 2. Render Halaman Khusus Kategori (?kategori=...)
// ============================================================
function renderCategoryView(container, katObj) {
  const cues = getAllCues().filter(c => c.kategoriId === katObj.id);
  document.title = `${katObj.judul} — ProStroke Billiard`;

  container.innerHTML = `
    <section class="page-banner">
      <div class="container">
        <h1>${katObj.judul}</h1>
        <div class="breadcrumb">
          <a href="index.html">Beranda</a>
          <span>/</span>
          <span>Kategori</span>
          <span>/</span>
          <strong style="color:#ffffff;">${katObj.namaNav}</strong>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="cat-intro-box">
          <p><strong>Tentang ${katObj.namaNav}:</strong> ${katObj.deskripsi}</p>
          <span class="pill-count">${cues.length} Model Tersedia</span>
        </div>
        <div class="catalog-grid">
          ${cues.map(renderCueCard).join("")}
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// 3. Render Halaman Favorit (?favorit=1)
// ============================================================
function renderFavoritesView(container) {
  const favCues = getAllCues().filter(c => favorites.includes(c.id));
  document.title = "Daftar Favorit — ProStroke Billiard";

  container.innerHTML = `
    <section class="page-banner">
      <div class="container">
        <h1>Tongkat Favorit Anda</h1>
        <div class="breadcrumb">
          <a href="index.html">Beranda</a>
          <span>/</span>
          <strong style="color:#ffffff;">Favorit</strong>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-header">
          <h2>Koleksi Tersimpan</h2>
          <span>${favCues.length} produk favorit</span>
        </div>
        <div class="catalog-grid" id="fav-grid">
          ${favCues.length
            ? favCues.map(renderCueCard).join("")
            : `<p style="color:#9ba8a2;">Belum ada tongkat yang disimpan ke favorit. Klik ikon &#9829; pada produk untuk menyimpannya.</p>`}
        </div>
      </div>
    </section>
  `;
}

// ============================================================
// 4. Render Halaman Detail Produk (?produk=...)
// ============================================================
function renderProductDetailView(container, cue) {
  document.title = `${cue.name} — ProStroke Billiard`;
  const allCues = getAllCues();
  const related = allCues.filter(c => c.id !== cue.id && c.kategoriId === cue.kategoriId).slice(0, 4);

  let selectedTip = cue.tip;
  let selectedWeight = cue.weight;
  let selectedPkgName = "Standard Softcase";
  let selectedPkgExtra = 0;
  let detailQty = 1;

  container.innerHTML = `
    <section class="page-banner">
      <div class="container">
        <h1>Detail Tongkat Billiard</h1>
        <div class="breadcrumb">
          <a href="index.html">Beranda</a>
          <span>/</span>
          <a href="index.html?kategori=${cue.kategoriId}">${cue.kategoriNama}</a>
          <span>/</span>
          <strong style="color:#ffffff;">${cue.name}</strong>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="detail-grid">
          <div>
            <div class="detail-gallery">
              <img src="${imageFolder}/${cue.image}" alt="${cue.name}" onerror="handleImgError(this, '${cue.image}')">
            </div>
            <div class="detail-spec-row">
              <div class="spec-mini"><span>Diameter Tip</span><strong>${cue.tip}</strong></div>
              <div class="spec-mini"><span>Berat Standar</span><strong>${cue.weight}</strong></div>
              <div class="spec-mini"><span>Tipe Joint</span><strong>${cue.joint}</strong></div>
            </div>
          </div>

          <div>
            <span class="cat-label">${cue.kategoriJudul}</span>
            <h2 class="detail-title">${cue.name}</h2>
            <div style="display:flex; gap:1rem; font-size:0.86rem; margin-bottom:0.5rem;">
              <span class="rating-label">&#9733; ${cue.rating.toFixed(1)} (Terverifikasi)</span>
              <span style="color:#6ee7b7; font-weight:600;">&bull; ${cue.status}</span>
            </div>

            <div class="detail-price-wrap">
              <span class="detail-price-now" id="detail-price-now">${formatRupiah(cue.price)}</span>
              ${cue.oldPrice ? `<span class="price-old" id="detail-price-old" style="font-size:1rem;">${formatRupiah(cue.oldPrice)}</span>` : ""}
            </div>

            <p style="color:#cbd5d0; font-size:0.95rem; margin-bottom:1.25rem;">
              ${cue.name} menggunakan material <strong>${cue.material}</strong> dengan tipe joint <strong>${cue.joint}</strong>. Didesain untuk menghasilkan akurasi pukulan tinggi, getaran minimal, dan kontrol bola putih yang presisi.
            </p>

            <div class="variant-block">
              <span class="variant-label">Pilih Diameter Tip:</span>
              <div class="chip-row" id="tip-chips"></div>
            </div>

            <div class="variant-block">
              <span class="variant-label">Pilih Berat (oz):</span>
              <div class="chip-row" id="weight-chips"></div>
            </div>

            <div class="variant-block">
              <span class="variant-label">Paket Proteksi &amp; Aksesoris:</span>
              <div class="chip-row" id="pkg-chips"></div>
            </div>

            <div class="detail-actions">
              <div class="qty-stepper">
                <button type="button" id="qty-minus">-</button>
                <span id="detail-qty">1</span>
                <button type="button" id="qty-plus">+</button>
              </div>
              <button class="btn-gold" type="button" id="detail-add-btn" style="flex:1;">+ Tambah ke Keranjang</button>
              <button class="btn-green-lg" type="button" id="detail-buy-btn">Beli Sekarang</button>
            </div>

            <div class="detail-notice">
              <strong>Garansi ProStroke:</strong> Gratis Joint Protector + Packing Pipa PVC Tebal. Garansi tukar baru bila shaft diterima dalam kondisi bengkok.
            </div>
          </div>
        </div>

        <div class="tabs-card">
          <div class="tabs-head">
            <button class="tab-btn active" type="button" data-tab="desc">Deskripsi &amp; Keunggulan</button>
            <button class="tab-btn" type="button" data-tab="specs">Spesifikasi Teknis</button>
            <button class="tab-btn" type="button" data-tab="care">Panduan Perawatan</button>
          </div>
          <div class="tab-panel active" id="tab-desc">
            <p>${cue.kategoriDeskripsi}</p>
            <ul class="checklist">
              <li>Titik keseimbangan (balance point) terkalibrasi ideal untuk kontrol cue ball.</li>
              <li>Grip ergonomis anti-selip saat bermain dalam durasi lama.</li>
              <li>Sudah melalui uji rolling datar sebelum dikemas.</li>
            </ul>
          </div>
          <div class="tab-panel" id="tab-specs">
            <ul class="checklist">
              <li>Material Utama: ${cue.material}</li>
              <li>Diameter Tip Bawaan: ${cue.tip}</li>
              <li>Berat Standar: ${cue.weight}</li>
              <li>Konektor / Joint: ${cue.joint}</li>
              <li>Panjang Standar: 58 Inch (147 cm) 2-Piece</li>
            </ul>
          </div>
          <div class="tab-panel" id="tab-care">
            <ul class="checklist">
              <li>Simpan tongkat dalam kondisi lurus (digantung vertikal atau masuk hardcase).</li>
              <li>Hindari suhu panas berlebih seperti bagasi mobil di siang hari.</li>
              <li>Lap shaft menggunakan kain microfiber kering setelah bermain.</li>
            </ul>
          </div>
        </div>

        <div class="section-header">
          <h2>Produk Terkait di ${cue.kategoriNama}</h2>
          <a href="index.html?kategori=${cue.kategoriId}" style="color:#c9a24d; text-decoration:none; font-size:0.88rem;">Lihat Semua &rarr;</a>
        </div>
        <div class="catalog-grid">
          ${related.map(renderCueCard).join("")}
        </div>
      </div>
    </section>
  `;

  // Setup Variant Chips
  const tipOptions = ["12.25 mm", "12.5 mm", "12.75 mm"];
  if (!tipOptions.includes(cue.tip)) tipOptions.push(cue.tip);
  const weightOptions = ["18.5 oz", "19.0 oz", "19.5 oz"];
  if (!weightOptions.includes(cue.weight)) weightOptions.push(cue.weight);
  const pkgOptions = [
    { name: "Standard Softcase", label: "Standard Softcase (+Rp 0)", extra: 0 },
    { name: "Hardcase & Chalk", label: "+ Hardcase & Chalk (+Rp 250.000)", extra: 250000 }
  ];

  function renderChips() {
    document.getElementById("tip-chips").innerHTML = tipOptions.map(t =>
      `<button type="button" class="chip ${selectedTip === t ? "active" : ""}" data-tip="${t}">${t}</button>`
    ).join("");
    document.getElementById("weight-chips").innerHTML = weightOptions.map(w =>
      `<button type="button" class="chip ${selectedWeight === w ? "active" : ""}" data-weight="${w}">${w}</button>`
    ).join("");
    document.getElementById("pkg-chips").innerHTML = pkgOptions.map(p =>
      `<button type="button" class="chip ${selectedPkgName === p.name ? "active" : ""}" data-pkg="${p.name}" data-extra="${p.extra}">${p.label}</button>`
    ).join("");

    document.getElementById("detail-price-now").textContent = formatRupiah(cue.price + selectedPkgExtra);
    const oldEl = document.getElementById("detail-price-old");
    if (oldEl && cue.oldPrice) {
      oldEl.textContent = formatRupiah(cue.oldPrice + selectedPkgExtra);
    }
  }

  document.getElementById("tip-chips").addEventListener("click", e => {
    if (e.target.dataset.tip) { selectedTip = e.target.dataset.tip; renderChips(); }
  });
  document.getElementById("weight-chips").addEventListener("click", e => {
    if (e.target.dataset.weight) { selectedWeight = e.target.dataset.weight; renderChips(); }
  });
  document.getElementById("pkg-chips").addEventListener("click", e => {
    if (e.target.dataset.pkg) {
      selectedPkgName = e.target.dataset.pkg;
      selectedPkgExtra = parseInt(e.target.dataset.extra, 10);
      renderChips();
    }
  });

  document.getElementById("qty-minus").addEventListener("click", () => {
    detailQty = Math.max(1, detailQty - 1);
    document.getElementById("detail-qty").textContent = detailQty;
  });
  document.getElementById("qty-plus").addEventListener("click", () => {
    detailQty += 1;
    document.getElementById("detail-qty").textContent = detailQty;
  });

  document.getElementById("detail-add-btn").addEventListener("click", () => {
    addToCart(cue.id, detailQty, `${selectedTip} / ${selectedWeight} / ${selectedPkgName}`, selectedPkgExtra);
  });
  document.getElementById("detail-buy-btn").addEventListener("click", () => {
    addToCart(cue.id, detailQty, `${selectedTip} / ${selectedWeight} / ${selectedPkgName}`, selectedPkgExtra);
    document.getElementById("cart-overlay").classList.add("active");
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).classList.add("active");
    });
  });

  renderChips();
}

// ============================================================
// Wishlist & Keranjang Belanja
// ============================================================
function toggleFavorite(cueId) {
  if (favorites.includes(cueId)) {
    favorites = favorites.filter(id => id !== cueId);
    showToast("Dihapus dari daftar favorit");
  } else {
    favorites.push(cueId);
    showToast("Disimpan ke daftar favorit!");
  }
  saveStorage();
  updateFavBadge();

  const params = new URLSearchParams(window.location.search);
  if (params.get("favorit") === "1") {
    renderFavoritesView(document.getElementById("main-content"));
  } else {
    document.querySelectorAll(".fav-btn").forEach(btn => {
      const card = btn.closest(".product-card");
      const link = card && card.querySelector(".product-media");
      if (link && link.getAttribute("href").includes(`produk=${cueId}`)) {
        btn.classList.toggle("active", favorites.includes(cueId));
      }
    });
  }
}

function updateFavBadge() {
  const el = document.getElementById("fav-count");
  if (el) el.textContent = favorites.length;
}

function addToCart(cueId, qty, variant, extraPrice) {
  const existing = cart.find(item => item.id === cueId && item.variant === variant);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: cueId, qty, variant, extraPrice });
  }
  saveStorage();
  updateCartUI();
  const cue = getAllCues().find(c => c.id === cueId);
  if (cue) showToast(`${cue.name} ditambahkan ke keranjang!`);
}

function changeCartQty(index, delta) {
  if (!cart[index]) return;
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveStorage();
  updateCartUI();
}

function getCartTotals() {
  const allCues = getAllCues();
  const subtotal = cart.reduce((sum, item) => {
    const cue = allCues.find(c => c.id === item.id);
    if (!cue) return sum;
    return sum + (cue.price + (item.extraPrice || 0)) * item.qty;
  }, 0);
  const discount = Math.round(subtotal * promoDiscountRate);
  const shipEl = document.getElementById("shipping-method");
  const shipping = cart.length > 0 && shipEl ? parseInt(shipEl.value, 10) : 0;
  const total = Math.max(0, subtotal - discount + shipping);
  return { subtotal, discount, shipping, total };
}

function updateCartUI() {
  const allCues = getAllCues();
  const totalQty = cart.reduce((s, item) => s + item.qty, 0);
  const { subtotal, discount, shipping, total } = getCartTotals();

  document.getElementById("cart-count").textContent = totalQty;
  document.getElementById("cart-subtotal").textContent = formatRupiah(subtotal);

  const discRow = document.getElementById("discount-row");
  if (discount > 0) {
    discRow.style.display = "flex";
    document.getElementById("cart-discount").textContent = "-" + formatRupiah(discount);
  } else {
    discRow.style.display = "none";
  }

  document.getElementById("cart-shipping").textContent = shipping === 0 ? "Gratis" : formatRupiah(shipping);
  document.getElementById("cart-total").textContent = formatRupiah(total);

  const container = document.getElementById("cart-items-container");
  if (cart.length === 0) {
    container.innerHTML = `<p style="color:#9ba8a2; text-align:center; margin-top:2rem;">Keranjang belanja masih kosong.</p>`;
    return;
  }

  container.innerHTML = cart.map((item, idx) => {
    const cue = allCues.find(c => c.id === item.id);
    if (!cue) return "";
    const unitPrice = cue.price + (item.extraPrice || 0);
    return `
      <div class="cart-item">
        <img src="${imageFolder}/${cue.image}" alt="${cue.name}" onerror="handleImgError(this, '${cue.image}')">
        <div class="cart-item-info">
          <div class="cart-item-title">${cue.name}</div>
          <div class="cart-item-variant">${item.variant}</div>
          <div class="cart-item-price">${formatRupiah(unitPrice)}</div>
          <div class="qty-controls">
            <button class="qty-btn" type="button" onclick="changeCartQty(${idx}, -1)">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" type="button" onclick="changeCartQty(${idx}, 1)">+</button>
            <button class="remove-btn" type="button" onclick="changeCartQty(${idx}, -${item.qty})">Hapus</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ============================================================
// Inisialisasi Halaman & Event Listener Global
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const kategoriParam = params.get("kategori");
  const produkParam = parseInt(params.get("produk"), 10);
  const favoritParam = params.get("favorit");

  const allCues = getAllCues();
  const activeCue = !isNaN(produkParam) ? allCues.find(c => c.id === produkParam) : null;
  const activeCat = activeCue
    ? kategoriBilliard.find(k => k.id === activeCue.kategoriId)
    : kategoriBilliard.find(k => k.id === kategoriParam);

  // Navbar Dinamis
  const navEl = document.getElementById("top-nav");
  if (navEl) {
    const isHome = !activeCat && !activeCue && favoritParam !== "1";
    const homeLink = `<a class="nav-link ${isHome ? "active" : ""}" href="index.html">Beranda</a>`;
    const catLinks = kategoriBilliard.map(k => {
      const isActive = activeCat && activeCat.id === k.id;
      return `<a class="nav-link ${isActive ? "active" : ""}" href="index.html?kategori=${k.id}">${k.namaNav}</a>`;
    }).join("");
    navEl.innerHTML = homeLink + catLinks;
  }

  if (favoritParam === "1") {
    document.getElementById("fav-nav-btn").classList.add("active");
  }

  // Ticker Strip
  const tickerEl = document.getElementById("ticker-track");
  if (tickerEl) {
    const items = kategoriBilliard.map(k => `<span class="ticker-item">${k.namaNav} &bull;</span>`).join("") +
      `<span class="ticker-item">Gratis Packing Pipa PVC &bull;</span>`;
    tickerEl.innerHTML = items + items;
  }

  // Render Konten Sesuai Route URL
  const mainEl = document.getElementById("main-content");
  if (activeCue) {
    renderProductDetailView(mainEl, activeCue);
  } else if (activeCat) {
    renderCategoryView(mainEl, activeCat);
  } else if (favoritParam === "1") {
    renderFavoritesView(mainEl);
  } else {
    renderHomeView(mainEl);
  }

  // Drawer Keranjang & Modal Invoice
  const cartOverlay = document.getElementById("cart-overlay");
  document.getElementById("open-cart-btn").addEventListener("click", () => cartOverlay.classList.add("active"));
  document.getElementById("close-cart-btn").addEventListener("click", () => cartOverlay.classList.remove("active"));
  cartOverlay.addEventListener("click", e => {
    if (e.target === cartOverlay) cartOverlay.classList.remove("active");
  });

  document.getElementById("shipping-method").addEventListener("change", updateCartUI);

  document.getElementById("apply-promo-btn").addEventListener("click", () => {
    const code = document.getElementById("promo-input").value.trim().toUpperCase();
    if (code === "PROSTROKE10") {
      promoDiscountRate = 0.1;
      showToast("Promo PROSTROKE10 aktif! Diskon 10%.");
    } else {
      promoDiscountRate = 0;
      showToast("Kode promo tidak valid (coba: PROSTROKE10).");
    }
    updateCartUI();
  });

  // Simulasi Proses Pesanan
  const invoiceModal = document.getElementById("invoice-modal");
  document.getElementById("sim-checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) return showToast("Keranjang masih kosong!");
    const name = document.getElementById("buyer-name").value.trim() || "Pelanggan ProStroke";
    const address = document.getElementById("buyer-address").value.trim() || "Jakarta Pusa
