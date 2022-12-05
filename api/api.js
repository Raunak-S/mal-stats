const config = require('../credentials.json');
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/getAnimeList', (req, res) => {
    getAnimeList().then(response => {
        console.log(response.data);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(response.data);
    });
})

function getAnimeList() {

    return axios.get('https://api.myanimelist.net/v2/users/roshizzle/animelist?fields=list_status,synopsis', {
        headers: {
            'X-MAL-CLIENT-ID': config["X-MAL-CLIENT-ID"],
        }
    });
}

app.listen(3001, () => {
    console.log("Listening on port 3001");
})