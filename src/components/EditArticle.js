import React from "react";

const EditArticle = props => {
  const { author, title, text } = props;
  // console.log(this.props);
  return (
    <div className="editForm">
      <h3>Edycja: {title}</h3>
      <form onSubmit={props.update}>
        <input
          defaultValue={author}
          type="text"
          placeholder="autor"
          name="updateAuthor"
        />
        <input
          defaultValue={title}
          type="text"
          placeholder="tytuł"
          name="updateTitle"
        />
        <textarea defaultValue={text} placeholder="treść" name="updateText" />
        <button className="update" type="submit">
          update
        </button>
        <button className="reset" onClick={props.editMode}>
          anuluj
        </button>
      </form>
    </div>
  );
};

export default EditArticle;
