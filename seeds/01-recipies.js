
exports.seed = function(knex) {

  const recipies = [
    {recipie_name: 'flour tortillas'},
    {recipie_name: 'pokebowl'},
    {recipie_name: 'hummus'}
  ]
      return knex('recipies').insert(recipies);
 
};
