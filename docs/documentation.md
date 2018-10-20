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

# __Préambule__
L'idée de "Tiketo", nous est parvenu à la suite d'une énumération de petit problème que nous avions rencontré de nombreuses fois durant notre année scolaire et que nous voulions résoudre.
Nous avons imaginé très rapidement que notre solution proposé serait sous la forme d'une application web afin de permettre à n'importe quel enibien de pouvoir utiliser notre application sur n'importe quel support.

# __Introduction__
Pas de tente pour le weekend d’intégration? Qui a une visseuse pour installer une étagère? Qui a une imprimante ? Besoin d’aide en maths la veille d’un DS ? Qui rentre à Quimper ce weekend ?
Toutes ces situations racontent un quotidien des énibien·ne·s.
Parfois les réponses peuvent être si nombreuses que refuser devient un casse tête. Mais des questions restent sans réponse ce qui pose problème.  A finir

# __Mots clés__
partage échange entraide collaboration hub efficacité service a compléter choisir

# __Qu'est-ce qui pose problème__
Alors que les réseaux sociaux sont l’objet de critiques, des réseaux d’échanges et de partage se diversifient et se spécialisent dans de nombreux domaines, du simple partage de fichiers à l’application spécifique de prêt et d’échanges d’objet entre voisins. C’est une pratique qui progresse et qui s’accompagne d’une image positive.
Des applications mobiles ou des sites internet existent déjà mais sont organisées autour de besoins spécifiques 

Comment localement, à l’ échelle de l’ENIB, partager à la fois des biens, un coup de main, des compétences?

Il s’agit par exemple de pouvoir éviter des achats individuels difficiles à rentabiliser ou utilisables seulement de manière occasionnelle ce qui peut permettre une maîtrise de la consommation, des économies et rend service aussi à la planète !

# __Solution__
Notre solution est le site internet CoHub. C’est un site de partage et d’échange fait par des étudiants de l’ENIB pour répondre aux demandes spécifiques des étudiants de l’ENIB. Le site a pour ambition de faciliter le partage, la collaboration et l’entraide.
CoHub recense donc toutes les demandes d’aide car nous pensons qu’elles ont plus de chances d’aboutir ainsi. Pour stimuler les interactions, il doit être accessible à tous les étudiants de l’ENIB. CoHub doit aussi être disponible à partir de n’importe quelle interface utilisateur (téléphone, tablette ou ordinateur) à tout moment et en tout lieu où un connexion internet est possible. Pour plus d’efficacité, toutes les demandes sont classées par catégorie afin de faciliter des réponses expertes.
La consultation des demandes émises n’est pas restreinte, par contre dans une souci de sécurité, l’émission ou la réponse à une demande est contrôlée par un identifiant et un mot de passe.

# __Pourquoi CoHub?__
Co coopération coordination collaboration ensemble avec
Hub : organisation mettant en œuvre une connexion centrale, plate forme de correspondance, infrastructure de communication a rédiger et peut être à placer à un autre endroit

# __Maquette__
Détail de chaque écran 
Liste des fonctionnalités

# __Modélisation UML__

-----------------------
>## Diagrammes Cas d'utilisations



![cas utilisation](http://www.plantuml.com/plantuml/svg/XLFTIiCm5Bulz1qElPbUhE34pKaPawbuhUpEcwmvsm9fEf8JKDHtyNRFiHSpIScOjjiAlKY-7xwUxtHgY6cobKmJYKi2ga6BrPg02uqbYLgb2IkfrZ0d8OLXX5O3Cv0Td3CeYeqM5TCVaqdatmlE5CNJ0rPCSSTDapGvj2g--lqzjmNyaVb0JAqaGZQhd-qYWyyq0VTOWoKp2FFPLOWsgvMnab33cmBPGsMmMZYPEt4qxWsc9lkl7hJLLc7aj-ZNWVua96dKBVIcCTExhNCwPJCCn4Skw0nn58Wlk-scLbmZx7xE9RmDYjSUixH6HM8fEeAE6vBT-0fR4HhsOJ6kbWitwSjZo20YheqYpyEWxjo6u3kXudv1F1gTzmrxjPjQv-suytReFQ9Fiq8DC8e1Hf3dap077q2eKbgECO6lw2GyF0sFZy7VQJ9rN-f-gby0 "cas utilisation")


Lorsque l’utilisateur se connecte au site CoHub, il peut consulter l’ensemble des demandes d’aide émises affichées sur la page d’accueil. 
Il peut aussi filtrer les demandes c’est à dire effectuer une recherche par mot clé ou par categorie. L’utilisateur peut aussi consulter une demande c’est à dire afficher plus de détails la concernant. 
L’utilisateur s’authentifie s’il souhaite répondre à une demande ou s’il a une demande. 
Après l’authentification, il peut aussi créer un nouvelle demande ou éditer ses demandes pour la modifier ou supprimer une demande qu’il a émise. 
Lorsque l’aidant souhaite répond a une demande il peut discuteur par message de la solution avec le demandeur.

------------------------
>## Scénario

La deuxième étape lors de la création d’un système consiste à décrire textuellement chaque cas d’utilisation. C’est ce qu’on appelle un scénario. Dans chaque scénario on décrit chronologiquement l’enchainement des étapes qui constitue le cas d’utilisation grâce à un scénario nominal, des scénarios alternatifs et des scénarios d’échec.
En ce qui concerne CoHub, nous avons réalisé 8 (a vérifier) scénarios. Nous avons regroupé certaines extensions optionnelles dans des scénarios alternatifs.

* ## _Consulter l'ensemble des demande_

    ### Scénario
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Consulter l’ensemble des demandes »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur accède à la page <br>
            2. Le système affiche la liste des demandes en cours
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Consulter l’ensemble des demandes »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            SA1 : L’utilisateur applique un filtre <br>
            SA1 : démarre au point 2 du scénario nominal <br>
            3. Le système affiche la liste des tickets en cours filtré <br>
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Consulter l’ensemble des demandes »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>

* ## __Consulter une demandes__

    ### Scénario
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Consulter une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur sélectionne une demande <br>
            2. Le système affiche la demande sélectionné
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Consulter une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Consulter une demande »</th>
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
    __Pré-requie : l'utilisateur c'est déja enregitré dans la base de donné__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « S’authentifier »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur saisit son identifiant et son mot de passe <br>
            2. Le système vérifie la syntaxe des champs <br>
            3. Le système vérifie l'identifiant et le mot de passe à l’aide de la base de donnée <br>
            4. Le système valide la connexion
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « S’authentifier »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            SA1: l'identifiant et/ou le mots ont une mauvaise syntaxe <br>
            SA1 démarre au point 2  du scénario nominal <br>
            3. Le système indique à l’utilisateur que sont identification a échoué <br>
            Le scénario nominal reprend au point 1 <br>
            <br>
            SA2: l'identifiant et/ou le mots de passe sont erroné <br>
            SA2 démarre au point 3  du scénario nominal <br>
            3. Le système indique à l’utilisateur que sont identification a échoué <br>
            Le scénario nominal reprend au point 1
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « S’authentifier »</th>
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
    __Pré-requie: l’utilisateur s’est authentifier__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Créer une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. Le demandeur appuis le bouton de « création de demande » <br>
            2. Le demandeur saisit les informations relatif à sa demande <br>
            3. Le demandeur valide sa demande <br>
            4. Le système vérifie l’ensemble des informations
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Créer une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Créer une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
        SE1 : Les informations ne sont pas corrects<br>
        SE1 départ au point 4 du scénario nominal<br>
        5. Le système indique à l'utilisateur qu'une partie des informations est érroné
        </td>
    </tr>
    </table>
    <br>
    <br>

* ## _Éditer une demande_

    ### Scénario
    __Pré-requie: l’utilisateur s’est authentifier et consulte un des tickets qu’il a créé__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Éditer une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. Le demandeur sélectionnes une demande qu’il  a créé <br>
            2. Le demandeur édite une demande en modifiant ces informations <br>
            3. Le demandeur valide sa demande <br>
            4. Le système vérifie l’ensemble des informations
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Éditer un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Éditer un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
        SE1 : Les informations ne sont pas corrects<br>
        SE1 départ au point 4 du scénario nominal<br>
        5. Le système indique à l'utilisateur qu'une partie des informations est érroné
        </td>
    </tr>
    </table>
    <br>
    <br>
    
    * ## _Répondre à une demande_
    
        ### Proposer par message une demande de rendez-vous

    ### Scénario
    __Pré-requie: l’utilisateur s’est authentifier et consulte une demande__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Proposer par message une demande de rendez-vous »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’aidant  appuis sur le bouton « prendre en charge » <br>
            2. L’aidant ecrit un message avec les information consernant le rendez-vous <br>
            3. L’aidant valide son message
            4. Le système vérifie l’ensemble des informations
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Proposer par message une demande de rendez-vous »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Proposer par message une demande de rendez-vous »</th>
    </tr>
    <tr>
        <td>Description</td>
         <td>
        </td>
    </tr>
    </table>
    <br>
    <br>
    
    ### Répondre par message une demande de rendez-vous

    ### Scénario
    __Pré-requie: l’utilisateur s’est authentifier et consulte une demande__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Répondre par message une demande de rendez-vous »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. Le demandeur  appuis sur le bouton « répondre » <br>
            2. Le demandeur ecrit un message avec sa réponces <br>
            3. Le demandeur valide son message
            4. Le système vérifie l’ensemble des informations
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Proposer par message une demande de rendez-vous »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Proposer par message une demande de rendez-vous »</th>
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
     __Pré-requie: l’utilisateur s’est authentifier et consulte un des tickets qu’il a créé__

     <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Supprimer une demande »</th>
    </tr>
    <tr>
        <td>Description</td> 
        <td>
            1. Le demandeur appuis sur le bouton "supprimer"
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Supprimer une demande  »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Supprimer une demandet  »</th>
    </tr>
  <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>



> ## Diagrammes de séquence

La troisième étape dans la création d’un système consiste à formaliser les scénarios.  Pour cela, on utilise les diagrammes de séquence et d’activité qui ont donc pour but de montrer comment les objets qui participent au scénario communiquent pour réaliser les fonctionnalités souhaitées. A chaque scénario correspondent un diagramme de séquence et un diagramme de communication

## Diagramme de séquence
## _Consulter l'ensemble des demandes_

![consulter l'ensemble des demandes](http://www.plantuml.com/plantuml/svg/fLNBRjim4BmRy3yiV4boy25zN0J7IDDJWLuAj1z0ankRA2qIvAgj_wR7_aT-h4kAb2WvSGDKW65fERkS6OwW-q32KtSq86qREaFemLnX6_2uCmWA0_-EekMRvO8qSUqLmEL2IB8UfD7O4eW0gs-aZGw2iFChi5vn-oqi5uvtrr8x4M7E9UW7vmha3KEK8B4J0M6dL5elXMO56VO-RfatMs_Je4P8-VH78Jpz1YF0YJtoBEcHAG0PcIOrNxNyZlHP1_feM_BMuC3kBOlWEJmkeXlORFhcxJRfgvS22YyF_QnmVGD9llwHTsBV6CNWoBy1_8Mo8_pIeJzTtrHGNkwXcyrwtJyfdAuk5yRQP9AnxJx-qm4zNWNm6C-4hGU-Yif4g1PQjBthSPbNnaqbOgjwbObDab6nISyp5vGEpeZJOCFSXKnUmrtUCGpE30psI0yYQFcfVRJJ2GbH-TCN6fZIogX4lX2y9C0wogS7FpKTu577O6SRHtKD9vbHbRIqFXaMAxt0kq4Uv6iYC_hCRmcdxHIDBfXS6ZJ4Mj9Hg8mwUlXSovJoMIopj9ZEvyc_dDBIEkjCaIoTOsXdx79m1tl-5TxBmOGHzDgK_v-9vwc-TFHrjbyICyzumPsbk1umo_mOccUx1icLy4kwX_Vbdk_uO_0N "consulter l'ensemble des demandes")

Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter l’ensemble des demandes en cours. Quand l’utilisateur accède à la page d’accueil du site, le site récupère l’ensemble des demandes auprès de la base de données puis génère une page à affiche sur l’interface utilisateur. 
Lorsque l’utilisateur souhaite filtrer les demandes le site récupère l’ensemble des demandes en cours filtré auprès de la base de données puis génère une page à affiche sur l’interface utilisateur avec les demandes filtrées.


## Diagramme de séquence
## _Consulter une demande_
![consulter une demande](http://www.plantuml.com/plantuml/svg/XL8xJiGm4EqZvGwZL4kHWbzZHQj5j3H8S81PUmGMNiUo9uYz3INts8inSJuaYn2b_VwMTuanSdTme5kVEiSKeVC4XWxe3PK5MtRq5rWMgBcDe9qbpu09gcUspYPawc85RJGYkOIo299YjGtOqqB8rBiG9igLK0moxZ4Hx8t9-7IXAXXfjtta65Pliv52hKzVXk3q2GuXu8lqqf6a0R3JsKWzMVr6_60JtxUUO-jeBdSj6yH6t7gsWgOPnDjjdhU44c7KhuFNnXfbFLz0VWBxFiR9UmbL5Fq61VH1kcDwx2WU9yL28AH1q3HrFPmChT6VBJbsEMTQS3E7ZfprY7v2zi_r5lxvV3RHs1GS7jSRpoV-pXjbcnKrWnDxQ92l5AnhpBp_cfR5ZhoHl_eD "consulter une demande")

Ce diagramme présente les interactions entre la base de données et l’utilisateur lorsque celui-ci souhaite consulter une demande en cours. Quand l’utilisateur souhaite accéder à une demande le site récupère l’information auprès de la base de données puis génère une page à affiche sur l’interface utilisateur. 

## Diagramme de séquence
## _S'authentifier_
A compléter...

## Diagramme de séquence
![création d'une demande](http://www.plantuml.com/plantuml/svg/TPJ1Rjim38Rl1lmEd2zP3pwisov26tJ0ZZjqm7OR42WItGgrPK-YWlMHyXnviL6IbJfDaW29zVEZIFvIyk19EWf33yeTzfBCQ46lWaNGE4YhiQx8K8_NmdyiDCrcyyZHrk7VOFnc8w0_neC3lq9Fe4PhKT5XtpHrLLTIqUX0zGOjWVJGV2zy0wFJwE0JrDN4lHbb9XcXQKhWjsagoEqx97WM8oD-yrEXFjULbYItqYDijKv04KI1liQcx4W8umvBOmAQ7wj0lV6IuYGEhKVpP7dg7ZreqtM7FOlaGJtBOV8ysZnIkrx7ZaNSIRq0sxODHFob7F9cm3s_844omkoYmZIlUCYsP3uZPnhRZMv8pljBzDrTsrxZ1NViGqzi09vcScvFSnJkFm0wDxgw0dxDBKGlnTpjV3OVRsQYR1MPB9rEbOxWLtek_dx9N3eXtZs3WhlFcUlrvRYNEymRdHNFI1RdkfmO3rW0_aCL27y6TAzdYOoSP2K7Z-B2gQEMkahOikY2NChN1jNyAt3ZQvbqNXvJtynFXTwiNPJ9uknulcVb-C_Of67FTpv-NCmH8BlEyBLnCA3tyWdZFOWNFOs1LiTY-Vt0A_wN-0y0 "création d'une demande")


## Diagramme de séquence
![editer un ticket](http://www.plantuml.com/plantuml/svg/nPCzQyCm48PtWVx3uQNjaA4VamWXD1IwzclBebWN455aLpgRvj_tPDcfZHiwba0INhttwhaxUnr91sgE3j1OmW2D1xBb0KaANL8Le7GMFO6EK7n430LKmR3lLegQAsrfQyt7VDAocbnltTy2e7VUJPqvVUDqZ9rTlNV2a7ilXT6aTpeYx8pfB4buP44Li5moC4UiLht_GGefUiO5gnb4mJDH_OgV3KQwlf72LuJWS4-WOEFuHgWyRBtkSK2AleEKaUCK61jhfqzFF9aCcPBIHpk2cidC5OQ0JKWQzmj_SoJNcKL1YkuHjjxwVHMEt5tbiv4NO5lDvXoMnJFdU98Aecxn1t9IFVBba_4AE8V7h02_i6m8NneCfra2ExAIDh98xKtkdjQgR3KuBvzSF9xIc7vUFslWbrrDvZoF62Oe1Jf-ijBNlopj4Z0C3z85xYGpkpU9Uis__Cf-0m00 "editer un ticket")



## Diagramme de séquence
  
![supprimer ticket](https://www.plantuml.com/plantuml/img/LP2nRW8n44Jx_OhHLQIu0kXEw8H2anOGNHfZRoGh5vzZhn7v-wmvAoATFVCyEslQPp59ojS4TbuueGI8jvyiPApC2NRo70GcexjaJXtcv1HRKzHttlfer5NZfcA5pezZ1pHmGyw8kPhCk3htGAhmgiBGORVJ-HepZWtV4hM9lMfBxe0taNZYxy9PLYyKPc5C_24OS9YqBEQ0zv1BZ8bpRlr1TGD_CmelETHgzcEjCe3lR8lmiN3wqTW_MasgNVkd2kJud_zqRU6qv-3q8-aN)


## Diagramme de classe
Rajouté le prix pour le convoiturage
    
>classe Ticket
* getRequester()
* getHelper()
* setHelper()
* addHelper()
    
>classe TicketListControleur
* getTicket(s)()
* setTicket(s)()
* addTicket(s)()
    
![diagramme de classe](http://www.plantuml.com/plantuml/svg/vLTBRzD04BvRydyOzUGaze5h5AAYzW1IgP0QpjLYJnE3xOJTJL5Kyj_PfxsxNgFI7a12bTfwtlFjD_kuP9nGVcmRg6gofQHj4Ig4iY6COPga2Vd2E2KbroBOrEKtvB1QMVbw3KzfKa1T0IoXxhZyu3LlK7mAaxhRIac5hAJrWTVxhfU3L9I4utPFJu6K8f6srqBhnBc_JvFLIYbnlKwJXQadgokL6zv2TsoQN1TW_N8t-nAiD4twv8DbDB4Cq9AkmYCLiiyCwKpM8Q9okZzvXSpa_rla7wfiPk1GtnjPa1JPLXR0h5GNgnNM_tgeE9j1uEOgOy3Em4Ivik06CQJARTGjxCckx7aXEC4E3JdfhaXLlSVcW3JRgJyz4Wj67b7Qw9-p_ANPShNl7f4obGWaJyOBw9faOrX3zLddqE4_8cDaYnEHZJOIrD4unUeLl2BqRaSK4JMnApp82Q4t-zBquVAQK5e_aYQkjAwRkiMObv9x2e5sYSmEqXJTXnfVH7p1ZXSJNqpDD23vD1moQHIEF0v6Fa1XjeMfaNF068Odg30sGhv95dRLpvA9-SxlR3JAeJv08WntxM0nNPtIkh1DLAMZn2jIEWVZCCGdXREgmMnNh1VgDL0APUxj1tRgptRmtJ6wuyVgP2Q87RzyHIwE49Vf35knbaWz8KTIxaBP3jldd04guylcOJmDefbdpWFyRXp4yJaz47ys3caI34JUu-f83AY3n23QJv71HPnz2jT0FZba6bnBcJkPkEHZtbf5M5dlQEgBU5fDs89rtUX6nfvM4NJQ-yas8rvAx7DhckAZWysWuXqK_ppDNxFjmz_QzmLLNyNpPz0S_Z-UXqptzd9DSRdiqD_j-wjzHy8x2plIiR0JS2hf88nnMYQnPCvLR7Txerw4V0Ygbt6yMQbmxXKSt3luBHaXf1QPnXMt9jiOr5vZ2_8M8x9f-Dl6JSsukDUAiXivOQkLU8FnkjGlgQcvzvsogOqwD0C0NJGjTzg2GVPGDt9BSkvMI_kmcxiT31pXMZkOpRpkxAlmPr6CRcMUrfcocDnwAEvTp2zWNXH5Wm-yW8it5pRv4YX-FwhfSKptW-dSCTLlbJxPEAZxmbX2wNobYQkJjdFjfrFOryUorVyCEOHbKUr_TCNSgILOzILeJ9d4xnAxIhp1Vm40 "diagramme de classe")