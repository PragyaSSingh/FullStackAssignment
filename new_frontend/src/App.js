
import './App.css';
import {Routes,Route, Navigate, useLocation} from "react-router-dom";
import Home from './pages/Home';

import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import ViewRecipe from './pages/ViewRecipe';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Welcome/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path='/add' element={<AddRecipe/>}/>
      <Route path='/edit/:id' element={<EditRecipe/>}/>
      <Route path='/view/recipe/:id' element={<ViewRecipe/>}/>
    </Routes>
    </div>
  );
}

export default App;
