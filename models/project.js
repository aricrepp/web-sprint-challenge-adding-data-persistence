const db = require('../data/config');

function find() {
  return db('project');
}

function findById(id) {
  return db('project').where('id', id).first();
}

function findResources(projectID) {
  return db('project_resources as pr')
    .join('project as p', 'p.id', 'pr.project_id')
    .join('resouces as r', 'r.id', 'pr.resouces_id')
    .where('p.id', projectID)
    .select('p.name', 'p.description', 'r.name', 'r.description');
}

function add(project) {
  return db('project')
    .insert(project, 'id')
    .then(([id]) => findById(id));
}

function update(changes, id) {
  return db('project').where({ id }).update(changes);
}

function remove(id) {
  return db('project').where({ id }).delete();
}

module.exports = {
  find,
  findById,
  findResources,
  add,
  update,
  remove,
};
