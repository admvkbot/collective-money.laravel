-- MySQL dump 10.16  Distrib 10.1.38-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cm
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product_activities`
--

DROP TABLE IF EXISTS `product_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_activities` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint unsigned NOT NULL,
  `product_activitie_type_id` int NOT NULL,
  `close_at` datetime DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `source_url` text COLLATE utf8mb4_unicode_ci,
  `is_moderated` tinyint(1) NOT NULL DEFAULT '0',
  `moderate_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_activities`
--

LOCK TABLES `product_activities` WRITE;
/*!40000 ALTER TABLE `product_activities` DISABLE KEYS */;
INSERT INTO `product_activities` VALUES (1,1,1,'2022-08-17 23:59:00','erwrwerwrwerwer',NULL,1,0,'2022-08-12 03:07:13','2022-08-12 03:07:13'),(2,1,5,'2022-08-20 23:59:00','eweqweqweqwe',NULL,1,0,'2022-08-12 05:07:19','2022-08-12 05:07:19'),(3,1,6,'2022-08-17 23:59:00','fgsdsdfsdfdsfsdf',NULL,1,0,'2022-08-12 05:11:22','2022-08-12 05:11:22'),(5,1,2,'2022-09-12 23:59:00','ddddddddsss',NULL,1,0,'2022-08-12 12:42:56','2022-08-12 12:42:56'),(6,1,5,'2022-10-12 23:59:00','wewqeqweqweqweqwe','https://google.com/',1,0,'2022-08-12 12:46:06','2022-08-14 03:55:42');
/*!40000 ALTER TABLE `product_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_activity_types`
--

DROP TABLE IF EXISTS `product_activity_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_activity_types` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `badge_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `colour_marker` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_activity_types_name_unique` (`name`),
  UNIQUE KEY `product_activity_types_badge_name_unique` (`badge_name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_activity_types`
--

LOCK TABLES `product_activity_types` WRITE;
/*!40000 ALTER TABLE `product_activity_types` DISABLE KEYS */;
INSERT INTO `product_activity_types` VALUES (1,'Получение White List','WL','','primary',NULL,NULL),(2,'Получение роли в Discord','Discord Role','','secondary',NULL,NULL),(3,'Розыгрыш токенов','Token Game','','success',NULL,NULL),(4,'Ретродроп','Retrodrop','','danger',NULL,NULL),(5,'Аирдроп токенов','Airdrop Token','','warning',NULL,NULL),(6,'Тестнет','Testnet','','info',NULL,NULL),(7,'Амбасcадорская программа','Ambassador','','dark',NULL,NULL),(8,'Нода','Node','','primary',NULL,NULL),(9,'TGE  - генерация токенов','TGE','','success',NULL,NULL),(10,'Листинг на бирже','Listing','','warning',NULL,NULL);
/*!40000 ALTER TABLE `product_activity_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-14 12:17:15
