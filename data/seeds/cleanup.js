exports.seed = async function (knex) {
  await knex('project_resources').truncate();
  await knex('task').truncate();
  await knex('resources').truncate();
  await knex('project').truncate();
};
