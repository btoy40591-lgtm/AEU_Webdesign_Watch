
// SHOW BRANDS ON HTML

// get container
const brandRow = document.getElementById("brandRow");

// RENDER FUNCTION
function showBrands() {
  if (!brandRow) return;

  brandRow.innerHTML = "";

  brands.forEach((brand) => {
    brandRow.innerHTML += `
      <div class="col-lg-4 col-md-6">

        <div class="card brand-card h-100">

          <div class="card-body text-center">

            <div class="brand-logo">
              <i class="bi ${brand.logo}"></i>
            </div>

            <h3 class="brand-title">${brand.name}</h3>

            <p class="text-muted">
              Explore ${brand.name} watches
            </p>

            <button class="btn btn-dark brand-btn"
              onclick="openBrand('${brand.name}')">
              View Products
            </button>

          </div>

        </div>

      </div>
    `;
  });
}

// CLICK BRAND
function openBrand(name) {

  window.location.href =
    `brand-products.html?brand=${name}`;

}

// INIT
showBrands();