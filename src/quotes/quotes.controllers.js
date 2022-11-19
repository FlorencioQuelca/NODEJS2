const quotesDB = []
let id = 1
    /*
       {
        id:1,
        author:'said'
        quote:'Dudas'
        years:'2022
       }
    */
const findAllQuotes = () => {
    return quotesDB
}
const findQuotesById = (id) => {
    const data = quotesDB.find(quote => quote.id == id)
    return data
}
const createNewQuote = (obj) => {

    const newQuote = {
        id: id++,
        autor: obj.author,
        quote: obj.quote,
        //year: obj.year ? obj.year : 'year unknown',
        year: obj.year || 'year unknown'
    }
    quotesDB.push(newQuote)
    return newQuote
}

const findRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesDB.length)
    return quotesDB[randomIndex]
}
module.exports = {
    findAllQuotes,
    findQuotesById,
    createNewQuote,
    findRandomQuote
}