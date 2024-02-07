import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
// import Todo from './Components/Todo';
// import Form1 from './Components/Form1';
// import TodoDeisgn from './Components/TodoDeisgn';
// import Form1Design from './Components/Form1Design';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
// import TodoStatus from './Components/TodoDeisgn';
// import FormStatus from './Components/FormDesign1';
import TodoDeisgn1 from './Components/TodoDesign1';
import Form1Design1 from './Components/FormDesign1';
import Edit from './Components/Edit';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/'element={<Todo/>}/>
     <Route path='/form'element={<Form1/>}/>
    */}
          <Route path='/' element={<TodoDeisgn1 />} />
          <Route path='/form' element={<Form1Design1 />} />
          <Route path='/edit/:id' element={<Edit />} />

          {/* <Route path='/' element={<TodoStatus />} />
          <Route path='/form' element={<FormStatus />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
