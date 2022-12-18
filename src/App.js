import './App.css';
import Home from './components/Home';
import Error from './components/Error';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import axios from 'axios';
import Templates from './components/Templates';
import Template from './components/Template';
import Register from './components/Register';
import Login from './components/Login' ;
import { useSelector } from 'react-redux';

axios.defaults.withCredentials = true;

function App() {
  const auth = useSelector((state) => state);
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact  path="/templates" element={<Templates />} />
          <Route exact  path="/login" element={<Login />} />
          <Route exact  path="/register" element={<Register />} />
         {auth.isloggedin===true? <Route exact path="/template/:id" element={<Template/>} />:null}
          <Route exact path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
