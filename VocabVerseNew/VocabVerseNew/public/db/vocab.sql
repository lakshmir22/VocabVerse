-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 15, 2020 at 05:40 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
CREATE TABLE vocab.logincr (
  user_id INT AUTO_INCREMENT,
  username VARCHAR(255),
  password_hash VARCHAR(255),
  PRIMARY KEY (user_id)
);

-- Insert sample data
INSERT INTO vocab.logincr (username, password_hash)
VALUES ('sampleuser', 'hashedpassword123');

DELIMITER //
CREATE PROCEDURE checkAuthentication()
BEGIN
  DECLARE input_username VARCHAR(255);
  DECLARE input_password VARCHAR(255);
  DECLARE user_count INT;
  DECLARE is_authenticated BOOLEAN;
  
  -- Your authentication logic goes here
END;
//
DELIMITER ;
