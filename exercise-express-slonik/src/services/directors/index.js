const router = require('express').Router()

module.exports = db => {
  router.get('/', require('./get-all')(db))
  router.get('/get-allName', require('./get-allName')(db))
  router.get('/get-allQueryName', require('./get-allQueryName')(db))

  return router
}