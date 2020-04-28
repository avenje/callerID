import axios from "axios";
// import {APIKEY} from "../secrets.js";

// const BASEURL = "https://proapi.whitepages.com/3.0/phone.json?";
// const BASEURL = "https://proapi.whitepages.com/3.0/phone.json?";
// const BASEURL = "https://api.ekata.com/3.1/phone.json?";


export default {
  search: function(query) {
    return axios.get(BASEURL + "api_key=53df466206a24645ba9c34142e292560&phone=" + query);
  }
};
