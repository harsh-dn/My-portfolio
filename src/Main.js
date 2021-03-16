import React from "react";
import TypeWriter from "./components/TypeWriter";
import MainContent from "./components/MainContent";
import TopNav from "./components/TopNav";
import Blog from "./components/Blog";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Main extends React.Component {
    render() {
        return(
           <BrowserRouter>
               <div>
                   <Switch>
                     
				     <Route path="/" component={MainContent} />
                     <Route path="/blog" exact component={Blog} />
                   </Switch>
               </div>
           </BrowserRouter>
        );
    }
}
export default Main;