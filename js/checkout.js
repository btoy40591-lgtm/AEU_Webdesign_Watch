
// LOAD CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItems = document.getElementById("orderItems");
const orderTotal = document.getElementById("orderTotal");


// RENDER ORDER
function loadCheckout() {

  orderItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

    let itemTotal = item.price * item.qty;

    total += itemTotal;

    orderItems.innerHTML += `

      <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">

        <!-- LEFT -->
        <div class="d-flex align-items-center gap-3">

          <img
            src="${item.image}"
            width="60"
            height="60"
            style="object-fit:cover; border-radius:10px;"
          >

          <div>
            <div class="fw-semibold">${item.name}</div>

            <small class="text-muted">
              Qty: ${item.qty}
            </small>
          </div>

        </div>

      </div>

    `;
  });

  orderTotal.textContent = total;
}


// PLACE ORDER
function placeOrder() {

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  localStorage.removeItem("cart");

  alert("Order placed successfully!");

  window.location.href = "../index.html";
}


// INIT
loadCheckout();