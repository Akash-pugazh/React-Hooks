import React, { useState, useReducer, useEffect } from "react";

const ACTIONS = {
  ADDTODO: "addtodo",
  REMOVETODO: "removetodo",
  COMPLETETODO: "completetodo",
};

const newTodo = todoValue => {
  return {
    id: Date.now(),
    todo: todoValue,
    completed: false,
  };
};

const filterTodo = (state, id) => {
  const updatedState = state.filter(el => {
    return el.id !== id;
  });
  return [...updatedState];
};

const setCompleteTodo = (state, id) => {
  const updatedState = state.map(el => {
    if (el.id === id) {
      return { ...el, complete: !el.complete };
    }
    return el;
  });
  return [...updatedState];
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADDTODO:
      return [...state, newTodo(action.payload.inputValue)];

    case ACTIONS.REMOVETODO:
      return filterTodo(state, action.payload.id);

    case ACTIONS.COMPLETETODO:
      return setCompleteTodo(state, action.payload.id);

    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === "") return;
    dispatch({
      type: ACTIONS.ADDTODO,
      payload: { inputValue: inputValue },
    });
    setInputValue("");
  };

  const handleCompleteClick = id => {
    dispatch({
      type: ACTIONS.COMPLETETODO,
      payload: { id: id },
    });
  };

  const handleDeleteClick = id => {
    dispatch({
      type: ACTIONS.REMOVETODO,
      payload: { id: id },
    });
  };

  const renderTodos = state.map(el => {
    return (
      <div key={el.id}>
        <span
          style={{
            margin: "1rem",
            opacity: el.complete ? "0.5" : 1,
          }}
        >
          {el.todo}
        </span>
        <button
          style={{
            opacity: el.complete ? "0.5" : 1,
          }}
          onClick={() => handleCompleteClick(el.id)}
        >
          Complete
        </button>
        <button
          style={{
            opacity: el.complete ? "0.5" : 1,
          }}
          onClick={() => handleDeleteClick(el.id)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />

        <button type="submit">Add Todo</button>
      </form>
      <br />
      <section>{renderTodos}</section>
    </div>
  );
}

export default UseReducer;
