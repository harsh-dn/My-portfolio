import React from 'react';
import logo from './logo.svg';
import Main from './Main';
import TopNav from "./components/TopNav";
import { Sugar } from 'react-preloaders';
import MainContent from "./components/MainContent";
import Blog from "./components/Blog";
import HomeContent from "./components/HomeContent";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
               <div>
                   <Switch>
                   <Route path="/" exact component={HomeContent} />
                     <Route path="/blog" exact component={Blog} />
                   </Switch>
               </div>
           </BrowserRouter>
    </div>
  );
}

export default App;
