import './App.css';
import { BrowserRouter as Router,Route,Link, Routes} from "react-router-dom" ;
import todo from './components/todo-list';
import edittodo from './components/edit-todolist';
import createtodo from './components/create-list';
import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import main from './components/main';

class App extends Component{
   render() {
    return (
    <Router>
       <div className="container">
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand"  target="_blank">
              
            </a>
            <Link to="/" className="navbar-brand">MERN STACK</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/task" className="nav-link">Tasks</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create</Link>
                </li>
                 <li className="navbar-item">
                  <Link to="/edit" className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav>

        <Routes>
        <Route path='/' Component={main} />
        <Route path='/task' exact Component={todo}/>
        <Route path="/create" Component={createtodo}/>
        <Route path="/edit"  Component={edittodo}/>
        </Routes>
          </div>
    </Router>
  )
}}

export default App;
