const cartBody = document.getElementById("cartBody");
const cartTotal = document.getElementById("cartTotal");


// LOAD CART
function loadCart() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartBody.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    let itemTotal = item.price * item.qty;
    total += itemTotal;

    cartBody.innerHTML += `
  <tr>

    <td class="d-flex align-items-center gap-2">
      <img src="${item.image}" width="60">
      ${item.name}
    </td>

    <td>$${item.price}</td>

    <td>
      <input
        type="number"
        min="1"
        value="${item.qty}"
        onchange="updateQty(${index}, this.value)"
        class="form-control w-50"
      >
    </td>

    <td>$${itemTotal}</td>

    <td>
      <button
        class="btn btn-danger btn-sm"
        onclick="removeItem(${index})"
      >
        Remove
      </button>
    </td>

  </tr>
`;
  });




  if (cart.length === 0) {

  cartBody.innerHTML = `
    <tr>
      <td colspan="5" class="text-center py-5">

        <h4 class="text-muted">Your cart is empty</h4>

        <a href="shop.html" class="btn btn-dark mt-3">
          Continue Shopping
        </a>

      </td>
    </tr>
  `;

  cartTotal.textContent = "0";
  return;
}



  cartTotal.textContent = total;
}



// UPDATE QUANTITY
function updateQty(index, qty) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].qty = Number(qty);

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
}



// REMOVE ITEM

function removeItem(index) {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  // remove item
  cart.splice(index, 1);

  // save again
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  // reload cart
  loadCart();
}




const relatedRow = document.getElementById("relatedProducts");

function loadRelatedProducts() {

  const container = document.getElementById("relatedProducts");
  if (!container) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartIds = cart.map(item => item.id);

  const related = products.filter(p => !cartIds.includes(p.id));

  container.innerHTML = "";

  const chunkSize = 4;

  for (let i = 0; i < related.length; i += chunkSize) {

    const chunk = related.slice(i, i + chunkSize);

    container.innerHTML += `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <div class="container">
          <div class="row g-3">

            ${chunk.map(p => `
              <div class="col-3">

                <div class="card border-0 shadow-sm h-100">

                  <img src="${p.image}"
                       class="card-img-top"
                       style="height:200px; object-fit:cover;">

                  <div class="card-body text-center">

                    <h6 class="fw-bold">${p.name}</h6>

                    <p class="text-muted">$${p.price}</p>

                    <button class="btn btn-dark w-100"
                      onclick="addToCartFromRelated(${p.id})">
                      Add To Cart
                    </button>

                  </div>

                </div>

              </div>
            `).join("")}

          </div>
        </div>
      </div>
    `;
  }
}




function addToCartFromRelated(id) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

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

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
  loadRelatedProducts();
}










loadCart();
loadRelatedProducts();