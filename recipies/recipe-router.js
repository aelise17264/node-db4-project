const express = require('express')

const Recipies = require('./recipe-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipies.getRecipes()
    .then(recipie => {
        res.json(recipie)
    }).catch(error => {
        res.status(500).json({message: 'Cannot load recipies'})
    })
})

router.get('/:id/shopping-list', (req, res) => {
    const {id} = req.params;
    Recipies.getShoppingList(id)
    .then(items => {
        res.status(200).json({items})
    }).catch(error => {
        res.status(500).json({message: 'Cannot find your shopping-list list'})
    })
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params;
    Recipies.getInstructions(id)
    .then(steps => {
        if(steps.length){
            res.json(steps)
        }else{
            res.status(404).json({message: 'Could not find your instructions'})
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Failed to get your instructions'})
    })
})