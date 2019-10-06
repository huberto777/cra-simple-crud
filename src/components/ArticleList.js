import React, { Component } from "react";
import ArticleItem from "./ArticleItem";
import AddArticle from "./AddArticle";
import EditArticle from "./EditArticle";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      edit: false,
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
    this.editArticle = this.editArticle.bind(this);
  }

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
      create: !prevState.create,
      edit: false
    }));
  };

  handleCreateClick = () => {
    this.setState({
      create: !this.state.create,
      edit: false
    });
  };

  editArticle() {
    // console.log(arguments);
    this.setState({
      id: arguments[0],
      author: arguments[1],
      title: arguments[2],
      text: arguments[3],
      edit: !this.state.edit,
      create: false
    });
  }

  updateArticle = e => {
    e.preventDefault();
    const updateAuthor = e.target.updateAuthor.value;
    const updateTitle = e.target.updateTitle.value;
    const updateText = e.target.updateText.value;
    // console.log(updateAuthor);
    if (updateAuthor < 1 || updateTitle < 1 || updateText < 1)
      return alert("wypełnij wszystkie pola");
    this.setState({
      articles: this.state.articles.map(article => {
        if (article.id === this.state.id) {
          article.author = updateAuthor;
          article.title = updateTitle;
          article.text = updateText;
        }
        return article;
      }),
      edit: false
    });
  };

  addArticleButton() {
    if (!this.state.create) {
      return (
        <button className="add" onClick={this.handleCreateClick}>
          dodanie artykułu
        </button>
      );
    } else {
      return (
        <AddArticle add={this.addArticle} reset={this.handleCreateClick} />
      );
    }
  }
  render() {
    const articles = this.state.articles.map(article => {
      return (
        <ArticleItem
          key={article.id}
          article={article}
          delete={this.deleteArticle}
          edit={this.editArticle}
        />
      );
    });

    return (
      <>
        {this.state.edit ? (
          <EditArticle
            update={this.updateArticle}
            author={this.state.author}
            title={this.state.title}
            text={this.state.text}
            editMode={this.editArticle}
          />
        ) : (
          this.addArticleButton()
        )}
        <div>{articles}</div>
      </>
    );
  }
}
export default ArticleList;
