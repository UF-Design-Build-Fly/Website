import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

//IMPORT PAGE: import Page from '../pages/PAGE.js';
import MarkdownPage from './pages/MarkdownPage.js';
import Home from './pages/Home.js';
import PreviousPlanes from './pages/PreviousPlanes.js';

import "./css/fonts.css"
import './css/styles.css';
import './css/markdown.css';

function App() {
  return (
    <div className="App">

      <HashRouter>
          
        <Navbar/>

        <Routes>
          <Route path={'/*'} element={<Home/>}/>
          <Route path={'/previous_planes'} element={<PreviousPlanes/>}/>
          <Route path={'/page'} element={<MarkdownPage/>}/>
        </Routes>

      </HashRouter>

      <Footer/>

    </div>
  );
}

export default App;