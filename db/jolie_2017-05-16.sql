# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.17)
# Database: jolie
# Generation Time: 2017-05-16 16:53:43 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Products`;

CREATE TABLE `Products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `itemNum` varchar(255) DEFAULT NULL,
  `itemName` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;

INSERT INTO `Products` (`id`, `itemNum`, `itemName`, `color`, `img`, `category`, `price`, `createdAt`, `updatedAt`)
VALUES
	(1,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','White','/assets/temp/2qdbf1lucj2rrw3jq.jpg','Knit top',11.75,'2017-05-16 16:28:36','2017-05-16 16:28:36'),
	(2,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Mocha','/assets/temp/2qdbf1lucj2rrx8sj.jpg','Knit top',11.75,'2017-05-16 16:29:29','2017-05-16 16:29:29'),
	(3,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Heather Gray','/assets/temp/2qdbf1lucj2rrxwcv.jpg','Knit top',11.75,'2017-05-16 16:30:00','2017-05-16 16:30:00'),
	(4,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Black','/assets/temp/2qdbf1lucj2rryadd.jpg','Knit top',11.75,'2017-05-16 16:30:18','2017-05-16 16:30:18'),
	(5,'10212','French Terry Lace Up Short Sleeve Tee with Choker Detail','Black/White','/assets/temp/2qdbf1lucj2rryojc.jpg','Knit top',11.75,'2017-05-16 16:30:36','2017-05-16 16:30:36'),
	(6,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','White','/assets/temp/2qdbf1lucj2rs6gtp.jpg','Woven top',8.75,'2017-05-16 16:36:40','2017-05-16 16:36:40'),
	(7,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','Grey','/assets/temp/2qdbf1lucj2rs76ha.jpg','Woven top',8.75,'2017-05-16 16:37:13','2017-05-16 16:37:13'),
	(8,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','Blush','/assets/temp/2qdbf1lucj2rs7jzv.jpg','Woven top',8.75,'2017-05-16 16:37:31','2017-05-16 16:37:31'),
	(9,'9073','Short Sleeve Ruffle Round Neck Rayon Spandex Top','Black','/assets/temp/2qdbf1lucj2rs7vi2.jpg','Woven top',8.75,'2017-05-16 16:37:45','2017-05-16 16:37:45'),
	(10,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','White','/assets/temp/2qdbf1lucj2rs9ehz.jpg','Woven top',12.75,'2017-05-16 16:38:57','2017-05-16 16:38:57'),
	(11,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','Blush','/assets/temp/2qdbf1lucj2rs9obo.jpg','Woven top',12.75,'2017-05-16 16:39:09','2017-05-16 16:39:09'),
	(12,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','Blue','/assets/temp/2qdbf1lucj2rsa20r.jpg','Woven top',12.75,'2017-05-16 16:39:27','2017-05-16 16:39:27'),
	(13,'9236','Crepe Cowl Neck Open Shoulder Flutter Top','Black','/assets/temp/2qdbf1lucj2rsalf9.jpg','Woven top',12.75,'2017-05-16 16:39:52','2017-05-16 16:39:52'),
	(14,'8834','Crepe Cowl Neck Open Shoulder Flutter Top','White','/assets/temp/2qdbf1lucj2rsbuin.jpg','Woven top',10.75,'2017-05-16 16:40:51','2017-05-16 16:40:51'),
	(15,'8834','Crepe Cowl Neck Open Shoulder Flutter Top','Black','/assets/temp/2qdbf1lucj2rsc433.jpg','Woven top',10.75,'2017-05-16 16:41:03','2017-05-16 16:41:03'),
	(16,'9184','One Shoulder Melange French Terry Tee with Raw Edging','Pink','/assets/temp/2qdbf1lucj2rsd70y.jpg','Woven top',7.75,'2017-05-16 16:41:54','2017-05-16 16:41:54'),
	(17,'9184','One Shoulder Melange French Terry Tee with Raw Edging','Denim','/assets/temp/2qdbf1lucj2rse43t.jpg','Woven top',7.75,'2017-05-16 16:42:37','2017-05-16 16:42:37'),
	(18,'9184','One Shoulder Melange French Terry Tee with Raw Edging','Charcoal','/assets/temp/2qdbf1lucj2rseec6.jpg','Woven top',7.75,'2017-05-16 16:42:50','2017-05-16 16:42:50'),
	(19,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Teal','/assets/temp/2qdbf1lucj2rsg9bj.jpg','T-shirt Mini Dress',10.75,'2017-05-16 16:44:17','2017-05-16 16:44:17'),
	(20,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Rust','/assets/temp/2qdbf1lucj2rsgkyn.jpg','T-shirt Mini Dress',10.75,'2017-05-16 16:44:32','2017-05-16 16:44:32'),
	(21,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Blue','/assets/temp/2qdbf1lucj2rsgvoq.jpg','T-shirt Mini Dress',10.75,'2017-05-16 16:44:46','2017-05-16 16:44:46'),
	(22,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Beige','/assets/temp/2qdbf1lucj2rsh7cr.jpg','T-shirt Mini Dress',10.75,'2017-05-16 16:45:01','2017-05-16 16:45:01'),
	(23,'9206','Cupro Modal T Shirt Mini Dress with Shoulder Lace Up Trim','Blue Grey','/assets/temp/2qdbf1lucj2rsj6rc.jpg','T-shirt Mini Dress',10.75,'2017-05-16 16:46:33','2017-05-16 16:46:33'),
	(24,'7602','Cotton Slub Vneck Loose Fitting Tee','Sand','/assets/temp/2qdbf1lucj2rsklzl.jpg','Woven Top',8.75,'2017-05-16 16:47:40','2017-05-16 16:47:40'),
	(25,'7602','Cotton Slub Vneck Loose Fitting Tee','Navy Blue','/assets/temp/2qdbf1lucj2rskw2p.jpg','Woven Top',8.75,'2017-05-16 16:47:53','2017-05-16 16:47:53'),
	(26,'7602','Cotton Slub Vneck Loose Fitting Tee','Light Blue','/assets/temp/2qdbf1lucj2rsl4p4.jpg','Woven Top',8.75,'2017-05-16 16:48:04','2017-05-16 16:48:04'),
	(27,'7602','Cotton Slub Vneck Loose Fitting Tee','Black','/assets/temp/2qdbf1lucj2rsmdki.jpg','Woven Top',8.75,'2017-05-16 16:49:02','2017-05-16 16:49:02'),
	(28,'9168','One Shoulder Choker Fitted Top','Sky','/assets/temp/2qdbf1lucj2rsnmu6.jpg','Woven Top',9.75,'2017-05-16 16:50:01','2017-05-16 16:50:01'),
	(29,'9168','One Shoulder Choker Fitted Top','Pink','/assets/temp/2qdbf1lucj2rsnxnj.jpg','Woven Top',9.75,'2017-05-16 16:50:15','2017-05-16 16:50:15'),
	(30,'9168','One Shoulder Choker Fitted Top','Heather Grey','/assets/temp/2qdbf1lucj2rspnr5.jpg','Woven Top',9.75,'2017-05-16 16:51:35','2017-05-16 16:51:35'),
	(31,'9168','One Shoulder Choker Fitted Top','Black','/assets/temp/2qdbf1lucj2rspz8q.jpg','Woven Top',9.75,'2017-05-16 16:51:50','2017-05-16 16:51:50');

/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
