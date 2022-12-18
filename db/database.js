const sqlite3 = require('sqlite3').verbose()

let createSQL = require('./create.js')
let insertSQL = require('./insert.js')

let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error(err.message)
    }
    console.log(`데이터베이스 연결 성공...`)

    db.serialize(() => {
      createSQL.forEach(x => {
        db.run(x, (err) => {
          if (err) {
            console.error(err.message)
          }
        })
      })
      console.log(`테이블 생성 성공...`)

      insertSQL.forEach(x => {
        db.run(x, (err) => {
          if (err) {
            console.error(err.message)
          }
        })
      })
      console.log(`데이터 삽입 성공...`)
    }) 
})

module.exports = db