import axios from "axios";
import {APIKEY} from "../secrets.js";

const BASEURL = "https://api.ekata.com/3.1/phone.json?";
// const BASEURL = "https://proapi.whitepages.com/3.0/phone.json?";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + "&phone=" + query);
  }
};
