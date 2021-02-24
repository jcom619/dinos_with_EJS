// Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

// Variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

// Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)
app.use(methodOverride('_method'))
// urlencoded gets the form data from the request and puts it inside of
// req.body
//Controllers
app.use('/dinos', require ('./controllers/dinosController'))
app.use('/creatures', require('./controllers/creatureController'))
// Routes
app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/views/index.html')
    res.render('index', { name: 'Joshua', friends: ['Me', 'Chet', 'Myra', 'Ned' ]})
})
app.get('/anotherpage', (req, res)=> {
    res.render('anotherpage')
})

// Start the server!
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})






















// // Required Modules
// const express = require('express')
// const rowdy = require('rowdy-logger')
// const db = require('./models')
// const ejsLayouts = require('express-ejs-layouts')
// const methodOverride = require('method-override')

// // Variables
// const app = express();
// const PORT = 3000;
// const rowdyResults = rowdy.begin(app)

// // Middleware
// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: false }))
// app.use(ejsLayouts)
// app.use(methodOverride('_method'))
// // urlencoded gets the form data from the request and puts it inside of
// // req.body

// // controllers
// app.use('/dinos', require('./controllers/dinosController'))
// app.use('/creatures', require('./controllers/creaturesController'))


// // Routes
// app.get('/', (req, res) => {
//     // res.sendFile(__dirname + '/views/index.html')
//     res.render('index', { name: 'Weston', friends: ['john', 'jane', 'mary', 'beth'] })
// })

// app.get('/anotherpage', (req, res) => {
//     res.render('anotherpage')
// })

// // Create Route
// app.post('/dinos', async(req, res) => {
//     try {
//         // console.log(req.body);
//         const newDino = await db.dino.create({
//             name: req.body.name,
//             type: req.body.type
//         })
//         res.send(newDino);
//     } catch(err) {
//         console.log(err)
//     }
// })

// app.put('/dinos/:id', async (req, res) => {
//     try {
//         const dino = await db.dino.findByPk(req.params.id)
//         const updatedDino = await dino.update({
//             name: req.body.name,
//             type: req.body.type
//         })
//         res.send(updatedDino)
//     } catch (err) {
//         console.log(err)
//     }
// })

// app.delete('/dinos/:id', async (req, res) => {
//     try {
//         const dino = await db.dino.findByPk(req.params.id)
//         const deletedDino = await dino.destroy();
//         res.send(deletedDino);
//     } catch (err) {
//         console.log(err)
//     }
// })


// // Start the server!
// app.listen(PORT, () => {
//     rowdyResults.print()
//     console.log(`Server is listening on port ${PORT}`)
// })