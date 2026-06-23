
// GET BLOG ID FROM URL

const params = new URLSearchParams(window.location.search);

const blogId = Number(params.get("id"));

// ELEMENTS
const blogTitle = document.getElementById("blogTitle");
const blogImage = document.getElementById("blogImage");
const blogContent = document.getElementById("blogContent");
const relatedPosts = document.getElementById("relatedPosts");

// LOAD BLOG
function loadBlog() {

  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    blogTitle.textContent = "Blog Not Found";
    return;
  }

  // show detail
  blogTitle.textContent = blog.title;

  blogImage.src = blog.image;

  blogContent.textContent = blog.content;

  // related posts
  showRelatedPosts(blogId);
}

// =========================
// RELATED POSTS
// =========================

function showRelatedPosts(currentId) {

  relatedPosts.innerHTML = "";

  const filtered = blogs.filter(
    b => b.id !== currentId
  );

  filtered.forEach(blog => {

    relatedPosts.innerHTML += `
      <a
        href="blog-article.html?id=${blog.id}"
        class="d-block mb-3 text-decoration-none"
      >
        ${blog.title}
      </a>
    `;
  });
}

// =========================
// INIT
// =========================

loadBlog();