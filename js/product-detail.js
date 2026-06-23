const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(p => p.id === id);


// LOAD PRODUCT DETAIL

function loadProductDetail() {

  if (!product) {
    document.body.innerHTML =
      "<h2 class='text-center mt-5'>Product Not Found</h2>";
    return;
  }

  document.getElementById("productImage").src =
    product.image;

  document.getElementById("productName").textContent =
    product.name;

  document.getElementById("productPrice").textContent =
    "$" + product.price;

  document.getElementById("productBrand").textContent =
    product.brand;

  document.getElementById("productColor").textContent =
    product.color;

  document.getElementById("productWater").textContent =
    product.waterResistance;

  document.getElementById("productMovement").textContent =
    product.movementType;

  document.getElementById("productDesc").textContent =
    "Premium luxury watch with high-end materials and precision movement.";
}


// MAIN ADD TO CART

function addToCart() {

  if (!product) return;

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const existing =
    cart.find(item => item.id === product.id);

  if (existing) {

    existing.qty += 1;

  } else {

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  window.location.href = "cart.html";
}


// RELATED PRODUCTS

function loadRelatedProducts() {

  const relatedRow =
    document.getElementById("relatedProducts");

  if (!relatedRow) return;

  relatedRow.innerHTML = "";

  // exclude current product
  const related =
    products.filter(p => p.id !== product.id).slice(0, 4);

  related.forEach(item => {

    relatedRow.innerHTML += `
      <div class="col-lg-3 col-md-6">

        <div class="card h-100 shadow-sm">

          <img
            src="${item.image}"
            class="card-img-top"
            style="height:220px; object-fit:cover;"
          >

          <div class="card-body text-center">

            <h5>${item.name}</h5>

            <p class="text-muted">
              $${item.price}
            </p>

            <div class="d-flex gap-2 justify-content-center">

              <a href="product-detail.html?id=${item.id}"
                class="btn btn-outline-dark">
                View
              </a>

              <button
                class="btn btn-dark"
                onclick="quickAddToCart(${item.id})">
                Add
              </button>

            </div>

          </div>

        </div>

      </div>
    `;
  });
}


// QUICK ADD TO CART

function quickAddToCart(id) {

  const selected =
    products.find(p => p.id === id);

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const existing =
    cart.find(item => item.id === id);

  if (existing) {

    existing.qty += 1;

  } else {

    cart.push({
      id: selected.id,
      name: selected.name,
      price: selected.price,
      image: selected.image,
      qty: 1
    });

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert(selected.name + " added to cart");

  window.location.href = "cart.html";
}


// INIT

loadProductDetail();
loadRelatedProducts();