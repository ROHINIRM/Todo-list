import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function TodoDesign1() {

  const [items, setItems] = useState([]);

  const navigate = useNavigate();

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("form")) || [];
    setItems(storedData);
  }, []);

  const handleDelete = (index) => {
    const newTasks = [...items.slice(0, index), ...items.slice(index + 1)];
    localStorage.setItem("form", JSON.stringify(newTasks));
    setItems(newTasks);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    navigate(`/edit/${index}`);
    console.log("index position", index);
  };

  return (
    <div className="storeddata">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-text"></span>
        </div>
      </nav>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-text">
            <h2 className="mb-4">Todo </h2>
          </span>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="button">
            <button
              className="btn btn-success mt-3"
              onClick={() => navigate("/form")}
            >
              Add Task
            </button>{" "}
          </div>
          <br></br>

          <div>
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Task </th>
                  <th scope="col">Title </th>
                  <th scope="col">Date and Time </th>
                  <th scope="col">Status</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {items.map((task, index) => (
                  <tr key={index}>
                    <th scope="row"> {index + 1}</th>
                    <td>{task.title}</td>
                    <td>
                      {moment(task.datetime).format("MM/DD/YYYY hh:mm A")}
                    </td>
                    <td>{task.status}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger gap-5"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-primary "
                        class="btn btn-outline-warning"
                        aria-current="page"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoDesign1

