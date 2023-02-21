
const insertSQL = [
    // LEVEL
    // `
    // INSERT INTO LEVEL (level_nm, angle_btr, count_btr, rep_cnt, rep_time, rest_time)
    // VALUES ('초급자', 15, 30, 12, 12, 12);
    // `,
    // `
    // INSERT INTO LEVEL (level_nm, angle_btr, count_btr, rep_cnt, rep_time, rest_time)
    // VALUES ('중급자', 10, 20, 15, 21, 21);
    // `,
    // `
    // INSERT INTO LEVEL (level_nm, angle_btr, count_btr, rep_cnt, rep_time, rest_time)
    // VALUES ('고급자', 5, 10, 21, 30, 30);
    // `,
    // 테스트용 더미데이터
    `
    INSERT INTO LEVEL (level_nm, count_btr, assess_btr, rep_cnt, rep_time, rest_time)
    VALUES ('초급자', 15, 7, 2, 2, 2);
    `,
    `
    INSERT INTO LEVEL (level_nm, count_btr, assess_btr, rep_cnt, rep_time, rest_time)
    VALUES ('중급자', 10, 5, 3, 3, 3);
    `,
    `
    INSERT INTO LEVEL (level_nm, count_btr, assess_btr, rep_cnt, rep_time, rest_time)
    VALUES ('고급자', 5, 2, 4, 4, 4);
    `,
    // USER
    `
    INSERT INTO USER (user_nm, level_no)
    VALUES ('이준호', 1);
    `,
    // EXERCISE
    `
    INSERT INTO EXERCISE (exercise_no, type, circle_cnt)
    VALUES (1, 'C', 4);
    `,
    `
    INSERT INTO EXERCISE (exercise_no, type, circle_cnt)
    VALUES (2, 'T', 4);
    `,
    // MOTION
    `
    INSERT INTO MOTION (exercise_no, angle_no, start, end)
    VALUES (1, 21, 170, 90);
    `,
    `
    INSERT INTO MOTION (exercise_no, angle_no, start, end)
    VALUES (1, 22, 170, 90);
    `,
    `
    INSERT INTO MOTION (exercise_no, angle_no, start, end)
    VALUES (2, 21, 170, 90);
    `,
    `
    INSERT INTO MOTION (exercise_no, angle_no, start, end)
    VALUES (2, 22, 170, 90);
    `,
]

module.exports = insertSQL