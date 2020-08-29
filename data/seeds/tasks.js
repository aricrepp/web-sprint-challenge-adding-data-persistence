exports.seed = async function (knex) {
  await knex('task').insert([
    {
      project_id: 1,
      description: 'this needs finishned asap',
      notes: 'no notes today',
    },
    {
      project_id: 1,
      description: 'this isnt completed yet',
      notes: 'no notes today',
    },
    { project_id: 2, description: 'this blah', notes: 'no notes today' },
  ]);
};
