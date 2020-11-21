<div align="center">
    <img src="src/images/CoHub_icon.png" alt="drawing" width="200px;" />
    <h1>
        <b>
            <a style="color: black" href="https://cohub-9d62b.firebaseapp.com/">CoHub</a>
        </b>
    </h1>
    <h3>Une solution de partage et d'entraide à l'ENIB</h3>
</div>

<br/>
<br/>

# ❓ I- Quel est le problème ? 
 
Alors que les réseaux sociaux sont l’objet de critiques, des réseaux d’échanges et de partage se diversifient et se spécialisent dans de nombreux domaines, du simple partage de fichiers à des applications ou des sites spécifiques de prêts et d’échanges entre particuliers. 
C’est une pratique qui progresse et qui s’accompagne d’une image positive. 
 
Des applications mobiles ou des sites internet existent déjà mais sont organisés autour de besoins spécifiques. Comment partager localement, à l’échelle de l’ENIB, à la fois des biens, un coup de main, des compétences ? 
 
Il s’agit par exemple de pouvoir éviter des achats individuels difficiles à rentabiliser ou utilisables seulement de manière occasionnelle ce qui peut permettre une maîtrise de la consommation, des économies et rend service aussi à la planète !

<br/>

# 📣 II- Notre solution 
 
Notre solution est **le site internet CoHub**. C’est un site de partage et d’échange fait par des étudiants de l’ENIB pour répondre aux demandes spécifiques des étudiants de l’ENIB. **Le site** a pour ambition de faciliter **le partage**, **la collaboration** et **l’entraide**. 
 
**CoHub** recense donc toutes les **demandes d’aide** car nous pensons qu’elles ont plus de chances d’aboutir ainsi. Pour stimuler les interactions, **il doit être accessible à tous les étudiants de l’ENIB**. **CoHub** doit aussi **être disponible à partir de n’importe quelle interface utilisateur** (téléphone, tablette ou ordinateur) **à tout moment** et en tout lieu où une **connexion internet est possible**. Pour plus d’efficacité, toutes les demandes sont classées par catégorie afin de faciliter des réponses expertes. 
 
La consultation des demandes émises **n’est pas restreinte**, par contre dans un souci de sécurité, **l’émission** ou la **réponse** à **une demande** est contrôlée par **un identifiant** et **un mot de passe**. 
 
Afin de répondre à ces différents besoins, le site **CoHub** collecte les demandes d'aide, les range par catégorie et les rend disponibles à la consultation. 
Les trois catégories prédéfinies sont **tutorat**, **covoiturage** et **prêt d'objets**. Il serait très facile d'implémenter des catégories supplémentaires.

Le site **CoHub** doit permettre **sans authentification de consulter toutes les demandes en cours** et aussi de **consulter une demande particulière** afin d'avoir plus de détails sur celle-ci. La consultation de demandes **peut être filtrée** par **catégorie** ou par **mot-clé**. 


> ### >>>  [En savoir plus sur le projet](./docs/Dossier_CoHub.pdf)

<br/>

# 📦 Installation du projet

1. Installer la dernière version de [nodeJs](https://nodejs.org/en/)

2. Cloner le dépôt GitLab sur votre répertoire
```bash
git clone https://git.enib.fr/d5levequ/CoHub.git
```

3. Se rendre dans le répertoire à l'aide d'un terminal
```bash
cd CoHub
```

4. Installer les dépendances du projet
```bash
npm install
```
5. Projet Installé


# 📋 Liste des différentes commandes du projets

Dans le dossier du projet, vous pouvez lancer les commandes suivantes:

```bash
npm start
```
Lance l'application en mode développement. Un serveur de développement est lancée sur votre machine. Lorsque l'application est chargée, une page internet est ouverte dans votre navigateur favori à l'adresse [http://localhost:3000](http://localhost:3000)

Dans ce mode, la page se recharge à chaque modification de fichier

<br/>

```bash
npm run build
```
Passe l'application en mode production. Tous les outils de débug sont désactivés. L'ensembles des fichiers sont minifiés (optimisés) et des hash sont ajouter sur les noms des fichiers.

A la fin de l'execution de la commande, un dossier build est généré à la racine du projet, permettant de déployer notre application pour être ensuite hébergée.

<br/>

```bash
npm run server
```
Lance un serveur de distribution
**lorsque l'application a été générer** (la commande build doit être lancée avant).

Le serveur distribue les fichiers à l'adresse [http://localhost](http://localhost)

<br/>

```bash
npm run test
```
Lance les tests unitaires de l'application.
Pour plus d'information sur les [tests unitaires](https://facebook.github.io/create-react-app/docs/running-tests)

# 📡 Déployer le projet sur Firebase

1. Lancer le build du projet
```bash
npm run build
```

2. Se connecter à Firebase
```bash
npx firebase login
```

3. Déployer l'application sur Firebase
```bash
npx firebase deploy
```

4. Application hébergé sur [Firebase]("https://cohub-9d62b.firebaseapp.com/")
