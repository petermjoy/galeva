/* 
Author: Peter Joy
Description: Slice rows
Created: March 20, 2020
 */

const axios = require("axios");
const path = require("./BasePath");

let methods = {
  slice: async function(accessToken, body) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken
        }
      };
      return await axios.post(
        path.getBasePath() + "/rows/slice",
        body,
        config
      );
    } catch (error) {
      console.log("slice catch " + error);
      if (error.response) {
        return await error.response;
      } else {
        throw error;
      }
    }
  }
};

module.exports = methods;
