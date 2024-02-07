import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";

function Form1() {
  const [title, setTitle] = useState(" ");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigate = useNavigate();


  const handleChange = (newTime) => {
    setTime(newTime);
  };

  const Change = (e) => {
    setTitle(e.target.value)
  }

  const Submit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem('form')) || []
    const form = { title, date, time };
    data.push(form);

    localStorage.setItem('form', JSON.stringify(data))
    console.log("locally stored data :", data);
    navigate("/")

    // const form={ title,date,time };
    // localStorage.setItem('form', JSON.stringify(form));
    // console.log("locally stored data :" ,form)
  }

  const Clear = () => {
    setTitle("");
    setDate("");
    setTime("");
  }


  console.log("Current form data:", title, date, time);

  return (
    <div className='main'>
      <Form onSubmit={Submit}>
        <h3 className='text-decoration-underline text-light bg-black'>Todo !</h3><br />
        <div className='field'>
          <label>Title :</label>
          <Form.Group className="mb-3 justify-content-center" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Enter the Title"
              value={title}
              onChange={Change} />
          </Form.Group>
        </div>

        <div><br />
          <label>Date :</label>
          <DatePicker value={date} selected={date} onChange={(date) => setDate(date)} />
        </div><br />

        <div>
          <h6>Time: {time}</h6>
          <TimePicker
            onChange={handleChange}
            value={time}
          />
        </div ><br />
        <Button variant="outline-success" type="submit">Submit</Button>

      </Form>
      <Button variant="outline-danger" type="clear" onClick={Clear}>Clear</Button>



    </div>
  )
}
export default Form1

// import React, { useState, useEffect } from 'react';

// const DateTimeComparison = () => {
//     const [inputDateTime, setInputDateTime] = useState('');
//     const [status, setStatus] = useState('Pending');

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const currentTime = new Date();
//             const enteredTime = new Date(inputDateTime);

//             if (enteredTime <= currentTime) {
//                 setStatus('Completed');
//             } else {
//                 setStatus('Pending');
//             }
//         }, 1000); // Check every second

//         return () => clearInterval(interval);
//     }, [inputDateTime]);

//     const handleInputChange = (event) => {
//         setInputDateTime(event.target.value);
//     };

//     return (
//         <div>
//             <label>
//                 Enter Date and Time:
//                 <input type="datetime-local" value={inputDateTime} onChange={handleInputChange} />
//             </label>
//             <p>Status: {status}</p>
//         </div>
//     );
// };

// export default DateTimeComparison;

