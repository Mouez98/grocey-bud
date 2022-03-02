import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items }) => {
  return (
    <article className="grocery-container">
      {items.map((item) => {
        const {id, title} = item;
        return (
          <div className="grocery-item" key={id}>
            <p className="title">{title} </p>
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button type="button" className="delete-btn">
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
