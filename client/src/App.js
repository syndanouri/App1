import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserDash from './pages/UserDash';
import AdminDash from './pages/AdminDash';
import UserRoute from './components/privateRoutes/UserRoute';
import AdminRoute from './components/privateRoutes/AdminRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        {/*route privee lel user mte3na */}
        <Route element={<UserRoute/>}>
        <Route path='/user' element={<UserDash/>}/>





        
        </Route>
         {/* route privee lel admin */}
         <Route element={<AdminRoute/>}>
         <Route path='/admin' element={<AdminDash/>}/> 




         </Route>
        
       </Routes>
      </header>
    </div>
  );
}

export default App;
