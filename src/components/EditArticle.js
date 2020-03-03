import React, { Component } from "react";

class EditArticle extends Component {
  state = {
    author: this.props.author,
    title: this.props.title,
    text: this.props.text
  };

  handleText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  update = () => {
    const { author, title, text } = this.state;
    const { id } = this.props;
    if (author.length < 3 || title.length < 3 || text.length < 3) return;
    this.props.updateArticle(id, {
      id,
      author,
      title,
      text
    });
  };
  render() {
    const { author, title, text } = this.state;
    return (
      <div className="editForm">
        <h3>Edycja: {title}</h3>

        <input
          value={author}
          type="text"
          placeholder="autor"
          name="author"
          onChange={this.handleText}
        />
        <input
          value={title}
          type="text"
          placeholder="tytuł"
          name="title"
          onChange={this.handleText}
        />
        <textarea
          value={text}
          placeholder="treść"
          name="text"
          onChange={this.handleText}
        />
        <button className="update" type="submit" onClick={this.update}>
          update
        </button>
        <button className="reset" onClick={this.props.cancelEdit}>
          anuluj
        </button>
      </div>
    );
  }
}
export default EditArticle;
