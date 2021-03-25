import axios from "axios";

export default {
  // Gets all books
  getArks: function() {
    return axios.get("/api/arks");
  },
  // Gets the book with the given id
  getArk: function(id) {
    return axios.get("/api/arks/" + id);
  },
  // Deletes the book with the given id
  deleteArk: function(id) {
    return axios.delete("/api/arks/" + id);
  },
  // Saves a book to the database
  saveArk: function(arkData) {
    return axios.post("/api/arks", arkData);
  }
};
