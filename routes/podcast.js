const express = require('express')
const podcastRouter = express.Router()
const Audiosearch = require('audiosearch-client-node')

const AUDIOSEARCH_APP_ID = "fedd0b894c0ea348283b75616851315ca5e1e5a649cdd7d0c45c3738327282b6"
const AUDIOSEARCH_SECRET = "8d10e7991e2bf935acde281869fe279ea0081aa57f1f5df945779d8f128b93e9"
const audiosearch = new Audiosearch(AUDIOSEARCH_APP_ID, AUDIOSEARCH_SECRET);

// var range = [100-4699];
var episodeId = {}

podcastRouter.get('/', (req, res) => {
    var showId = Math.floor(Math.random() * ((4699-100) + 1) + 100)
    var podcast = {};
    var getShow = audiosearch.getShow(showId)
        .then(function (results) {
            return results
        })
        .then(function (results) {
            return audiosearch.getEpisode(results.episode_ids[0])
        })
        .then(function (results) {
            console.log(results)
            let { title, description, digital_location} = results
            podcast = {
                title,
                description,
                digital_location,
            }
        res.render('podcasts', {'podcast': podcast})
        })

    })

module.exports = podcastRouter