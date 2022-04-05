import React from "react";
import Musicas from './pages/Musicas';
import Menu from './components/Menu';
import './html-css-template/css/reset.css';
import './html-css-template/css/style.css';

function App() {
  return (

    <>
      <Menu />
      <Musicas />
    </>
  );
}

export default App;