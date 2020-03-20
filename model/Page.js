/* 
Author: Peter Joy
Description: Page rows
Created: March 20, 2020
 */

const axios = require("axios");
const path = require("./BasePath");

let methods = {
  page: async function(accessToken, entity, filter, from, header) {
    try {
      const params = {
        entity: entity,
        filter: filter,
        from: from,
        header: header
      };
      const config = {
        headers: { 
          Authorization: accessToken 
        },
        params: params
      };
      return await axios.get(path.getBasePath() + "/rows/page", config);
    } catch (error) {
      console.log("page catch " + error);
      if (error.response) {
        return await error.response;
      } else {
        throw error;
      }
    }
  }
};

module.exports = methods;
