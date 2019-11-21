import React from 'react';
import './App.css';
//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Container from './components/Container/Container';



function App() {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Route exact path="/" component={Container} />
      <Route component={Footer} />
    </BrowserRouter>

  );
}

export default App;
