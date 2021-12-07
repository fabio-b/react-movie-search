import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Search from './Search';
import Playlist from './Playlist';

const Footer = styled.footer `
  position: sticky;
  bottom: 0;
  width: 100%;
  color: #fff;
  padding: 1rem 0;
  background-color: ${props => props.backgroundColor }
`;

const FAVORITE_COLOR = 'purple';

function App() {
  return (
    <div className="App container-fluid">
      <header className="App-header">
        <h1>Movie app</h1>
        <nav>
          <Link to="/search">Movie Search</Link>
          <Link to="/watchlist">Movie Playlist</Link>
        </nav>
      </header>
      <div className="row">
        <div className="col">
          <Routes>
            <Route exact path='/search' element={<Search />}></Route>
            <Route exact path='/watchlist' element={<Playlist />}></Route>
          </Routes>
        </div>
      </div>
      <Footer backgroundColor={FAVORITE_COLOR}>
        My favorite color is {FAVORITE_COLOR}
      </Footer>
    </div>
  );
}

export default App;
