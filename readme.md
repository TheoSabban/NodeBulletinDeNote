## Génération de bulletins de notes en NodeJS

Application Node.js qui s'exécute dans le terminal et affiche le bulletin d'un élève : son identité, puis les notes de chaque matière

## Fonctionnement

1. Le fichier student.json contient les données de l'élève : prénom, nom de famille, date de naissance et les notes classées par matière.
2. Le fichier tools.js contient la fonction notes, qui reçoit le nom d'une matière, l'affiche en majuscules puis affiche chaque note sur une ligne grâce à une boucle.
3. Le fichier index.js importe les données et la fonction, puis affiche le prénom suivi du nom en majuscules avec toUpperCase et la date de naissance.
4. Il récupère ensuite toutes les matières avec Object.keys et appelle la fonction notes pour chacune d'elles grâce à encore une fois une boucle.
5. Le script dev du fichier package.json lance le projet avec node index.js, et les import et export sont utilisés dans les différents fichiers pour récupérer les fonctions et infos dont on a besoin.

## Technologies utilisées

- JavaScript
- Node.js

Auteur : Théo Sabban
