import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-time-picker/dist/TimePicker.css';
import TimePicker from 'react-time-picker';
import 'react-clock/dist/Clock.css';
import { useNavigate } from "react-router-dom";

function Form1Design() {
    const [title, setTitle] = useState(" ");
    const [date, setDate] = useState(null);
    const [time, setTime] = useState("");
    const [amPm, setAmPm] = useState('AM');

    const [status, setStatus] = useState("pending")



    const Status = () => {
        if (currentTime == time) {
            alert("same time")

        }
        else {
            alert(currentTime)
        }
    }


    // const [currentDate, setCurrentDate] = useState("");
    // const [currentTime, setcurrentTime] = useState("");

    //Navigate
    const navigate = useNavigate();

    //using currentSatmp we got the current time and date
    let currentTimestamp = Date.now();
    let currentDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",

    }).format(currentTimestamp);
    console.log("date", currentDate);

    let currentTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",

    }).format(currentTimestamp);
    console.log("time", currentTime);


    // const Status = (e) => {
    //     e.preventDefault();
    //     if (currentTime <= time) {
    //         setStatus("Completed")
    //         alert("completed")
    //     }
    //     else {
    //         setStatus("Pending")
    //         alert("pending")
    //     }
    // }

    //Time in form
    const handleChange = (newTime) => {
        setTime(newTime);
        setAmPm(newTime.includes('AM') ? 'AM' : 'PM');
    };
    // Data onChange in form
    const Change = (e) => {
        setTitle(e.target.value)
    }

    //Submit Button- Data passed via Local Storage and Navigate to newxt page
    const Submit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('form')) || []
        const form = { title, date, time, amPm };
        data.push(form);

        localStorage.setItem('form', JSON.stringify(data))
        console.log("locally stored data :", data);
        navigate("/")

        // const form={ title,date,time };
        // localStorage.setItem('form', JSON.stringify(form));
        // console.log("locally stored data :" ,form)
    }

    //Clear Button
    const Clear = () => {
        setTitle("");
        setDate(null);
        setTime("");
        setAmPm('AM');
    }


    console.log("Current form data:", title, date, time);

    return (

        <div className='head'>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#"></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">  <h4>Todo </h4></a>
                        </li>

                    </ul>
                </div>
            </nav>

            <div className='form1'>
                <form onSubmit={Submit} action="/action_page.php">
                    <div class="mb-3 mt-3">
                        <h6 >Title : </h6>
                        <input type="text" placeholder="Enter Title" class="form-control"

                            value={title}
                            onChange={Change} />
                    </div>
                    <div>
                        <h6 >Time : </h6>
                        <div className="myContainter">
                            <label >
                                <TimePicker
                                    className="container1"
                                    format="h:mm a"
                                    amPmAriaLabel="Select AM /PM"
                                    onChange={handleChange}
                                    placeholder="Enter Time"
                                    value={time}
                                /></label>
                        </div>
                    </div ><br />
                    <div>
                        <h6 >Date : </h6>
                        <DatePicker
                            className="container"
                            value={date}
                            selected={date} placeholder="Enter Date" onChange={(date) => setDate(date)} />
                    </div><br />

                    <div className='d-flex gap-5'>
                        <button type="submit" class="btn btn-primary" onClick={Clear}>Clear</button>

                        <button type="submit" class="btn btn-primary" onClick={Status}>Status</button>

                        <button type="submit" class="btn btn-primary">Submit</button><br />

                    </div>
                </form>
            </div>
        </div >
    )
}

export default Form1Design


