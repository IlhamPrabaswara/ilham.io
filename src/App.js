import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Work from './pages/Work/Work';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <header>
          <Link className='logo' to='/'>ilham.io</Link>
          <nav>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
            <Link to='/work'>Work</Link>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
