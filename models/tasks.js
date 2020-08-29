const db = require('../data/config');

function find() {
  return db('task as t')
    .join('project as p', 'p.id', 't.project_id')
    .select(
      't.id',
      't.description',
      'p.name as project_name',
      'p.description as project_desc'
    );
}

function findById(id) {
  return db('task').where('id', id).first();
}

function add(task) {
  return db('task')
    .insert(task, 'id')
    .then(([id]) => findById(id));
}

module.exports = {
  find,
  add,
};
