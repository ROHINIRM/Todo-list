import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

function FormDesign1() {
    const [title, setTitle] = useState('');
    const [datetime, setDateTime] = useState(null);
    const [status, setStatus] = useState('Pending');

    const navigate = useNavigate();

    const [currentDateTime, setCurrentDateTime] = useState(new Date().getTime());

    //current timestamp
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const currenttimestamp = now.getTime();
            setCurrentDateTime(currenttimestamp);
            console.log("current timestamp", currenttimestamp);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const onChange = (datetime) => {
        //inputing date-time timestamp
        const timestamp = datetime.getTime();
        console.log("Timestamp:", timestamp);
        setDateTime(datetime);
        setStatus(datetime <= currentDateTime ? 'Completed' : 'Pending');
    };

    const TitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('form')) || [];
        console.log("data", data);
        console.log("title", title)
        // console.log("data", data[index]);

        //input
        const inputTimestamp = datetime.getTime();
        //array-check(storeddata)
        const Duplicate = data.find(item => {
            const storedTimestamp = new Date(item.datetime).getTime();
            return item.title === title && storedTimestamp === inputTimestamp;
        })

        if (Duplicate) {
            alert("Duplicate data ! Please enter Valid info.");
        }
        else {
            const form = { title, datetime, status, currentDateTime };
            data.unshift(form);
            localStorage.setItem('form', JSON.stringify(data));
            console.log('locally stored data:', data);
            navigate('/');
        }
    };

    const handleClear = () => {
        setTitle('');
        setDateTime('');

    };

    return (
        <div className="head"> <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <span class="navbar-text">
                </span>
            </div>
        </nav>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <span class="navbar-text">
                        <h2 className="mb-4">Todo </h2>
                    </span>
                </div>
            </nav>

            <div className="form1">
                <h3>Todo Form</h3><hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3 mt-3">
                        <h6>Title: </h6>
                        <input
                            type="text"
                            placeholder="Enter Title"
                            className="form-control"
                            value={title}
                            onChange={TitleChange}
                            required
                        />
                    </div><br />

                    <div className="form-group">
                        <h6>Date and Time: </h6>
                        <DateTimePicker format="yyyy-MM-dd hh:mm a" onChange={onChange} value={datetime} required />
                    </div><br />

                    <p>Current Timestamp: {currentDateTime}</p>
                    <br />
                    <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-dark" onClick={handleClear} >
                            Clear
                        </button>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>

                    </div>
                </form>
            </div >
        </div >
    );
}

export default FormDesign1;


