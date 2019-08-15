import React, { Component } from "react";
import EditArticle from "./EditArticle";

class Article extends Component {
  state = {
    editMode: false,
    id: this.props.article.id,
    author: this.props.article.author,
    title: this.props.article.title,
    text: this.props.article.text
  };

  handleEditClick = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  render() {
    const { id, author, title, text } = this.props.article;

    return (
      <>
        {this.state.editMode ? (
          <EditArticle
            edit={this.props.edit}
            article={this.props.article}
            editMode={this.handleEditClick}
          />
        ) : (
          <div>
            <h4>autor: {author}</h4>
            <h3>{title}</h3>
            <h4>{text}</h4>
            <button className="del" onClick={() => this.props.delete(id)}>
              del
            </button>
            <button className="edit" onClick={this.handleEditClick}>
              edycja
            </button>
            <hr />
          </div>
        )}
      </>
    );
  }
}

export default Article;
