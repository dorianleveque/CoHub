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
Pas de tente pour le weekend d’intégration ? Qui a une visseuse pour installer une étagère ? Qui a une imprimante ? Besoin d’aide en maths la veille d’un DS ? Qui rentre à Quimper ce weekend ?
Toutes ces situations racontent un quotidien des énibien·ne·s.
Parfois les réponses peuvent être si nombreuses que refuser devient un casse-tête. Mais d'autres fois des questions restent sans solution.
C'est la répétition de ces tracas tout au long de notre formation qui nous a donné l'idée de CoHub : un site internet qui permet facilement et efficacement à tout enibien-ne de partager des biens et des services.


No tent before the WAF ? Who has a screwdriver to install this shelf ? Who has a printer ? Need help in math the day before an interrogation ? Who goes back to Quimper this weekend ?
All of those situations are a common occurrence for an Enibien. 
Sometimes those answers can be so numerous that refusing one can be a baffling problem. But also sometimes the questions have no answer.
It's the repetition of this hassle all along our formation that gave us the idea of CoHub : a website that allows any Enibien to easily and efficiently share goods or services. 



# __Mots clés__
partage, échange, entraide <b>, service centralisé</b>

# __Qu'est-ce qui pose problème__
Alors que les réseaux sociaux sont l’objet de critiques, des réseaux d’échanges et de partage se diversifient et se spécialisent dans de nombreux domaines, du simple partage de fichiers à des applications ou des sites spécifiques de prêts et d’échanges entre particuliers.
C’est une pratique qui progresse et qui s’accompagne d’une image positive.
Des applications mobiles ou des sites internet existent déjà mais sont organisés autour de besoins spécifiques.
Comment localement, à l’échelle de l’ENIB, partager à la fois des biens, un coup de main, des compétences ?
Il s’agit par exemple de pouvoir éviter des achats individuels difficiles à rentabiliser ou utilisables seulement de manière occasionnelle ce qui peut permettre une maîtrise de la consommation, des économies et rend service aussi à la planète !


# __Solution__
Notre solution est le site internet CoHub. C’est un site de partage et d’échange fait par des étudiants de l’ENIB pour répondre aux demandes spécifiques des étudiants de l’ENIB. Le site a pour ambition de faciliter le partage, la collaboration et l’entraide.
CoHub recense donc toutes les demandes d’aide car nous pensons qu’elles ont plus de chances d’aboutir ainsi. Pour stimuler les interactions, il doit être accessible à tous les étudiants de l’ENIB. CoHub doit aussi être disponible à partir de n’importe quelle interface utilisateur (téléphone, tablette ou ordinateur) à tout moment et en tout lieu où une connexion internet est possible. Pour plus d’efficacité, toutes les demandes sont classées par catégorie afin de faciliter des réponses expertes.
La consultation des demandes émises n’est pas restreinte, par contre dans un souci de sécurité, l’émission ou la réponse à une demande est contrôlée par un identifiant et un mot de passe.

# __Maquette__

Afin de répondre à ces différents besoins, le site CoHub collecte les demandes d'aide, les range par catégorie et les rend disponibles à la consultation. 
Les trois catégories prédéfinies sont tutorat, covoiturage et prêt d'objets. Il serait très facile d'implémenter des catégories supplémentaires.
Le site CoHub doit permettre sans authentification de consulter toutes les demandes en cours et aussi de consulter une demande particulière afin d'avoir plus de détails sur celle-ci. La consultation de demandes peut être filtrée par catégorie ou par mot-clé.



Voici la page d'accueil de CoHub où l'on peut consulter l'ensemble des demandes :


Voici un exemple de demande :


Voici la manière de sélectionner une catégorie :


Voici le bandeau de recherche filtrée par mot-clé :


CoHub doit permettre, avec authentification, de créer une nouvelle demande ou de répondre à une demande via un système de messages entre le demandeur et l'aidant.
CoHub doit aussi permettre, avec authentification, à un demandeur d'éditer sa demande déjà existante afin de la modifier.


Voici la fenêtre d’authentification :


Voici la page de création ou d'édition d'une demande :


Voici la page permettant à l'aidant potentiel de dialoguer avec le demandeur :

# __Modélisation UML__

L’acronyme UML signifie Unified Modeling Language.
C’est un langage normé de modélisation graphique d’un système utilisé pour concevoir et documenter un système indépendamment d’un langage de programmation.
L’UML permet de décrire le système d’un point de vue statique et dynamique.

PlantUML est le modeleur que nous avons utilisé pour modéliser CoHub. 
Nous avons choisi ce modeleur car il repose sur un langage simple pour la réalisation des diagrammes. 
Durant cette phase de conception nous avons utilisé un Gitlab (un site de partage et de gestion pour le développement informatique). 
Il était donc très facile de pouvoir se partager les différents diagrammes entre les membres du groupe.



-----------------------
>## Diagrammes Cas d'utilisations

Après un analyse fonctionnelle, l’élaboration du diagramme de cas d’utilisation est la première étape UML d’analyse d’un système.
Ce diagramme recense et synthétise les grandes fonctionnalités du système du point de vue de l’utilisateur.
Il permet aussi d’identifier les éléments extérieurs qui interagissent avec le système.
Voici le diagramme de cas d’utilisation de CoHub :


![diagramme cas utilisation](http://www.plantuml.com/plantuml/png/XLFDJW8n4Bvlik_Gx0Kzi8aOGSo6O53ZMSFDIzaEqAJR9Trfeb7VnIlFmOivRIq1bv-zTRwVVfsP7JV83TfACI7vml2g0bRoXbcKIZOSPQtJ12MgK1QTFI1D5CoHOSsCN2oHF0oK0U8brePD_zXW3IDvjdFEM56iZAou-HYD8lzU2gundXwWubeGrzsqQrLyTRjRRWlOaxb0N2yeVpQfd-qiOvzfmkYp3T2BW4qdLpxQfDQDLGY6lMccEg0Rg6OaevC0UdamRRB_wbvRRJL4Vej-xUbFKg41qq9lWfdPhCdfb4tV4n-5n3F4WIU-RDQhMWi3RFDpBk6jLxnskCKbQ9HpUI3eC93ioesm5I6mTmT3OxcWJbyUGteHeMaKUUuRTKSR0ky8MhW5SMXqtaxOgQbh1wl3WzM-yuW-OOK2C8W11YpFHxuFBe3KfR82OW8tefDm_pGyF0P_fycONaf_uYy0 "diagramme cas utilisation")


Lorsque l’utilisateur se connecte au site CoHub, il peut consulter l’ensemble des demandes d’aide émises affichées sur la page d’accueil. 
Il peut aussi filtrer les demandes c’est-à-dire effectuer une recherche par mot-clé ou par catégorie. Il lui est aussi possible de consulter une demande en particulier : afficher plus de détails la concernant. 
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
    __Pré-requis: le demandeur s’est authentifié et consulte une demande__
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
![consulter l'ensemble des demandes](http://www.plantuml.com/plantuml/png/fLLBRjim4DqBq1q6tYHPUD7qip0S8KsttHHe3a1BauWeBGearSQtwR8zXo_MuP2IAKjs7DImON7uE3Dl7XzqRvqmhjigA7LZE-NGWBh2nk9sen0gjFJRYeOUyin9Hx4BW7acIgSDb4fYuq1OM3mwgQGL3Zkp06qgEluEygobwhAKhV2mjcNewdFRzfXRmbJ2YOsm29kgOi23NrJqrKsp_uiBYE1FULPBYZzfxJRw9SzY_MLHSFALAClz7u_S_mObe1NF2Doh_4cTUGoTCUYVdIf3Czzb-GFTLsdT5zquenKE1DxJMKgxB1YzWlKw72uA7a6wPL6OiWwvxFLDMfK0D5f24TWpN06-ODav_DQXsLtV953Q3j3rUhaCgmh7ktccjEOvAjqy-tzNey4h2mQzRAGEq2Uox2pHO9gFzi3hGy34dXWp9ZVT3Nk1ds_P8uR6F6PKrZ4kdMzV-cF0SLO_l02Shyv32FL3C9b5A8bD5NHWA0ywmV3wIATAsbQ9tI3KiKvnl1BkOczsq6xejSzHTzjD8wGQPs5Kec88h63SMaGnWRx9SoHqw-8TWr_IrV0alKEZs0U699GYL49l91Gdyv50ycwW2F4pekfL8RkJ9tQzB4453WqSV8nvzAqSU1o95hcCMvwO9rBp7ffl_hIN-gD79zauerirHARs6iRpciKkjTdhLhlCRYSiznRRNMIza_QRjU3_gp-rvBaxcnfpzjQUCEXaWkdr7L4-67Q6zEobJyYVuyxu-ChYIlm-Ib2yphDx0j8R-ny0 "consulter l'ensemble des demandes")


Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter l’ensemble des demandes en cours. Quand l’utilisateur accède à la page d’accueil du site, le site récupère l’ensemble des demandes auprès de la base de données puis génère une page à afficher sur l’interface utilisateur. 
Lorsque l’utilisateur souhaite filtrer les demandes le site récupère l’ensemble des demandes en cours filtrées auprès de la base de données puis génère une page à afficher sur l’interface utilisateur avec les demandes filtrées.

## _Consulter une demande_
![consulter une demande](http://www.plantuml.com/plantuml/png/VPI_Zjim3CPt0tu78ajxGuR-7Op0kBPhWQ90RyiYIsnEhI894XrStgRZvJdyOgKanv4FQE754d_KHtsaVHz911gF1gIpSJI40KQBeF0ehCAs8Kq6_nLyr0hXftCqkAUsQHiXoGMGHgCb414s3wIDZe9m31jmGV41Rw1jF6jggRr8cFSPxJvvVsNUCgC4YK54X46f37nE2zPJpjhfWXkOuOz9UTRSzdq-i1DIJiyfElq18y2B0-Roz8cBIGYd14plP6JH_w7bRwIlEj8NPoauWqlDxpYNJztscUvWjol9VPzlNOS2Kj1umdBQQwtke19cXYrbaFbqhmxm2UL8-7t4S4vqsrZ7e3knB1CTVBCGfeiS_VGS4Cmhj16FWy4zTo02PPa8I61uENiJKv3PyMO_Y7DoM_9PqmNsbfjQSglgMAzKjzjjjsMbS1rTR1iZ5vXzUuWtezuljylnjLFhIDcVRRghgiXnW4gh55ftwQhteMqodkmlq5eoUndquP6wVFKymE26NqoMXBsLBWICtbcL3E9vYOBzaOAcoy5nBw7o98brArVIpdK8Cf9RN05v_M98b8xUYFDjHbwEo6BMSgivPUNKjO5LWMMhWtK92_V_AkUFA0Fv4wc0l4xFFLh5_uk_ "consulter une demande")


Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter une demande en cours. Quand l’utilisateur souhaite accéder à une demande le site récupère l’information auprès de la base de données puis génère une page à afficher sur l’interface utilisateur. 

## _S'authentifier_
![s'authentifier](http://www.plantuml.com/plantuml/png/ZLInRjim4Dq5w1yENf80yP2cNGH7I5Dqov8XMnQQEiT45L8WZwtpDntJx_2FzOwIQ5aEWaY089BlxhsxUz9j8EKflhGGpbIaBLeo6uE-BCXGYoUxMzCWR9oZjTkLXTBaFEZMC01KWCKZcTO4HHZz0fnlqCDLMNHCORJfbA2wBY6hxrqtGhwKHQD8hLL0M3TDEh-J1NCrpjhzFnoXtygYB0R2PLrBkWgKrlitETt_XLP1fvunQJE_MOb0ECIZlBVksTYU_rvUnxJNZ6TXotf0LB1QzI5rdVbMg-MopzRWSVPJIRpM4AA7jOlaB3nPM711cgj1JUWNSu7MYJpSK0NtP_7GHWZA14DFDc00OpSkI5U6FCRPO-7LU78U0tghNl2Isn727oxpOaAPmAAxBtSIlaNzwtF1VMXgoh0pQKicK2r1UBMaTZ-SzwmCRcw0VEG90L-Pd-TU0UvGHyA7YFxr_A97v9ICcCOauhmteSvxGpmBa7f-xap8vCEPN8Cp19ACeIFBjFJ8wqeUeqM-7aAow1Hqx9KH8rEPzYRJpRqq7imz9NlOicVayNxyw5LanUmK_ZJJTwgL68FDelkEonXIDikDcQNy85q_jMcQcSoXifJsSD_oclyd_m40 "s'authentifier")

Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite s’authentifier. 
Après avoir saisi sont identifiant et sont mots de passe une première vérification syntaxique est réalisé. 
Lorsque cette vérification est effectuée avec succès, le système récupère les informations auprès de la basse de donnée.
Par contre si une erreur syntaxique est détectée le système indique à l’utilisateur qu’il y a un problème.
Lorsque le système a correctement récupéré l’information auprès de la base de données, il affiche sur l’interface utilisateur que l’aurification a été réaliser avec suces. 
Si le système ne trouve pas les informations dans la base de données, il indique une erreur. 

## _Créer une demande_
![créer une demande](http://www.plantuml.com/plantuml/png/TLIxZjim4Em5w1yMQfmKBl8iX3lZaWjIfKY0f3DWqEGg9euc6Jw4kxz9Uz_X7ykI50NRoZK2jPoTdHqkUUS3So4U5N1tUaO7KIC8F38ji6s230hXVh6prLststsd-DhXdoZzRjV3jtaxEl0hz05O30VKGGxoz0nTbz8mmEalC6lZ4t5wWbA5lOd1Q5Wb3In8MegPRDLrRTCsZ0VZW2j9VC0yT5zghGwC4yJrfcqizIAvj2nXhCsu_fEr7S04Udi9YfvY2SMZSyJyY_xxzAcaxzf6iC3sp9DA8JBsS_f90etMv4o5VcoRWwJmO4pOcySaMfk0O4QSXVUfszcbhVPCUaan3r8FnXrpytwh7IfQ3cGWaDO736qpCQmtczHQdnXvzcyoRsIAghlib1mP5IPOTewCMESaAiyFo1--IbJY6fZsRsxMw_8dy6fNaQDAmP1IWPkZLKXxjxSGNAH98ODXAfGyfK8EAVbd5l_gzGIeb0bIGWKsDLdEg-HKLzyNN3ue8Y_0dfIMpCtcWeSRFHQMUrgXyzdGolK1hdHKRrDmaa0rCicon9abvtdLjwomXmMsz7hXK6t2in4NtlnVKvgz7l0HUGpu8w9xkaeZm4LEFievUAPdZiq7VbxnXIQduQlpqOD38PtyZUK6Cx2CrlGI01i6IKEMOlCpWeekJFgyG8REqTqkenLr7Qwbz3o9g4MoistkQ4KFrpy0 "créer une demande")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite créer une demande d’aide. Après l’appui sur le bouton « création de demande », l’application affiche sur l’interface utilisateur un ensemble de champs à remplir concernant sa demande. 
La cohérence des informations est ensuite vérifiée par l’application. Si ces informations sont cohérentes, le système enregistre la demande, sinon il l’indique à l’utilisateur par un message d’erreur.

## _Éditer une demande_
![editer une demande](http://www.plantuml.com/plantuml/png/ZLLBRkCm3DqRy1q8Rvekl9ZlmcY3pdVLnKmnioiGA1QJ2fLbLPzWvaWvHousb6GdjkEsWm0EA3u-Ke-aVMCTCyut4f0BXmQyGk3OCCKnpvnm4k7RcUTU5SLgzSCSzgN19o_iQbN1xT7j3TWBj0xgLYcitM4F60thfSCX4Jpv2o61mM7V25SKUPPdh7QjWLeAL0wOXU9hprf0QpXLyYRFD5KjQg5Pm6WTSTKdhGk03lHs3FAMpWAgziOGys-og_3eIT-DyKxMYVINg1_HtGhhlhJAcLQUGjvFGY9o6DK3F-GPPuwjcKLOSnuXduD12d3IwB377lenIa0tAfUnvWhg1wmVxyJsmTd5PPH7x5YGaRnv5kz5MAgtWYswb7WX-11ApWvvTLMMoUGuTW-e8aLakwFkKYFHZ38dm8WnNNqQKu7fZN72ZY3FMkrE6BY-Xa5xyeoQ6RiRSoGrs6OZI143wzQxLWK5hTVQeBMYLIbaa2c957x1qGrLkLm6sYhODOKVoGxxEEfTufw3eAFmM4sCxue1oK2pBSOTcgiYCgHJrPBTxh2VyCdUD2qN6u5mhoHQQZrhj7sbTjhGhlmTauBFbt_IiepnqCtLTu6IFtVVe_J7a-cT8ahIp4i9cq15MzveYUIdNZhZCM46oLCRWrBTgBhB0MRSj_vuEfaXUZ4NrW_MA31SOUgO7SRdqbcsm_zArwq1XTAMKvb_iFOEVteqVsVZ2NKM70KVEGQrZiwdw_VYxOPT235ZWMSsfdUT3RqXzOtOOXg-RlBf8p3SXkCN932Wf3TTUBn0YiRGIp-Da5Vz4CsBS9myL3nK6lzkw4cViNy0 "editer une demande")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite éditer une demande d’aide qu'il a émise. Après l’appui sur le bouton « éditer une demande », l’application affiche sur l’interface utilisateur l’ensemble de champs à remplir lors de la création de la demande. 
La cohérence de cette information est ensuite vérifiée par l’application. Si ces informations sont cohérentes, le système enregistre la demande dans la base de données, sinon il l'indique à l’utilisateur par un message d’erreur.

## _Répondre à une demande_
![repondre a une demande](http://www.plantuml.com/plantuml/png/ZPNFQXin4CRl2_iEqxt4XVhG_x2a9calFQIGblGMCB8qjKNNqbRIclHjUlLpx8jrDDgDjNKQ1uDXHh_vHlf6iYzy42vqsmOSjjOeXo2WCmWAjy8eB8kWGuFmhTyFo_sVVFtMLDLoUUtw_TpXhqxxvRA6gpEXbJ01_1dw0D8QWpBqUq0EVDS4p4MggYmsMY7yi3Qix5rPb8MGmJgGZKRI4HwgIvQim3g53bwMHKiRrrAtiP5eMuRgoxOTaLSmPJfFoGZ9pZbI_Kvn7R_6WjTJFZGoQTve-HF3bVRXapN1sUPGycPQGeVRfHeYT-Yy2DgQ4NxxZpxBvYqoLIM2M0cFi5AAaOyn88iKcTdlSKJVHw-C9JyjzHlygg4P9w2Dbqw7MzCPsABtOaqZ7LoTBnRHk3fMIV2T0nhqodR16XhhjREjZPRbW-Avw9sWVbH94Va-Nx2rDMm8QJ0TPQRLymoEGDmfpu0AoDiQrXWUX6bn8C_Fv_CKAfmkPr8iKOFsdx5fqSsoyKvKcPi8FrOPqnjEJviFAiVzXL9Vai6phL-_W1FRa0vZI6Yw0KFjEDTtyU7n_Q0M1DMqvLIoMCJkXyLuvoRTysvnyHxcGwTCTgAKE6hdnMugHTcoYDibWYvb3NY7iWlujKFtE-DeBN7SZgEi6yVvVY8v8RZFyPZ-CmNRXjnfUFRXVcxmu8oUTaaEPeobHtuSeoTToSzzqfX7ZlqaRz0e_Xsb5yfeUe8Pc1B3Rm4Z_AGpWkFukI0n-e_u2m00 "repondre a une demande")

Ce diagramme présente les interactions entre la base de données et l’aidant lorsque celui-ci souhaite répondre à une demande. 
Apres la saisit d’un message le système enregistre le message dans la basse de donné il enregistre aussi l’utilisateur en tant qu’aidant dans le ticket si ce n’a pas déjà été fait.

## _Supprimer une demande_  
![supprimer un ticket](http://www.plantuml.com/plantuml/png/ZLJBRjim4BmBq3yiTAbxqA7FWv0OwUEOGvksjm86JMuI8ZAfaikY_IH_Xt-iIrAIAHa82XW6k3ipNCwiVUD9E0g77dmO1gSFw20O82sVaEgADFK8tueMWiA3C0f_cgRPxRwuqx5r-2jelzjrS3ktWmF_0Zs1jCQWfDEnQI85C9Lyw0bBkQQfAo79Ef2zHaCWF3IV9wq6h5Dy_wkw6dXUBVKW8cOO4gxxC0mDm0XwlGG5pxM8ai4vLlx1vov-JQ9lbdZgPHRzdaourPu-MKFEzcVAsnKb8KlM17nNLqgGs0kFi5SgGJx6W-8FEtCwuWHzNrTi0R-etQQPEv2FA9_kzCCZ-OrMBvD1-hU8nd6_hjBB6CqJT_20bAzUGRav8g-ksZOV5IxRXLIII6ftd2e7Y6wpa1iter3CZrzpEd3JONdXA51NTg0p1gwleGYehZZEb6-w8_iXxkyrU-9WRmDP4prCMulUQsiofRWfcvJBurArssqKxU9PClbPgLc86UTvvdGKzaXOUhuWXVaLpyMqeAGiPiOvhjMxniWMqcDiUQRDXV3eUIoESJ69zx43_8Co47uDwDpV5Oq12qwQQ2uM4ysrzLPSpZwdVv7l_-INm7CS1JRLqAZy2oeqB_Hk6CN_T_y0 "supprimer un ticket")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite supprimer une demande d’aide qu’il a émise. 
Après l’appui sur le bouton « supprimer », l’application supprime la demande dans la base de données

> ## Diagrammes de comunication

> ## Diagramme de classe

Dans un quatrième temps nous avons réalisé le diagramme de classe de CoHub. 
Le diagramme de classe permet de décrire clairement la structure de l’application d'un point de vue statique. 
Il permet de décrire les classes et les relations entre elles. 

> ##classe Ticket

![diagramme de classe](http://www.plantuml.com/plantuml/png/jLVTRzis47ytuF-1o9ETIC3sQcH5WnJ30cH5qRXFmr3GqjNceW-FfD9bNV_t7JzE8aKgAmhinPRk-twyEnrVAysb7jg6rO8V9MzRO3Mmgk5AmNgb7aLtvaXsb1kjfJWC6kwgldiGVmFxORqwy-gH7u5TM94BnXNZZS3Vw-kVKHDUlM9VrglrYX-KbhpIpXJRY-eHD0eHtScLJDGx9Zfj7hNG3UmOyaLtD8GQL2N5MOk-8p8pz8fhEFRoEIPAu4Ro3J8d8ny_hbVNrvQ7eQrNLpwIZVVBVcBTq3H5xBo8NHDrlKfS5v5VDf4b_3c0qY1tx8C2kJLXe54j--SeZgrvFeA-gpTRZuHztvju38aokMAAg2vMno3zDrF0YLR8os2wPTx6hK-E9HQ8ivddJ-vlGnHYTUI-9p0Cny3XwRz0SmQfYCf-k_pTS6gXpWr_tf-6zj1nqKG6lr05VHq57OYyhfszpSd-ZS1VCQ4yPr0ZVSSEVTy0xxpkhw0K5lQcLSVf50Dv8mQry2Uc-1EufneQqFRvgwbxL-wtVVU4YLb8c2dqj0v3aKrQ7dDs52EXxjyjWFwPC9oufjInhYOH7od5Iegs7pNyfOCMLD3LU2vqQ6aMvCFe1UqJwQN9pVFOetPID0_MHbWn17e0jEkYMoxVuM6QKU2cIWrdC-ZaVL_niDGDZqifddYJOv7QNhIGKPcJiVOgKBvhboRD5DjtpHpipPTdpkB8mN6r14En189nbmEXo45GZ03uCRmqv088fd4LHyOoGokMs2mbGoPlufGIWtF-0WJp24t6Yy5PPWwmML1P8o4l0o-PU6T13huEQgG51UY6U3GGetQPjyo37kfdtorgEFm1kWeR7vsqlfOccWPUdMQa4xJVyBcrthwl_jFgnqHUhdy_TueaiI99gvWdHS7XjpxApTCNQznbI6VsO1nNEDFOxCo9COziLFJnPJI9CqzX6g8saLIJ6BDCHpsJPaRBaYq6B59Phh6elavSJlDOQ6Z_rohvhod9NYeJ4rsOOt30REc4xr0d1SrImsGJn3A0sTM7jc4shiCTRjECHJqvo9JOON2M-XA-nWK1MrZBGKjugnDbDEcE82rvQoxSN5cukhxbIJtPbf1vnbllBKLpv5104QekFrgZT_wKQ4tpT4rqgtBYNTr0V0C8bhXm9PyMFEoPwl6zE9wqGftjR7joElT2QTpO4A461fbV-7AIcwLnaehvMu5XgZZTaJwc578b86HFkQGLS5cTl4cs-IIQ-LIXHPoy9hJOtWGPxjKoq0gA_UPypiE3Z0mQbieY2_VzKNJ61leP97JwmxYav-nQyOnbJxSDZlVRpanbi-x7pN56ZvzxMSzX8OsfGhv5URnpiB6Aw6ByJrcMoReKiuCnb6MuYRjU6OWlVhnWbwKqLLlQbrnPxN2spgcIXGOQ-EJrBLmxrbZmNUXsRZcvaYGloHFsyZXeIHIPVLxKtTZ6h6P6yIsy3ktCUOrlwrN82y9sBkXsislfyaC-a5dM_UUkl5m4Y152okIB9_OQxoH3s_mB "diagramme de classe")

Le site CoHub peut être consulté par tous librement.
Cependant l’émission, la réponse, l’éditer et la supprimer d’une demande nécessite une connexion.
La classe Login contient donc une méthode permettant de s’authentifier et de se déconnecter a CoHub.
CoHub contiens une classe abstrait Ticket qui correspond a une demande émise par le requêter (demandeur) qui est une instance de la classe User.
Les classes TicketCarPooling, TicketStudy et TicketSaring spécialisent la classe Ticket. Un ou plusieurs User peuvent répondre a une demande on les appelé les helper (aidant) il sont aussi une instance de la classe User. 
Lorsque qu’un aidant souhaite répondre a une demande d’aide il envoie un message sur une conversation lier à la demande.
``

## Diagrammes d'etat transition
La réalisation des diagrammes d’état transition est la cinquième étape. 
Ces diagrammes ont pour objectif de montrer d’un point de vue dynamique le comportement d’un objet. 
On y représente les différents états d’un objet ainsi que les évènements qui permettent de naviguer entre ces états. 

![l'etat d'une demande](http://www.plantuml.com/plantuml/png/ZP91JiCm44NtaNA7KJPD4LL5cXKIg1TW1QnA5rOyj1QEKyRZbYlb7BaOupQB10gjb4MKUV_F_uwNdXLng6sQi66BO2V8Ya5FWaFGM2kdCKtI1EG1WHdX-GwKXwmVGaLTsxNPO5wCvbsh3NSj3ed5YF1XHwR-WPGZ11rKJI0laO1mrpWVuOYlRjOmqyt1pHvZidiuR0NEAsigCIR8OZx5fd5Hs_jbq_cBgJwGysdq45rK5sVKn_H88a1vwV42_bgsLzRe8-xL7aVkvHbyH-WqdUfj5Mqas9jRLO7aExzw97YGkfy1FMEWzLnf_OJUgmtc_CMtC21FgqgONMpoxuPVBSjhM_Qh5sVuqm--k5kZHHuSciLtlcm9rtikOYEvC6cob7ENM_yD "l'etat d'une demande")



Ce diagramme d’état transition presente les différents états que peuvent avoir une demande. 
La demande peut être créée, on peut l’éditer, un aidant peut y répondre et enfin la demande peut être supprimée. 
L’appui sur les boutons permet de franchir les transitions.


## Diagrammes d'activité

La sixième étape de modélisation UML est la réalisation des diagrammes d’activité.
Les diagrammes d’activité ont pour objectif de montrer le déroulement des activités entre les différents objets. 


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


