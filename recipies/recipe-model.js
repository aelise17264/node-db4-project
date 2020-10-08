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
    return db('recipies/shopping-list').where('recipie_id', id)
}

function getInstructions(id){
    return db('recipies/instructions').where('recipie_id'), id
}
