let groceris = require('./db.json')
let globalId = 4

module.exports = {
    getSuggestion: (req, res) => {
        const suggestions  = ['Burgers & Fries', 'Steak & Potatos', 'Pasta & Bread', 'Salad Bar'];

        // choose random dinner
        let randomIndex = Math.floor(Math.random() * suggestions.length);
        let randomSuggestions = suggestions[randomIndex]

        res.status(200).send(randomSuggestions);
    },
}