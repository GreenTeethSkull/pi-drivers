import './App.css';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Error from './views/Error/Error';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:idDriver' element={<Detail />} />
        <Route path='/create' element={<Form />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
