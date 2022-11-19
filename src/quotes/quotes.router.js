const router = require('express').Router()


const quoteServices = require('./quotes.services')

router.get('/quotes', quoteServices.getAllQuotes)
router.post('/quotes', quoteServices.postNewQuote)

router.get('/quotes/random', quoteServices.getRandomQuote)
router.get('/quotes/:id', quoteServices.getQuoteById)

/* 
//ejemplo del orden y funcionamiento
switch (route) {
    case '/quotes':
        break;
    case '/quotes/random':
        break;
    case '/quotes/:id':
        break;
    default:

        break;
}
*/


module.exports = router