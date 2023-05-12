import Login from './Components/login';
import Register from './Components/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/r" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
