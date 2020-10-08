const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipies')
}

function getShoppingList(id){
    return db('shopping-list')
    .where('recipie_id', id)
    .first()
}

function getInstructions(id){
    return db('instructions')
    .select('i.id', 'r.recipie_id', 'i_instructions')
    .from('instructions as i')
    .joing('recipies as r', 'r.recipie_id', '=', 'r.id')
    .where('recipie_id', id)
}
