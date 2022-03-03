import React, { useState, useEffect, useCallback } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setIsEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "Please enter value", "danger");
    } else if (name && isEditing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      showAlert(true, "item edited", "success");
      setName("");
      setIsEditId(null);
      setIsEditing(false);
    } else {
      showAlert(true, "Item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = useCallback((show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  }, []);

  const clearList = () => {
    showAlert(true, "Empty list", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "Item removed", "danger");
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);

    setIsEditId(id);
    setIsEditing(true);
    setName(specificItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        {alert.show && <Alert list={list} {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
