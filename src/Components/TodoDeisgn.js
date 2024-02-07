import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function TodoStatus() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('form')) || [];
        setItems(storedData);
    }, []);

    const handleDelete = (index) => {
        const newTasks = [...items.slice(0, index), ...items.slice(index + 1)];
        localStorage.setItem('form', JSON.stringify(newTasks));
        setItems(newTasks);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Todo </h2>
            <div className="row">
                {items.map((task, index) => (
                    <div className="col-md-4 mb-4" key={`task-${index + 1}`}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Task {index + 1}</h5>
                                <p className="card-text">
                                    <h6>Title:</h6> {task.title}
                                </p>
                                <p className="card-text">
                                    <label>Date:</label> {moment(task.date).format('MM/DD/YYYY')}
                                </p>
                                <p className="card-text">
                                    <label>Time:</label> {moment(task.time, 'hh:mm A').format('hh:mm A')}
                                </p>
                                <p className="card-text">
                                    <label>Status:</label> {task.status}
                                    {/* <label>Status:</label> {task.status === 'completed' && task.timeStatus === "completed" ? 'completed' : 'pending'} */}
                                    {/* <strong>Status:</strong> {getStatus(task)} */}
                                </p>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default TodoStatus;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// // import { format, parseISO } from 'date-fns';



// function TodoStatus() {

//     const [item, setItems] = useState([]);

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
//     // const Delete = (e, index) => {
//     //     e.preventDefault();

//     //     const newTasks = [...item];
//     //     newTasks.splice(index, 1)
//     //     setItems(newTasks);
//     //     console.log(newTasks)
//     //     localStorage.removeItem("newTasks");
//     // }

//     const Delete = (e, index) => {
//         e.preventDefault();
//         const newTasks = [...item.slice(0, index), ...item.slice(index + 1)];
//         localStorage.setItem("form", JSON.stringify(newTasks));
//         setItems(newTasks)
//     }
//     return (
//         <div className='storeddata'>
//             <div >
//                 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
//                     <div class="container-fluid">
//                         <ul class="navbar-nav">
//                             <li class="nav-item">
//                                 <a class="nav-link active" href="#"></a>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
//                     <div class="container-fluid">
//                         <ul class="navbar-nav">
//                             <li class="nav-item">
//                                 <a class="nav-link active" href="#">  <h4>Todo </h4></a>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <div className='button'>
//                     <button type="submit" onClick={Submit} class="btn btn-primary">Add Task</button><br />
//                 </div>{item.map((items, index) => (
//                     <div className='todo-maping' key={index} >
//                         <div class=" card border-light mb-3 max-width: 18rem" >
//                             <div class="card-header">
//                                 <h5>Task :{index}</h5></div>
//                             <div class="card-body">
//                                 <h6 class="card-title">
//                                     Title : {items.title} </h6><hr />
//                                 {/* <h6 className="card-title">
//                                     Date: {format(parseISO(item.date), 'yyyy-MM-dd')}</h6> */}
//                                 <h6 className="card-title">
//                                     Date: {items.date}</h6>
//                                 <h6 class="card-title">
//                                     Time : {items.time}-{items.amPm} </h6>

//                                 <hr />
//                                 {/* 
//                                 <button class="btn btn-outline-danger"
//                                     key={index}
//                                     type='delete'
//                                     onClick={(e) => Status(e, index)}>
//                                     Status</button><br />
//                                 <hr /> */}

//                                 <button class="btn btn-outline-danger"
//                                     key={index}
//                                     type='delete'
//                                     onClick={(e) => Delete(e, index)}>
//                                     Delete</button><br />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div >
//     )
// }
// export default TodoStatus