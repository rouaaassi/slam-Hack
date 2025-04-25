import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import Login from './pages/login';
import ChatAi from './pages/chat';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <MainLayout>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ChatAi />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        </MainLayout>
  );
}

export default App;
