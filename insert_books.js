// insert_books.js

use('plp_bookstore');

db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    published_year: 1925,
    price: 10.99,
    in_stock: true,
    pages: 180,
    publisher: "Scribner"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 8.99,
    in_stock: true,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_year: 1949,
    price: 9.5,
    in_stock: true,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Classic",
    published_year: 1951,
    price: 7.99,
    in_stock: false,
    pages: 214,
    publisher: "Little, Brown and Company"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published_year: 1937,
    price: 11.99,
    in_stock: true,
    pages: 310,
    publisher: "George Allen & Unwin"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 14.99,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 9.99,
    in_stock: false,
    pages: 197,
    publisher: "HarperTorch"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Thriller",
    published_year: 2019,
    price: 13.5,
    in_stock: true,
    pages: 336,
    publisher: "Celadon Books"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    published_year: 2018,
    price: 12.75,
    in_stock: true,
    pages: 334,
    publisher: "Random House"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    published_year: 2018,
    price: 16.0,
    in_stock: true,
    pages: 320,
    publisher: "Avery"
  }
]);


