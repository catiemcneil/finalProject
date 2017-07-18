const express = require('express')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Audiosearch = require('audiosearch-client-node');

const app = express()

const appRouter = require('./routes/index.js')
const podcastRouter = require('./routes/podcast.js')
const searchRouter = require('./routes/search.js')

const AUDIOSEARCH_APP_ID = 'fedd0b894c0ea348283b75616851315ca5e1e5a649cdd7d0c45c3738327282b6'
const AUDIOSEARCH_SECRET = '8d10e7991e2bf935acde281869fe279ea0081aa57f1f5df945779d8f128b93e9'
const audiosearch = new Audiosearch(AUDIOSEARCH_APP_ID, AUDIOSEARCH_SECRET);

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use( express.static('public') )

app.use('/', appRouter)
app.use('/podcast', podcastRouter)
app.use('/search', searchRouter)


let port = process.env.PORT || 2001
app.listen(port)
