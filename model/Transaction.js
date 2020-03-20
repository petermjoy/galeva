/* 
Author: Peter Joy
Description: Transaction
Created: March 20, 2020
 */

const axios = require("axios");
const path = require("./BasePath");

let methods = {
  transaction: async function(accessToken, body) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken
        }
      };
      return await axios.post(
        path.getBasePath() + "/transaction",
        body,
        config
      );
    } catch (error) {
      console.log("transaction catch " + error);
      if (error.response) {
        return await error.response;
      } else {
        throw error;
      }
    }
  }
};

module.exports = methods;
