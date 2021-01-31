CREATE DATABASE IF NOT EXISTS quizzes;
USE quizzes;
CREATE TABLE IF NOT EXISTS quiz (
	quiz_id	INTEGER	NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quiz_title VARCHAR(500) NOT NULL
);
CREATE TABLE IF NOT EXISTS question (
	question_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    question_content VARCHAR(500) NOT NULL,
    CONSTRAINT fk_quiz_id FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id)
);
CREATE TABLE IF NOT EXISTS question_response (
	response_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    response_content VARCHAR(1000) NOT NULL,
    CONSTRAINT fk_question_id FOREIGN KEY (question_id)
    REFERENCES question(question_id),
    CONSTRAINT fk_result_id FOREIGN KEY (result_id)
    REFERENCES result(result_id)
);
CREATE TABLE IF NOT EXISTS result (
	result_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    result_title VARCHAR(500) NOT NULL,
    result_content VARCHAR(5000) NOT NULL,
    CONSTRAINT fk_quiz_id FOREIGN KEY (quiz_id) REFERENCES quiz(quiz_id)
);
