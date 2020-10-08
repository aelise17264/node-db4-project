
exports.up = function(knex) {
  return knex.schema
  .createTable('recipies', tbl => {
      tbl.increments();
      tbl.text('recipie_name', 120)
      .unique()
      .index()
      .notNullable();
     
  })
 
  .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.text('ingredient_name').notNullable()
      
  })

.createTable('instructions', tbl => {
    tbl.increments()
    tbl.integer('step_number')
    tbl.text('instructions')
    tbl.integer('recipie_id')
    .unsigned()
    .notNullable()
    .references('id').inTable('recipies')
    .onUpdate('CASCADE')
})

.createTable('shopping-list', tbl => {
    tbl.increments()
    tbl.integer('recipies_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('recipies')  
    tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('ingredients')
})

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('shopping-list')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
   .dropTableIfExists('recipies')
};
