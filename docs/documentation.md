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
Il peut aussi filtrer les demandes c’est à dire effectuer une recherche par mot clé. L’utilisateur peut aussi consulter une demande c’est à dire afficher plus de détails la concernant. 
L’utilisateur s’authentifie s’il souhaite répondre à une demande ou s’il a une demande. 
Après l’authentification, il peut aussi créer un nouvelle demande ou éditer ses demandes pour la modifier ou supprimer une demande qu’il a émise. 


![cas d'utilisation - répondre à une demande](http://www.plantuml.com/plantuml/svg/VP11IWGn44NtWTpXausww8LpWX4zW0nuWA9Jje5qqbGgBXJlujPppCMijaSP1CqcbK_zLx-oRqgYVSu88pN4YwuffqQQQi40ENuijKHX7D_H2oFoJ2Loy2xpeq8h94rFYfY4nzNa7OrQ1JSfKj7lrzrcw-ATTsidbIapmk4lFbwzWvtUs78n7cwlOVd2lTIbDXOi99YvDPhut6WtXArumNFjBVocxBue1pvDFQSGCls7MQEli6qp30CkBTNL9luiUD9tfhzvjpU6VUud "cas d'utilisation - répondre à une demande")



------------------------

>## Diagrammes de séquence
* ## _Consulter l'ensemble des tickets_

    ### Scénario
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Consulter l’ensemble des tickets »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur accède à la page <br>
            2. Le système affiche la liste des demande en cours
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Consulter l’ensemble des tickets »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            SA1 : L’utilisateur sélectionne/applique un filtre <br>
            SA1 : démarre au point 2 du scénario nominal <br>
            3. Le système renvoie la liste des tickets en cours filtré par l’utilisateur <br>
            Le scénario nominal reprend au point 3 
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

    ### Diagramme de séquence

    ![consulter l'ensemble des tickets](http://www.plantuml.com/plantuml/svg/ZLJBRjim4BmBq3yiV8bzy25DUn5I8qMllGHeFu0cjpPHHYJ8LLF_JOxzZ_nObmyvekGcqKKYESkTdHdeBf3mD3mOaBOFWo7qOAwm3_YmDmWA0v2Mlv12sv0ctdeRrpP2alKWZSQUG0HO_I1jT124Wr-1zOghhw5j7FVMKZiHOSubw1VdHiY76OICJ93kUshrJGVwQdlork3vsfksKOB4NWI4lL89FsvqAoYeJv5buRVTfTwTaFBvhq9uVW8Zm8a3Sljume3OkOE0mijZRXxM6qY3wjyyLWImG8nYS6pR0Vv1EH3U3-XFwyq4oiSPUdkxtUQLmlgqROorIGvZ-qDyqn4zNWNm6CLdaO4VwJ7rJeIcoenYVCoumglWEcwSAtUxji5UvIaJcpJ6X4rQprHGEZWZJcSPvYeKyXe-Jw8pOr3kg8lJuKIQlD51pQYW4k-tcLj7nJPur7I4dpf6j-ZtYha55prEoEhQYQONl1vBPvN9sB7onVguixG_xhuh0l69CnPbUyivC6okEfLqlC3UbvZhkk2rw8oOPCMuc7-T3skdPcCNjnQcBBDssOrbuYwHdwIklgPagd9dJ5z-hpUS4FAwFoovJwhhQVEm_nrZFd-9TDlSyHV_aly1 "consulter l'ensemble des tickets")



* ## _Consulter un ticket_

    ### Scénario
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Consulter un tickets »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur sélectionne un ticket <br>
            2.      Le système affiche le ticket sélectionné
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Consulter un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Consulter un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence

    ![consulter un ticket](http://www.plantuml.com/plantuml/svg/TPAxRiCm34Lt0Ve7mbCxPEXZ4W8ZQ9QkVMrT58ajXAYIAz51_VUbR2Us2XHUJFBmyfBGBfDEr7zvC37atXCcw0EGCqSaAQJGXc82unq60fsXUSkO6eZ9Cda3KdJSxuphDDUvTE9qmLx6tmPWHc-bi9hqGMU4WxKZKn8Fd50DRBTiX7NQTkRlo_1vx8QpixI2HwBk6Rzxp7HrFVfp9qqu0rA4o8773s9sxtaFYE4zwCjA9c71ft1FoOzMrEiKnq0f-cN3EodcoPjstQFOyQJKjiNfFz0dqYHSMLsGqhfguFPo6mNuWwOdVEen3LKhbwKepAOSPIraiOPguUM45LaBPDvz-EFkibXxVWGAhCkTryEosKhnF6JvTXWiFx1V "consulter un ticket")


* ## _S'authentifier_

    ### Scénario
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
            3. Le système indique à l’utilisateur que ses identifiants sont erroné <br>
            Le scénario nominal reprend au point 1 <br>
            <br>
            SA2: l'identifiant et/ou le mots de passe sont erroné <br>
            SA2 démarre au point 3  du scénario nominal <br>
            3. Le système indique à l’utilisateur que ses identifiants sont erroné <br>
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

    ### Diagramme de séquence


* ## _Créer un ticket_

    ### Scénario
    __Prérequi: l’utilisateur s’est authentifier__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Créer un ticket »</th>
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
        <th>Scénario alternatif « Créer un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Créer un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
        SE1 : Les informations ne sont pas corrects</br>
        SE1 départ au point 4 du scénario nominal</br>
        5. Le système indique à l'utilisateur qu'une partie des informations est érroné
        </td>
    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence
    ![créer un ticket](http://www.plantuml.com/plantuml/svg/pLIxRiCm3DmD-1y8Bss737rCHc04BGfqxMlBeaWC84IHNOaAca_gT_J7IbbEQbT5aR6BRP37unr9UE59E0fR0z9zVg23O86qt22LHLa8IQq3QJHQ0k6XUlNeAcYTOkHbMNHSgwNk1ASvi-DeH3ttdnN0WBmg2oL8h8H7M2dLOsBWbWDr1VCvYs2UfXdmDx7tq7N6qO6wXWUYxWdV0dewloWBsnA2mJLnYk5o0ws5fPKE1ISEDeRgI3Hmrg2qxupOtojDBpqiqh5VGz2nEdM6pc5mPS4Uu0Gb4JPMOn0KReLLJBAqNcYlOqpRTUksxBMrVcaT6lvSWmX7hP67XwvtqK1gDcWOUxepmlj-YdLIVrZ9TG8V7K_mDGywqJJDtpWlTlWzbecc4J1bnfLC5DTR0xwZ38IF0Tq-es18YaJiB4vrsdrQN2Uimhn-qdgodR61d23pa5r8Ld9O1He-uVZuFvUHYVyXWGSwkkNVF5aLRt_1R_uFV040 "créer un ticket")




* ## _Éditer un ticket_

    ### Scénario
    __Prérequi: L’utilisateur s’est authentifier et consulte un des tickets qu’il a créé__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Éditer un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. Le demandeur sélectionnes un ticket qu’il  a créé <br>
            2. Le demandeur édite un ticket afin de pouvoir modifier ces informations <br>
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
        SE1 : Les informations ne sont pas corrects</br>
        SE1 départ au point 4 du scénario nominal</br>
        5. Le système indique à l'utilisateur qu'une partie des informations est érroné
        </td>
    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence
    ![editer un ticket](http://www.plantuml.com/plantuml/svg/nPCzQyCm48PtWVx3uQNjaA4VamWXD1IwzclBebWN455aLpgRvj_tPDcfZHiwba0INhttwhaxUnr91sgE3j1OmW2D1xBb0KaANL8Le7GMFO6EK7n430LKmR3lLegQAsrfQyt7VDAocbnltTy2e7VUJPqvVUDqZ9rTlNV2a7ilXT6aTpeYx8pfB4buP44Li5moC4UiLht_GGefUiO5gnb4mJDH_OgV3KQwlf72LuJWS4-WOEFuHgWyRBtkSK2AleEKaUCK61jhfqzFF9aCcPBIHpk2cidC5OQ0JKWQzmj_SoJNcKL1YkuHjjxwVHMEt5tbiv4NO5lDvXoMnJFdU98Aecxn1t9IFVBba_4AE8V7h02_i6m8NneCfra2ExAIDh98xKtkdjQgR3KuBvzSF9xIc7vUFslWbrrDvZoF62Oe1Jf-ijBNlopj4Z0C3z85xYGpkpU9Uis__Cf-0m00 "editer un ticket")




* ## _Répondre à une demande_

    ### Scénario
    __Prérequi: L’utilisateur s’est authentifier et consulte un ticket__
    <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Répondre à une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’aidant  appuis sur le bouton « prendre en charge » <br>
            2. L’aidant renseigne les champs <br>
            3. L’aidant valide sa réponse 
            4. Le système vérifie l’ensemble des informations
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Répondre à une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Répondre à une demande »</th>
    </tr>
    <tr>
        <td>Description</td>
         <td>
        SE1 : Les informations ne sont pas corrects</br>
        SE1 départ au point 4 du scénario nominal</br>
        5. Le système indique à l'utilisateur qu'une partie des informations est érroné
        </td>
    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence
    
    
    
* ## _Supprimer un ticket_
* 
    ### Scénario
     __Prérequi__ : L’administrateur c’est authentifier

     <table style="width:100%; text-align:left;">
    <tr>
        <th>Sommaire</th>
        <th>Scénario nominal « Supprimer un ticket »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            1. L’utilisateur appuis sur le bouton "supprimer"
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Supprimer un ticket  »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td/>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario d’erreur « Supprimer un ticket  »</th>
    </tr>
  <tr>
        <td>Description</td>
        <td style="color:red;">
            

    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence
    
    ![supprimer ticket](https://www.plantuml.com/plantuml/img/LP2nRW8n44Jx_OhHLQIu0kXEw8H2anOGNHfZRoGh5vzZhn7v-wmvAoATFVCyEslQPp59ojS4TbuueGI8jvyiPApC2NRo70GcexjaJXtcv1HRKzHttlfer5NZfcA5pezZ1pHmGyw8kPhCk3htGAhmgiBGORVJ-HepZWtV4hM9lMfBxe0taNZYxy9PLYyKPc5C_24OS9YqBEQ0zv1BZ8bpRlr1TGD_CmelETHgzcEjCe3lR8lmiN3wqTW_MasgNVkd2kJud_zqRU6qv-3q8-aN)


    ### Diagramme de classe
    Rajouté le prix pour le convoiturage
    
    classe Ticket
    getRequester()
    getHelper()
    setHelper()
    addHelper()
    
    classe TicketListControleur
    getTicket(s)()
    setTicket(s)()
    addTicket(s)()
    
    
    ![diagramme de classe](http://www.plantuml.com/plantuml/svg/vLTBRzD04BvRydyOzUGaze5h5AAYzW1IgP0QpjLYJnE3xOJTJL5Kyj_PfxsxNgFI7a12bTfwtlFjD_kuP9nGVcmRg6gofQHj4Ig4iY6COPga2Vd2E2KbroBOrEKtvB1QMVbw3KzfKa1T0IoXxhZyu3LlK7mAaxhRIac5hAJrWTVxhfU3L9I4utPFJu6K8f6srqBhnBc_JvFLIYbnlKwJXQadgokL6zv2TsoQN1TW_N8t-nAiD4twv8DbDB4Cq9AkmYCLiiyCwKpM8Q9okZzvXSpa_rla7wfiPk1GtnjPa1JPLXR0h5GNgnNM_tgeE9j1uEOgOy3Em4Ivik06CQJARTGjxCckx7aXEC4E3JdfhaXLlSVcW3JRgJyz4Wj67b7Qw9-p_ANPShNl7f4obGWaJyOBw9faOrX3zLddqE4_8cDaYnEHZJOIrD4unUeLl2BqRaSK4JMnApp82Q4t-zBquVAQK5e_aYQkjAwRkiMObv9x2e5sYSmEqXJTXnfVH7p1ZXSJNqpDD23vD1moQHIEF0v6Fa1XjeMfaNF068Odg30sGhv95dRLpvA9-SxlR3JAeJv08WntxM0nNPtIkh1DLAMZn2jIEWVZCCGdXREgmMnNh1VgDL0APUxj1tRgptRmtJ6wuyVgP2Q87RzyHIwE49Vf35knbaWz8KTIxaBP3jldd04guylcOJmDefbdpWFyRXp4yJaz47ys3caI34JUu-f83AY3n23QJv71HPnz2jT0FZba6bnBcJkPkEHZtbf5M5dlQEgBU5fDs89rtUX6nfvM4NJQ-yas8rvAx7DhckAZWysWuXqK_ppDNxFjmz_QzmLLNyNpPz0S_Z-UXqptzd9DSRdiqD_j-wjzHy8x2plIiR0JS2hf88nnMYQnPCvLR7Txerw4V0Ygbt6yMQbmxXKSt3luBHaXf1QPnXMt9jiOr5vZ2_8M8x9f-Dl6JSsukDUAiXivOQkLU8FnkjGlgQcvzvsogOqwD0C0NJGjTzg2GVPGDt9BSkvMI_kmcxiT31pXMZkOpRpkxAlmPr6CRcMUrfcocDnwAEvTp2zWNXH5Wm-yW8it5pRv4YX-FwhfSKptW-dSCTLlbJxPEAZxmbX2wNobYQkJjdFjfrFOryUorVyCEOHbKUr_TCNSgILOzILeJ9d4xnAxIhp1Vm40 "diagramme de classe")