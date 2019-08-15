import React, { Component } from "react";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      title: "",
      text: ""
    };
  }

  handleAuthor = e => {
    // console.log(e.target.value);
    this.setState({
      author: e.target.value
    });
  };

  handleTitle = e => {
    // console.log(e.target.value);
    this.setState({
      title: e.target.value
    });
  };

  handleText = e => {
    // console.log(e.target.value);
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { author, title, text } = this.state;
    // console.log(`values: ${author}, ${title}, ${text}`);
    if (author.length > 2 && title.length > 2 && text.length > 5) {
      this.props.add(author, title, text);
      this.setState({
        author: "",
        title: "",
        text: ""
      });
    } else {
      console.log("uzupełnij wszytkie pola lub za krótko");
    }
  };

  render() {
    return (
      <div className="addForm">
        <h3>Dodanie artykułu</h3>
        <input
          value={this.state.author}
          type="text"
          placeholder="autor"
          onChange={this.handleAuthor}
        />
        <input
          value={this.state.title}
          type="text"
          placeholder="tytuł"
          onChange={this.handleTitle}
        />
        <textarea
          value={this.state.text}
          onChange={this.handleText}
          placeholder="treść"
        />
        <button className="save" onClick={this.handleSubmit}>
          zapisz
        </button>
        <button className="reset" onClick={this.props.reset}>
          anuluj
        </button>
      </div>
    );
  }
}

export default AddArticle;
