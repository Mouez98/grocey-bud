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
    console.log("Hello");
    if (!name) {
      // display alert
      showAlert(true,'Please enter value', 'danger')
    } else if (name && isEditing) {
      // deal with edit
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = useCallback((show = false, msg = '', type = '') => {
    setAlert({show,msg,type})
  },[])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={onSubmitHandler}>
        {alert.show && <Alert  {...alert} removeAlert={showAlert}/>}
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
      {list.length > 0 &&(
        <div className="grocery-container">
        <List items={list} />
        <button className="clear-btn">clear items</button>
      </div>
      )}
      
    </section>
  );
}

export default App;
