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

![cas d'utilisation](http://www.plantuml.com/plantuml/svg/VLFBJiCm4Bn7oZ-iSYa8jIgqK41L1U9rvt7ZOkAb65odijS81FmBrtv7VuoravH2q-OKUsPdx9trYIDXoKyqvCA1R7bIMZb1gZ1fel6HW0gmQln489N5l0H4JeM5kugBtW8NPqlh38R3gLKJOTz7evf_ggGmLA_ESIACP2vlZD4GtA1zhQMg_o3ZC2-Ch8JIPDbq-DbkBrHNW2M3D0b75sQi4R9RzO9KPF2H9i2VPmFX4ExETgFrMM6SruGMxWte5Xg7amUkuvL41wHoBdVP_-AzrM9lAlOAkHV9bqgJHRk2zYDwDPyn27g3vtxfQUSp9gvtEuYq2wbe8sqGQTVpsPJxRH7ctvilSLWcrHAUdZW_zQWQxd9KalmqJ0FRhz7QxJRoogR3Jg_xN7Zhmf8Axs9Juau68ToWjHm_Xx_5cjiLmi4EEvsOqJ4F5BuH6XccwI_Q-uUM-6AAWYfdqxXxL6lreTCPnTu4BMLoxIN-MlKhg_t6WzJeGUD1oZal_GProM2Tt-9oNQversyhJRxIv8Hb-S7_0000 "cas d'utilisation")

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
    ![diagramme de classe](http://www.plantuml.com/plantuml/svg/vLTBRzD04BvRydyOzUGaze5h5AAYzW1IgP0QpjLYJnE3xOJTJL5Kyj_PfxsxNgFI7a12bTfwtlFjD_kuP9nGVcmRg6gofQHj4Ig4iY6COPga2Vd2E2KbroBOrEKtvB1QMVbw3KzfKa1T0IoXxhZyu3LlK7mAaxhRIac5hAJrWTVxhfU3L9I4utPFJu6K8f6srqBhnBc_JvFLIYbnlKwJXQadgokL6zv2TsoQN1TW_N8t-nAiD4twv8DbDB4Cq9AkmYCLiiyCwKpM8Q9okZzvXSpa_rla7wfiPk1GtnjPa1JPLXR0h5GNgnNM_tgeE9j1uEOgOy3Em4Ivik06CQJARTGjxCckx7aXEC4E3JdfhaXLlSVcW3JRgJyz4Wj67b7Qw9-p_ANPShNl7f4obGWaJyOBw9faOrX3zLddqE4_8cDaYnEHZJOIrD4unUeLl2BqRaSK4JMnApp82Q4t-zBquVAQK5e_aYQkjAwRkiMObv9x2e5sYSmEqXJTXnfVH7p1ZXSJNqpDD23vD1moQHIEF0v6Fa1XjeMfaNF068Odg30sGhv95dRLpvA9-SxlR3JAeJv08WntxM0nNPtIkh1DLAMZn2jIEWVZCCGdXREgmMnNh1VgDL0APUxj1tRgptRmtJ6wuyVgP2Q87RzyHIwE49Vf35knbaWz8KTIxaBP3jldd04guylcOJmDefbdpWFyRXp4yJaz47ys3caI34JUu-f83AY3n23QJv71HPnz2jT0FZba6bnBcJkPkEHZtbf5M5dlQEgBU5fDs89rtUX6nfvM4NJQ-yas8rvAx7DhckAZWysWuXqK_ppDNxFjmz_QzmLLNyNpPz0S_Z-UXqptzd9DSRdiqD_j-wjzHy8x2plIiR0JS2hf88nnMYQnPCvLR7Txerw4V0Ygbt6yMQbmxXKSt3luBHaXf1QPnXMt9jiOr5vZ2_8M8x9f-Dl6JSsukDUAiXivOQkLU8FnkjGlgQcvzvsogOqwD0C0NJGjTzg2GVPGDt9BSkvMI_kmcxiT31pXMZkOpRpkxAlmPr6CRcMUrfcocDnwAEvTp2zWNXH5Wm-yW8it5pRv4YX-FwhfSKptW-dSCTLlbJxPEAZxmbX2wNobYQkJjdFjfrFOryUorVyCEOHbKUr_TCNSgILOzILeJ9d4xnAxIhp1Vm40 "diagramme de classe")