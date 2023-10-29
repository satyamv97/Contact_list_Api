// importing all the required hooks
import React, { useEffect, useRef } from "react";
// importing all the css files
import Classes from "./AddTask.module.css";

// creating a component for adding a new Task
const AddTask = (props) => {
  // using useRef hook for inputs
  const name = useRef();

  // using useEffect hook for checking whether we are in edinting stage or not
  useEffect(() => {
    name.current.value = props.isEdit.edit ? props.isEdit.task.name : "";
  }, [props.isEdit]);
  return (
    // creating a container for the form
    <div className={Classes.taskContainer}>
      {/* creating up a form  */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addtask(name.current.value);
          name.current.value = "";
        }}
      >
        <div className="inside-box">
          <label>Enter the Contact </label>
          <br />
          <input ref={name} type="text" required />
        </div>
        <div>
          {/* checking for editing state or not */}
          {props.isEdit.edit ? (
            <button
              type="button"
              onClick={() => {
                const task = props.isEdit.task;
                task.name = name.current.value;
                props.updateHandler(task, false);
              }}
            >
              Save
            </button>
          ) : (
            <button type="submit">ADD Contact</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddTask;
