import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Admin from './components/admin';
import User from './components/user';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import Home from './components/main/Home';
import Register from './components/user/Register';
import UserLogin from './components/user/Login';
import AddCourse from './components/main/AddCourse';
import Homeimg from './components/main/Homeimg';
import Home4thsection from './components/main/Home4thsection';
import Home5thsection from './components/main/Home5thsection';
import Homefooter from './components/main/Homefooter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/" />
          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="addcourse" element={<AddCourse />} />
            <Route path="homeimg" element={<Homeimg />} />
            <Route path="Home4thsection" element={<Home4thsection />} />
            <Route path="Home5thsection" element={<Home5thsection />} />
            <Route path="Homefooter" element={<Homefooter/>} />
          </Route>
          
          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
          
          </Route>
          
          <Route element={<User />} path="user">
            <Route path="pofile" element={<UserProfile />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<UserLogin/>} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
