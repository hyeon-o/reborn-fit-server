const express = require('express')
const app = express()
const port = 3000

const db = require('./db/database.js')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// 테스트 API
app.get('/health', (req, res) => {
    res.json({"message": "Hello World!"})
})

// user 단건 조회
app.get('/user', (req, res) => {

    console.log(`${req.url} 호출`)

    const sql = `SELECT * FROM user u JOIN level l ON (u.level_no=l.level_no) WHERE user_no=?`
    const params = [req.query['id']]

    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"message": err.message})
        } else {
            res.json({
                "data": row
            })
        }
    })
})

// exercise 단건 조회 
app.get('/exercise', (req, res) => {

    console.log(`${req.url} 호출`)

    const sqlExercise = `SELECT * FROM exercise WHERE exercise_no=?`
    const sqlMotion = `SELECT motion_no, angle_no, start, end FROM motion WHERE exercise_no=?`
    const params = [req.query['id']]

    db.get(sqlExercise, params, (err, rowExercise) => {
        if (err) {
            res.status(400).json({"message": err.message})
        } else {
            db.all(sqlMotion, params, (err, rowMotion) => {
                if (err) {
                    res.status(400).json({"message": err.message})
                } else {
                    res.json({
                        "data": { ...rowExercise, "motions": rowMotion}
                    })
                }
            })
        }
    })
})

// reborn fit 운동 로직
app.post('/compute/exercise', (req, res) => {

    console.log(`${req.url} 호출`)

    let userAngle = Object.fromEntries(
        req.body['angles'].map(x => [x['angle_no'], x])
    )

    let isActivate = false
    let assess = {}

    // 현재 사용자가 운동 범위에 들어왔는지 확인
    const isExerciseRange = req.body['motions'].map(x => {
        // Flexion ; 각도가 작아지는 운동
        if (x['start'] > x['end']) {
            const limitValue = x['end'] + x['end'] * (req.body['count_btr'] / 100)
            return userAngle[x['angle_no']]['angle'] <= limitValue
        } 
        // Extension ; 각도가 커지는 운동
        else {
            const limitValue = x['end'] - x['end'] * (req.body['count_btr'] / 100)
            return userAngle[x['angle_no']]['angle'] >= limitValue
        }
    }).every(x => x)

    // 운동 동작 중일 때
    if (req.body['is_activate']) {
        // 운동 임계 범위에서 벗어났을 때
        if (!isExerciseRange) {
            isActivate = false
        }
        // 운동 임계 범위에서 벗어나지 않았을 때
        else {
            isActivate = true
            // 운동 동작 중 angle 임계 범위에 따른 평가   
            req.body['motions'].forEach(x => {
                const limitStart = x['end'] - x['end'] * (req.body['assess_btr'] / 100)
                const limitEnd = x['end'] + x['end'] * (req.body['assess_btr'] / 100)
                assess[x['angle_no']] = (limitStart <= userAngle[x['angle_no']] <= limitEnd) 
                                ? `GOOD` : `BAD`
            })
        }
    }
    // 운동 동작 준비 중 count 범위에 처음 도달했을 때
    else if (!req.body['is_activate'] && isExerciseRange) {
        isActivate = true
    }
    // 운동 동작 준비 중 count 범위에 도달하지 않았을 때
    else {
        isActivate = false
    }

    res.json({
        "data": {
            "is_activate": isActivate,
            "assess": assess
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})