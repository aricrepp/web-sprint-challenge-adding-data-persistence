const db = require('../data/config');

function find() {
  return db('resources');
}

function findById(id) {
  return db('resources').where('id', id).first();
}

function add(resource) {
  return db('resources')
    .insert(resource, 'id')
    .then(([id]) => findById(id));
}

module.exports = {
  find,
  add,
};
