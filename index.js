const PleromaAPI = require('./pleroma');
const QuoteScraper = require('./quote');
require('dotenv').config();

const pleromaEndpoint = process.env.PLEROMA_ENDPOINT;
const authToken = process.env.AUTH_TOKEN;
const url = `https://www.pensador.com/${process.env.CATEGORY_PHRASES}`;

const pleromaAPI    = new PleromaAPI(pleromaEndpoint, authToken);
const quoteScraper  = new QuoteScraper(url);

quoteScraper.fetchQuote().then(quoteData => {
  if (quoteData){
    pleromaAPI.postStatus(`${quoteData.quoteText}\n\n${quoteData.author}`).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.error(error);
    });
  }
})



