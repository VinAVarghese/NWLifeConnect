import axios from "axios";
const urlPrefix = "https://nwlife-connect-server.herokuapp.com";
// const urlPrefix = "http://127.0.0.1:8080";


export default {

  postForm: function (formData) {

    return axios.post(`${urlPrefix}/new`, formData)

  }

};
