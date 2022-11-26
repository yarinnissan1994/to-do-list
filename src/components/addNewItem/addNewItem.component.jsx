import React from "react";

export const AddNewItem = ({
  handleAdd,
  handleReset,
  setUserInput,
  userInput,
}) => {
  return (
    <div className="AddNewItem">
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add new task"
          aria-label="Add new task"
          aria-describedby="button-addon2"
          onChange={(event) => setUserInput(event.currentTarget.value)}
          value={userInput}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon3"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
