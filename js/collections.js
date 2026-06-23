const collectionRow = document.getElementById("collectionRow");


// SHOW COLLECTIONS

function showCollections() {
  if (!collectionRow) return;

  collectionRow.innerHTML = "";

  collections.forEach((col) => {
    collectionRow.innerHTML += `
      <div class="col-lg-4 col-md-6">

        <div class="card h-100 shadow-sm">

          <img src="${col.image}" class="card-img-top" />

          <div class="card-body text-center">

            <h4>${col.name}</h4>

            <p class="text-muted">${col.description}</p>

            <button class="btn btn-dark"
              onclick="goToCollection(${col.id})">
              Explore
            </button>

          </div>

        </div>

      </div>
    `;
  });
}


// GO TO COLLECTION PAGE

function goToCollection(id) {
  window.location.href = `collection-gallery.html?id=${id}`;
}

// INIT
showCollections();