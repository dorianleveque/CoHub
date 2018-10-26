# Documentation: CoHub

>## Description du projet

Lien prototype : https://tinyurl.com/CoHubTest

vulgariser la technique
Chercher se que veut dire le stéréotype "static" en UML
* page titré
* un résumé / mot-clés en français
* table des matière sommaire herarchisé

* corps du rapport
    * situtation intro
    * problème
    * résolution
        * maquette + logo
        * style correct dans les présentations des diagrammes
        * les figures doivent être cités dans les différents paragraphes
    * implication / mise en oeuvre

* conclusion
* annexes

# __Introduction__
Pas de tente pour le weekend d’intégration? Qui a une visseuse pour installer une étagère? Qui a une imprimante ? Besoin d’aide en maths la veille d’un DS ? Qui rentre à Quimper ce weekend ?
Toutes ces situations racontent un quotidien des énibien·ne·s.
Parfois les réponses peuvent être si nombreuses que refuser devient un casse-tête. Mais d'autres fois des questions restent sans solution.
C'est la répétition de ces tracas tout au long de notre formation qui nous a donné l'idée de CoHub : un site internet qui permet facilement et efficacement à tout enibien-ne de partager des biens et des services .

No tent before the WAF ? Who has a screwdriver to install this shelf ? Who has a printer ? Need help in math the day before an interrogation ? Who goes back to Quimper this weekend ?
All of those situations are a common occurrence for an Enibien. 
Sometimes those answers can be so numerous that refusing one can be a baffling problem. But also sometimes the questions have no answer.
It's the repetition of this hassle all along our formation that gave us the idea of CoHub : a website that allows any Enibien to easily and efficiently share goods or services. 



# __Mots clés__
partage, échange, entraide, service centralisé

# __Qu'est-ce qui pose problème__
Alors que les réseaux sociaux sont l’objet de critiques, des réseaux d’échanges et de partage se diversifient et se spécialisent dans 
de nombreux domaines, du simple partage de fichiers à des applications ou des sites spécifiques de prêts et d’échanges entre particuliers.
C’est une pratique qui progresse et qui s’accompagne d’une image positive.
Des applications mobiles ou des sites internet existent déjà mais sont organisés autour de besoins spécifiques.

Comment localement, à l’échelle de l’ENIB, partager à la fois des biens, un coup de main, des compétences ?

Il s’agit par exemple de pouvoir éviter des achats individuels difficiles à rentabiliser 
ou utilisables seulement de manière occasionnelle ce qui peut permettre une maîtrise de la consommation, 
des économies et rend service aussi à la planète !

# __Solution__
Notre solution est le site internet CoHub. C’est un site de partage et d’échange fait par des étudiants de l’ENIB pour répondre aux demandes spécifiques des étudiants de l’ENIB. Le site a pour ambition de faciliter le partage, la collaboration et l’entraide.
CoHub recense donc toutes les demandes d’aide car nous pensons qu’elles ont plus de chances d’aboutir ainsi. Pour stimuler les interactions, il doit être accessible à tous les étudiants de l’ENIB. CoHub doit aussi être disponible à partir de n’importe quelle interface utilisateur (téléphone, tablette ou ordinateur) à tout moment et en tout lieu où une connexion internet est possible. Pour plus d’efficacité, toutes les demandes sont classées par catégorie afin de faciliter des réponses expertes.
La consultation des demandes émises n’est pas restreinte, par contre dans un souci de sécurité, l’émission ou la réponse à une demande est contrôlée par un identifiant et un mot de passe.

# __Maquette__

Afin de répondre à ces différents besoins,le site Cohub collecte les demandes d'aide, les range par catégorie et les rend disponibles à la consultation. 
Les trois catégories pré-définies sont tutorat, covoiturage et prêt d'objets.Il serait très facile d'impléménter des catégories supplémentaires.
Le site CoHub doit permettre sans authentification de consulter toutes les demandes en cours 
et aussi de consulter une demande particulière afin d'avoir plus de détails sur celle-ci. La consultation de demandes peut être filtrée par catégorie ou par mot-clé.


Voici la page d'accueil de CoHub où l'on peut consulter l'ensemble des demandes:


Voici un exemple de demande:


Voici la manière de selectionner une catégorie:


Voici le bandeau de recherche filtrée par mot-clé:


CoHub doit permettre, avec authentification, de créer une nouvelle demande ou de répondre à une demande via un système de messages entre le demandeur et l'aidant.
CoHub doit aussi permettre, avec authentification,à un demandeur d'éditer sa demande déjà existante afin de la modifier.


Voici la fenêtre d'authentification:


Voici la page de création ou d'édition d'une demande:


Voici la page permettant à l'aidant potentiel de dialoguer avec le demandeur:

# __Modélisation UML__

L’acronyme UML signifie Unified Modeling Language. 
C’est un langage normé de modélisation graphique d’un système utilisé pour concevoir et documenter un système indépendamment d’un langage de programmation.
L’UML permet de décrire le système d’un point de vue statique et dynamique.

PlantUML est le modeleur  que nous avons utilisé pour modéliser CoHub. 
Nous avons choisi ce modeleur car il repose sur un langage simple  pour la réalisation des diagrammes. 
Durant cette phase de conception nous avons utilisé un gitlab (un site de partage et de gestion pour le développement informatique). 
Il était donc très facile de pouvoir se partager les différents diagrammes entre les membres du groupe.


-----------------------
>## Diagrammes Cas d'utilisations

Apres un analyse fonctionnelle, l’élaboration du diagramme de cas d’utilisation est la première étape UML d’analyse d’un système.
Ce diagramme recense et synthétise les grandes fonctionnalités du système du point de vue de l’utilisateur.
Il permet aussi d’identifier les éléments extérieurs qui interagissent avec le système.
Voici le diagramme de cas d’utilisation de CoHub: 


![diagramme cas utilisation](http://www.plantuml.com/plantuml/png/XLFDJW8n4Bvlik_Gx0Kzi8aOGSo6O53ZMSFDIzaEqAJR9Trfeb7VnIlFmOivRIq1bv-zTRwVVfsP7JV83TfACI7vml2g0bRoXbcKIZOSPQtJ12MgK1QTFI1D5CoHOSsCN2oHF0oK0U8brePD_zXW3IDvjdFEM56iZAou-HYD8lzU2gundXwWubeGrzsqQrLyTRjRRWlOaxb0N2yeVpQfd-qiOvzfmkYp3T2BW4qdLpxQfDQDLGY6lMccEg0Rg6OaevC0UdamRRB_wbvRRJL4Vej-xUbFKg41qq9lWfdPhCdfb4tV4n-5n3F4WIU-RDQhMWi3RFDpBk6jLxnskCKbQ9HpUI3eC93ioesm5I6mTmT3OxcWJbyUGteHeMaKUUuRTKSR0ky8MhW5SMXqtaxOgQbh1wl3WzM-yuW-OOK2C8W11YpFHxuFBe3KfR82OW8tefDm_pGyF0P_fycONaf_uYy0 "diagramme cas utilisation")


Lorsque l’utilisateur se connecte au site CoHub, il peut consulter l’ensemble des demandes d’aide émises affichées sur la page d’accueil. 
Il peut aussi filtrer les demandes c’est-à-dire effectuer une recherche par mot-clé ou par catégorie. Il lui est aussi possible de consulter une demande en particulier: afficher plus de détails la concernant. 
L’utilisateur s’authentifie s’il souhaite répondre à une demande ou bien poster une demande. 
Après l’authentification, il a la possibilité de créer une nouvelle demande ou d'éditer ses demandes pour les modifier ou les supprimer. 
Lorsque l’aidant souhaite répondre à une demande il peut discuter par message de la solution avec le demandeur.

------------------------
>## Scénario

La deuxième étape lors de la création d’un système consiste à décrire textuellement chaque cas d’utilisation. C’est ce qu’on appelle un scénario. Dans chaque scénario on décrit chronologiquement l’enchainement des étapes qui constituent le cas d’utilisation grâce à un scénario nominal, des scénarios alternatifs et des scénarios d’échec.
En ce qui concerne CoHub, nous avons réalisé 8 <b>(à vérifier)</b> scénarios. Nous avons regroupé certaines extensions optionnelles dans des scénarios alternatifs.

* ## _Consulter l'ensemble des demandes_

    ### Scénario
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal "Consulter l’ensemble des demandes"</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur accède à la page <br>
            2. Le système recupere l'ensmble des demandes en cour au pres de la base de donnée <br>
            3. Le système affiche une miniature de chaque demande en cour <br>
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif "Consulter l’ensemble des demandes" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            SA1 : L’utilisateur applique un filtre <br>
            SA1 : Démarre au point 3 du scénario nominal <br>
            4. Le système recupere l'ensemble des demandes en cour filtré au pres de la base de donnée <br>
            7.Le système affiche une miniature de chaque demande en cour filté<br>
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur "Consulter l’ensemble des demandes" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>

* ## __Consulter une demande__

    ### Scénario
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal "Consulter une demande" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur accède à la page <br>
            2. Le système recupere la demande au pres de la base de donnée <br>
            3. Le système affiche la demande <br>
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif "Consulter une demande"</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur "Consulter une demande"</th>
    </tr>
    <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>

* ## _S'authentifier_
    
    

    ### Scénario
    __Pré-requis : l'utilisateur s'est déjà enregistré dans la base de données__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal "S’authentifier" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L'utilisateur accède a la page<br>
            2. L’utilisateur saisit son identifiant et son mot de passe <br>
            3. Le système vérifie la syntaxe des champs <br>
            4. Le système vérifie l'identifiant et le mot de passe à l’aide de la base de données <br>
            5. Le système valide la connexion
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif "S’authentifier" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur "S’authentifier" </th>
    <tr>
        <td>Description</td>
        <td>
            SE1: l'identifiant et/ou le mot de passe ont une mauvaise syntaxe <br>
            SE1 démarre au point 2  du scénario nominal <br>
            3. Le système indique à l’utilisateur que son identification a échouée <br>
            Le scénario nominal reprend au point 1 <br>
            <br>
            SE2: l'identifiant et/ou le mot de passe sont erronés <br>
            SE2 démarre au point 3  du scénario nominal <br>
            3. Le système indique à l’utilisateur que son identification a échouée <br>
            Le scénario nominal reprend au point 1
        </td>
    </tr>
   <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>

* ## _Créer une demande_

    ### Scénario
    __Pré-requis: le demandeur s’est authentifié et a appuiée sur le bouton "création de demande"__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal "Créer une demande" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. Le demandeur saisit les informations relatives à sa demande <br>
            2. Le demandeur valide <br>
            3. Le système vérifie si l’ensemble des champs obligatoire on été remplis <br>
            4. Le système transmet les information a la base de donnée affin d'être enregistré <br>
            5. Le système indique a l'utilisateur que les informations sont enregistré <br>
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif "Créer une demande" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur "Créer une demande" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
        SE1 : Les informations ne sont pas correctes<br>
        SE1 démarre au point 3 du scénario nominal<br>
        5. Le système indique à l'utilisateur qu'une partie des informations sont erronée
        </td>
    </tr>
    </table>
    <br>
    <br>

* ## _Éditer une demande_

    ### Scénario
    __Pré-requis: le demandeur s’est authentifié et consulte une demande __
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal "Éditer une demande" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. Le systheme verifie si c'est l'utilisateur courant qui a créée la demande  <br>
            2. Le demandeur appuie sur le bouton "édite une demande" <br>
            3. Le demandeur modifie les informations <br>
            4. Le demandeur valide sa demande <br>
            5. Le système vérifie l’ensemble des informations
            6. le systeme enregistre les information dans la basse de donnée
            7. Le systeme la demande modidier
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif "Éditer un ticket" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur "Éditer un ticket" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
        SE1 : L'utilisateur courant n'est pas le demandeur<br>
        SE1 départ au point 1 du scénario nominal<br>
        Le cas d'utilisation se termine en echec (l'objectif n'est pas atteint)<br>
        SE2 : Les informations ne sont pas correctes<br>
        SE2 départ au point 5 du scénario nominal<br>
        6. Le système indique à l'utilisateur qu'une partie des informations est erronée
        Le cas d'utilisation se termine en echec (l'objectif n'est pas atteint)
        </td>
    </tr>
    </table>
    <br>
    <br>
    
* ## _Répondre à une demande_


    ### Scénario
    __Pré-requis: l'aidant s’est authentifié et consulte une demande__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal "Répondre à une demande"</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’aidant saisie un message a destination du demendeur <br>
            2. L’aidant valide son message en appuyant sur le bouton "proposer une demande"<br>
            3. Le systeme enregiste le message dans la base de donnée <br>
            4. Le systeme enregistre l'aidant dans la demande
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif "Répondre à une demande"</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            SA1: L'aidant est déja enregistré dans la demande
            SA1 démarre 3 au point du scénario nominal
            Le scénario se termine
        </td>
        
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur "Répondre à une demande" </th>
    </tr>
    <tr>
        <td>Description</td>
         <td>
        </td>
    </tr>
    </table>
    <br>
    <br>
    
    * ## _Supprimer une demande_
* 
    ### Scénario
     __Pré-requis: l’utilisateur s’est authentifié et consulte un des tickets qu’il a créés__

     <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal "Supprimer une demande"</th>
    </tr>
    <tr>
        <td>Description</td> 
        <td>
            1. Le systheme verifie si c'est l'utilisateur courant qui a créée la demande  <br>
            2. Le demandeur appuie sur le bouton "supprimer" <br>
            3. le systeme suprimme les information relative a la demande dans la basse de donnée
            4. Le syteme affiche la page d'acceuil
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif "Supprimer une demande" </th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur "Supprimer une demande" </th>
    </tr>
  <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>



> ## Diagrammes de séquence

La troisième étape dans la création d’un système consiste à formaliser les scénarios.  Pour cela, on utilise les diagrammes de séquence qui ont donc pour but de montrer comment les objets qui participent au scénario communiquent pour réaliser les fonctionnalités souhaitées. Un diagramme de séquence correspond à un scénario .

## _Consulter l'ensemble des demandes_
![consulter l'ensemble des demandes](http://www.plantuml.com/plantuml/png/fLLBRjim4DqBq1q6tYHPUD7qip0S8KsttHHe3a1BauWeBGearSQtwR8zXo_MuP2IAKjs7DImON7uE3Dl7XzqRvqmhjigA7LZE-NGWBh2nk9sen0gjFJRYeOUyin9Hx4BW7acIgSDb4fYuq1OM3mwgQGL3Zkp06qgEluEygobwhAKhV2mjcNewdFRzfXRmbJ2YOsm29kgOi23NrJqrKsp_uiBYE1FULPBYZzfxJRw9SzY_MLHSFALAClz7mBiVuCIq8fd16vL_gJ6F8IE6FJFJfMXb--o_87kgxJkYswSqGg7_j_JMSgwB1YzWlKw72uAda2wPL6OiWwvxFLDMfK0D5b24TWJN06-ODav_DQXsLtV953Q3j3rUhaCgmh7ktccjEOnAjqy-tzNey4h2mQzQYGEq2Uox2pHO9gFzi3hGy34dXWp9ZVT3Nk1ds_P8uR6F6PKrZ4kdMzV-cF0SLO_l02Shyv32FL3C9b5A8bD5NHWA0ywmV3wIATAsbQ9tI3KiKvnl1BkOczsq6xejSzHTzjD8wGQPs5Kec88h63SMaGnWRx9SoHqw-8TWr_IrV0alK6Zs0U699GYL49l91Gdyv50ycwW2F4pekfL8RUJ9tQzB4453WqSV8nvzAqSU1o95hcCMvwO9rBp7ffl_hIN-gD79zauerirHARs6iRpciKkjTdhLhlCRYSiznRRNMIza_QRjU3_gp-rvBaxcnfpzjQUCEXaWkdr7L4-67Q6zEobJyYVuyxu-CRYIlm-Ib2yphDx0j8B-ny0 "consulter l'ensemble des demandes")


Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter l’ensemble des demandes en cours. Quand l’utilisateur accède à la page d’accueil du site, le site récupère l’ensemble des demandes auprès de la base de données puis génère une page à afficher sur l’interface utilisateur. 
Lorsque l’utilisateur souhaite filtrer les demandes le site récupère l’ensemble des demandes en cours filtrées auprès de la base de données puis génère une page à afficher sur l’interface utilisateur avec les demandes filtrées.

## _Consulter une demande_
![consulter une demande](http://www.plantuml.com/plantuml/png/VPI_Zjim3CPt0tu78ajxGuR-7Op0kBPhWQ90RyiYIsnEhI894XrStgRZvJdyOgKanv4FQE754d_KHtsaVHz911gF1gIpSJI40KQBeF0ehCAs8Kq6_nLyr0hXftCqkAUsQHiXoGMGHgCb414s3wIDZe9m31jmGV41Rw1jF6jggRr8cFSPxJvvVsNUCgC4YK54X46f37nE2zPJpjhfWXkOuOz9UTRSzdq-i1DIJiyCJt_02F3YWBawVU9Q4i4P0TCx6LdaVsZv6-chZlJ5MGhEu5BoEyxbGxTzfZlOxKfot-TBrw6053IUi9psMgixg8IPOKSPP3vTgmDyGZaIVXynd1FTDjOnw4uioqG7too4wI97Fpq71FCARSJZO73F3OX0MIO24XXUpjR456HslBaFufpCbdpMT86zvPwMtAewrYlLxNRRRLafN4SNsyR81MRV7kBDgFVBxN9yxTGwKlPdc-wgAd8SeD8gXTPTkkfzQ9kC9_iBj9RCNWPzUAGkNptFBxZX5vCbOM-b2m6ZTrObWtXUec1_fA3fSd3SIwWyIMBTofMqSns2ZEGMLq1UlnWIfQCtudoRaPSZifYrt6fEMJbrRM1LODdgO5t2mls_olaRoa3-H2eWhzDpZrRnx-8l "consulter une demande")


Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter une demande en cours. Quand l’utilisateur souhaite accéder à une demande le site récupère l’information auprès de la base de données puis génère une page à afficher sur l’interface utilisateur. 

## _S'authentifier_
![s'authentifier](http://www.plantuml.com/plantuml/png/ZLGzRzim4Dq5w3ySl2G1uY5fkmYEa0zaoz8XMnQQEiT4558WZudpRpgslyD_h7UKHCjAKKG2195yT-_TtPEk0obFyRM5SA8YRT6IsHZqPK66MloqkpKDmiOvMhjTMIXDpeDk3GD01LWyacbDK8JHBy3v1ZrSb4N754QRJWcgwnAokkcw4N9P5eqYjLO1OTqqwVnM5ipLE6ltVt24_YYBiXW8btKjwIfGMkz_o-d-5xGAElMCIPjvOoK2uH2FyjwwPsDx_WTv7TD-OpmBMzO3eeBLgW-fwyotMYsNVRO6ZxD_biHh_G8XUbYxICx2auK5LwIv7DI4VZ5NQ9temmrLy70I3ts4e4mmz6G31Z1suuAqPSXZd3rMNeqdfp6Wj-eLpxaV8RnpdMSJoWGMuNsza_0jwfUl1VUXgIl3pgGlcK2r1E73ajhTEUzP6LnT0Vd88mA-CZyFlWBSeOw4FoFwZzEp7f5JCc8QauZpteGwxmtnB43gkT-PaCc7Cxa6QmWaEKD7bcdfaTULF4QFV3-4PD4fwDWi8qQcCkrDffkRQJoOcqhsi6NFoEFVyQDPaHMpK_ZRJ1-gLc8CDelkEovZIDaiDsQMyZ_f-gbDqyna3fMbj8VxcjVyG_aB "s'authentifier")

Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite s’authentifier. 
Après avoir saisi sont identifiant et sont mots de passe une première vérification syntaxique est réalisé. 
Lorsque cette vérification est effectuée avec succès, le système récupère les informations auprès de la basse de donnée.
Par contre si une erreur syntaxique est détectée le système indique à l’utilisateur qu’il y a un problème.
Lorsque le système a correctement récupéré l’information auprès de la base de données, il affiche sur l’interface utilisateur que l’aurification a été réaliser avec suces. 
Si le système ne trouve pas les informations dans la base de données, il indique une erreur. 

## _Créer une demande_
![créer une demande](http://www.plantuml.com/plantuml/png/TLIxZjim4Em5w1yMQfmKBl8iX3lZaWjIfKY0f3l0eCbLJ9Wc5JwCkxz9Uz_X7yikAGf-v1g1MixEpWwNl0jH-9Zs1gG_FgE7P14KxeLLs3PHHuDmVxNpOBjklVvEyQN7Fqc7zRg7R_DsyX0M62A85BTeenxqyHcwZjCmml4lY75CJyGP24eLDYv5Ps716aJKj5GpsQBhsgPjX8pEWpIQ-404wBxKMXquhuZhJTkCr8kMUXIC6SUCwp-DOmSmWTwUWrAW6ADayfwOVz5_pvzA-gvjb8XY8mAfL2fZF_CF2tJMaZCL-h5jjfh2WtDnunvPj7KHmHrm5jvpjxDB3pO87JJ7j1sSt-VUmuFrQ6Wva7z0KdSOssOYMAvMt5dFX7AN_PlCEmX3rNrsIXy45IPSTewCMEOiAY-tA7TVDHfr2UJzcvlbilmflDWrvAWnC70gIBSV3TBUxIr4dsXIo62O2h6dLCWZ9V_Cwb-zdW2LaY4bL61Jb-MyIavrzNt1vOCYyWBiIMd9NAtEUAIpXy9oJolq8JjQkJx0XOvgBWSd2LGZaroNEB7aDA_wbXNsS8KjlPuvL9i8ue1NtlnV4yzU3_Y8CaNyaT0_NQGHu2md7-KSFD4pn-O3FwtuGfFJzDNvwC6Zqbx_ndA31Oo2rlGIW1W6JKF6iVaPGKCNXZylaA7tTBVBQ2LRX-jQUfv4j8hjR9ixMj73zGy0 "créer une demande")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite créer une demande d’aide. Après l’appui sur le bouton « création de demande », l’application affiche sur l’interface utilisateur un ensemble de champs à remplir concernant sa demande. 
La cohérence des informations est ensuite vérifiée par l’application. Si ces informations sont cohérentes, le système enregistre la demande, sinon il l’indique à l’utilisateur par un message d’erreur.

## _Éditer une demande_
![editer une demande](http://www.plantuml.com/plantuml/png/ZLLBRkCm3DqRy1q8Rvekl9ZlmcYBpdVLnKmnioiGA1QJ2f5bLvzWvaWvHousb6GdbkEsWm0EA3u-Ke-aVMiiqzOr4f0BYngSGk3OCCKnpwom4k7RcUT15SLo-KCVzgN69oVCSbd1tT7jD9WBD1RgLYcixM4F60pZfCKn4Jov2o61mM7V25iKUPPdhBQjXbeAL1QOWU9hnEe2Mar_y2RFEYfQrA9Z7j9r0LPzwhe2e0UzJK7Eq9b7rKvh8lvDTkKV0-cx56zb7Kb_YNgBzauO-wLLLhVo5F9-4XAGuwW1-27FEBDinGp2YlC0-UmD4e2JH8Sz3j2FGG6wKNaJQgwWViHwUoysZzOiBeCwOiUyYkJDit0lmbAz5MpGniGBmSTGSlR8gwkoZ2R7r3sY2XI1xPwQItr4dMIEW8GnNdqQKu4UZ3HXJv1dRMTF6BY-Xb5xyeoQ6ReRSaGrs7ejI14DgzRPLda5ZUiwZSQ8LiMGKQOealzvHpzJvSsDfwsyNMyf_iXss8THxpCF98HDuaCvWQ2l1YI3ZcqmxD1S6O4XdggMx7Q7muHFzgPfkLWBX0SbqL3lMTEPrugd5Uthtp4f-7pz9pNBG03zP7qNAFbp5pwAVpoPNYgW94szbB3sLBJcJIUH_DHDgnr6p2XvRAINgXzMUpd2f9qRZgUpwQCNSs73Q2M1_WfJn-muFfVEi1t-Lxf-4IYKzfpA_8Eri_ZJeVux6q-ei-0WUE8OrPgSJnVmnTkDk-1ZKe5dTcPmdKsz9lMrs60SldxqwIimNeVZ9yGpeAHtdN-yG8fQqri_Zf1Jmn3DYt2SF5JSLnh-Rkb9tx5_ "editer une demande")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite éditer une demande d’aide qu'il a émise. Après l’appui sur le bouton « éditer une demande », l’application affiche sur l’interface utilisateur l’ensemble de champs à remplir lors de la création de la demande. 
La cohérence de cette information est ensuite vérifiée par l’application. Si ces informations sont cohérentes, le système enregistre la demande dans la base de données, sinon il l'indique à l’utilisateur par un message d’erreur.

## _Répondre à une demande_
![repondre a une demande](http://www.plantuml.com/plantuml/png/ZPNFQXin4CRl2_iEqxt4XVhG_x2a9calFQIGblGMCB8qjKNNqbRIclHjUlLpx8jrDDgDjNKQ1uDXHh_vHlf6iYzy42vqsmOSjjOeXo2WCmWAjy8eB8kWGuFmhTyFo_sVVFtMLDLoUUtw_TpXhqxxvRA6gpEXbJ01_1dw0D8QWpBqUq0EVDS4p4MggYmsMY7yi3Qix5rPb8MGmJgGZKRI4HwgIvQim3g53bwMHKiRrrAtiP5eMuRgoxOTaLSmPJfFoGZ9pZbI_Kvn7R_6WjTJFZGoQTve-HF3bVRXapN1sUPGycPQGeVRfHeYT-Yy2DgQ4NxxZpxBvYqoLIM2M0cFi5AAaOyn88iKcTdlSKJVHw-C9JyjzHlygg4P9w2Dbqw7MzCPsABtOaqZ7LoTBnRHk3fMIV2T0nhqodR16XhhjREjZPRbW-Avw9sWVbH94Va-Nx2rDMm8QJ0TPQRLymoEGDmfpu0AoDiQrXWUX6bn8C_Fv_CKAfmkPr8iKOFsdx5fqSsoyKvKcPi8FrOPqnjEJviFAiVzXL9Vai6phL-_W1FRa0vZI6Yw0KFjEDTtyU7n_Q0M1DMqvLIoMCJkXyLuvoRTysvnyHxcGwTCTgAKE6hdnMugHTcoYDibWYvb3NY7iWlujKFtE-DeBN7SZgEi6yVvVY8v8RZFyPZ-CmNRXjnfUFRXVcxmu8oUTaaEPeobHtuSeoTToSzzqfX7ZlqaRz0e_Xsb5yfeUe8Pc1B3Rm4Z_AGpWkFukI0n-e_u2m00 "repondre a une demande")

Ce diagramme présente les interactions entre la base de données et l’aidant lorsque celui-ci souhaite répondre à une demande. 
Apres la saisit d’un message le système enregistre le message dans la basse de donné il enregistre aussi l’utilisateur en tant qu’aidant dans le ticket si ce n’a pas déjà été fait.

## _Supprimer une demande_  
![supprimer un ticket](http://www.plantuml.com/plantuml/png/ZLJBRjim4BmBq3yiT8bxqA7fuo0aHjhqc4ERjhS21ark4Y8ogP3BelqaVuT_h4jIbYaP20e85hWxCrpEKBxn91o5NGy-38FJEtGG392MpqXrHPfwXEz52q7XJXY5lqpJR3PVtM7VEdm9scys7TnDxU30Nw0daDOOb7JODqsa0AQI3prXATSqTIKaMGUorsW8X8VcI-wv1gpZ5xojgu77rL8F8aA68S6wJyFG08oWopaeUAv5b0pEiV1FNdVnvoZwRewdNcRH7yc3E-tfrXfojZzHtYye2LcoZi0FTQK4YQtm25kb4kHpN2X-s9Z37e_GZtN53l29sdMQkGFvXFBvNZy-aLzfzIRvet-Bw1ltwogTZD4ySGUFI7dh1PIR8_BggctpKk6yNKWbYQHspw5oVkXMCxdnOXIA-V1BJWVkk9XlE0hKbHteX87hQoW2gYkEC-MRziX-Y8S7pPuusDf0raGFqwL5xxKrcLBib4tAvV5EjUjr5EtYMZBvLQb9Y1cdUQPq5FP8M7e-8uNf5A_5DAEaB2R6AQx5kSR8Pj9ZR7ccrPdmw7aiZd4nYUzZ1_W7PI3y5j2vlmiQ0sQSDD5KB2QQQijRSJxxbFvPll-JNm9FSHJOL4EZyXTKQ9xftJ2A_-x-0G00 "supprimer un ticket")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite supprimer une demande d’aide qu’il a émise. 
Après l’appui sur le bouton « supprimer », l’application supprime la demande dans la base de données

> ## Diagrammes de comunication

> ## Diagramme de classe

Dans un quatrième temps nous avons réalisé le diagramme de classe de CoHub. 
Le diagramme de classe permet de décrire clairement la structure de l’application d'un point de vue statique. 
Il permet de décrire les classes et les relations entre elles. 

> ##classe Ticket


* getRequester()
* getHelper()
* setHelper()
* addHelper()
    
>classe TicketListControleur
* getTicket(s)()
* setTicket(s)()
* addTicket(s)()
    
![diagramme de classe](http://www.plantuml.com/plantuml/png/jLVTRzis47ytuF-1o9ETIC3sQcH5WnJ30cH5qRXFmr3GqjNceW-FfD9bNV_t7JzE8aKgAmhinPRk-twyEnrVAysb7jg6rO8V9MzRO3Mmgk5AmNgb7aLtvaXsb1kjfJWC6kwgldiGVmFxORqwy-gH7u5TM94BnXNZZS3Vw-kVKHDUlM9VrglrYX-KbhpIpXJRY-eHD0eHtScLJDGx9Zfj7hNG3UmOyaLtD8GQL2N5MOk-8p8pz8fhEFRoEIPAu4Ro3J8d8ny_hbVNrvQ7eQrNLpwIZVVBVcBTq3H5xBo8NHDrlKfS5v5VDf4b_3c0qY1tx8C2kJLXe54j--SeZgrvFeA-gpTRZuHztvju38aokMAAg2vMno3zDrF0YLR8os2wPTx6hK-E9HQ8ivddJ-vlGnHYTUI-9p0Cny3XwRz0SmQfYCf-k_pTS6gXpWr_tf-6zj1nqKG6lr05VHq57OYyhfszpSd-ZS1VCQ4yPr0ZVSSEVTy0xxpkhw0K5lQcLSVf50Dv8mQry2Uc-1EufneQqFRvgwbxL-wtVVU4YLb8c2dqj0v3aKrQ7dDs52EXxjyjWFwPC9oufjInhYOH7od5Iegs7pNyfOCMLD3LU2vqQ6aMvCFe1UqJwQN9pVFOetPID0_MHbWn17e0jEkYMoxVuM6QKU2cIWrdC-ZaVL_niDGDZqifddYJOv7QNhIGKPcJiVOgKBvhboRD5DjtpHpipPTdpkB8mN6r14En189nbmEXo45GZ03uCRmqv088fd4LHyOoGokMs2mbGoPlufGIWtF-0WJp24t6Yy5PPWwmML1P8o4l0o-PU6T13huEQgG51UY6U3GGetQPjyo37kfdtorgEFm1kWeR7vsqlfOccWPUdMQa4xJVyBcrthwl_jFgnqHUhdy_TueaiI99gvWdHS7XjpxApTCNQznbI6VsO1nNEDFOxCo9COziLFJnPJI9CqzX6g8saLIJ6BDCHpsJPaRBaYq6B59Phh6elavSJlDOQ6Z_rohvhod9NYeJ4rsOOt30REc4xr0d1SrImsGJn3A0sTM7jc4shiCTRjECHJqvo9JOON2M-XA-nWK1MrZBGKjugnDbDEcE82rvQoxSN5cukhxbIJtPbf1vnbllBKLpv5104QekFrgZT_wKQ4tpT4rqgtBYNTr0V0C8bhXm9PyMFEoPwl6zE9wqGftjR7joElT2QTpO4A461fbV-7AIcwLnaehvMu5XgZZTaJwc578b86HFkQGLS5cTl4cs-IIQ-LIXHPoy9hJOtWGPxjKoq0gA_UPypiE3Z0mQbieY2_VzKNJ61leP97JwmxYav-nQyOnbJxSDZlVRpanbi-x7pN56ZvzxMSzX8OsfGhv5URnpiB6Aw6ByJrcMoReKiuCnb6MuYRjU6OWlVhnWbwKqLLlQbrnPxN2spgcIXGOQ-EJrBLmxrbZmNUXsRZcvaYGloHFsyZXeIHIPVLxKtTZ6h6P6yIsy3ktCUOrlwrN82y9sBkXsislfyaC-a5dM_UUkl5m4Y152okIB9_OQxoH3s_mB "diagramme de classe")

## Diagrammes d'etat transition
La réalisation des diagrammes d’état transition est la cinquième étape. 
Ces diagrammes on pour objectifs de montré d’un point de vue dynamique le comportement d’un objet. 
On y représente les différents états d’un objet ainsi que les évènements qui permettent de naviguer entre ses états. 

## Diagrammes d'activité

La sixième étape de modélisation UML est la réalisation des diagrammes d’activité.
Les diagrammes d’activité on pour objectifs de montré le déroulement des activité entre les différant objet. 


## Annexe

> ## Diagramme de Gantt

<img src="docs/Ressources_doc/Gantt.png" alt="Ceci etait censé etre le gantt" />

> ## Présentation de l'équipe
Voici l'équipe de CoHub: de gauche à droite



Même si nous n'envisageons pas tous de choisir un module de spécialité informatique , la conception du site a été réalisée en équipe, 
ce qui a entretenu la motivation de chacun et nous permis individuellement et collectivement de progresser.
> ## __Pourquoi CoHub?__
Nous avons choisi d'appeler notre site CoHub car c'est la concaténation -c'est-à-dire le regroupement- de Co et de Hub qui illustrent les deux idées directrices de notre projet 
Co pour coopération, coordination, collaboration
et Hub pour organisation mettant en œuvre une connexion centrale ou une plateforme de correspondance.
Le logo, avec ces deux mains, exprime ces idées de "coup de main", de main tendue et de "shake" de la réussite partagée.


