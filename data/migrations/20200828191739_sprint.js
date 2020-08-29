exports.up = async function (knex) {
  await knex.schema.createTable('project', (table) => {
    table.increments('id');
    table.text('name').notNull();
    table.text('description');
    table.boolean('hasCompleted').notNull().defaultTo(false);
  });

  await knex.schema.createTable('resources', (table) => {
    table.increments('id');
    table.text('name').notNull().unique();
    table.text('description');
  });

  await knex.schema.createTable('task', (table) => {
    table.increments('id');
    table.integer('project_id').references('id').inTable('project');
    table.text('description').notNull();
    table.text('notes');
    table.boolean('hasCompleted').notNull().defaultTo(false);
  });

  await knex.schema.createTable('project_resources', (table) => {
    table.integer('project_id').references('id').inTable('project');
    table.integer('resources_id').references('id').inTable('resources');
    table.primary(['project_id', 'resources_id']);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('project_resources');
  await knex.schema.dropTableIfExists('task');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('project');
};
