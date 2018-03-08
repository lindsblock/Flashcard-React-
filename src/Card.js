import React from 'react';

class Card extends React.Component {
  state = {
    answerShowing: false,
  }

  flipCard = () => {
    this.setState({ answerShowing: !this.state.answerShowing })
  }

  render() {
    if (this.state.answerShowing) {
      return(
        <div>
          <h1>Answer:</h1>
          <h1>{this.props.answer}</h1>
          <button onClick={this.flipCard}>Flip Card</button>
          <button onClick={() => this.props.deleteCard(this.props.question)}>Delete Card</button>

        </div>
      )
    } else {
      return(
        <div>
          <h1>Question:</h1>
          <h1>{this.props.question}</h1>
          <button onClick={this.flipCard}>Flip Card</button>
          <button onClick={() => this.props.deleteCard(this.props.question)}>Delete Card</button>
        </div>
      )
    }
  }
}

export default Card;
