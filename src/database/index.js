"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};
function sumInvoices(p, c) {
  return _.extend(p, { count: (p[c] = p[c] + 1 || 1) });
}
const getListOfAgesOfUsersWith = (item) => {
  let data = [];

  let ageArr = [];
  Object.keys(db.itemsOfUserByUsername).map((p) => {
    
    const isExist = db.itemsOfUserByUsername[p].find((q) => q === item);
    if (isExist) {
      let partialData = [];
      partialData = _.map(db.usersById, (userInfo) => {
        if (userInfo.username === p) return userInfo;
      });
      partialData = _.without(partialData, undefined);
      data = data.concat(partialData);
     
    }
  });

  const dataAccessMethod = () => {
    return _(data)
      .groupBy("age")
      .map(function (b) {
        return b.reduce(sumInvoices, { age: b[0].age, count: 0 });
      })
      .valueOf();
  };

  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
