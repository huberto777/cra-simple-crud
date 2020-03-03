import React from "react";

const ArticleItem = ({ author, title, text, edit, editMode, deleteItem }) => (
  <>
    <div>
      <h4>autor: {author}</h4>
      <h3>{title}</h3>
      <h4>{text}</h4>
      <button
        className={editMode ? "inactive" : "del"}
        disabled={editMode}
        onClick={deleteItem}
      >
        del
      </button>
      <button className={editMode ? "inactive" : "edit"} disabled={editMode} onClick={edit}>
        edycja
      </button>
      <hr />
    </div>
  </>
);

export default ArticleItem;
