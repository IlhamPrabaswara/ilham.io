import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <header>
          <Link to='/'>ilham.io</Link>
          <nav>
            <Link to='/'>Blog</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Work</Link>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
