import React, { Component } from "react";
import Article from "./Article";
import AddArticle from "./AddArticle";

class ArticleList extends Component {
  state = {
    create: false,
    articles: [
      {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "1111Lorem ipsum dolor sit amet?"
      },
      {
        id: 2,
        title: "Czym jest paradoks fermiego?",
        author: "Andrzej Kwiatkowska",
        text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit"
      },
      {
        id: 3,
        title: "Ciemna materia i ciemna energia?",
        author: "Jan Kowalski",
        text: "4444Lorem ipsum dolor sit amet consectetur."
      }
    ]
  };

  deleteArticle = id => {
    // console.log(id);
    const articles = [...this.state.articles];
    const index = articles.findIndex(article => (article.id = id));
    articles.splice(index, 1);
    this.setState({
      articles
    });
  };

  addArticle = (author, title, text) => {
    // console.log("dodaj");
    const article = {
      id: this.state.articles.length + 1,
      author: author,
      title: title,
      text: text
    };
    // console.log(article);
    this.setState(prevState => ({
      articles: [...prevState.articles, article],
      create: !prevState.create
    }));
  };

  handleClick = () => {
    this.setState({
      create: !this.state.create
    });
  };

  editArticle = (id, author, title, text) => {
    // console.log(id);
    // let article = this.state.articles[id - 1];
    let article = this.state.articles.findIndex(article => article.id === id);
    // console.log(article);
    // console.log(id, author, title, text);
    this.setState(prevState => ({
      articles: prevState.articles.fill(
        { author, title, text },
        article,
        article + 1
      )
    }));
  };

  render() {
    const articles = this.state.articles.map(article => {
      // console.log(article, index);
      return (
        <Article
          key={article.id}
          article={article}
          delete={this.deleteArticle}
          edit={this.editArticle}
          reset={this.handleClick}
        />
      );
    });

    return (
      <>
        {this.state.create ? (
          <AddArticle add={this.addArticle} reset={this.handleClick} />
        ) : (
          <button className="add" onClick={this.handleClick}>
            dodanie artykułu
          </button>
        )}
        <div>{articles}</div>
      </>
    );
  }
}
export default ArticleList;
