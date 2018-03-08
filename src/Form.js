import React from 'react';

class Form extends React.Component {
  state = {question: "", answer: ""}

  handleChange = (e) => {
    let{name,value} = e.target
    this.setState({[name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let card = {question: this.state.question, answer: this.state.answer}
    this.props.addCard(card)
    this.setState({
      question:"",
      answer: "",
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name= "question"
          value= {this.state.question}
          onChange={this.handleChange}
          required placeholder='Add A Question'
        />
        <input
          name= "answer"
          value= {this.state.answer}
          onChange={this.handleChange}
          required placeholder='Add An answer'
        />
      <button type="submit">GO </button>
        </form>
    )
  }
}

export default Form;
