import logo from './logo.svg';
// import './App.css';
import { ToastContainer } from 'react-toastify';
import AuthForm from './Components/AuthFrom';

function App() {
  return (
    <div className='App'>
      <AuthForm/>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
   
  );
}

export default App;
