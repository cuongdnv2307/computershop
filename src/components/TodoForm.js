import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../redux/actions/todos";

function TodoForm() {
  const [value, setValue] = useState("");
  const [valueModel, setValueModel] = useState("");
  const [valueURL, setValueURL] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodoAsync({
        content: value,
        model: valueModel,
        url: valueURL,
        completed: false,
      })
    );
    setValue("");
    setValueModel("");
    setValueURL("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="row">
        <div >
          <text>Model</text>
          <input
            type="text"
            value={valueModel}
            onChange={(e) => setValueModel(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <text>Description</text>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="row">
        <text>URL</text>
        <input
          type="text"
          value={valueURL}
          onChange={(e) => setValueURL(e.target.value)}
        />
      </div>
      <input type="submit" value="Save" />
    </form>
  );
}

export default TodoForm;
