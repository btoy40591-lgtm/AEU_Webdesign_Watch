// =========================
// NEW ARRIVALS
// =========================

// =========================
// NEW ARRIVALS
// =========================

const newArrivalRow =
  document.getElementById("newArrivalRow");

const newArrivalClone =
  document.getElementById("newArrivalClone");

// =========================
// SHOW PRODUCTS
// =========================

function showNewArrivals() {

  if (!newArrivalRow) return;

  let html = "";

  const newProducts = products.slice(0, 4);

  newProducts.forEach(product => {

    html += `
      <div class="arrival-item">

        <div class="product-card">

          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>

          <h5 class="mt-3 product-title">
            ${product.name}
          </h5>

          <p class="product-price">
            $${product.price}
          </p>

          <button
            class="btn add-cart btn-dark w-100"
            onclick="addToCart(${product.id})">
            Add To Cart
          </button>

        </div>

      </div>
    `;
  });

  newArrivalRow.innerHTML = html;

  // clone for infinite effect
  if (newArrivalClone) {
    newArrivalClone.innerHTML = html;
  }
}

// =========================
// INIT
// =========================

showNewArrivals();

// =========================
// ADD TO CART
// =========================

function addToCart(id) {

  const product = products.find(
    p => p.id === id
  );

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {
    existing.qty += 1;
  } else {

    cart.push({
      ...product,
      qty: 1
    });

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert(product.name + " added to cart");


   window.location.href = "./pages/cart.html";
}