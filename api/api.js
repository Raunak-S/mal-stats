const config = require('../credentials.json');
const axios = require('axios');

function getAnimeList() {

    return axios.get('https://api.myanimelist.net/v2/users/roshizzle/animelist?fields=list_status,synopsis', {
        headers: {
            'X-MAL-CLIENT-ID': config["X-MAL-CLIENT-ID"],
        }
    });
}

export default getAnimeList;