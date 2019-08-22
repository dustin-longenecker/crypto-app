import axios from "axios";

export default {

  // Gets all coins
  getCoins: function() {
    return axios.get("/api/coins");
  }
};
