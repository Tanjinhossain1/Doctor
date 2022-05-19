import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp.js';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Pages/Review/Review';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyRevie from './Pages/Dashboard/MyRevie';
import MyUsers from './Pages/Dashboard/MyUsers';
import MyHIstory from './Pages/Dashboard/MyHIstory';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Contacts from './Pages/Contacts/Contacts';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/contact' element={<Contacts />}></Route>
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointment />}></Route>
          <Route path='myreviews' element={<MyRevie />}></Route>
          <Route path='alluser' element={<RequireAdmin><MyUsers /></RequireAdmin>}></Route>
          <Route path='myhistory' element={<MyHIstory />}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>
          <Route path='manageDoctors' element={<RequireAdmin><ManageDoctors /></RequireAdmin>}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
        </Route>
        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
