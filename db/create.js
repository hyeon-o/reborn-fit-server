
const createSQL = [
    `
    -- 운동 마스터 테이블
    CREATE TABLE EXERCISE
    (
    exercise_no INTEGER PRIMARY KEY,  -- 운동 번호
    type        TEXT    NOT NULL,     -- 운동 타입
    circle_cnt  INTEGER NOT NULL      -- circle 횟수 (default 설정하지 않음)
    );
    `,
    `
    -- 사용자 레벨 테이블
    CREATE TABLE LEVEL
    (
    level_no    INTEGER PRIMARY KEY,   -- 레벌 번호
    level_nm    TEXT    NOT NULL,      -- 레벨 이름
    count_btr   INTEGER NOT NULL,      -- count 각도 임계 범위
    assess_btr  INTEGER NOT NULL,      -- assess 각도 임계 범위
    rep_cnt     INTEGER NOT NULL,      -- rep의 반복 횟수 (개)
    rep_time    INTEGER NOT NULL,      -- rep의 유지 시간 (초)
    rest_time   INTEGER NOT NULL       -- rep 간 휴식 시간 (초)
    );
    `,
    `
    -- 운동 모션 테이블
    CREATE TABLE MOTION
    (
    motion_no   INTEGER PRIMARY KEY,    -- 모션 번호
    exercise_no INTEGER NOT NULL,       -- 모션을 포함하는 운동 번호
    angle_no    INTEGER NOT NULL,       -- 모션이 포함하는 각도 번호
    start       INTEGER NOT NULL,       -- 모션 시작 각도
    end         INTEGER NOT NULL        -- 모션 종료 각도
    );
    `,
    `
    -- 사용자 마스터 테이블
    CREATE TABLE USER
    (
    user_no  INTEGER    PRIMARY KEY,  -- 사용자 번호
    user_nm  TEXT       NOT NULL,     -- 사용자 이름 
    level_no INTEGER    NOT NULL      -- 레벨 번호
    );
    `
]

module.exports = createSQL