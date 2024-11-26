# Inidcation de lancement et details

## Spécification du système

Pour voir la spécification système tout est expliqué dans ici → [SPECIFICATION](SPECIFICATION.md)

## Lancer le serveur

Pour lancer le serveur, placez-vous dans le dossier Node.js :

```
cd Node.js
```

En suite vous pouvez lancer le serveur avec la commande :

```
npm start
```

Puis pour d'informations sur les méthodes que propose le serveur, vous pouvez aller voir la documentation de l'API

```
http://localhost:3000/docs
```

## Jeu de données

Pour le jeu de données, je l'ai réalisé à l'aide d'un script python [SCRIPT](Node.js/data/scriptMusic.py)

Grâce à se script la réalisation des données est simple voici la commande pour avoir de nouvelles données si vous le
souhaitez.

Pré-requis

```
pip3 install faker
```

Pour le lancer depuis la racine du projet

```
pyhton3 Node.js/data/scriptMusic.py
```

Depuis le dossier data

```
pyhton3 scriptMusic.py
```

Le reste du serveur fonctionne toujours quand on change les données.

This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which
does most all the work.
