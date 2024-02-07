import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function Todo() {

  const [item, setItems] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('form')) || [];
    setItems(storedData);
    console.log("storedData :", storedData)
  }, []);



  return (
    <div className='storeddata'>
      <div >
        <div className='button'>
          <Button variant="dark"><Link to="/form">+</Link> </Button>
        </div>
        {item.map((items, index) => (
          <div className='todo-maping' key={index}>

            <h5>Data :{index}</h5>

            <label>Title  :</label>
            <span>{items.title}</span><br />

            <label>Date :</label>
            <span>{items.date}</span><br />

            <label>Time :</label>
            <span>{items.time}</span><br />

          </div>

        ))}
      </div>

    </div>
  )
}
export default Todo


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { format, parseISO } from 'date-fns';

// function TodoDesign() {
//     const [items, setItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem('form')) || [];
//         setItems(storedData);
//         console.log("storedData :", storedData)
//     }, []);

//     const Submit = (e) => {
//         e.preventDefault();
//         navigate("/form")
//     }

//     const Delete = (e, index) => {
//         e.preventDefault();
//         const newTasks = [...items.slice(0, index), ...items.slice(index + 1)];
//         localStorage.setItem("form", JSON.stringify(newTasks));
//         setItems(newTasks)
//     }

//     const getStatus = (task) => {
//         const taskDateTime = new Date(task.date);
//         taskDateTime.setHours(parseInt(task.time.split(':')[0]));
//         taskDateTime.setMinutes(parseInt(task.time.split(':')[1]));
//         taskDateTime.setSeconds(0);

//         const currentTime = new Date();

//         if (taskDateTime <= currentTime) {
//             return 'Completed';
//         } else {
//             return 'Pending';
//         }
//     }

//     return (
//         <div className='storeddata'>
//             {/* Navbar code */}
//             <div className='button'>
//                 <button type="submit" onClick={Submit} className="btn btn-primary">Add Task</button><br />
//             </div>
//             {items.map((task, index) => (
//                 <div className='todo-maping' key={index}>
//                     <div className="card border-light mb-3 max-width: 18rem">
//                         <div className="card-header"><h5>Task :{index}</h5></div>
//                         <div className="card-body">
//                             <h6 className="card-title">Title : {task.title} </h6><hr />
//                             <h6 className="card-title"> Date: {format(parseISO(task.date), 'y-MM-dd')}</h6>
//                             <h6 className="card-title">Time : {task.time}-{task.amPm} </h6>
//                             <hr />
//                             <p>Status: {getStatus(task)}</p> {/* Display Status here */}
//                             <button className="btn btn-outline-danger" type='delete' onClick={(e) => Delete(e, index)}>Delete</button><br />
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default TodoDesign;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { format, parseISO, isValid } from 'date-fns'; // Import isValid function from date-fns

// function TodoDeisgn() {

//     const [items, setItems] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem('form')) || [];
//         setItems(storedData);
//     }, []);

//     const Submit = (e) => {
//         e.preventDefault();
//         navigate("/form");
//     }

//     const Delete = (e, index) => {
//         e.preventDefault();
//         const newTasks = [...items.slice(0, index), ...items.slice(index + 1)];
//         localStorage.setItem("form", JSON.stringify(newTasks));
//         setItems(newTasks);
//     }

//     return (
//         <div className='storeddata'>
//             <div>
//                 <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//                     <div className="container-fluid">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <a className="nav-link active" href="#"></a>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//                     <div className="container-fluid">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <a className="nav-link active" href="#"><h4>Todo </h4></a>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <div className='button'>
//                     <button type="submit" onClick={Submit} className="btn btn-primary">Add Task</button><br />
//                 </div>
//                 {items.map((item, index) => (
//                     <div className='todo-maping' key={index}>
//                         <div className="card border-light mb-3 max-width: 18rem">
//                             <div className="card-header"><h5>Task : {index}</h5></div>
//                             <div className="card-body">
//                                 <h6 className="card-title">Title : {item.title} </h6><hr />
//                                 {/* Check if items.date is a valid date before formatting */}
//                                 {isValid(parseISO(item.date)) && (
//                                     <h6 className="card-title"> Date: {format(parseISO(item.date), 'yyyy-MM-dd')}</h6>
//                                 )}
//                                 <h6 className="card-title">Time : {item.time}-{item.amPm} </h6>
//                                 <hr />
//                                 <button className="btn btn-outline-danger" type='delete' onClick={(e) => Delete(e, index)}>Delete</button><br />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default TodoDeisgn;
