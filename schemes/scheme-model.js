const schemeDb = require("../data/dbconfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return schemeDb("schemes");
}

function findById(id) {
  return schemeDb("schemes")
    .where("id", id)
    .first();
}

function findSteps(id) {
  return schemeDb("steps")
    .where("scheme_id", id)
    .orderBy("step_number");
}

function findStepById(id) {
  return schemeDb("steps")
    .where("id", id)
    .first();
}

function add(scheme) {
  return schemeDb("schemes")
    .insert(scheme)
    .then(([id]) => findById(id));
}

function addStep(step, schemeID) {
  return schemeDb("steps")
    .insert({ ...step, scheme_id: schemeID })
    .then(([stepID]) => findStepById(stepID));
}

function update(scheme_name, id) {
  return schemeDb("schemes")
    .where("id", id)
    .update(scheme_name);
}

function remove(id) {
  return schemeDb("schemes")
    .where("id", id)
    .del();
}
