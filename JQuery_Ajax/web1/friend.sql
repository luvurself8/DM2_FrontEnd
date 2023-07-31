-- 2023년 6월 14일 Ajax로 처리되는 테이블 작성

DROP TABLE friend ;
CREATE TABLE friend 
(
    seq NUMBER PRIMARY KEY,
    name VARCHAR2(20) NOT NULL,
    phone VARCHAR2(20),
    address VARCHAR2(200)
);

DROP SEQUENCE friend_seq;
CREATE SEQUENCE friend_seq;