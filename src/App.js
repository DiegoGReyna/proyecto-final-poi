
import './App.css';
import LoginForm from './componenetes/LoginForm';
import CreateAccount from './componenetes/CreateAccount';
import NotFoundPage from './Pages/NotFoundPage'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>

          <Route path='/' element={<LoginForm />} />
          <Route path='/CrearCueanta' element={<CreateAccount />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
