import axios from "axios";

// CHANGE: when locally testing and deploying
const urlPrefix = "https://nwlife-connect-server.herokuapp.com";
// const urlPrefix = "http://localhost:8080";

export default {

  postForm: function (formData) {

    return axios.post(`${urlPrefix}/new`, formData)

  }

};
