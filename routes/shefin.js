__path = process.cwd();
var express = require('express');
var router = express.Router();
const { fetchJson } = require(__path + '/lib/fetcher.js')

router.get('/', async (req, res) => {
   var hits = await fetchJson('https://api.countapi.xyz/hit/api.shefin.xyz/visitor')
   res.json({
   status: true,
   creator: "Shefin!",
   visitor: hits.value,
   })
  }
)

router.get('/docs', async(req, res) => {
   res.json({
   status: true,
   creator: "Shefin!",
   announcement : "The site is not Released!"
   })
  }
)

module.exports = router
