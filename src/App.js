
import './App.css';
import LoginForm from './componenetes/LoginForm';
import CreateAccount from './componenetes/CreateAccount';
import NotFoundPage from './Pages/NotFoundPage'
import UserPage from './Pages/UserPage/UserPage';
// import Team from './Pages/Team/Team';
// import PrivChat from './componenetes/PrivChat/PrivChat';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatsPage from './Pages/ChatsPage/ChatsPage';
// import PrivChatPage from './Pages/PrivChatPage/PrivChatPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/' element={<LoginForm />} />
          <Route path='/CrearCueanta' element={<CreateAccount />} />
          {/* <Route path='/UserPage/*' element={<UserPage />} /> */}
          
          <Route path='/UserPage/*' element={<UserPage />} />
          <Route path='/Chats/*' element={<ChatsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
