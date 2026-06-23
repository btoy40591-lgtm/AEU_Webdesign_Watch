const productList = document.getElementById("productList");


// SHOW PRODUCTS

function showProducts(data) {
  productList.innerHTML = "";

  data.slice(0, 6).forEach((p) => {

    productList.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card product-card h-100">

          <img src="${p.image}" class="card-img-top">

          <div class="card-body text-center">

            <h5>${p.name}</h5>

            <p class="text-muted">$${p.price}</p>

            <p class="small">
              ${p.brand} | ${p.category}
            </p>

            <a href="product-detail.html?id=${p.id}" 
               class="btn btn-dark">
               View Details
            </a>

          </div>

        </div>
      </div>
    `;
  });
}


// FILTER SYSTEM

function filterProducts() {
  let filtered = products;

  // BRAND
  const brand = document.getElementById("brandFilter").value;
  if (brand !== "All") {
    filtered = filtered.filter(p =>
      p.brand.trim().toLowerCase() === brand.trim().toLowerCase()
    );
  }

  // COLOR
  const color = document.getElementById("colorFilter").value;
  if (color !== "All") {
    filtered = filtered.filter(p => p.color === color);
  }

  // STRAP
  const strap = document.getElementById("strapFilter").value;
  if (strap !== "All") {
    filtered = filtered.filter(p => p.strapMaterial === strap);
  }

  // MOVEMENT
  const movement = document.getElementById("movementFilter").value;
  if (movement !== "All") {
    filtered = filtered.filter(p => p.movementType === movement);
  }


  // WATER RESISTANCE (NEW FIX)
 
  const water = document.getElementById("waterFilter").value;
  if (water && water !== "All") {
    filtered = filtered.filter(p =>
      p.waterResistance === water
    );
  }

  showProducts(filtered);
}


// CATEGORY CLICK FILTER

document.querySelectorAll(".category-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const category = link.dataset.category;

    const filtered = products.filter(p =>
      p.category === category
    );

    showProducts(filtered);
  });
});


// LISTEN ALL FILTERS

document.querySelectorAll("select").forEach(select => {
  select.addEventListener("change", filterProducts);
});


// INIT

showProducts(products);