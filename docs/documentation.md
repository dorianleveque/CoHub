# Documentation: Tiketo

>## Description du projet
vulgariser la technique
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






# __Qu'est-ce qui pose problème__

-----------------------
>## Diagrammes Cas d'utilisations

![cas d'utilisation](http://www.plantuml.com/plantuml/svg/VLHBRjim4DqBq1q6shX5OIEfxRWk32D1FjqtoQuRLfmuR2dA88T5WoHtwTRdyCKo92NNiMnh9VBzXfoHpXq9IxxIK0e7ikT9QUK4gThacSO70gh1giKZWLGMomI8aceBzmqNlGKM5rlh0cQpfLMLi4_pUSk_K58OQbTNM0aZcRk1PQMCScIZ0-ykq13SeltJ1ZJlmTnXMHlPsEVPTYcpbtv_azK1jc9ti73QVgUAF0kd5cQX4OexzHkfBk0vpu0VprK8Xt1_UHhhkwoDyvhGmWy3keV6OVMJTRoIw81KoN9Nx8e_TyNUDEmEUHZ9DqgJHTj1Hn7zjbun2Ff8vZXbslMAYOVJpYBjMYewIfj4slVrQibDiGZhVySFyIMrioSyFNAJrOFQSvPf8lbb62IEF-1rUhANbouTFWrFVjNUkh2ashjuAN6dWD3SuBKz1pmX7zZpOuDmOsU3GUpHLvuw_4jeP1Yvz-Xm1qtuPjI2A_UcLOrWC9Z7MmWgPKhj9Vut7JMcuxsHBNgsDpADVSgRj9B9eRn6ysxYatRQQgV7jV7w-onfFiqyUyspSow9_oXl "cas d'utilisation")

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
    ![editer un ticket](http://www.plantuml.com/plantuml/svg/bLAvRWCX4EsH-8VHLadX8aU5BCkA5IbjhiuDNiOI2eODpAxYly-mYnEGqgH3C-_YmJQHZZIU7A2nX1563sJx3oGfT4yXGkyiUWATe7jF63i8qJ3kHeg1cRQtW-OrRoQUPjJhVEm02lAsHIxgEwTJck7gRHvSTE-aC9hqGIU4Wp4p90yUUA0wMAyvC4jiDWL_BuKK9UEAfqiG1Kz4mmj-ZfZewbeA7mZ1uP50mSwn8mGFUwzB792Yt21hB78AZ4s3q-T7RcO9cPN-vQOWaul9tbj_3F74-OEVwxMJPk0YKYMeErAGz8I_zZ-i2YD5NIhpkJW5-8NzIFWyOZmtJDvAaRjTvIiqNYr7yLjWIskCwWRgb2sl2Vf7oqrtBVNIZ1HRz8P_wJS0 "editer un ticket")


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
    
    
    
* ## _Supprimer un ticket_
* 
    ### Scénario

    ### Diagramme de séquence
    
    ![supprimer ticket](https://www.plantuml.com/plantuml/img/LP2nRW8n44Jx_OhHLQIu0kXEw8H2anOGNHfZRoGh5vzZhn7v-wmvAoATFVCyEslQPp59ojS4TbuueGI8jvyiPApC2NRo70GcexjaJXtcv1HRKzHttlfer5NZfcA5pezZ1pHmGyw8kPhCk3htGAhmgiBGORVJ-HepZWtV4hM9lMfBxe0taNZYxy9PLYyKPc5C_24OS9YqBEQ0zv1BZ8bpRlr1TGD_CmelETHgzcEjCe3lR8lmiN3wqTW_MasgNVkd2kJud_zqRU6qv-3q8-aN)
