import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import ScoreBoard from "./components/ScoreBoard";
import cards from "./cards.json";
import shuffle from "shuffle-array";

var score = 0;
var topScore = 0;
var message = "Click Image to Begin";

class App extends Component {
  state = {
    cards
  };

  componentDidMount() {
    console.log();
  }

  pickCard = (id) => {
    var cards = this.state.cards;

    cards.forEach(card => {
      if (card.id === id) {
        if (card.chosen) {
          this.wrongCard();
        } else {
          message = "Correct! Choose another...";
          card.chosen = true;
          score++;
        }
      }
    });
    
    this.setState({ cards });

  };

  wrongCard = () => {
    var cards = this.state.cards;

    message = "Incorrect! Try Again";

    cards.forEach(card => card.chosen = false);

    if (score > topScore) {
      topScore = score;
    }
    score = 0;

    this.setState( { cards });
  }

  render() {
    var cardArray = shuffle(this.state.cards);
    console.log(cardArray);
    return (
    <div>
      <ScoreBoard 
        message={message}
        score={score}
        topScore={topScore}
      >
      </ScoreBoard>
      <Wrapper>
        {cardArray.map(card => (
          <Card
          pickCard={this.pickCard}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
          />
          ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
