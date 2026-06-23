const params = new URLSearchParams(window.location.search);
const collectionId = Number(params.get("id"));

const title = document.getElementById("title");
const productList = document.getElementById("productList");

function loadCollection() {
  const collection = collections.find(c => c.id === collectionId);

  if (collection) {
    title.textContent = collection.name;
  }

  const filtered = products.filter(
    p => p.collectionId === collectionId
  );

  render(filtered);
}

function render(data) {
  productList.innerHTML = "";

  if (!data.length) {
    productList.innerHTML = "<p class='text-center'>No products found</p>";
    return;
  }

  data.forEach(p => {
    productList.innerHTML += `
      <div class="col-lg-4 col-md-6">
        <div class="card watch-card h-100">

          <img src="${p.image}" class="card-img-top">

          <div class="card-body text-center">
            <h4>${p.name}</h4>
            <p class="text-muted">$${p.price}</p>
          </div>

        </div>
      </div>
    `;
  });
}

loadCollection();