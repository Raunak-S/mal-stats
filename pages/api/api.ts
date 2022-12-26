import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import express, { Request } from "express";
import { NextApiRequest, NextApiResponse } from "next";

const malApiUrl: string = "https://api.myanimelist.net/v2";
const jikanApiUrl: string = "https://api.jikan.moe/v4";
const mock: string = '{"data":[{"node":{"id":31646,"title":"3-gatsu no Lion","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/6\/82898.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/6\/82898l.jpg"}},"list_status":{"status":"plan_to_watch","score":0,"num_episodes_watched":0,"is_rewatching":false,"updated_at":"2020-09-06T07:39:52+00:00"}},{"node":{"id":38101,"title":"5-toubun no Hanayome","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1819\/97947.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1819\/97947l.jpg"}},"list_status":{"status":"plan_to_watch","score":0,"num_episodes_watched":0,"is_rewatching":false,"updated_at":"2020-11-28T03:45:37+00:00"}},{"node":{"id":39783,"title":"5-toubun no Hanayome \u222c","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1775\/109514.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1775\/109514l.jpg"}},"list_status":{"status":"plan_to_watch","score":0,"num_episodes_watched":0,"is_rewatching":false,"updated_at":"2020-12-19T06:47:37+00:00"}},{"node":{"id":41457,"title":"86","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1987\/117507.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1987\/117507l.jpg"}},"list_status":{"status":"watching","score":0,"num_episodes_watched":0,"is_rewatching":false,"updated_at":"2021-12-31T05:13:07+00:00"}},{"node":{"id":32998,"title":"91 Days","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/13\/80515.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/13\/80515l.jpg"}},"list_status":{"status":"completed","score":0,"num_episodes_watched":12,"is_rewatching":false,"updated_at":"2020-09-06T02:08:36+00:00"}},{"node":{"id":11759,"title":"Accel World","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/8\/38155.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/8\/38155l.jpg"}},"list_status":{"status":"plan_to_watch","score":0,"num_episodes_watched":0,"is_rewatching":false,"updated_at":"2020-06-28T04:04:54+00:00"}},{"node":{"id":22199,"title":"Akame ga Kill!","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1429\/95946.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1429\/95946l.jpg"}},"list_status":{"status":"completed","score":0,"num_episodes_watched":24,"is_rewatching":false,"updated_at":"2019-03-24T23:17:12+00:00"}},{"node":{"id":41433,"title":"Akudama Drive","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1468\/109172.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1468\/109172l.jpg"}},"list_status":{"status":"plan_to_watch","score":0,"num_episodes_watched":0,"is_rewatching":false,"updated_at":"2020-12-12T06:29:23+00:00"}},{"node":{"id":8676,"title":"Amagami SS","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/10\/78699.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/10\/78699l.jpg"}},"list_status":{"status":"plan_to_watch","score":0,"num_episodes_watched":0,"is_rewatching":false,"updated_at":"2020-11-30T19:21:05+00:00"}},{"node":{"id":6547,"title":"Angel Beats!","main_picture":{"medium":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1244\/111115.jpg","large":"https:\/\/api-cdn.myanimelist.net\/images\/anime\/1244\/111115l.jpg"}},"list_status":{"status":"completed","score":0,"num_episodes_watched":13,"is_rewatching":false,"updated_at":"2020-05-16T04:05:43+00:00"}}],"paging":{"next":"https:\/\/api.myanimelist.net\/v2\/users\/roshizzle\/animelist?offset=10&fields=list_status"}}';

// export default async function getAnimeList(): Promise<Object> {
//     return new Promise(JSON.parse(mock));
// }

const app = express();

app.get('/getAnimeList', (req: Request, res: any) => {
    const username: string = req.query.user as string;

    getAnimeList(username).then((response: AxiosResponse<any, any>) => {
        console.log(response.data);
        res.set('Access-Control-Allow-Origin', '*');
        res.send(response.data.data[0].node);
    });
})

app.get('/getUserReviews', (req: Request, res: any) => {
    const username: string = req.query.user as string;
    const url: string = `${jikanApiUrl}/users/${encodeURIComponent(username)}/reviews`;
    
    getAllPaginatedResults(url).then((response: string[]) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(response);
    }).catch(err => {
        console.log(err);
    });
})

app.get('/getUserRecommendations', (req: Request, res: any) => {
    const username: string = req.query.user as string;
    const url: string = `${jikanApiUrl}/users/${encodeURIComponent(username)}/recommendations`;
    
    getAllPaginatedResults(url).then((response: string[]) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(response);
    }).catch(err => {
        console.log(err);
    });
});

app.get('/getUserClubs', (req: Request, res: any) => {
    const username: string = req.query.user as string;
    const url: string = `${jikanApiUrl}/users/${encodeURIComponent(username)}/clubs`;
    
    getAllPaginatedResults(url).then((response: string[]) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(response);
    }).catch(err => {
        console.log(err);
    });
});

app.get('/getUserStatistics', (req: Request, res: any) => {
    const username: string = req.query.user as string;
    const url: string = `${jikanApiUrl}/users/${encodeURIComponent(username)}/clubs`;
    
    const promises: Promise<string[]>[] = [
        getAllPaginatedResults(`${jikanApiUrl}/users/${encodeURIComponent(username)}/clubs`),
        getAllPaginatedResults(`${jikanApiUrl}/users/${encodeURIComponent(username)}/recommendations`),
        getAllPaginatedResults(`${jikanApiUrl}/users/${encodeURIComponent(username)}/reviews`)
    ]

    Promise.all(promises).then((arr: string[][]) => {
        const response: { clubs: number, recommendations: number, reviews: number } = {
            clubs: arr[0].length,
            recommendations: arr[1].length,
            reviews: arr[2].length,
        };
        res.set('Access-Control-Allow-Origin', '*');
        res.send(response);
    }).catch(err => {
        console.log(err);
    });
});

function getAnimeList(username: string): AxiosPromise {
    
    return axios.get(`${malApiUrl}/users/${encodeURIComponent(username)}/animelist?fields=list_status,synopsis`, {
        headers: {
            'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID,
        }
    });
}

function getAllPaginatedResults(url: string): Promise<string[]> {
    return new Promise(async resolve => {
        let results: string[] = [];
        let cond : boolean = true;
        let pageNum: number = 1;
        while (cond) {
            try {
                let response = await axios.get(`${url}?page=${pageNum}`);
                results = results.concat(response.data.data);
                if (!response.data.pagination.has_next_page || !response.data.data.length) {
                    resolve(results);
                    return;
            };
            pageNum++;
            } catch(err) {
                console.log(err);
                console.log(url);
            }
        }
    });
}

app.listen(3001, () => {
    console.log("Listening on port 3001");
})

function handler(request: NextApiRequest, response: NextApiResponse) {
    response.status(200).json({
        body: 'this is a test',
        query: request.query
    })
}

export default handler;