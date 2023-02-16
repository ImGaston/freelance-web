import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Inicio from './pages/Inicio';
import Metodo from './pages/Metodo';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className='App min-h-screen'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Inicio />}
        />
        <Route
          path='/metodo'
          element={<Metodo />}
        />
        <Route
          path='/proyectos'
          element={<Proyectos />}
        />
        <Route
          path='/contacto'
          element={<Contacto />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </div>
  );
}

export default App;
