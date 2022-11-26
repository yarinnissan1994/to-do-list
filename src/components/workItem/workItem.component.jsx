import React from "react";

export const WorkItem = ({ taskContent, doneFunc, id }) => {
  return (
    <div className="WorkItem">
      <div className="card text-center">
        <h2 className="card-header">Task</h2>
        <div className="card-body">
          <h5 className="card-text">{taskContent}</h5>
          <button className="btn btn-primary" onClick={() => doneFunc(id)}>
            Done!
          </button>
        </div>
      </div>
    </div>
  );
};
