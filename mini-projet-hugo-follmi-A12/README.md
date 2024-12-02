# Serveur REST et OpenAPI sur des musiques

## Introduction

Ce projet combine un générateur de données musicales en Python et une API REST en Node.js. Le système permet de gérer et
d'accéder à des données concernant des artistes, des albums, des pistes et des producteurs et des musiques.

## Spécification du système

Pour voir la spécification système tout est expliqué dans ici → [SPECIFICATION](SPECIFICATION.md).

## Prérequis

- Node.js (v14 ou supérieur)
- Python 3.x
- npm
- pip

## Lancer le serveur

Pour lancer le serveur, placez-vous dans le dossier `Node.js` et installer les dépendances du projet:

```
cd Node.js/
npm install
```

Ensuite, pour lancer le serveur :

```
npm start
```

Le serveur est accessible à l'adresse `http://localhost:3000`.

Puis pour plus d'informations, vous pouvez aller voir la documentation de l'API qui regroupe toutes les méthodes
présentes
sur le serveur : `http://localhost:3000/docs`

## Jeu de données

Pour le jeu de données, je l'ai réalisé à l'aide d'un script python → [SCRIPT](Node.js/data/scriptMusic.py).

Ce script génère un ensemble de données musicales fictives au format JSON, incluant des artistes, producteurs, albums et
morceaux. Il crée automatiquement des titres uniques, des statistiques d'écoute et des détails musicaux, le tout avec
des relations cohérentes entre les différentes entités.

Grâce à ce script la réalisation des données est simple voici la commande pour avoir de nouvelles données si vous le
souhaitez.

Pré-requis :

```
pip3 install faker
```

Faker est une bibliothèque Python qui permet de générer des données factices réalistes (comme des noms, adresses,
numéros de téléphone, etc.) utiles pour le développement et les tests.

Pour le lancer depuis la racine du projet :

```
python3 Node.js/data/scriptMusic.py
```

Depuis le dossier `data` :

```
pyhton3 scriptMusic.py
```

Le reste du serveur fonctionne toujours lorsque l'on change les données.

## Méthodologie

Je me suis d'abord occupé de faire la spécification OpenAPI car je me suis basé sur la méthode API First vue lors du
TP4.

J'ai commencé à réaliser la spécification OpenAPI complète et détaillée, puis j'ai utilisé la fonctionnalité de
l'éditeur Swagger `generate server` afin de générer une archive contenant ma base de code.

Ensuite, j'ai modifié les contrôleurs et les routes pour qu'elles correspondent à mes besoins.
J'ai par la suite ajouté toutes les méthodes dans les services pour que le serveur puisse fonctionner correctement.

Je me suis rendu compte d'une incohérence dans mes données et j'ai donc décidé de créer un script python pour générer de
nouvelles données. Ce script permet de générer des données cohérentes et réalistes pour le serveur facilement.

Enfin, j'ai réalisé des tests unitaires pour chaque méthode de chaque service pour m'assurer que le serveur fonctionne
de
manière optimale.

## Auteurs

[Hugo Föllmi A12]
