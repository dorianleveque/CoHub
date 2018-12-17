import React, { Component } from 'react'
import { DatePicker } from 'antd'
import 'moment/locale/fr';

const { RangePicker } = DatePicker

class MyRangePicker extends Component {
  constructor() {
    super()
    this.state = {
      config: {
        "lang": {
          "placeholder": "Sélectionner une date",
          "rangePlaceholder": ["Date de début", "Date de fin"],
          "today": "Aujourd'hui",
          "now": "Maintenant",
          "backToToday": "Retour à aujourd'hui",
          "ok": "Ok",
          "clear": "Effacer",
          "month": "Mois",
          "year": "Année",
          "timeSelect": "Sélectionnez l'heure",
          "dateSelect": "Sélectionner une date",
          "monthSelect": "Choisissez un mois",
          "yearSelect": "Choisissez une année",
          "decadeSelect": "Choisissez une décennie",
          "yearFormat": "YYYY",
          "dateFormat": "D/M/YYYY",
          "dayFormat": "D",
          "dateTimeFormat": "D/M/YYYY HH:mm:ss",
          "monthFormat": "MMMM",
          "monthBeforeYear": true,
          "previousMonth": "Mois précédent",
          "nextMonth": "Le mois prochain",
          "previousYear": "L'année dernière",
          "nextYear": "L'année prochaine",
          "previousDecade": "La dernière décennie",
          "nextDecade": "Prochaine décennie",
          "previousCentury": "Précédent siècle ",
          "nextCentury": "Prochain siècle"
        },
        "timePickerLocale": {
          "placeholder": "Sélectionnez l'heure"
        }
      }
    }
  }

  render(){
    return <RangePicker {...this.props} locale={this.state.config} />
  }
}

export default MyRangePicker