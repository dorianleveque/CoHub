# Test Plant UML Diagram

>## Description du projet

-----------------------
>## Diagrammes Cas d'utilisations

![cas utilisation](http://www.plantuml.com/plantuml/svg/VLHDJzmm4Br7odyOvK8hj19q5xQBeeYMVjmBtBYOU02tZhsonuYgxN_fTN_7_Z76Jh8icoMvZTzxysR6uvnx4ev2e_DCunq1MN3g_e50AeSrAMloJDHa7LoJqieBmk10U2YsunjJbakd6k5-LrNHApufAGprqHTiX97Cti2oKKPvSYb7dab1ubPuX4jqZxtBvtWWaHr0McFMA_ISFy-stSk_ayd6R01i-Gv5EoNaMMnQc7kDK5ofNqYsW3zv1lm5ZtKivlhYE5LsOOqFcZ1s3_e0ZSVcLhULeWTIDSjZiQ_57uRYO3hsW3nDv6zAaqCtG6S9_RvUCGXwnFEazNGyFJVYTffeNwMYKTeyqNwiLqjhf4DO_nzlucFYNnw8G0zeIDsfFRqiMb9OnZLY-pTo7H_jvRL3XyFfqKyRd8yXsU3JKD990V5oOwxj7U0DUCSvttS8Nsp9H_6Epg0iyOdGoAhQHQSxQ8jlrWmIQTQhPXnNQGfHfKojWyINfBCkwSbUonuztMlPhdphD-ybyxVyEishZM-rYrwx6DUcyKzOqZtGixBaYx71oFJky-nVdfrpXVmtUGO0 "cas utilisation")

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

![consulter l'ensemble des tickets](http://www.plantuml.com/plantuml/svg/pPCzJyCm48PtI_uFfox0a86FAKgjIbqOM82oTN6JAx9mxM1V2lttdFFHqb2Ga1XOeiHtxtFllOfdaNIWPcEXz2usbZ20FKCNSREo21L685E-84KfT4a-G6aDEW8TOV8KCKp0Xuf5bo15pIXJcbfpdKjRFavjZ-th1A1llPAYqgHNEYAigghjAGesmcAbbcuevWFxHWef-hcPKWCxXrkY-W5V6umaXVE4O75DN9Xxvx0a8BzqRxYAXh3rRxQQcpez8mEcpsx1EnDfJi6sTlB5uSmx2juUDhsMeZUGgR4sXwBeg4ebqzeIh8sbW32TmY8qR8DpW1y0pqY7uUUT-A9JxHSu5gL1gJn2CJobcmE-OzaGtZSOTjy0kR4xIOhiYwskLk5n_-cfcThdEnADcMZv1qYFNsRoXsdyZnmSG_YcyM-sEx7Ca0i3-pkGGsLYRVNkE9HF8uR9KioOpjVx0m00 "consulter l'ensemble des tickets")


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

![consulter un ticket](http://www.plantuml.com/plantuml/svg/TPAxRiCm34Lt0Ve7mbCxUEXZ4WmXQ9QkVMrP59ajZAgIAr51y_Ub_8Zj0eKNIpptNfBsBf69bBySsE1JTeGHiWVgx2UI558OIo62THrw0fEWUaiOAmYnPV86fEXPtzckDrpdqecl2_Ool5O04tehHMl874r2EBRjm3GDfxDOwuClnGSkgjdxlgHFkRNMixU2HwB-6Ryp9hgw7XhiJePm0gJmWGyEtudPlUD18FY3DvUPRCI2ZySzHJVqebx7S_0KWrj6l9DYIgxrMgEWQKOdhKkd_q0VIAFnfjK5ATALWELbEGhm1sqcVCeOpnifbwKeJBs9uktYbjdwrlgodnMurIUU_Fodjtaira_VGa7RfTwPypBNod4EMPuT-fR_hry0 "consulter un ticket")

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

