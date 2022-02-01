import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items }) => {
  return (
    <article className="grocery-container">
      {items.map((item) => {
        return (
          <div className="grocery-item" key={item.id}>
            <p className="title">{item.title} </p>
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
