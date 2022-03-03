import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <article className="grocery-container">
      {items.map((item) => {
        const {id, title} = item;
        return (
          <div className="grocery-item" key={id}>
            <p className="title">{title} </p>
            <div className="btn-container">
              <button type="button" className="edit-btn" onClick={()=> editItem(id)}>
                <FaEdit />
              </button>
              <button type="button" className="delete-btn" onClick={()=> removeItem(id)}>
                <FaTrash />
              </button>
            </div>
            <div className="delete-btn"></div>
          </div>
        );
      })}
    </article>
  );
};

export default List;
