import React from 'react';

import MainNavBar from './MainNavBar.js';
import MainCard from './MainCard.js';
import ImageCard from './ImageCard.js';
import CardDeck from 'react-bootstrap/CardDeck'

import './css/App.css';


function App() {
  const button_price = {
    style: "warning",
    content: "Obtenir mon prix" 
  }
  return (
    <div className="App">
      <MainNavBar />
      <div className="container">
        <MainCard
          className="mx-auto"
          title="Une assurance 100% digitale" 
          description="Recevez une estimation de votre contrat personalisé en quelques clics. Cela ne prendra que quelques minutes."
          button={button_price}
          />
          <CardDeck>
              <ImageCard 
                img="./images/contrat_real_front.png"
                title="Transparence et personnalisation"
                text="Nos contrats sont fait sur mesure, vous avez la maitrise sur les conditions de vos couvertures"/>
              <ImageCard 
                img="./images/temps_front.jpg"
                title="Rapidité et légerté"
                text="Votre temps est précieux, c'est pourquoi nous avons développé
                des services simples et rapides pour que vous n'ayez jamais à vous soucier de votre couverture"/>
              <ImageCard 
                img="./images/coins_front.jpg"
                title="Abordable"
                text="Nos solutions de couverture personalisées peuvent s'adapter à tout les budget, c'est vous qui maitrisez le prix"/>
        </CardDeck>
        <MainCard 
          className="section"
          title="A propos de nous" 
          description="Coveree est une assurance 100% digitale. Les technologies innovantes que nous utilisons vous permettent d'obtenir
          rapidement et simplement des estimations de prix lors de vos sinistres."
          id="about" />
      </div>  
    </div>
  );
}

export default App;
