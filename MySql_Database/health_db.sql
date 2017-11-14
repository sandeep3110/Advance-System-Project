-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2017 at 09:29 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `health_db`
--
CREATE DATABASE IF NOT EXISTS `health_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `health_db`;

-- --------------------------------------------------------

--
-- Table structure for table `appointment_doctors_list`
--
-- Creation: Nov 09, 2017 at 01:40 AM
--

DROP TABLE IF EXISTS `appointment_doctors_list`;
CREATE TABLE `appointment_doctors_list` (
  `member_id` int(11) NOT NULL,
  `disease` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `specialty` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `doctor_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `zip_code` int(5) NOT NULL,
  `carrier` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `appointment_doctors_list`:
--

--
-- Dumping data for table `appointment_doctors_list`
--

INSERT INTO `appointment_doctors_list` (`member_id`, `disease`, `specialty`, `doctor_name`, `zip_code`, `carrier`) VALUES
(61300, 'Eye', 'Optometrist', 'Dr. Diana Ries', 19341, 'First Health Insurance,20/20 Eyecare Plan,Cigna - HMO,'),
(61302, 'Eye', 'Optometrist', 'Dr. Tu Dinh', 19341, 'First Health Insurance,Davis Vision - Vision Care,UnitedHealthcare - UnitedHealthcare Compass Plus '),
(61304, 'Eye', 'Optometrist', 'Dr. Vicki Troese', 78954, 'First Health Insurance,Independence Blue Cross - National BlueCard PPO'),
(61306, 'Eye', 'Optometrist', 'Dr. Michael Negrey', 78954, 'First Health Insurance,Caterpillar - Caterpillar Network Plan'),
(61400, 'Eye', 'Optometrist', 'Dr. Mahendra K Rupani', 19341, 'First Health Insurance,EmblemHealth - 9/11 Program'),
(61500, 'Emergency', 'Emergency Medicine Physicians', 'Dr. Joseph Nowoslawski', 19341, 'First Health Insurance,Caterpillar - Caterpillar Network Plan'),
(61502, 'Emergency', 'Emergency Medicine Physicians', 'Dr. Mark Orland Scott', 19341, 'First Health Insurance,Caterpillar - Caterpillar Network Plan,Independence Blue Cross'),
(61504, 'Emergency', 'Emergency Medicine Physicians', 'Dr. David M Trantham', 19341, 'First Health Insurance,Cigna - HMO,Companion Life - Worker\'s Comp\r\n'),
(68500, 'Emergency', 'Emergency Medicine Physicians', 'Dr. Lauren A Kanter', 64093, 'First Health Insurance,Companion Life - Worker\'s Comp,'),
(69544, 'Emergency', 'Emergency Medicine Physicians', 'Dr. Arthur E Perpall', 64093, 'First Health Insurance,First Choice Health - PPO,Cigna - HMO');

-- --------------------------------------------------------

--
-- Table structure for table `customer_table`
--
-- Creation: Nov 04, 2017 at 04:15 AM
--

DROP TABLE IF EXISTS `customer_table`;
CREATE TABLE `customer_table` (
  `member_id` int(11) NOT NULL,
  `role` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(3) NOT NULL,
  `phone` double(15,0) NOT NULL,
  `house_number` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `zip_code` int(5) NOT NULL,
  `state` varchar(2) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `customer_table`:
--

--
-- Dumping data for table `customer_table`
--

INSERT INTO `customer_table` (`member_id`, `role`, `first_name`, `last_name`, `age`, `phone`, `house_number`, `city`, `zip_code`, `state`, `email`, `password`) VALUES
(60404, 'customer', 'Satya Phani', 'Meduri', 28, 6210681223, '53 Heritage Ln', 'Exton', 19341, 'PA', 'satya.28@gmail.com', 'Satya@123'),
(61212, 'customer', 'Ramya', 'shillpa', 25, 9000124440, '23 Groover St', 'Delaware', 62034, 'PA', 'Ramya.94@gmail.com', 'Ramya@123'),
(61431, 'customer', 'Deepthi', 'Chowdary', 26, 8163720480, '10 Xaiver St', 'Philli', 78546, 'PA', 'deepthi.muppala@gmail.com', 'Deepu@1031'),
(63236, 'customer', 'Chaitanya Prashanth', 'Avasarala Venkata', 26, 8163725650, '64 Surrey Way', 'Exton', 64093, 'PA', 'prashanth.avc@gmail.com', 'Chaithu@786'),
(64442, 'customer', 'Sandeep ', 'Avasarala', 25, 8166210680, '64 Surrey Way', 'Exton', 19341, 'PA', 'sandeep92.avasarala@gmail.com', 'Sandeep@1031'),
(65151, 'customer', 'Sravan', 'Vanga', 26, 6060121789, '23 Avenue St', 'Malvern', 64093, 'PA', 'sravan.kpf@gmail.com', 'Sravan@786'),
(65511, 'customer', 'Pavan', 'Reddy', 26, 5552221631, '509 Anderson St', 'Warrensburg', 19341, 'MO', 'pavan.reddy@gmail.com', 'Pavan@456'),
(67860, 'customer', 'Saitej', 'Vadlamani', 26, 4442310680, '63 Gay St', 'Prussia', 50601, 'FA', 'Saitej.786@gmail.com', 'Saitej$123');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_table`
--
-- Creation: Nov 04, 2017 at 04:14 AM
--

DROP TABLE IF EXISTS `doctor_table`;
CREATE TABLE `doctor_table` (
  `member_id` int(11) NOT NULL,
  `role` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `specialty` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `phone` double(15,0) NOT NULL,
  `zip_code` int(5) NOT NULL,
  `email` varchar(40) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `doctor_table`:
--

--
-- Dumping data for table `doctor_table`
--

INSERT INTO `doctor_table` (`member_id`, `role`, `first_name`, `last_name`, `specialty`, `phone`, `zip_code`, `email`, `password`) VALUES
(65727, 'doctor', 'Raghu', 'Meduri', 'Cardiothoracic Surgeon', 9701699931, 64093, 'raghu.kpf@gmail.com', 'Raghu@786'),
(65730, 'doctor', 'Xavier', 'Antony', 'Wound Care Specialist', 8790464822, 64093, 'Xavier.INR@gmail.com', 'Xavier01'),
(66077, 'doctor', 'deepthi', 'Sudha', 'Cardiothoracic Surgeon', 9972228790, 19341, 'deepu.91@gmail.com', 'Deepu@786');

-- --------------------------------------------------------

--
-- Table structure for table `specialty`
--
-- Creation: Nov 01, 2017 at 07:38 PM
--

DROP TABLE IF EXISTS `specialty`;
CREATE TABLE `specialty` (
  `Value` int(11) NOT NULL,
  `Specialty` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- RELATIONSHIPS FOR TABLE `specialty`:
--

--
-- Dumping data for table `specialty`
--

INSERT INTO `specialty` (`Value`, `Specialty`) VALUES
(98, 'Dentist'),
(101, 'Dermatologist'),
(114, 'Infectious Disease Specialist'),
(118, 'Pathologist'),
(120, 'Plastic Surgeon'),
(122, 'Psychiatrist'),
(123, 'Radiologist'),
(126, 'Urologist'),
(128, 'Neurologist'),
(129, 'Sports Medicine Specialist'),
(143, 'Cardiothoracic Surgeon'),
(343, 'Travel Medicine Specialist'),
(345, 'Allergist'),
(346, 'Audiologist'),
(470, 'Wound Care Specialist');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment_doctors_list`
--
ALTER TABLE `appointment_doctors_list`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `customer_table`
--
ALTER TABLE `customer_table`
  ADD PRIMARY KEY (`member_id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `doctor_table`
--
ALTER TABLE `doctor_table`
  ADD PRIMARY KEY (`member_id`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Indexes for table `specialty`
--
ALTER TABLE `specialty`
  ADD PRIMARY KEY (`Value`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
