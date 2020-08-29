exports.seed = async function (knex) {
  await knex('project').insert([
    { name: 'project 1', description: 'this is a description' },
    { name: 'project 2', description: 'this is a description moooooore' },
  ]);
};
