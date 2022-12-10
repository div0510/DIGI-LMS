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
import AddCourse from './components/trainer/AddCourse';
import TrainerDashboard from './components/main/TrainerDashboard';
import UserDashboard from './components/user/UserDashboard';
import Trainer from './components/trainer';
import TrainerAuthorise from './TrainerAuth';
import UserAuthorise from './UserAuth';
import Profile from './components/trainer/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Navigate to="/main/home" />} path="/" />

          <Route element={<Main />} path="main">
            <Route path="trainerlogin" element={<Login />} />
            <Route path="trainersignup" element={<Signup />} />
            <Route path="userregister" element={<Register />} />
            <Route path="userlogin" element={<UserLogin />} />
            <Route path="home" element={<Home />} />

            <Route path="trainerdashboard" element={<TrainerDashboard />} />
          </Route>

          <Route element={<Trainer />} path="trainer">
            <Route path="addcourse" element={
              <TrainerAuthorise>
                <AddCourse />
              </TrainerAuthorise>
            } />
            <Route path='profile' element={<TrainerAuthorise><Profile/></TrainerAuthorise>}/>
            <Route path="dashboard" element={<TrainerAuthorise><TrainerDashboard /></TrainerAuthorise>} />
          </Route>



          <Route element={<Admin />} path="admin">
            <Route path="profile" element={<AdminProfile />} />
          </Route>

          <Route element={<User />} path="user">
            <Route path="profile" element={<UserAuthorise><UserProfile /></UserAuthorise>} />

            <Route path="dashboard" element={<UserAuthorise>< UserDashboard /></UserAuthorise>} />
          </Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
