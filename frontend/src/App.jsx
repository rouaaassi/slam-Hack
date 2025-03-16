import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import Home from './pages/home';
import Login from './pages/login';
import ChatAi from './pages/chat';
import SignUp from './pages/signup';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<ChatAi />} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </MainLayout>
  );
}

export default App;
