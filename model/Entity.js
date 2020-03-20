/* 
Author: Peter Joy
Description: Entity - definition
Created: March 20, 2020
 */

const axios = require("axios");
const path = require("./basePath");

let methods = {
  definition: async function(accessToken, name) {
    try {
      const params = {
        name: name
      };
      const config = {
        headers: {
          Authorization: accessToken
        },
        params: params
      };
      return await axios.get(path.getBasePath() + "/entity/definition", config);
    } catch (error) {
      console.log("entity definition catch " + error);
      if (error.response) {
        return await error.response;
      } else {
        throw error;
      }
    }
  }
};
module.exports = methods;
