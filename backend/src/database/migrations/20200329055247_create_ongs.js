exports.up = async (knex) => {
  await knex.schema.createTable('ongs', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
};

exports.down = async (knex) => {
  await knex.schema.dropTable('ongs')
};
