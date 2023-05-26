--#1 date, heure, immatriculation, marque, modèle, 
--nom et prénom de l'expert des véhicules à expertiser, 
--trié par date et heure croissantes :

SELECT ve.date, ve.heure, ve.immatriculation, ve.marque, ve.modele, exp.nom, exp.prenom
FROM vehicules_expertise ve
JOIN experts exp ON ve.expert_id = exp.experts_id
ORDER BY date ASC, heure ASC;


--#2Nombre de véhicules expertisés en 2018 pour chaque expert (nom et prénom) 

SELECT exp.nom, exp.prenom, COUNT(ve.expert_id) AS nombre_vehicules_expertises
FROM vehicules_expertise ve
JOIN experts exp ON ve.expert_id = exp.expert_id
WHERE YEAR(date) = 2018
GROUP BY ve.expert_id;


--#3 Liste des garages (identifiant, nom, ville et téléphone) 
--dans lesquels il y a eu plus de 100 missions créées 
SELECT g.garage_id, g.nom, g.ville, g.telephone
FROM garages g
JOIN vehicules_expertise ve ON g.garage_id = ve.garage_id
GROUP BY g.garage_id
HAVING COUNT(ve.garage_id) > 100;

--#4
CREATE TABLE IF NOT EXISTS `experts` (
  `experts_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar (50),
  `prenom` varchar(50),
  PRIMARY KEY (`experts_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

--#5

CREATE TABLE IF NOT EXISTS `vehicules_expertise` (
  `vehicules_expertise_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `heure` varchar(255) DEFAULT NULL,
  `immatriculation` varchar(255) DEFAULT NULL,
  `marque` varchar(255) DEFAULT NULL,
  `immatriculation` varchar(255) DEFAULT NULL,
  `modele` varchar(255) DEFAULT NULL,
  `expert_id` int(11) NOT NULL,
  PRIMARY KEY (`vehicules_expertise_id`),
  KEY `expert_id` (`expert_id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--#6

INSERT INTO experts (nom, prenom)
VALUES
  ('Doe', 'John'),
  ('Smith', 'Jane'),
  ('Johnson', 'Michael');

INSERT INTO vehicules_expertise (date, heure, immatriculation, marque, modele, expert_id)
VALUES
  ('2023-05-26', '10:00:00', 'ABC123', 'Marque A', 'Modèle A', 1),
  ('2023-05-27', '14:30:00', 'DEF456', 'Marque B', 'Modèle B', 2),
  ('2023-05-28', '09:15:00', 'GHI789', 'Marque C', 'Modèle C', 1);

--#7
DELETE FROM experts
WHERE nom = 'Doe' AND prenom = 'John';


