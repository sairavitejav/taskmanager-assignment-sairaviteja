import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TasksHome from './components/TasksHome';
import NewTask from './components/NewTask';
import EditTask from './components/EditTask';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TasksHome />} />
      <Route path="/add" element={<NewTask />} />
      <Route path='/edit/:id' element={<EditTask />} />
    </Routes>
  </BrowserRouter>
)
export default App;
