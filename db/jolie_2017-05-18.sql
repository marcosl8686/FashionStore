# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.17)
# Database: jolie
# Generation Time: 2017-05-19 02:50:23 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Accounts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Accounts`;

CREATE TABLE `Accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `taxID` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `suite` varchar(255) DEFAULT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `zip` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `approvedBuyer` tinyint(1) DEFAULT '0',
  `admin` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Accounts` WRITE;
/*!40000 ALTER TABLE `Accounts` DISABLE KEYS */;

INSERT INTO `Accounts` (`id`, `firstName`, `lastName`, `companyName`, `taxID`, `address`, `suite`, `city`, `state`, `zip`, `country`, `phone`, `email`, `password`, `approvedBuyer`, `admin`, `createdAt`, `updatedAt`)
VALUES
	(1,'Marcos','Lee','Heheh fashion','123','444 hehe st','123','los angeles','ca','90015','usa','3333333333','m','$2a$10$.Ne3dCXmGtXg8Szqt3POUObH98oLOuA8LYr/EL3z1xrAYczv7P8Hq',1,0,'2017-05-14 05:49:09','2017-05-14 05:49:09'),
	(2,'123','123','123','123','123','123','123','123','123','123','123','admin@gmail.com','$2a$10$ra3S4FQRsGZBImoa7UDoTO1nfmAQICOWJwLCG/bWWpe1DEPhWEDai',1,1,'2017-05-15 17:04:18','2017-05-15 17:04:18'),
	(3,'123','123','123','123','123','123','123','123','123','123','123','pending@gmail.com','$2a$10$xqp.DEAeFcnSyI/3kCgrieDXJb6VOvPNGnBe3w.aWv/L1d/yTRUGa',0,0,'2017-05-15 17:06:51','2017-05-15 17:06:51');

/*!40000 ALTER TABLE `Accounts` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table Products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Products`;

CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemNum` varchar(255) DEFAULT NULL,
  `itemName` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `colorCode` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `selected` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;

INSERT INTO `Products` (`id`, `itemNum`, `itemName`, `color`, `colorCode`, `img`, `category`, `price`, `selected`, `createdAt`, `updatedAt`)
VALUES
	(1,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','White','#ffffff','/assets/temp/2qdbf1lucj2rrw3jq.jpg','Knit top',11.75,1,'2017-05-16 16:28:36','2017-05-16 16:28:36'),
	(2,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Mocha','#ebd9c6','/assets/temp/2qdbf1lucj2rrx8sj.jpg','Knit top',11.75,0,'2017-05-16 16:29:29','2017-05-16 16:29:29'),
	(3,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Heather Gray','#d9d9d9','/assets/temp/2qdbf1lucj2rrxwcv.jpg','Knit top',11.75,0,'2017-05-16 16:30:00','2017-05-16 16:30:00'),
	(4,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Black','#000000','/assets/temp/2qdbf1lucj2rryadd.jpg','Knit top',11.75,0,'2017-05-16 16:30:18','2017-05-16 16:30:18'),
	(5,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Black/White','#cccccc','/assets/temp/2qdbf1lucj2rryojc.jpg','Knit top',11.75,0,'2017-05-16 16:30:36','2017-05-16 16:30:36'),
	(6,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','White','#ffffff','/assets/temp/2qdbf1lucj2rs6gtp.jpg','Woven top',8.75,0,'2017-05-16 16:36:40','2017-05-16 16:36:40'),
	(7,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','Grey','#d9d9d9','/assets/temp/2qdbf1lucj2rs76ha.jpg','Woven top',8.75,1,'2017-05-16 16:37:13','2017-05-16 16:37:13'),
	(8,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','Blush','#ffccf2','/assets/temp/2qdbf1lucj2rs7jzv.jpg','Woven top',8.75,0,'2017-05-16 16:37:31','2017-05-16 16:37:31'),
	(9,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','Black','#000000','/assets/temp/2qdbf1lucj2rs7vi2.jpg','Woven top',8.75,0,'2017-05-16 16:37:45','2017-05-16 16:37:45'),
	(10,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','White','#ffffff','/assets/temp/2qdbf1lucj2rs9ehz.jpg','Woven top',12.75,0,'2017-05-16 16:38:57','2017-05-16 16:38:57'),
	(11,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','Blush','#ffccf2','/assets/temp/2qdbf1lucj2rs9obo.jpg','Woven top',12.75,1,'2017-05-16 16:39:09','2017-05-16 16:39:09'),
	(12,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','Blue','#b3ccff','/assets/temp/2qdbf1lucj2rsa20r.jpg','Woven top',12.75,0,'2017-05-16 16:39:27','2017-05-16 16:39:27'),
	(13,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','Black','#000000','/assets/temp/2qdbf1lucj2rsalf9.jpg','Woven top',12.75,0,'2017-05-16 16:39:52','2017-05-16 16:39:52'),
	(14,'8834','Crepe Cowl Neck Open Shoulder Flutter Top','White','#ffffff','/assets/temp/2qdbf1lucj2rsbuin.jpg','Woven top',10.75,0,'2017-05-16 16:40:51','2017-05-16 16:40:51'),
	(15,'8834','Crepe Cowl Neck Open Shoulder Flutter Top','Black','#000000','/assets/temp/2qdbf1lucj2rsc433.jpg','Woven top',10.75,1,'2017-05-16 16:41:03','2017-05-16 16:41:03'),
	(16,'9184','One Shoulder Melange French Terry Tee with Raw Edging','Pink','#ffb3ff','/assets/temp/2qdbf1lucj2rsd70y.jpg','Woven top',7.75,1,'2017-05-16 16:41:54','2017-05-16 16:41:54'),
	(17,'9184','One Shoulder Melange French Terry Tee with Raw Edging','Denim','#809fff','/assets/temp/2qdbf1lucj2rse43t.jpg','Woven top',7.75,0,'2017-05-16 16:42:37','2017-05-16 16:42:37'),
	(18,'9184','One Shoulder Melange French Terry Tee with Raw Edging','Charcoal','#737373','/assets/temp/2qdbf1lucj2rseec6.jpg','Woven top',7.75,0,'2017-05-16 16:42:50','2017-05-16 16:42:50'),
	(19,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Teal','#008060','/assets/temp/2qdbf1lucj2rsg9bj.jpg','T-shirt Mini Dress',10.75,1,'2017-05-16 16:44:17','2017-05-16 16:44:17'),
	(20,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Rust','#bf4040','/assets/temp/2qdbf1lucj2rsgkyn.jpg','T-shirt Mini Dress',10.75,0,'2017-05-16 16:44:32','2017-05-16 16:44:32'),
	(21,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Blue','#b3ccff','/assets/temp/2qdbf1lucj2rsgvoq.jpg','T-shirt Mini Dress',10.75,0,'2017-05-16 16:44:46','2017-05-16 16:44:46'),
	(22,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Beige','#d2a679','/assets/temp/2qdbf1lucj2rsh7cr.jpg','T-shirt Mini Dress',10.75,0,'2017-05-16 16:45:01','2017-05-16 16:45:01'),
	(23,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Blue Grey','#7575a3','/assets/temp/2qdbf1lucj2rsj6rc.jpg','T-shirt Mini Dress',10.75,0,'2017-05-16 16:46:33','2017-05-16 16:46:33'),
	(24,'7602','Cotton Slub Vneck Loose Fitting Tee','Sand','#d2a679','/assets/temp/2qdbf1lucj2rsklzl.jpg','Woven Top',8.75,1,'2017-05-16 16:47:40','2017-05-16 16:47:40'),
	(25,'7602','Cotton Slub Vneck Loose Fitting Tee','Navy Blue','#809fff','/assets/temp/2qdbf1lucj2rskw2p.jpg','Woven Top',8.75,0,'2017-05-16 16:47:53','2017-05-16 16:47:53'),
	(26,'7602','Cotton Slub Vneck Loose Fitting Tee','Light Blue','#b3ccff','/assets/temp/2qdbf1lucj2rsl4p4.jpg','Woven Top',8.75,0,'2017-05-16 16:48:04','2017-05-16 16:48:04'),
	(27,'7602','Cotton Slub Vneck Loose Fitting Tee','Black','#000000','/assets/temp/2qdbf1lucj2rsmdki.jpg','Woven Top',8.75,0,'2017-05-16 16:49:02','2017-05-16 16:49:02'),
	(28,'9168','One Shoulder Choker Fitted Top','Sky','#b3ccff','/assets/temp/2qdbf1lucj2rsnmu6.jpg','Woven Top',9.75,0,'2017-05-16 16:50:01','2017-05-16 16:50:01'),
	(29,'9168','One Shoulder Choker Fitted Top','Pink','#ffb3ff','/assets/temp/2qdbf1lucj2rsnxnj.jpg','Woven Top',9.75,0,'2017-05-16 16:50:15','2017-05-16 16:50:15'),
	(30,'9168','One Shoulder Choker Fitted Top','Heather Grey','#d9d9d9','/assets/temp/2qdbf1lucj2rspnr5.jpg','Woven Top',9.75,1,'2017-05-16 16:51:35','2017-05-16 16:51:35'),
	(31,'9168','One Shoulder Choker Fitted Top','Black','#000000','/assets/temp/2qdbf1lucj2rspz8q.jpg','Woven Top',9.75,0,'2017-05-16 16:51:50','2017-05-16 16:51:50');

/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
