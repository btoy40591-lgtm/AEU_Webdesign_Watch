
// GET URL PARAM
const params = new URLSearchParams(
  window.location.search
);

const brandName = params.get("brand");


// ELEMENTS
const brandProducts =
  document.getElementById("brandProducts");

const brandTitle =
  document.querySelector(".brand-header h1");

const brandText =
  document.querySelector(".brand-header p");


// CHECK BRAND
if (!brandName) {

  brandTitle.textContent = "Brand Not Found";

  brandText.textContent =
    "No brand selected";

} else {

  // HEADER
  brandTitle.textContent =
    `${brandName} Collection`;

  brandText.textContent =
    `Explore luxury ${brandName} watches`;

  // FILTER PRODUCTS
  const filteredProducts = products.filter(
    p =>
      p.brand.trim().toLowerCase() ===
      brandName.trim().toLowerCase()
  );

  // SHOW PRODUCTS
  function showProducts() {

    brandProducts.innerHTML = "";

    if (filteredProducts.length === 0) {

      brandProducts.innerHTML = `
        <h3 class="text-center">
          No products found
        </h3>
      `;

      return;
    }

    filteredProducts.forEach(product => {

      brandProducts.innerHTML += `

        <div class="col-lg-4 col-md-6">

          <div class="card product-card h-100">

            <img
              src="${product.image}"
              class="card-img-top"
            >

            <div class="card-body text-center">

              <h4>${product.name}</h4>

              <p class="text-muted">
                $${product.price}
              </p>

              <a
                href="product-detail.html?id=${product.id}"
                class="btn btn-dark"
              >
                View Detail
              </a>

            </div>

          </div>

        </div>

      `;
    });

  }

  showProducts();
}