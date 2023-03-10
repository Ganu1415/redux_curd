import logo from './logo.svg';
import './App.css';
// import bootstrap css file 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Router import in React-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListStuden from './Components/Student/ListStuden';
import AddStudent from './Components/Student/AddStudent';
import EditStudent from './Components/Student/EditStudent';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<ListStuden />} />
          <Route exact path='/add' element={<AddStudent />} />
          <Route exact path='/edit/:id' element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
