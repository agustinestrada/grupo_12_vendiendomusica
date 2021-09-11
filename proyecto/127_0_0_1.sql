-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 10, 2021 at 02:45 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectomusicadb`
--
DROP DATABASE IF EXISTS `proyectomusicadb`;
CREATE DATABASE IF NOT EXISTS `proyectomusicadb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyectomusicadb`;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `precio` int(10) UNSIGNED NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `imagen` text NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `categoria`, `imagen`, `descripcion`) VALUES
(9, 'Piano Yamaha vertical', 730000, 'Piano Acustico', '1629832488092.jpg', 'hola píano'),
(10, 'Piano de cola Steinway & Sons', 10000000, 'Piano Acustico', '1629852851722.png', ''),
(11, 'Guitarra electrica Fender Stratocaster', 160000, 'Guitarra Electrica', '1629852896981.png', ''),
(12, 'Guitarra Acustica Montana', 60000, 'Guitarra Acustica', '1629852938544.png', ''),
(13, 'Guitarra Criolla La Apujarra', 40000, 'Guitarra Criolla', '1629852988109.png', ''),
(14, 'Piano electrico Roland con mueble', 150000, 'Piano Electrico', '1629853032537.png', ''),
(15, 'Placa de sonido Steinber UR12', 45000, 'Audio Profesional', '1629853079194.png', ''),
(16, 'Microfono condenser Samson C01', 20000, 'Audio Profesional', '1629853112184.png', ''),
(17, 'Controlador MIDI Arturia Keylab 88 MKII', 200000, 'Audio Profesional', '1629853202876.png', ''),
(18, 'Ukelele Soprano Ibanez profesional', 15000, 'Ukelele', '1629853247641.png', ''),
(19, 'Guitarra electrica Fender Telecaster', 70000, 'Guitarra Electrica', '1629853297225.png', ''),
(20, 'Pie de microfono HERCULES profesional', 10000, 'Audio Profesional', '1629853334946.png', ''),
(21, 'Piano de cola Steinway & Sons', 1, 'Piano Acustico', '1630459673480.png', 's');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) UNSIGNED NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `passwords` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `passwords`) VALUES
(15, 'Agustin', 'de Estrada', 'agustindeestrada91@gmail.com', '$2a$10$MlRFLEC9GDbk00SJKBQTie5lOoBvwhJlNI7fFWJyBgu1Ef7xsV95m'),
(16, 'Fernando', 'Calaza', 'fer.calaza@gmail.com', '$2a$10$TZ5FXJ3kDhrRVxjlw/MJLu6nAPa5iTZdNl6bxRzQCLsfOuynUzoQ6'),
(17, 'gonza', 'zeb', 'gz@gmail.com', '$2a$10$1V3SBl/UOSCrcplxFLwlseER3cI6zhocjiauZOg.ETDENAZYcAiiS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
