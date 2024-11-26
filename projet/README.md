# Serveur REST et OpenAPI sur des musiques

## Introduction

Ce projet combine un générateur de données musicales en Python et une API REST en Node.js. Le système permet de gérer et
d'accéder à des données concernant des artistes, des albums, des pistes et des producteurs et des musiques.

## Spécification du système

Pour voir la spécification système tout est expliqué dans ici → [SPECIFICATION](SPECIFICATION.md).

## Lancer le serveur

Pour lancer le serveur, placez-vous dans le dossier `Node.js` :

```
cd Node.js/
```

En suite, vous pouvez lancer le serveur avec la commande :

```
npm start
```

Puis pour d'informations, vous pouvez aller voir la documentation de l'API qui regroupe toutes les méthodes présentent
sur le serveur :

```
http://localhost:3000/docs
```

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
pyhton3 Node.js/data/scriptMusic.py
```

Depuis le dossier `data` :

```
pyhton3 scriptMusic.py
```

Le reste du serveur fonctionne toujours quand on change les données.

## Méthodologie

Je me suis d'abord occupé de faire la spécification OpenAPI car je me suis basé sur comment nous devions faire lors du
TP4.

J'ai donc commencé par faire une spécification OpenAPI complète et détaillée, puis j'ai utilisé la fonctionnalité de
l'éditeur Swagger afin de générer une archive contenant ma base de code.

Je me suis d'abord occupé de faire la spécification OpenAPI car je ne savais pas comment m'y prendre et en regardant le
TP4, j'ai vu qu'on pouvait utiliser l'éditeur Swagger pour générer automatiquement un serveur Node.js à
partir de la spécification.

C'est comme ça que j'ai commencé à développer mon API, en partant d'une doc bien détaillée.