exports.seed = async function (knex) {
  await knex('resources').insert([
    { name: 'computer', description: 'this is your personal computer' },
    { name: 'bike', description: 'this is your bike' },
    { name: 'fork', description: 'this is useless' },
  ]);
};
