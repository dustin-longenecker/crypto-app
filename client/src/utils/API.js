import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets all coins
  getCoins: function() {
    return axios.get("/api/coins");
  },
  // Gets the coin with the given id
  getCoin: function(id) {
    return axios.get("/api/coins/" + id);
  },
  // Deletes the coin with the given id
  deleteCoin: function(id) {
    return axios.delete("/api/coins/" + id);
  },
  // Saves a coin to the database
  saveCoin: function(coinData) {
    return axios.post("/api/coins", coinData);
  }
};
