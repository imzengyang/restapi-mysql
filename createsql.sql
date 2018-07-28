create database signapp


CREATE TABLE IF NOT EXISTS `sign`(
   `userid` INT UNSIGNED AUTO_INCREMENT,
   `username` VARCHAR(40) NOT NULL,
   `create_time` VARCHAR(40) NOT NULL,
   `ip` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `userid` )
)DEFAULT CHARSET=utf8;