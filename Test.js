/*
Author: Peter Joy
Description: Test
Created: March 19, 2020
 */

const galeva = require("./Galeva");

console.log("Base path: " + galeva.basePath());

async function test() {
  
  let loginResponse = await galeva.login("galeva", "Galeva_1");
  console.log("Login: ");
  console.log(loginResponse.data);
/*
  let logoutResponse = await galeva.logout(loginResponse.data.accesstoken);
  console.log("Logout: ");
  console.log(logoutResponse.data);

  let respassreset = await galeva.password('galeva', 'Galeva_2', 'Galeva_1');
  console.log("Reset password: ");
  console.log(respassreset.data);
*/
  let getRole = await galeva.getRole(loginResponse.data.accesstoken);
  console.log("Get role: ");
  console.log(getRole.data);

  let changeRole = await galeva.changeRole(loginResponse.data.accesstoken,'ADMIN');
  console.log("Change role: ");
  console.log(changeRole.data);

  let relationDefinition = await galeva.relationDefinition(loginResponse.data.accesstoken,'CUSTOMER', 'ADDRESS');
  console.log("Relation definition: ");
  console.log(relationDefinition.data);

  const linkBody = {
      entity1: 'ORDERS',
      entity2: 'CUSTOMER',
      rowid1: 1,
      rowids2: [11,12]
    };
  
  let link = await galeva.link(loginResponse.data.accesstoken, linkBody);
  console.log("Link: ");
  console.log(link.data);

  const unlinkBody = {
    entity1: 'ORDERS',
    entity2: 'CUSTOMER',
    rowid1: 1,
    rowids2: [11,12]
  };

  let unlink = await galeva.unlink(loginResponse.data.accesstoken, unlinkBody);
  console.log("Unlink: ");
  console.log(unlink.data);

  let getRow = await galeva.getRow(loginResponse.data.accesstoken, 'CUSTOMER', '45', '*');
  console.log("Get row: ");
  console.log(getRow.data);

  body = {
        "entity": "CUSTOMER",
        "row": {
          "CUSTID": "1224234",
          "firstname": "Pester",
          "lastname": "Johnson",
          "email": "mikejohnson@email.com",
        }
  }
  let createRow = await galeva.createRow(loginResponse.data.accesstoken, body);
  console.log("Create row: ");
  console.log(createRow.data);

  body = {
    "entity" : "ORDERS",
    "rowid"  : 5,
    "row"    : {
          "TOTAL" : {"oldValue":"89477","newValue":"89478"}
          }
  }
  let updateRow = await galeva.updateRow(loginResponse.data.accesstoken, body);
  console.log("Update row: ");
  console.log(updateRow.data);

  let deleteRow = await galeva.deleteRow(loginResponse.data.accesstoken,'ORDERS', 1291);
  console.log("Delete row: ");
  console.log(deleteRow.data);
  
  let entityDefinition = await galeva.entityDefinition(loginResponse.data.accesstoken, 'ORDERS');
  console.log("Entity defintiion: ");
  console.log(entityDefinition.data);
  

  sliceBody = {
    attributes: {
      CUSTOMER: ["*"],
      ADDRESS: ["*"]
    },
    filters: {
      CUSTOMER: {
        CUSTOMER_ID: { 
          format: "", 
          condition: "<", 
          value: "3" }
      },
      ADDRESS:{}
    },
    join: ["CUSTOMER","left","ADDRESS"],
    rowcount: "100"
  };
  
  let slice = await galeva.slice(loginResponse.data.accesstoken, sliceBody);
  console.log("Slice: ");
  console.log(slice.data);
  

  let page = await galeva.page(loginResponse.data.accesstoken, 'ORDERS', 'SHIPPING_METHOD = DHL Fast', 'N32', 'N');
  console.log("Page: ");
  console.log(page.data);
  

  setBody = {
    attributes: {
      CUSTOMER: ["*"],
      ADDRESS: ["*"]
    },
    filters: {
      CUSTOMER: {
        CUSTOMER_ID: { 
          format: "", 
          condition: "<", 
          value: "101" }
      },
      ADDRESS:{}
    },
    join: ["CUSTOMER","left","ADDRESS"],
  };

  let createSet = await galeva.createSet(loginResponse.data.accesstoken, setBody);
  console.log("Create set: ");
  console.log(createSet.data);

  let getSet = await galeva.getSet(loginResponse.data.accesstoken, '5', createSet.data.dataId, '31');
  console.log("Get set: ");
  console.log(getSet.data);

  transactionBody = {
    "1": {
      operation: "unlink",
      entity1: "ORDERS",
      entity2: "CUSTOMER",
      rowid1: 1,
      rowids2: [11, 12]
    },
    "2": {
      operation: "link",
      entity1: "ORDERS",
      entity2: "CUSTOMER",
      rowid1: 1,
      rowids2: [11, 12]
    },
    "3": {
      operation: "delete",
      entity: "ORDERS",
      rowid: [5889]
    }
  };

  let transaction = await galeva.transaction(loginResponse.data.accesstoken, transactionBody);
  console.log("Transaction: ");
  console.log(transaction.data);


}

test();
