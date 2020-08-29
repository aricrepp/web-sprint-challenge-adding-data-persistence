const db = require('../data/config');

function find() {
  return db('task as t')
    .leftJoin('project as p', 'p.id', 't.project_id')
    .select(
      'task.id',
      'task.name',
      'p.name as project_name',
      'p.description as project_desc'
    );
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
