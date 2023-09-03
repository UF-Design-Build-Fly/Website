import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

//IMPORT PAGE: import Page from '../pages/PAGE.js';
import Home from './pages/home.js';

import "./css/fonts.css"
import './css/styles.css';

function App() {
  return (
    <div className="App">

      <HashRouter>
          
        <Navbar/>

        <Routes>
          <Route path={'/*'} element={<Home/>}/>
        </Routes>

      </HashRouter>

      <Footer/>

    </div>
  );
}

export default App;