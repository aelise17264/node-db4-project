const { table } = require("../data/db-config");

exports.up = function(knex) {
  return knex.schema
  .createTable('recipies', tbl => {
      tbl.increments();
      tbl.text('recipie_name', 120)
      .unique()
      .index()
      .notNullable();
      tbl.text('instructions')
      .notNullable()
  })
};

exports.down = function(knex) {
  
};
