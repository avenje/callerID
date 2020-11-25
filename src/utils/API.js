import axios from "axios";
// import {APIKEY} from "../secrets.js";

// const BASEURL = "https://proapi.whitepages.com/3.0/phone.json?";
// const BASEURL = "https://proapi.whitepages.com/3.0/phone.json?";
// const BASEURL = "https://api.ekata.com/3.1/phone.json?";
const BASEURL = "https://api.ekata.com/3.1/phone?";


export default {
  search: function(query) {
    return axios.get(BASEURL + "api_key=d8e95d9ba9da4e009d89d60c7be45c87&phone=" + query);
  }
};
