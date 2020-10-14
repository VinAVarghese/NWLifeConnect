import axios from "axios";
const urlPrefix = "https://planitserver.herokuapp.com";
// const urlPrefix = "http://localhost:8080";


// ** Functions that take an object have the structure and keys of that 
// ** object laid out in a comment within!

export default {

  post: function (formData) {
    return axios.post('serveradress/routetohit', formData);
  }

};
