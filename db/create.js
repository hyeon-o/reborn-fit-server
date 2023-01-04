
const createSQL = [
    `       
    -- 각도 마스터 테이블
    CREATE TABLE ANGLE
    (
    angle_no    INTEGER  PRIMARY KEY,  -- 각도 번호
    part1       INTEGER  NOT NULL,     -- 관절 시작 파트
    part2       INTEGER  NOT NULL,     -- 관절 중간 파트
    part3       INTEGER  NOT NULL,     -- 관절 종료 파트
    desc        TEXT                   -- 설명
    );
    `,
    `
    -- 운동 마스터 테이블
    CREATE TABLE EXERCISE
    (
    exercise_no INTEGER PRIMARY KEY,  -- 운동 번호
    circle_cnt  INTEGER NOT NULL,     -- circle 요구개수 
    rep_cnt     INTEGER NOT NULL,     -- rep 요구개수
    circle_time INTEGER NOT NULL,     -- circle 요구시간 (초)
    rep_time    INTEGER NOT NULL,     -- rep 요구시간 (초)
    type        TEXT    NOT NULL      -- 운동 타입
    );
    `,
    `
    -- 사용자 레벨 테이블
    CREATE TABLE LEVEL
    (
    level_no   INTEGER PRIMARY KEY,   -- 레벌 번호
    level_nm   TEXT    NOT NULL,      -- 레벨 이름
    angle_btr  INTEGER NOT NULL,      -- angle 각도 임계 범위
    count_btr  INTEGER NOT NULL,      -- count 각도 임계 범위
    circle_inc INTEGER NOT NULL,      -- 기준 circle 시간 대비 증감 시간 (초)
    rest_inc   INTEGER NOT NULL       -- 기준 rest 시간 대비 증감 시간 (초)
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
    end         INTEGER NOT NULL,       -- 모션 종료 각도
    type        TEXT    NOT NULL        -- 모션 타입
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