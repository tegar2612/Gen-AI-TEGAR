// Ambil query string dari URL
const params = new URLSearchParams(window.location.search);
const productName = params.get("name") || "Produk";
const productPrice = params.get("price") || "0";
const productImg = params.get("img") || "";
const productDesc = params.get("desc") || "";

// Set konten halaman
document.getElementById("product-name").textContent = productName;
document.getElementById("product-price").textContent = "Rp " + productPrice;
document.getElementById("product-img").src = productImg;
document.querySelector(".product-desc").textContent = decodeURIComponent(productDesc);

// Kuantitas
let quantity = 1;
const quantityEl = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const addToCartBtn = document.getElementById("add-to-cart-btn");

increaseBtn.addEventListener("click", () => {
    quantity++;
    quantityEl.textContent = quantity;
});

decreaseBtn.addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        quantityEl.textContent = quantity;
    }
});

addToCartBtn.addEventListener("click", () => {
    alert(`Berhasil menambahkan ${quantity}x ${productName} ke keranjang!`);
    // Di sini bisa lanjut untuk simpan ke localStorage / database
});
