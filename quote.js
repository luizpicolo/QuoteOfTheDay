const axios = require('axios').create();
const cheerio = require('cheerio');
const fs = require('fs').promises;

class QuoteScraper {
  constructor(url) {
    this.url = `${url}/${Math.floor(Math.random() * 100) + 1}/`;
  }

  async fetchQuote() {
    try {
      const response = await axios.get(this.url);
      const $ = cheerio.load(response.data);
      const position = Math.floor(Math.random() * $('.frase').length) + 1;
      const quoteText = $('.frase').eq(position).text().trim();
      const author = $('.author-name').eq(position).text().trim();
      const quoteData = {
        quoteText,
        author
      };
      const existingQuote = await this.checkExistingQuotes(quoteData);
      if (existingQuote) {
        return quoteData;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(`Failed to fetch webpage: ${error}`);
    }
  }

  async checkExistingQuotes(newQuote) {
    try {
      const data = await fs.readFile('quote.json');
      const existingQuotes = JSON.parse(data);
      const existingQuote = existingQuotes.find(q => q.quoteText === newQuote.quoteText && q.author === newQuote.author);
      if (existingQuote) {
        return false;
      } else {
        existingQuotes.push(newQuote);
        await fs.writeFile('quote.json', JSON.stringify(existingQuotes));
        return newQuote;
      }
    } catch (error) {
      console.error(`Failed to read/write file: ${error}`);
    }
  }
}

module.exports = QuoteScraper;
