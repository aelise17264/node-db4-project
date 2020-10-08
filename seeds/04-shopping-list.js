
exports.seed = function(knex) {
const shoppingList = [
{
  recipie_id: 1,
  ingredient_id: 1
},
{
  recipie_id: 1,
  ingredient_id: 2
},
{
  recipie_id: 1,
  ingredient_id: 3
},
{
  recipie_id: 1,
  ingredient_id: 4
},
{
  recipie_id: 1,
  ingredient_id: 5
},
{
  recipie_id: 1,
  ingredient_id: 6
},
{
  recipie_id: 2,
  ingredient_id: 4
},
{
  recipie_id: 2,
  ingredient_id: 6
},
{
  recipie_id: 2,
  ingredient_id: 7
},
{
  recipie_id: 2,
  ingredient_id: 8
},
{
  recipie_id: 2,
  ingredient_id: 9
},
{
  recipie_id: 2,
  ingredient_id: 10
},
{
  recipie_id: 2,
  ingredient_id: 11
},
{
  recipie_id: 3,
  ingredient_id: 4
},
{
  recipie_id: 3,
  ingredient_id: 12
},
{
  recipie_id: 3,
  ingredient_id: 13
},
{
  recipie_id: 3,
  ingredient_id: 14
},
{
  recipie_id: 3,
  ingredient_id: 15
}
]
      return knex('shopping-list').insert(shoppingList)
};
