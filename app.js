(function () {
  "use strict";

  const IMAGE_FOLDER = "Tongkat Billiard";
  const CART_KEY = "ps_cart_v1";
  const FAVS_KEY = "ps_favs_v1";
  const PROMO_KEY = "ps_promo_v1";
  const ORDERS_KEY = "ps_orders_v1";
  const CHANNEL_NAME = "prostroke_billiard_realtime_v1";
  const STORE_WA = "6281234567890";

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
        { id: 29, name: "Masterpiece Signature 29", image: "Custom_billiard_cue_photorealist…_75336355.jpg", tip: "12.25 mm", weight: "19.0 oz", joint: "Radial", material: "Limited Custom Build", price: 7800000, oldPrice: 8500000, rating: 5.0, status: "Stok Terbatas", limited: true },
        { id: 30, name: "Champion Legacy 30", image: "Custom_billiard_cue_photo_8e3036ea.jpg", tip: "12.5 mm", weight: "19.3 oz", joint: "Uni-Loc", material: "Pro Balance Weight", price: 6200000, oldPrice: null, rating: 4.9, status: "Tersedia", limited: false }
      ]
    }
  ];

  // BroadcastChannel + storage sync
  let channel = null;
  if (typeof BroadcastChannel !== "undefined") {
    try {
      channel = new BroadcastChannel(CHANNEL_NAME);
    } catch (_) {
      channel = null;
    }
  }

  function broadcastEvent(type, payload) {
    if (channel) {
      try {
        channel.postMessage({ type: type, payload: payload, ts: Date.now() });
      } catch (_) {}
    }
  }

  function onRealtimeUpdate(callback) {
    window.addEventListener("storage", function (e) {
      if (e.key === ORDERS_KEY || e.key === CART_KEY || e.key === FAVS_KEY || e.key === PROMO_KEY) {
        callback({ source: "storage", key: e.key });
      }
    });
    if (channel) {
      channel.addEventListener("message", function (e) {
        callback({ source: "broadcast", data: e.data });
      });
    }
  }

  // Helpers
  function formatRupiah(amount) {
    const num = Number(amount) || 0;
    return "Rp " + num.toLocaleString("id-ID");
  }

  function formatWaktu(isoString) {
    if (!isoString) return "-";
    const d = new Date(isoString);
    return d.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getImageUrl(filename) {
    return IMAGE_FOLDER + "/" + filename;
  }

  function handleImgError(imgEl, originalFile) {
    const step = parseInt(imgEl.dataset.fallbackStep || "0", 10);
    if (step === 0 && originalFile.includes("…")) {
      imgEl.dataset.fallbackStep = "1";
      imgEl.src = IMAGE_FOLDER + "/" + originalFile.replace("…", ".");
    } else if (step <= 1 && originalFile.includes("._")) {
      imgEl.dataset.fallbackStep = "2";
      imgEl.src = IMAGE_FOLDER + "/" + originalFile.replace("._", "_");
    } else if (step <= 2) {
      imgEl.dataset.fallbackStep = "3";
      imgEl.src = IMAGE_FOLDER + "/Custom_billiard_cue_photo_8e3036ea.jpg";
    } else {
      imgEl.onerror = null;
    }
  }

  // Catalog Query Helpers
  function getAllCues() {
    const list = [];
    kategoriBilliard.forEach(function (kat) {
      kat.cue.forEach(function (item) {
        list.push(Object.assign({}, item, {
          kategoriId: kat.id,
          kategoriNama: kat.namaNav,
          kategoriJudul: kat.judul,
          kategoriDeskripsi: kat.deskripsi
        }));
      });
    });
    return list;
  }

  function getCueById(id) {
    const numId = parseInt(id, 10);
    return getAllCues().find(function (c) {
      return c.id === numId;
    });
  }

  // Favorites API
  function getFavorites() {
    try {
      const raw = localStorage.getItem(FAVS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function toggleFavorite(cueId) {
    const id = parseInt(cueId, 10);
    let favs = getFavorites();
    let added = false;
    if (favs.includes(id)) {
      favs = favs.filter(function (f) { return f !== id; });
    } else {
      favs.push(id);
      added = true;
    }
    localStorage.setItem(FAVS_KEY, JSON.stringify(favs));
    broadcastEvent("FAVS_UPDATED", { count: favs.length });
    updateHeaderBadges();
    return added;
  }

  // Promo API
  function getPromoCode() {
    return localStorage.getItem(PROMO_KEY) || "";
  }

  function applyPromoCode(code) {
    const clean = String(code || "").trim().toUpperCase();
    if (clean === "PROSTROKE10") {
      localStorage.setItem(PROMO_KEY, "PROSTROKE10");
      broadcastEvent("PROMO_UPDATED", { code: "PROSTROKE10" });
      return { valid: true, rate: 0.1, code: "PROSTROKE10" };
    }
    localStorage.removeItem(PROMO_KEY);
    broadcastEvent("PROMO_UPDATED", { code: "" });
    return { valid: false, rate: 0, code: "" };
  }

  function getPromoRate() {
    return getPromoCode() === "PROSTROKE10" ? 0.1 : 0;
  }

  // Cart API (supports variants & extraPrice)
  function getCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    broadcastEvent("CART_UPDATED", { count: getCartCount() });
    updateHeaderBadges();
  }

  function addToCart(cueId, qty, variant, extraPrice) {
    const cue = getCueById(cueId);
    if (!cue) return null;

    const addQty = Math.max(1, parseInt(qty, 10) || 1);
    const chosenVariant = variant || (cue.tip + " / " + cue.weight + " / Standard Softcase");
    const extra = Number(extraPrice) || 0;
    const key = cue.id + "::" + chosenVariant;

    const cart = getCart();
    const existing = cart.find(function (c) {
      return c.key === key;
    });

    if (existing) {
      existing.qty += addQty;
    } else {
      cart.push({
        key: key,
        id: cue.id,
        name: cue.name,
        image: cue.image,
        kategoriNama: cue.kategoriNama,
        variant: chosenVariant,
        basePrice: cue.price,
        extraPrice: extra,
        unitPrice: cue.price + extra,
        qty: addQty
      });
    }
    saveCart(cart);
    return cart;
  }

  function updateCartQty(itemKey, newQty) {
    const qty = parseInt(newQty, 10);
    if (isNaN(qty) || qty < 1) {
      return removeFromCart(itemKey);
    }
    const cart = getCart();
    const item = cart.find(function (c) {
      return c.key === itemKey;
    });
    if (item) {
      item.qty = Math.min(99, qty);
      saveCart(cart);
    }
    return cart;
  }

  function removeFromCart(itemKey) {
    const cart = getCart().filter(function (c) {
      return c.key !== itemKey;
    });
    saveCart(cart);
    return cart;
  }

  function clearCart() {
    saveCart([]);
  }

  function getCartCount() {
    return getCart().reduce(function (sum, item) {
      return sum + (parseInt(item.qty, 10) || 0);
    }, 0);
  }

  function getCartTotals(shippingCost) {
    const cart = getCart();
    const subtotal = cart.reduce(function (sum, item) {
      return sum + item.unitPrice * item.qty;
    }, 0);
    const promoCode = getPromoCode();
    const promoRate = getPromoRate();
    const discount = Math.round(subtotal * promoRate);
    const ongkir = cart.length > 0 ? (typeof shippingCost === "number" ? shippingCost : 35000) : 0;
    const grandTotal = Math.max(0, subtotal - discount + ongkir);
    return {
      subtotal: subtotal,
      discount: discount,
      promoCode: promoCode,
      ongkir: ongkir,
      grandTotal: grandTotal
    };
  }

  // Orders API
  function getOrders() {
    try {
      const raw = localStorage.getItem(ORDERS_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveOrders(orders) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }

  function getOrderById(orderId) {
    return getOrders().find(function (o) {
      return o.id === orderId;
    });
  }

  function generateOrderId() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return "INV-PS-" + y + m + d + "-" + rand;
  }

  function createOrder(customer, shippingMethod) {
    const cart = getCart();
    if (cart.length === 0) return null;

    const ongkir = shippingMethod === "pickup" ? 0 : 35000;
    const totals = getCartTotals(ongkir);
    const orderId = generateOrderId();
    const nowIso = new Date().toISOString();

    const order = {
      id: orderId,
      createdAt: nowIso,
      paidAt: null,
      rejectedAt: null,
      status: "PENDING", // PENDING | PAID | REJECTED
      paymentMethod: "QRIS",
      qrisRef: "QRIS" + Date.now().toString().slice(-8),
      approvalRef: null,
      shippingMethod: shippingMethod === "pickup"
        ? "Ambil di Showroom (Jakarta Pusat)"
        : "Kurir Khusus + Packing Pipa PVC",
      customer: {
        nama: customer.nama,
        telepon: customer.telepon,
        alamat: customer.alamat,
        kota: customer.kota,
        catatan: customer.catatan || ""
      },
      items: cart.map(function (c) {
        return {
          id: c.id,
          name: c.name,
          image: c.image,
          variant: c.variant,
          unitPrice: c.unitPrice,
          qty: c.qty,
          subtotal: c.unitPrice * c.qty
        };
      }),
      subtotal: totals.subtotal,
      promoCode: totals.promoCode,
      discount: totals.discount,
      ongkir: totals.ongkir,
      grandTotal: totals.grandTotal
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    clearCart();
    broadcastEvent("ORDER_CREATED", { orderId: order.id });
    return order;
  }

  function updateOrderStatus(orderId, newStatus) {
    const orders = getOrders();
    const order = orders.find(function (o) {
      return o.id === orderId;
    });
    if (!order) return null;

    order.status = newStatus;
    if (newStatus === "PAID") {
      order.paidAt = new Date().toISOString();
      order.approvalRef = "APR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    } else if (newStatus === "REJECTED") {
      order.rejectedAt = new Date().toISOString();
    }
    saveOrders(orders);
    broadcastEvent("ORDER_STATUS_CHANGED", { orderId: order.id, status: newStatus });
    return order;
  }

  function renderStatusBadge(status) {
    if (status === "PAID") {
      return '<span class="status-badge status-paid">&#10003; Paid / Lunas</span>';
    }
    if (status === "REJECTED") {
      return '<span class="status-badge status-rejected">&#10005; Ditolak</span>';
    }
    return '<span class="status-badge status-pending"><span class="pulse-dot"></span> Menunggu Bayar</span>';
  }

  // Deterministic Dummy QRIS SVG Generator (Pure JS, zero libraries)
  function generateDummyQrisSvg(seedText) {
    const size = 25;
    const cell = 8;
    const quiet = 16;
    const totalPx = size * cell + quiet * 2;

    let hash = 2166136261;
    const text = String(seedText || "PROSTROKE-BILLIARD-QRIS");
    for (let i = 0; i < text.length; i++) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    function nextBit() {
      hash ^= hash << 13;
      hash ^= hash >>> 17;
      hash ^= hash << 5;
      return (hash >>> 0) % 2 === 1;
    }

    const grid = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });
    const reserved = Array.from({ length: size }, function () {
      return Array(size).fill(false);
    });

    function placeFinder(r0, c0) {
      for (let r = -1; r <= 7; r++) {
        for (let c = -1; c <= 7; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
          reserved[rr][cc] = true;
          const inOuter = r >= 0 && r <= 6 && c >= 0 && c <= 6;
          const onBorder = r === 0 || r === 6 || c === 0 || c === 6;
          const inInner = r >= 2 && r <= 4 && c >= 2 && c <= 4;
          grid[rr][cc] = inOuter && (onBorder || inInner);
        }
      }
    }

    function placeAlignment(r0, c0) {
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const rr = r0 + r;
          const cc = c0 + c;
          reserved[rr][cc] = true;
          grid[rr][cc] = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
        }
      }
    }

    placeFinder(0, 0);
    placeFinder(0, size - 7);
    placeFinder(size - 7, 0);
    placeAlignment(size - 7, size - 7);

    for (let i = 8; i < size - 8; i++) {
      reserved[6][i] = true;
      reserved[i][6] = true;
      grid[6][i] = i % 2 === 0;
      grid[i][6] = i % 2 === 0;
    }

    for (let r = 10; r <= 14; r++) {
      for (let c = 10; c <= 14; c++) {
        reserved[r][c] = true;
        grid[r][c] = false;
      }
    }

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!reserved[r][c]) {
          grid[r][c] = nextBit();
        }
      }
    }

    let rects = "";
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (grid[r][c]) {
          const x = quiet + c * cell;
          const y = quiet + r * cell;
          rects += '<rect x="' + x + '" y="' + y + '" width="' + cell + '" height="' + cell + '" fill="#0b291e"/>';
        }
      }
    }

    const cx = totalPx / 2;
    const cy = totalPx / 2;

    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + totalPx + '" height="' + totalPx + '" viewBox="0 0 ' + totalPx + " " + totalPx + '" role="img" aria-label="Kode QRIS ProStroke Billiard">' +
      '<rect width="100%" height="100%" fill="#ffffff"/>' +
      rects +
      '<rect x="' + (cx - 24) + '" y="' + (cy - 13) + '" width="48" height="26" rx="4" fill="#ffffff" stroke="#0b291e" stroke-width="1.5"/>' +
      '<text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0b291e">QRIS</text>' +
      "</svg>"
    );
  }

  // Shared Header + Ticker Strip
  function renderHeader(activePage, activeCatId) {
    const holder = document.getElementById("site-header-root");
    if (!holder) return;

    const cartCount = getCartCount();
    const favCount = getFavorites().length;
    const pendingCount = getOrders().filter(function (o) { return o.status === "PENDING"; }).length;

    const catLinks = kategoriBilliard.map(function (k) {
      const isActive = activePage === "kategori" && activeCatId === k.id;
      return '<a class="nav-link ' + (isActive ? "active" : "") + '" href="index.html?kategori=' + k.id + '">' + escapeHtml(k.namaNav) + "</a>";
    }).join("");

    const tickerItems =
      kategoriBilliard.map(function (k) {
        return '<span class="ticker-item">' + escapeHtml(k.namaNav) + " &bull;</span>";
      }).join("") +
      '<span class="ticker-item">Gratis Packing Pipa PVC &bull;</span>' +
      '<span class="ticker-item">Kode Promo: PROSTROKE10 (Diskon 10%) &bull;</span>' +
      '<span class="ticker-item">Pembayaran Instan QRIS Realtime &bull;</span>';

    holder.innerHTML =
      '<div class="top-bar">' +
      '  <div class="container top-bar-inner">' +
      '    <div><span class="top-highlight">PROSTROKE BILLIARD</span> &bull; Jl. Sudirman No. 88, Jakarta Pusat &bull; Gratis Packing Pipa PVC</div>' +
      '    <div class="top-bar-right">' +
      '      <a href="qris-approve.html" target="_blank" rel="noopener" class="sim-quick-link" title="Buka Simulator Approval QRIS di tab baru">Simulator QRIS &#8599;</a>' +
      '      <span class="social-pill">IG</span>' +
      '      <span class="social-pill">YT</span>' +
      '      <span class="social-pill">WA</span>' +
      "    </div>" +
      "  </div>" +
      "</div>" +
      '<header class="site-header">' +
      '  <div class="container header-inner">' +
      '    <a href="index.html" class="brand">' +
      '      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">' +
      '        <circle cx="16" cy="16" r="15" fill="#111" stroke="#c9a24d" stroke-width="2"/>' +
      '        <circle cx="16" cy="16" r="6" fill="#fff"/>' +
      '        <text x="16" y="19.5" text-anchor="middle" font-size="10" font-weight="bold" fill="#111" font-family="sans-serif">8</text>' +
      "      </svg>" +
      '      <div class="brand-title">PROSTROKE <span>BILLIARD</span></div>' +
      "    </a>" +
      '    <nav class="main-nav" aria-label="Navigasi Kategori">' +
      '      <a class="nav-link ' + (activePage === "home" ? "active" : "") + '" href="index.html">Beranda</a>' +
      "      " + catLinks +
      "    </nav>" +
      '    <div class="header-actions">' +
      '      <a href="index.html?favorit=1" class="action-pill-btn ' + (activePage === "favorit" ? "active" : "") + '" id="nav-fav-btn">&#9829; Favorit <span class="pill-badge" id="nav-fav-count">' + favCount + "</span></a>" +
      '      <a href="history.html" class="action-pill-btn ' + (activePage === "history" ? "active" : "") + '" id="nav-history-btn">Riwayat' + (pendingCount > 0 ? ' <span class="pill-badge" id="nav-pending-count">' + pendingCount + "</span>" : '<span class="pill-badge" id="nav-pending-count" style="display:none;">0</span>') + "</a>" +
      '      <a href="cart.html" class="cart-btn ' + (activePage === "cart" ? "active" : "") + '">Keranjang <span class="cart-badge" id="nav-cart-count">' + cartCount + "</span></a>" +
      "    </div>" +
      "  </div>" +
      "</header>" +
      '<div class="ticker-strip" aria-hidden="true">' +
      '  <div class="ticker-track">' + tickerItems + tickerItems + "</div>" +
      "</div>";
  }

  function updateHeaderBadges() {
    const cartEl = document.getElementById("nav-cart-count");
    if (cartEl) cartEl.textContent = String(getCartCount());

    const favEl = document.getElementById("nav-fav-count");
    if (favEl) favEl.textContent = String(getFavorites().length);

    const pendEl = document.getElementById("nav-pending-count");
    if (pendEl) {
      const pendingCount = getOrders().filter(function (o) { return o.status === "PENDING"; }).length;
      pendEl.textContent = String(pendingCount);
      pendEl.style.display = pendingCount > 0 ? "inline-block" : "none";
    }
  }

  // Shared Service Strip + Footer
  function renderFooter() {
    const holder = document.getElementById("site-footer-root");
    if (!holder) return;

    holder.innerHTML =
      '<section class="service-strip no-print">' +
      '  <div class="container service-grid">' +
      '    <div class="service-card">' +
      '      <div class="service-icon">&#10003;</div>' +
      '      <div>' +
      '        <h3>Garansi 100% Lurus</h3>' +
      '        <p>Setiap shaft melewati uji rolling datar sebelum pengiriman. Tukar baru jika diterima bengkok.</p>' +
      "      </div>" +
      "    </div>" +
      '    <div class="service-card">' +
      '      <div class="service-icon">&#9881;</div>' +
      '      <div>' +
      '        <h3>Gratis Packing Pipa PVC</h3>' +
      '        <p>Perlindungan maksimal dengan pipa PVC tebal dan joint protector bawaan untuk pengiriman seluruh Indonesia.</p>' +
      "      </div>" +
      "    </div>" +
      '    <div class="service-card">' +
      '      <div class="service-icon">&#9889;</div>' +
      '      <div>' +
      '        <h3>Pembayaran Instan QRIS</h3>' +
      '        <p>Checkout mudah dengan verifikasi pembayaran QRIS otomatis secara realtime dan riwayat transaksi tersimpan.</p>' +
      "      </div>" +
      "    </div>" +
      "  </div>" +
      "</section>" +
      '<footer class="site-footer" id="kontak">' +
      '  <div class="container">' +
      '    <div class="footer-grid">' +
      '      <div>' +
      '        <div class="footer-brand">PROSTROKE <span>BILLIARD</span></div>' +
      '        <p>Jl. Sudirman No. 88, Jakarta Pusat &bull; Buka Setiap Hari: 10.00 - 21.00 WIB</p>' +
      "      </div>" +
      '      <div style="text-align:right;">' +
      '        <p style="color:#cbd5d0; font-weight:600;">Simulasi Webstore &amp; Pembayaran QRIS</p>' +
      '        <p><a href="history.html" style="color:var(--gold); text-decoration:none;">Riwayat Transaksi</a> &bull; <a href="qris-approve.html" target="_blank" rel="noopener" style="color:var(--mint); text-decoration:none;">QRIS Simulator</a></p>' +
      "      </div>" +
      "    </div>" +
      '    <div class="footer-bottom">&copy; 2026 ProStroke Billiard Store. Seluruh hak cipta dilindungi.</div>' +
      "  </div>" +
      "</footer>";
  }

  // Toast helper
  let toastTimer = null;
  function showToast(message) {
    let el = document.getElementById("ps-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "ps-toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 2400);
  }

  onRealtimeUpdate(function () {
    updateHeaderBadges();
  });

  window.PSStore = {
    IMAGE_FOLDER: IMAGE_FOLDER,
    STORE_WA: STORE_WA,
    kategoriBilliard: kategoriBilliard,
    getAllCues: getAllCues,
    getCueById: getCueById,
    getImageUrl: getImageUrl,
    handleImgError: handleImgError,
    formatRupiah: formatRupiah,
    formatWaktu: formatWaktu,
    escapeHtml: escapeHtml,
    getFavorites: getFavorites,
    toggleFavorite: toggleFavorite,
    getPromoCode: getPromoCode,
    applyPromoCode: applyPromoCode,
    getPromoRate: getPromoRate,
    getCart: getCart,
    addToCart: addToCart,
    updateCartQty: updateCartQty,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
    getCartCount: getCartCount,
    getCartTotals: getCartTotals,
    getOrders: getOrders,
    getOrderById: getOrderById,
    createOrder: createOrder,
    updateOrderStatus: updateOrderStatus,
    renderStatusBadge: renderStatusBadge,
    generateDummyQrisSvg: generateDummyQrisSvg,
    renderHeader: renderHeader,
    renderFooter: renderFooter,
    updateHeaderBadges: updateHeaderBadges,
    showToast: showToast,
    onRealtimeUpdate: onRealtimeUpdate
  };
})();
