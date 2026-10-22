const books = [
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    image: "seven_habits.jpg",
    alt: "Cover of The 7 Habits of Highly Effective People",
    stars: "⭐⭐⭐⭐",
    description: "",
  },
];

function bookTemplate(book) {
  return `
    <article class="book">
      <div class="book_info">
        <h3>${book.title}</h3>
        <h4>${book.author}</h4>
        <p>${book.description}</p>
        <span>${book.stars}</span>
      </div>
      <img src="${book.image}" alt="${book.alt}" />
    </article>`;
}

const booksContainer = document.querySelector("#books");
booksContainer.innerHTML = books.map(bookTemplate).join("");
