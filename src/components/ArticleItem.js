import React, { Component } from "react";

class ArticleItem extends Component {
  render() {
    const { id, author, title, text } = this.props.article;

    return (
      <>
        <div>
          <h4>autor: {author}</h4>
          <h3>{title}</h3>
          <h4>{text}</h4>
          <button className="del" onClick={() => this.props.delete(id)}>
            del
          </button>
          <button
            className="edit"
            onClick={() => this.props.edit(id, author, title, text)}
          >
            edycja
          </button>
          <hr />
        </div>
      </>
    );
  }
}

export default ArticleItem;
