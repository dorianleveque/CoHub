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


![cas utilisation](http://www.plantuml.com/plantuml/svg/XLFTIiCm5Bulz1qElPbUhE34pKaPawbuhUpEcwmvsm9fEf8JKDHtyNRFiHSpIScOjjiAlKY-7xwUxtHgY6cobKmJYKi2ga6BrPg02uqbYLgb2IkfrZ0d8OLXX5O3Cv0Td3CeYeqM5TCVaqdatmlE5CNJ0rPCSSTDapGvj2g--lqzjmNyaVb0JAqaGZQhd-qYWyyq0VTOWoKp2FFPLOWsgvMnab33cmBPGsMmMZYPEt4qxWsc9lkl7hJLLc7aj-ZNWVua96dKBVIcCTExhNCwPJCCn4Skw0nn58Wlk-scLbmZx7xE9RmDYjSUixH6HM8fEeAE6vBT-0fR4HhsOJ6kbWitwSjZo20YheqYpyEWxjo6u3kXudv1F1gTzmrxjPjQv-suytReFQ9Fiq8DC8e1Hf3dap077q2eKbgECO6lw2GyF0sFZy7VQJ9rN-f-gby0 "cas utilisation")


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
            3. Le système extrait les information important pour chaque demande <br>
            4. Le système affiche uniquement les information important pour chaque demande <br>
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
            SA1 : Démarre au point 4 du scénario nominal <br>
            5. Le système recupere l'ensemble des demandes en cour filtré au pres de la base de donnée <br>
            6. Le système extrait les information important pour chaque demande filtré <br>
            7. Le système affiche uniquement les information important pour chaque demande <br>
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
            1. L'utilisateur accède a la page
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
            SA1: l'identifiant et/ou le mot de passe ont une mauvaise syntaxe <br>
            SA1 démarre au point 2  du scénario nominal <br>
            3. Le système indique à l’utilisateur que son identification a échouée <br>
            Le scénario nominal reprend au point 1 <br>
            <br>
            SA2: l'identifiant et/ou le mot de passe sont erronés <br>
            SA2 démarre au point 3  du scénario nominal <br>
            3. Le système indique à l’utilisateur que son identification a échouée <br>
            Le scénario nominal reprend au point 1
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
        Le cas d'utilisation se termine en echec (l'objectif n'est pas atteint)
        
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
            1. Le demandeur appuie sur le bouton "supprimer"
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
![consulter l'ensemble des demandes](http://www.plantuml.com/plantuml/svg/fLLBZjim3DqRy1s8R6PcaKM_2oCJJDjLWMuAT0wWo9n4g68R4jqsj-cozvYBbQ9antOyIOeQ269BZ-Hxf1xqu4avQlSMT5tvrX8wi3TOUTnlB4A9ddzxLV5Bdf4XNhi2c6TAK-r0MuCLWVAmU2HZZLU4hLj0xKeEVmLvrd1reqsZ0gnf15fyQ9eEyvenfIArKHvXKvO2w1QA1IJO-r0pLLkkrvAgK5e__oaHdd-3LT2eBO8GCp-OHe1mYCFmJbR7oj-C_exqnNZwL5VaQeizspSSorcNQq4Ni5h5uFLQz0wtF2gdTp6NlxqRLcK0zv5H30vo2i1Vg5l2hoswm-tT0ChR4RfQBPVngyJnRfxPkfQcsRhQXd_QeSCR3mx3Z7WKm4zIsNgM8J8V_L7NsuX9d0Gp5dUw6_UYla0v87fY0JCgIu8RzhSh_IxY96jeNWJELvScfFefJTmSz2IMnggCyv0GQVW08z-JUPN6DrOT-e5DvvNQRE0-SVJz37lEMwIFoXlzkNggnnaIrrv4N2XWJ2kXX7n7y9o0kg5qpk2deHqycM39DF2ZEXwMPTH0scXOaYoiH87tlJn8pqXcc0pxctrnw4OJ9o1BlOQm9ZewAaSTau4bBMFA9mPAqeAFvic_xASkT18fvXcTh7xbr69zUoxPx5ghNRRRTPPxmNR_Ohshx7VHWhCs_FzJS6hBSsTtQCxPqpjZqfCkqaJLZ6bd1CyU_87mSxe5dsukgIJtqW0bttdsm42-fly2 "consulter l'ensemble des demandes")

Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter l’ensemble des demandes en cours. Quand l’utilisateur accède à la page d’accueil du site, le site récupère l’ensemble des demandes auprès de la base de données puis génère une page à afficher sur l’interface utilisateur. 
Lorsque l’utilisateur souhaite filtrer les demandes le site récupère l’ensemble des demandes en cours filtrées auprès de la base de données puis génère une page à afficher sur l’interface utilisateur avec les demandes filtrées.

## _Consulter une demande_
![consulter une demande](http://www.plantuml.com/plantuml/svg/VPI_Rjim4CPt0Ng7WvSsWuVqto0OGeAk1Oe2pUQ58YyEMveKo5CGlqt7-3dqOZqUPLaAqCABoViTluyVpxvBf28DHmSw-3GumWY3Hp1uLDvWNP4bX_ygFbc3y1W2TU6bhkfAQGeHjBFe2LI2pGDPPvCY7E86GZHym2tKLS-QLjjUPQpl1Mtk-_x2V636A5ATIWYTCG9SDfeDJDYNh3cfRTjMZcgKrkChsnh_W5FGgmEAB_lCBZB17H7pTtAw2F-q-ZVIDvleQ_0KWyFPx4VkvKEthT0Dx7QbkMtbkilI0QaSzDwQ6rXeSfbZP8RHV9S6y0NrGFXZm7ZAT5tvm61uPaKc6lZk8OvdFVJZQqHmxz0dF7OEzvnw0XAP14ZWU6c2z-CPKouoErmZ1tNA2Mi-Qpp3tlD3bjw5EzOhxdQxxRQi3AwhSs93OeCIsKEwPlHflftKro6jAsL_YkbcuKBg00kjObJKQ7gXY-3dkX8-Hr-ejQQ46UtXYHgvkqmjXEuNawLXxtM84LCVlCa9yQmanG5fHUFv4A95M8IInHfeQ9LCthpCW53op0j0rczcnDZKEtMwpidRCPa3coysjQpIkZpYmcFPQc1jOUR-xtBw2GaWlv058ElykKDl-7_YBm00 "consulter une demande")


Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter une demande en cours. Quand l’utilisateur souhaite accéder à une demande le site récupère l’information auprès de la base de données puis génère une page à afficher sur l’interface utilisateur. 

## _S'authentifier_
![s'authentifier](http://www.plantuml.com/plantuml/svg/ZLGzRzim4Dq5w3ySl2G1uY5fkmYEa0zaoz8XMnQQEiT4558WZudpRpgslyD_h7UKHCjAKKG2195yT-_TtPEk0obFyRM5SA8YRT6IsHZqPK66MloqkpKDmiOvMhjTMIXDpeDk3GD01LWyacbDK8JHBy3v1ZrSb4N754QRJWcgwnAokkcw4N9P5eqYjLO1OTqqwVnM5ipLE6ltVt24_YYBiXW8btKjwIfGMkz_o-d-5xGAElMCIPjvOoK2uH2FyjwwPsDx_WTv7TD-OpmBMzO3eeBLgW-fwyotMYsNVRO6ZxD_biHh_G8XUbYxICx2auK5LwIv7DI4VZ5NQ9temmrLy70I3ts4e4mmz6G31Z1suuAqPSXZd3rMNeqdfp6Wj-eLpxaV8RnpdMSJoWGMuNsza_0jwfUl1VUXgIl3pgGlcK2r1E73ajhTEUzP6LnT0Vd88mA-CZyFlWBSeOw4FoFwZzEp7f5JCc8QauZpteGwxmtnB43gkT-PaCc7Cxa6QmWaEKD7bcdfaTULF4QFV3-4PD4fwDWi8qQcCkrDffkRQJoOcqhsi6NFoEFVyQDPaHMpK_ZRJ1-gLc8CDelkEovZIDaiDsQMyZ_f-gbDqyna3fMbj8VxcjVyG_aB "s'authentifier")

## _Créer une demande_
![créer une demande](http://www.plantuml.com/plantuml/svg/TLIxZjim4Em5w1yMQfmKBl8iX3lXaWjIfKY0IsV0eCbLJ9Wc5Jw4kxz9Uz_X7ykI50NPlciCUdTsTdQuuftppFfmLC3jwHaj18qWyCYqmBhoqYk4-wlCHZVDTlkJuckBVuDqssqBFrR1IoKTynWik1Kw3opuFMelUtbwXer63wT_m8OXF16X8nZHxqpmHiCg2c1Uqb7CZLPDKrTrnRWt5hYIn0NCGVCjfuDjm5X1NE_gQg1199S3YvXXIBZsop0q01Fe_JaeE8f550_M4dFxcmA5y4DT2URPZZbIA4J2nS1N2hG5zBckzfBKziRudNcCKhNn26R4MMuRPnH5xqOx9fsCCQbxOuzfOhVH5XKTUt8CIE01VLrD1EikZjD6Fdv8fasEZKnHSvliaIFP7d79Bfe-Lr5tlaT--2vHYKjWpD_ShDVvdy2Bh28RbO8-bW8tnq4XvMvlmTj0kq6kmjGe6acDB5BnGnB_vkq4A9GHaaCPDWsPBodN55C_PbowdNNNJSYMfERIhZiZuaQFcUQUJcXTShIGVO8B8SNS69mqn2Q9vRh7mfHbON4kQMpXOP5QLEIPpvmgipWsufL7BqfBozS2FY8F7dy5j4yNPGGugqbNEWSNUkROVF7-PU7ByBI4PKzQi2YabNymVxuC1aPdUWE0zRsaPOkn-G51HPzF_7c53Asb3pklMD1boQwbfur4BQATTNL79tgo_WC0 "créer une demande")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite créer une demande d’aide. Après l’appui sur le bouton « création de demande », l’application affiche sur l’interface utilisateur un ensemble de champs à remplir concernant sa demande. 
La cohérence des informations est ensuite vérifiée par l’application. Si ces informations sont cohérentes, le système enregistre la demande, sinon il l’indique à l’utilisateur par un message d’erreur.

## _Éditer une demande_
![editer une demande](http://www.plantuml.com/plantuml/svg/XLJBRjim4BmBq3yiT4bwqA5DUn6I82dQdd9eWVOMmA39TKoO8XK-ZFQJ_1t-iIv9KPMj9hb8ukxCQdPsfJldcVMXLu12UhGGD8B0dcc1TUMbLmXV5vb7tJIhrNTxFBGMduDqgrK73rCwM70Nw3nmepLoVpm0feCBokEy43o72wc0mV7GIzyqTLLNZ7jZWIk9sWDpq7p9MDk0iNI3ztKra6Z9vS0YP1WIhBiVXWPW17qu1GL7iOZYmLeg_8lENRoKebUdU7hOONwzxtwcGq5-h2l1F5ipXx0M8c5Yu3C5kWBw53iPUsXlRwF8BlR4T-38dhK9tcZgEbcRUfPxHjuGRk9TNxTj9hBDHl8jWc8mi2TCiv96an0yPTQLDlHizbWSF9jBRuJSI8H7hT01tx9-SAy9fV6FMlTCIR7KIcVolqr48EOM-UwRH2NEWJ5VEbeAPuhCLWesaKghqWyAANTp0zu6saIQAumlYgFiaWLvBfV-tPWl5ICYXzBOYPF7cLcNv_2Sd16Yp7bm9hQ4_r_UiJs-MdvSAwBGvf2StyY3nny1xPy5Zn0df6JU59nfccAJU7X3VN4pOl-PDGFcO0uljj6IYrRI6gO56LUI_WBpDPr-8QZeCucN5ugXjVIrvx47NGQ_R39j2MfAtD6LVbX_0G00 "editer une demande")

Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite éditer une demande d’aide qu'il a émise. Après l’appui sur le bouton « éditer une demande », l’application affiche sur l’interface utilisateur l’ensemble de champs à remplir lors de la création de la demande. 
La cohérence de cette information est ensuite vérifiée par l’application. Si ces informations sont cohérentes, le système enregistre la demande dans la base de données, sinon il l'indique à l’utilisateur par un message d’erreur.

## _Répondre à une demande_
![repondre a une demande](http://www.plantuml.com/plantuml/svg/ZPNDQXin4CVl2_iEqxt4FVZGRrXIaz1B3ocaeRq5Z2nDRP6rjDM7IT-crpo7NwoZqMwihVE5mQ2Pt_n7-ezad_aWN8ZR3XpsrYY7820Q18LROHJMLT2XGxZQtmtf_TyoVssQPhcyTFkxkSFVKVlbieMB4w6LC07y2Ve0qXg3Ckpl07dXOnUm56cQkjfeXV3Bsh2ojtLLLq86wq1s6ab7U6ZEMR81wnGwU5DNFMrSIzsdHgBl6MhF-tv4tiAKYPw22PBHELBzIUisVOq5xwPyw6JM_A7b3OOBxSCNQuAptQ7a_RI43hVBDKJkq7aHj3KZ_E4_VPOjMnIgIWIn4XvXfHGZOw1jOA0-9PkC9IijjHgiQg4RpTV6IwV3jOa6jkYzMDCq1qFdYqNoh4rLyWPyT413NjaOhA6HNZhRssHNEIIUYTu9QaYbj2BFvmksjOKD8HrUqHMWYSzU5spAfvso_SIJhIsiCUGZpxGgOKeEvEdfV9wN2gVfGeebMj3-AtOzkbansOagSnFXfofJUCFXQVD1vRY_KEfRDdZsK5lfC2stVfs7FR3Zj3-cDyPNWIG9QccBkMInIDqEoNIz7ksMalSm7p97YXFam54xBtPJAOhMLTek4NJ_Mi1Rb37WzuZkJy5HBdFSZbT5DrwN-qdaXE0-nsDvn7NRqmCxZ0bUVRwV4pmuavTTYeCPO-cH7yVeiwwKvtxMc2UE_I9lq2Z-oQG7oMX-SWMO0yFRPuHVS47mEdtEI8p-3lu1 "repondre a une demande")


## _Supprimer une demande_  
![supprimer ticket](https://www.plantuml.com/plantuml/img/LP2nRW8n44Jx_OhHLQIu0kXEw8H2anOGNHfZRoGh5vzZhn7v-wmvAoATFVCyEslQPp59ojS4TbuueGI8jvyiPApC2NRo70GcexjaJXtcv1HRKzHttlfer5NZfcA5pezZ1pHmGyw8kPhCk3htGAhmgiBGORVJ-HepZWtV4hM9lMfBxe0taNZYxy9PLYyKPc5C_24OS9YqBEQ0zv1BZ8bpRlr1TGD_CmelETHgzcEjCe3lR8lmiN3wqTW_MasgNVkd2kJud_zqRU6qv-3q8-aN)
Ce diagramme présente les interactions entre la base de données et le demandeur lorsque celui-ci souhaite supprimer une demande d’aide qu’il a émise. Après l’appui sur le bouton « supprimer », l’application supprime la demande dans la base de données

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
    
![diagramme de classe](http://www.plantuml.com/plantuml/svg/vLTBRzD04BvRydyOzUGaze5h5AAYzW1IgP0QpjLYJnE3xOJTJL5Kyj_PfxsxNgFI7a12bTfwtlFjD_kuP9nGVcmRg6gofQHj4Ig4iY6COPga2Vd2E2KbroBOrEKtvB1QMVbw3KzfKa1T0IoXxhZyu3LlK7mAaxhRIac5hAJrWTVxhfU3L9I4utPFJu6K8f6srqBhnBc_JvFLIYbnlKwJXQadgokL6zv2TsoQN1TW_N8t-nAiD4twv8DbDB4Cq9AkmYCLiiyCwKpM8Q9okZzvXSpa_rla7wfiPk1GtnjPa1JPLXR0h5GNgnNM_tgeE9j1uEOgOy3Em4Ivik06CQJARTGjxCckx7aXEC4E3JdfhaXLlSVcW3JRgJyz4Wj67b7Qw9-p_ANPShNl7f4obGWaJyOBw9faOrX3zLddqE4_8cDaYnEHZJOIrD4unUeLl2BqRaSK4JMnApp82Q4t-zBquVAQK5e_aYQkjAwRkiMObv9x2e5sYSmEqXJTXnfVH7p1ZXSJNqpDD23vD1moQHIEF0v6Fa1XjeMfaNF068Odg30sGhv95dRLpvA9-SxlR3JAeJv08WntxM0nNPtIkh1DLAMZn2jIEWVZCCGdXREgmMnNh1VgDL0APUxj1tRgptRmtJ6wuyVgP2Q87RzyHIwE49Vf35knbaWz8KTIxaBP3jldd04guylcOJmDefbdpWFyRXp4yJaz47ys3caI34JUu-f83AY3n23QJv71HPnz2jT0FZba6bnBcJkPkEHZtbf5M5dlQEgBU5fDs89rtUX6nfvM4NJQ-yas8rvAx7DhckAZWysWuXqK_ppDNxFjmz_QzmLLNyNpPz0S_Z-UXqptzd9DSRdiqD_j-wjzHy8x2plIiR0JS2hf88nnMYQnPCvLR7Txerw4V0Ygbt6yMQbmxXKSt3luBHaXf1QPnXMt9jiOr5vZ2_8M8x9f-Dl6JSsukDUAiXivOQkLU8FnkjGlgQcvzvsogOqwD0C0NJGjTzg2GVPGDt9BSkvMI_kmcxiT31pXMZkOpRpkxAlmPr6CRcMUrfcocDnwAEvTp2zWNXH5Wm-yW8it5pRv4YX-FwhfSKptW-dSCTLlbJxPEAZxmbX2wNobYQkJjdFjfrFOryUorVyCEOHbKUr_TCNSgILOzILeJ9d4xnAxIhp1Vm40 "diagramme de classe")

## Diagrammes d'etat transition
La réalisation des diagrammes d’état transition est la cinquième étape. 
Ces diagrammes permettent de représenter d’un point de vue dynamique les différents état d’un objet ainsi que les évènements qui permettent de naviguer entre ses états. 

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


