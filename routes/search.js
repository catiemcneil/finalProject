const express = require('express')
const searchRouter = express.Router()
const Audiosearch = require('audiosearch-client-node')

const AUDIOSEARCH_APP_ID = "fedd0b894c0ea348283b75616851315ca5e1e5a649cdd7d0c45c3738327282b6"
const AUDIOSEARCH_SECRET = "8d10e7991e2bf935acde281869fe279ea0081aa57f1f5df945779d8f128b93e9"
const audiosearch = new Audiosearch(AUDIOSEARCH_APP_ID, AUDIOSEARCH_SECRET);


searchRouter.get('/', (req, res) => {

    var newSearch = audiosearch.searchEpisodes(req.query.search, {"size":20, "from":1})
        .then (function(results) {

        res.render('search', {'search': results.results})
    })
})

module.exports = searchRouter