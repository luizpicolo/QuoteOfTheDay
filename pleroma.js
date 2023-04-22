const axios = require('axios').default;

class PleromaAPI {
  constructor(endpoint, authToken) {
    this.endpoint = endpoint;
    this.authToken = authToken;
  }

  async postStatus(status) {
    const postData = { status };

    try {
      const response = await axios.post(this.endpoint, postData, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.authToken}`,
        },
      });
      console.log('Post sent');
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = PleromaAPI;
