import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import { useNavigate } from "react-router-dom";

function Edit() {

  const { id } = useParams();
  const navigate = useNavigate();
  // const [datetime, setDateTime] = useState(null);

  const [values, setValues] = useState({
    title: "",
    datetime: new Date(),
    status: ""
  });

  const [currentDateTime, setCurrentDateTime] = useState(new Date().getTime());

  //current timestamp -update every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currenttimestamp = now.getTime();
      setCurrentDateTime(currenttimestamp);
      console.log("current timestamp", currenttimestamp);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    const storedData = JSON.parse(localStorage.getItem("form")) || [];
    const task = storedData[id];
    if (task) {
      setValues({
        title: task.title,
        datetime: new Date(task.datetime),
        status: task.status
      });
    }
  }, [id]);

  const Change = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (datetime) => {
    setValues({
      ...values,
      datetime,
      status: datetime.getTime() <= currentDateTime ? "Completed" : "Pending",
    });

  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const storedData = JSON.parse(localStorage.getItem("form")) || [];
      if (id >= 0 && id < storedData.length) {
        storedData[id] = values;
        localStorage.setItem("form", JSON.stringify(storedData));
        alert("Edit Success");
        navigate("/");
      } else {
        alert("Error: Task not found");
      }
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div>
      <div className="head">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-text">
              <h2 className="mb-4">Todo </h2>
            </span>
          </div>
        </nav>
        <div className="form1">
          <form onSubmit={Submit}>
            <h4>Edit Form</h4>
            <hr></hr>
            <label>Title : </label>
            <input
              type="text"
              placeholder="Enter Title"
              className="form-control"
              onChange={Change}
              name="title"
              value={values.title}
            />{" "} <br></br>
            <span> </span>
            <div className="form-group">
              <h6>Date and Time: </h6>
              <DateTimePicker
                format="yyyy-MM-dd hh:mm a"
                name="datetime"
                onChange={handleDateChange}
                value={values.datetime}
              />
            </div><br></br>
            <button type="Submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;

