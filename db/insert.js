
const insertSQL = [
    // LEVEL
    `
    INSERT INTO LEVEL (level_nm, angle_btr, count_btr, circle_inc, rest_inc)
    VALUES ('초급자', 25, 30, 10, 10);
    `,
    `
    INSERT INTO LEVEL (level_nm, angle_btr, count_btr, circle_inc, rest_inc)
    VALUES ('중급자', 15, 20, 0, 0);
    `,
    `
    INSERT INTO LEVEL (level_nm, angle_btr, count_btr, circle_inc, rest_inc)
    VALUES ('고급자', 5, 10, -5, -5);
    `,
    // USER
    `
    INSERT INTO USER (user_nm, level_no)
    VALUES ('이준호', 1);
    `,
    // ANGLE
    `
    INSERT INTO ANGLE (part1, part2, part3, desc)
    VALUES (11, 13, 15, '왼쪽 무릎');
    `,
    `
    INSERT INTO ANGLE (part1, part2, part3, desc)
    VALUES (12, 14, 16, '오른쪽 무릎');
    `,
    `
    INSERT INTO ANGLE (part1, part2, part3, desc)
    VALUES (12, 11, 13, '왼쪽 엉덩이 아래');
    `,
    `
    INSERT INTO ANGLE (part1, part2, part3, desc)
    VALUES (11, 12, 14, '오른쪽 엉덩이 아래');
    `,
    // EXERCISE
    `
    INSERT INTO EXERCISE (circle_cnt, rep_cnt, circle_time, rep_time)
    VALUES (2, 10, 10, 3);
    `,
    // MOTION
    `
    INSERT INTO MOTION (exercise_no, angle_no, start, end, type)
    VALUES (1, 1, 170, 90, 'F');
    `,
    `
    INSERT INTO MOTION (exercise_no, angle_no, start, end, type)
    VALUES (1, 2, 170, 90, 'F');
    `,
]

module.exports = insertSQL