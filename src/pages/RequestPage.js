import React, { Component } from 'react';
//import logo from './logo.svg';
import Top from '../components/Top'
import { Input, Divider, Layout, Row, Col, Mention, Button, Cascader } from 'antd';
import Comment from '../components/comment';
import sessionStore from '../stores/session-store';
const { Header, Footer, Sider, Content } = Layout;
const { toString } = Mention;
//function onChange(editorState) {console.log(toString(editorState));}
const Search = Input.Search;
const options = [{ value: 'Tutorat', label: 'Tutorat' }, { value: 'Objet', label: 'Pret d objet' }, { value: 'Covoiturage', label: 'Covoiturage' }];
function onChange(value) { console.log(value); }


class Demande_Consultation extends Component {
  static contextType = sessionStore

  render() {
    function h3PlusInput(colorH3, titreH3, valueInput, colorInput, desactive = isViewMode) {
      return <div>
        <h3 style={{ color: colorH3 }}>{titreH3}</h3>
        <Input disabled={isViewMode} defaultValue={isViewMode ? valueInput : ""} style={{ color: colorInput }} />
      </div>;
    }

    // LES VARIABLES A MODIFIER SONT ICI POUR LE FONCTIONNEMENT DU PROG
    var Categorie = "Tutorat"; // Variable a modifier pour afficher les differentes categories de tickets
    var isViewMode = true; //Variable a modifier en fonction du type de page (mode consultation: mettre a true, mode edition: mettre a false).



    var isSharing = false;
    var isStudy = false;
    var isCarPooling = false;
    if (Categorie === "Tutorat") { isSharing = false; isStudy = true; isCarPooling = false; }
    else if (Categorie === "Objet") { isSharing = true; isStudy = false; isCarPooling = false; }
    else if (Categorie === "Covoiturage") { isSharing = false; isStudy = false; isCarPooling = true; }
    else { isSharing = false; isStudy = false; isCarPooling = false; alert("Pas de Categorie"); }

    let Demande_titre;
    let Ligne1;
    let Ligne2;
    let Ligne3;
    let Description_Conv;
    Demande_titre = <div>
      <Layout style={{ left: 0, width: 150, background: '#F1F9FF' }}>
        <h1 style={{ color: '#7F7F7F' }}>DEMANDE</h1>
      </Layout>
      <Row >
        <Layout style={{ background: '#F1F9FF', textAlign: 'center' }}>
          <Col span={12} offset={6}>
            {h3PlusInput('#7F7F7F', "TITRE", "Titre du ticket", '#42A6FB')}
          </Col>
        </Layout>
      </Row>
    </div>;
    if (isStudy) {
      Ligne1 = <Row>
        <Col span={6}>
          {h3PlusInput('#7F7F7F', "Demandeur", "Mr le demandeur", '#42A6FB')}

        </Col>
        <Col span={6} offset={3}>
          <h3 style={{ color: '#7F7F7F' }}>Catégorie</h3>
          <Cascader options={options} onChange={onChange} defaultValue={isViewMode ? [Categorie] : []} disabled={isViewMode} style={{ color: '#42A6FB' }} />

        </Col>
        <Col span={6} offset={3}>
          {h3PlusInput('#7F7F7F', "Matiere", "Maths", '#42A6FB')}
        </Col>
      </Row>;
      Ligne2 = <Row>
        <Col span={6}>
          {h3PlusInput('#7F7F7F', "Professeur", "Mr le prof", '#42A6FB')}
        </Col>
        <Col span={6} offset={3}>
          {h3PlusInput('#7F7F7F', "Thème", "Le theme", '#42A6FB')}
        </Col>
        <Col span={6} offset={3}>
          {h3PlusInput('#7F7F7F', "Semestre", "SX", '#42A6FB')}
        </Col>
      </Row>;

      Ligne3 = <Row></Row>;
    }
    else if (isSharing) {
      Ligne1 = <Row>
        <Col span={6}>
          {h3PlusInput('#7F7F7F', "Demandeur", "Mr le demandeur", '#42A6FB')}

        </Col>
        <Col span={6} offset={3}>
          <h3 style={{ color: '#7F7F7F' }}>Catégorie</h3>
          <Cascader options={options} onChange={onChange} defaultValue={isViewMode ? [Categorie] : []} disabled={isViewMode} style={{ color: '#42A6FB' }} />

        </Col>
        <Col span={6} offset={3}>
          {h3PlusInput('#7F7F7F', "Objet", "Tournevis", '#42A6FB')}
        </Col>
      </Row>;

      Ligne2 = <Row></Row>;
      Ligne3 = <Row></Row>;
    }
    else if (isCarPooling) {
      Ligne1 = <Row>
        <Col span={6}>
          {h3PlusInput('#7F7F7F', "Demandeur", "Mr le demandeur", '#42A6FB')}

        </Col>
        <Col span={6} offset={3}>
          <h3 style={{ color: '#7F7F7F' }}>Catégorie</h3>
          <Cascader options={options} onChange={onChange} defaultValue={isViewMode ? [Categorie] : []} disabled={isViewMode} style={{ color: '#42A6FB' }} />

        </Col>
        <Col span={6} offset={3}>

        </Col>
      </Row>;

      Ligne2 = <Row>
        <Col span={6}>
          {h3PlusInput('#7F7F7F', "Départ", "Brest", '#42A6FB')}
        </Col>
        <Col span={6} offset={3}>
          {h3PlusInput('#7F7F7F', "Arrivée", "Marseilles", '#42A6FB')}
        </Col>
        <Col span={6} offset={3}>
          {h3PlusInput('#7F7F7F', "Places", "3", '#42A6FB')}
        </Col>
      </Row>;

      Ligne3 = <Row>
        <Col span={6}>
          {h3PlusInput('#7F7F7F', "Date de départ", "11/06/2018", '#42A6FB')}
        </Col>
        <Col span={6} offset={3}>
          {h3PlusInput('#7F7F7F', "Date d arrivée", "12/06/2018", '#42A6FB')}
        </Col>
        <Col span={6} offset={3}>

        </Col>
      </Row>;
    }




    Description_Conv = <div>
      <Layout style={{ left: 0, width: 100, background: '#2699FB', textAlign: 'center', padding: 10 }}>
        <h6 style={{ color: '#fff' }}>DEMANDE</h6>
      </Layout>
      <Mention style={{ width: '90%', height: 100, color: '#42A6FB' }} multiLines disabled={isViewMode} defaultValue={isViewMode ? Mention.toContentState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.") : null} />
      <Divider style={{ height: 0, position: 'relative', margin: 40 }} />
      <Layout style={{ left: 0, width: 100, background: '#2699FB', textAlign: 'center', padding: 10, fontcolor: '#ffffff' }}>
        <h6 style={{ color: '#fff' }}>CONVERSATION</h6>
      </Layout>
      <Mention style={{ width: '90%', height: 100, color: '#42A6FB' }} multiLines disabled={isViewMode} defaultValue={isViewMode ? Mention.toContentState("Type something") : null} />
      <div>
        <Button type="primary">Envoyer</Button>
      </div>
      <Row>
        <Col span={3} offset={20}>
          <Button type="primary">Aider cette personne</Button>
        </Col>
      </Row>
    </div>
    
    return (

      <Layout>
        <Top />
        <Layout style={{ background: '#F1F9FF' }}>
          <Content style={{ margin: '24px 16px', padding: 24 }}>
            <div>
              {Demande_titre}
              <Divider style={{ height: 0, position: 'relative', margin: 10 }} />
              {Ligne1}
              <Divider style={{ height: 0, position: 'relative', margin: 10 }} />
              {Ligne2}
              <Divider style={{ height: 0, position: 'relative', margin: 10 }} />
              {Ligne3}
              <Divider style={{ height: 0, position: 'relative', margin: 40 }} />

              <Comment allowPublication={this.context.isValide()} />
            </div>



          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Demande_Consultation;
