
exports.seed = function(knex) {
  const ingredients = [
{ingredient_name: 'All-purpose flour'},
{ingredient_name: 'Baking powder'},
{ingredient_name: 'Salt'},
{ingredient_name: 'Oil'},
{ingredient_name: 'Water'},
{ingredient_name: 'rice'},
{ingredient_name: 'salmon'},
{ingredient_name: 'cucumbers'},
{ingredient_name: 'avocado'},
{ingredient_name: 'sea weed'},
{ingredient_name: 'soy sauce'},
{ingredient_name: 'chick peas'},
{ingredient_name: 'tahini'},
{ingredient_name: 'garlic'},
{ingredient_name: 'lemon juice'}
  ]
      return knex('ingredients').insert(ingredients);

};
