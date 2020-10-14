import axios from "axios";
const urlPrefix = "https://planitserver.herokuapp.com";
// const urlPrefix = "http://localhost:8080";

export default {

  postForm: function (formData) {
    return axios.post(`${urlPrefix}/routetohit`, formData);
  }

};
