import axios from "axios";
// import {APIKEY} from "../secrets.js";

// const BASEURL = "https://proapi.whitepages.com/3.0/phone.json?";
// const BASEURL = "https://proapi.whitepages.com/3.0/phone.json?";
// const BASEURL = "https://api.ekata.com/3.1/phone.json?";


export default {
  search: function(query) {
    return axios.get(BASEURL + "api_key=3dba1e1c5f9a499db22c46ae97ed485d&phone=" + query);
  }
};
