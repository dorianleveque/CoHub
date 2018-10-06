# Test Plant UML Diagram

>## Description du projet

-----------------------
>## Diagrammes Cas d'utilisations

![cas d'utilisation](http://www.plantuml.com/plantuml/svg/VLJDRXCn4BwljEymsaj0A55BqeQWA6hL0dVQthYOzJGrUEt87YCGy2vSynnviOxjtP1ca-nfxUzlx9dTAq_2KMWqrCA370HIMdb1ofgoqFX8G1QSMZuHIEMmpe2eoJfuQBaO7B2usbbNC9-ld6g4-xLOTFnh9OMXRdMBZJ2IkLjODieeJouvyEuI3S4TkXzTGFiUpJtMDXZP-fV5RYtpFyFXDgm7xEJkOV6umruPPH6FBSnI8rJtwZkIhU1tMG0_WSiG7k7XvZmLU6ED3vhGmHS3Ue36O_ELTRoIw85KpN9VxOlVziN1jEmUUPp87vKcXww7JXBwQRDc4FI9p8kSwJPh9XvFkqoq3rBHITeqqJvlrYjhf4FO_3jzY7UvdmCHw8cxh1xLWRFCCYciuYHn_16lyxE3l7pfy6Pyziq6v-EIRF3fKj9E1R6vqMjt3dX2Nh7dwnRXniv7ezIZzpns-9FGo3XoBz7n7fhnxQX5L-vDfvh0QBH8jn1LojGwIFnlEcbDBmv6TkZbmSWyzZblsaccn_9QpOk9pzfPfvsTrgRh7xAa_JRBuczPN759_4jv1W00 "cas d'utilisation")

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
            2. Le système affiche la liste des tickets (demande) en cours
        </td>
    </tr>

    <tr>
        <th>Sommaire</th>
        <th>Scénario alternatif « Consulter l’ensemble des tickets »</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>
            SA1 : L’utilisateur sélectionne un filtre <br>
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
            SE1 : La page n’est pas disponible <br>
            SE1 : démarre au point 1 <br>
            Le cas d’utilisation se termine en échec
        </td>
    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence

![consulter l'ensemble des tickets](http://www.plantuml.com/plantuml/svg/pLGzJyCm4Dqj-J-SiW131pwcg8qgTM5W0Sh6uiHNPE7QmRuK-kyv9sb3Gm4XCR14pjszT-zUpfb7Ke6QjONAkzXOmW3s15t4TMaHD4OWKpqZHIbKHJv0PGqw0XKXUuWOCl11C-WSfAYPobIcLfpdr8R3gUo-FMO0VUc555gHAbL4ABLkQtQ1F8Ffb3KnJr7qzLTIID6tdN2qfyxXcgY-mvS68qdXF25ON14d5juvh0Z8FxfNBACXREMRZUAY3i-K0TDhDz-DYRIWO5ir-NA8UKV1ss7GIobw0PDYZCrPVCTQ54cqiWGhOoaWp6Qm30tBO1lW6u8dfA7vQGS-wr3x0Gv1gL5AZwYOF9cR0xvXrH3UDXYsNn1oOHT9Y4doUDmY9JKU0ewt7RxG9zIO52rlG7hyqfK_zEE_EE7q3sl5Dv7tS9lsgZyU6NlFKEokQGxQnDggxQ5z7wJi54enPnNy9tW7 "consulter l'ensemble des tickets")


* ## _Consulter un ticket_

    ### Scénario
    __Prérequi : consulter l’ensemble des ticket__
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
        <td style="color:red">
            SE1 : La page n’est pas disponible <br>
            SE1 démarre au point 1 <br>
            Le cas d’utilisation se termine en échec
        </td>
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
        <td/>
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
            3. Le système vérifie l’ensemble des informations <br>
            4. Le demandeur valide sa demande
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
        <td/>
    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence
    ![créer un ticket](http://www.plantuml.com/plantuml/svg/dL4vRiGm3EmDw0-4gwH8aQCo5iOYLUeSdHkkH0F2sfGZKVkdl2CV2sNBm0P8bOuU3cT6usCIZ9Bd2Mpy_g88cK6yFPEOnZHe9KImaoSMm0JjHwBOGeXEcVUcMVJMMx-WhdLpKRImtjQn1QZC1zCu53nX8ZWvjt8AyAn0ryBXe25Kf-yh_wbuLzSxHQjq1oyYoojzPafoSsiQ3a8mqIYwKhezGs0Os4P2NUpFgDT5QDFyX_f4u6X6TfJZm0bzyWNpF8OuQ_R0QU18auuZOFvTeR-KE9kDEb-dMwletjTvx_NnAl9EwxIaxR3lY-eVX0BN3uLBpHjs97RwVty0 "créer un ticket")


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
            1. L’utilisateur sélectionnes un ticket qu’il  a créé <br>
            2. L’utilisateur édite un ticket afin de pouvoir modifier ces informations <br>
            Le scénario nominal reprend au point 3
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
        <td/>
    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence



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
        <td/>
    </tr>
    </table>
    <br>
    <br>

    ### Diagramme de séquence

