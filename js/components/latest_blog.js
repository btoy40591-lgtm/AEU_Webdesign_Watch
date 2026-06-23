// =========================
// BLOG PAGE
// =========================

// get container
const blogList = document.getElementById("blogList");

// =========================
// SHOW BLOGS
// =========================
function showBlogs() {

  // clear old data
  blogList.innerHTML = "";

  // loop all blogs
  blogs.forEach(blog => {

    blogList.innerHTML += `

      <div class="col-lg-4 col-md-6">

        <div class="card blog-card h-100">

          <img
            src="${blog.image}"
            class="card-img-top"
          >

          <div class="card-body">

            <h4>${blog.title}</h4>

            <p class="text-muted">
              ${blog.description}
            </p>

            <a
              href="./pages/blog-article.html?id=${blog.id}"
              class="btn btn-dark"
            >
              Read More
            </a>

          </div>

        </div>

      </div>

    `;
  });
}

// =========================
// INIT
// =========================
showBlogs();