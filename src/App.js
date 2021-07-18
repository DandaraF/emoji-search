import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Search } from "./components/Search";

import { Emoji } from './components/Emoji';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Emoji/>
    </>

  );
}

export default App;
