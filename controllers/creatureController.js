const router = require('express').Router()
const db = require('../models')

//CRUD routes for creatures

//Index (Read All) Route 
router.get('/', async (req, res) => {
    try {
        const creatures = await db.creature.findAll({ raw: true})
        res.render('creatures/index', { creatures })
    } catch (err) {
        console.log(err)
    }
})

//New Form Route
router.get('/new', (req, res) => {
    res.render("creatures/new")
})

//Show One Route
router.get('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id, { raw: true })
        res.render('creatures/show', { creature })
    } catch (err) {
        console.log(err)
    }
})

//Create One
router.post('/', async (req, res) => {
    try {
        const newCreature = await db.creature.create({
            type: req.body.type,
            img_url: req.body.img_url
        })
        res.redirect(`/creatures/${newCreature.id}`);
    } catch (err) {
        console.log(err)
    }
})

// Update One
router.put('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id)
        const updateCreature = await creature.update({
            type: req.body.type,
            img_url: req.body.img_url
        })
        res.redirect(`/creatures/${req.params.id}`)
    } 
    catch (err) {
        console.log(err)
    }
})

//Delete One
router.delete('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id)
        const deleteCreature = await creature.destroy();
        res.redirect('/creatures')
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;