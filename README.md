# QuoteOfTheDay

Collects random phrases from the O Pensador website

# How to use

Clone this repository

    git clone https://github.com/luizpicolo/QuoteOfTheDay.git
    cp .env_example .env

Change .env config

    
    // or mastodon endpoint
    PLEROMA_ENDPOINT= 
    
    AUTH_TOKEN=
    
    // Example: hoje, frases_lindas, etc
    CATEGORY_PHRASES=frases_curtas 

Execute 

    cp QuoteOfTheDay 
    node index.js
