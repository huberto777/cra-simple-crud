import React, { Component } from "react";
import ArticleItem from "./ArticleItem";
import AddArticle from "./AddArticle";
import EditArticle from "./EditArticle";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false,
      editMode: false,
      articles: [
        {
          id: 1,
          title: "Czym jest teoria strun",
          author: "Jan Nowak",
          text: "1111Lorem ipsum dolor sit amet?",
        },
        {
          id: 2,
          title: "Czym jest paradoks fermiego?",
          author: "Andrzej Kwiatkowska",
          text: "2222Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          id: 3,
          title: "Ciemna materia i ciemna energia?",
          author: "Jan Kowalski",
          text: "4444Lorem ipsum dolor sit amet consectetur.",
        },
      ],
    };
  }

  deleteArticle = ({ id }) => {
    const articles = [...this.state.articles];
    const index = articles.findIndex((article) => (article.id = id));
    articles.splice(index, 1);
    this.setState({
      articles,
    });
  };

  addArticle = (createdArticle) => {
    this.setState((prevState) => ({
      articles: [createdArticle, ...prevState.articles],
      create: !prevState.create,
    }));
  };

  handleCreate = () => {
    this.setState((prevState) => ({
      create: !prevState.create,
    }));
  };

  editArticle = (article) => {
    this.setState({
      article,
      editMode: true,
    });
  };

  cancelEdit = () => {
    this.setState({
      editMode: false,
    });
  };

  updateArticle = (updatedItem) => {
    this.setState((prevState) => ({
      articles: prevState.articles.map((article) =>
        article.id === updatedItem.id ? updatedItem : article
      ),
      editMode: false,
    }));
  };

  addArticleButton() {
    if (!this.state.create) {
      return (
        <button className="add" onClick={this.handleCreate}>
          dodanie artykułu
        </button>
      );
    } else {
      return <AddArticle add={this.addArticle} reset={this.handleCreate} />;
    }
  }
  render() {
    const { editMode, article } = this.state;

    return (
      <>
        {editMode ? (
          <EditArticle
            article={article}
            updateArticle={this.updateArticle}
            cancelEdit={this.cancelEdit}
          />
        ) : (
          this.addArticleButton()
        )}
        <div>
          {this.state.articles.map((article) => {
            return (
              <ArticleItem
                key={article.id}
                article={article}
                editMode={editMode}
                deleteItem={() => this.deleteArticle(article)}
                edit={() => this.editArticle(article)}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default ArticleList;
