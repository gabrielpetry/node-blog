const express = require('express')
const router = express.Router()
const api = require('../services/jsonPlaceholder')
/* GET home page. */
router.get('/', async (req, res) => {
  const posts = await api.get('/posts').then(res => res.data)


  res.send({ ok: true, posts })
})

module.exports = router
