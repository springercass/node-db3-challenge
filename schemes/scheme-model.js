const schemeDb = require("../data/dbconfig");

module.exports = {
  find
  //   findById,
  //   findSteps,
  //   add,
  //   addStep,
  //   update,
  //   remove
};

function find() {
  return schemeDb("schemes");
}
