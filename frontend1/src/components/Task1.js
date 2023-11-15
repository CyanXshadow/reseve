import React, { Component } from 'react';
import "./Task1CSS.css";


class WordCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = (event) => {
    const text = event.target.value;
    this.setState({ text });
  }

  countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  }

  render() {
    const { text } = this.state;
    const wordCount = this.countWords(text);

    return (
      <div className="word-counter">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          rows="6"
          placeholder="Start typing here..."
          value={text}
          onChange={this.handleTextChange}
        />
        <p>Word Count: {wordCount}</p>
      </div>
    );
  }
}

export default WordCounter;
