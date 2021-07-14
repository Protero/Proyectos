const slonik = require('slonik')
const {SLONIK_URL} = require('../constants')
const db = slonik.createPool(SLONIK_URL)

module.exports = db