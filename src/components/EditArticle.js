import React, { Component } from "react";

class EditArticle extends Component {
  state = {
    id: this.props.article.id,
    author: this.props.article.author,
    title: this.props.article.title,
    text: this.props.article.text
  };

  handleInputAuthor = e => {
    this.setState({
      author: e.target.value
    });
  };

  handleInputTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleInputText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleUpdate = id => {
    // console.log("update id nr:", id);
    const { author, title, text } = this.state;
    this.setState({
      author,
      title,
      text
    });

    this.props.edit(id, author, title, text);
    this.props.editMode();
  };

  render() {
    const { id, author, title, text } = this.state;
    // console.log(this.props);
    return (
      <div className="editForm">
        <h3>Edycja: {title}</h3>
        <input
          value={author}
          type="text"
          placeholder="autor"
          onChange={this.handleInputAuthor}
        />
        <input
          value={title}
          type="text"
          placeholder="tytuł"
          onChange={this.handleInputTitle}
        />
        <textarea
          value={text}
          onChange={this.handleInputText}
          placeholder="treść"
        />
        <button className="update" onClick={() => this.handleUpdate(id)}>
          update
        </button>
        <button className="reset" onClick={this.props.editMode}>
          anuluj
        </button>
      </div>
    );
  }
}

export default EditArticle;
