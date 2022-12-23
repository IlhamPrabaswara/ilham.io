import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <header>
          <Link className='logo' to='/'>ilham.io</Link>
          <nav>
            <Link to='/blog'>Blog</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Work</Link>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
