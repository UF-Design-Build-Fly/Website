import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

import MarkdownPage from './MarkdownPage.js';

import "./css/fonts.css"
import './css/styles.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
          
        <Navbar/>

        <Routes>
          <Route path={'/Website/*'} element={<MarkdownPage/>}/>
        </Routes>

      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;