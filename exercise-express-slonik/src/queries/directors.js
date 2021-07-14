const { sql } = require('slonik')

// Directors-related queries
const getAll = async db => {
    try {
      const { rows: directors } = await db.query(sql`
        SELECT * FROM directors
      `)
      console.log(directors);
      return directors
    } catch (error) {
      console.info('> error: ', error.message)
      return false
    }
  }
  const getAllName = async db => {
    try {
      const { rows: directors } = await db.query(sql`
        SELECT name FROM directors
        WHERE name IS NOT NULL
      `)
  
      return directors
    } catch (error) {
      console.info('> error: ', error.message)
      return false
    }
  }
  const getAllQueryName = async db => {
    try {
      const { rows: directors } = await db.query(sql`
        SELECT query_name, nickname FROM directors
      `)
  
      return directors
    } catch (error) {
      console.info('> error: ', error.message)
      return false
    }
  }
  
  module.exports = {
    getAll,
    getAllName,
    getAllQueryName,
  }