import './App.css';
import LoginForm from './componenetes/LoginForm';
import CreateAccount from './componenetes/CreateAccount';
import NotFoundPage from './Pages/NotFoundPage'
import UserPage from './Pages/UserPage/UserPage';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ChatsPage from './Pages/ChatsPage/ChatsPage';


function App() {

  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path='/CrearCuenta' element={<CreateAccount />} />
          
          <Route path='/UserPage/*' element={<UserPage />} />
          <Route path='/Chats/*' element={<ChatsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
