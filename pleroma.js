const axios = require('axios').default;

class PleromaAPI {
  constructor(endpoint, authToken) {
    this.endpoint = endpoint;
    this.authToken = authToken;
  }

  postStatus(status) {
    const postData = {
      status: status,
    };

    return axios.post(this.endpoint, postData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.authToken}`,
      }
    })
      .then((response) => {
        console.log('Post sent')
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

module.exports = PleromaAPI
