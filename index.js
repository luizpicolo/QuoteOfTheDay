const PleromaAPI = require('./pleroma');
const QuoteScraper = require('./quote');
require('dotenv').config();

const pleromaEndpoint = process.env.PLEROMA_ENDPOINT;
const authToken = process.env.AUTH_TOKEN;
const quoteUrl = `https://www.pensador.com/${process.env.CATEGORY_PHRASES}`;

const pleromaAPI = new PleromaAPI(pleromaEndpoint, authToken);
const quoteScraper = new QuoteScraper(quoteUrl);

async function postQuoteToPleroma() {
  try {
    const quoteData = await quoteScraper.fetchQuote();
    if (quoteData) {
      const statusText = `${quoteData.quoteText}\n\n${quoteData.author}`;
      const postResponse = await pleromaAPI.postStatus(statusText);
      console.log(postResponse);
    }
  } catch (error) {
    console.error(error);
  }
}

postQuoteToPleroma();
