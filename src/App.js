import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import SignUpPage from './components/pages/sign-up-page/sign-up-page.component';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import ContentPage from './components/pages/contentpage/contentpage.component';
import Historias from './components/pages/historias/historiaspage';




class App extends React.Component {

  render(){
    return(
      <div>
        <BrowserRouter basename='/lizards'>
            <Route exact path='/' component={SignUpPage}/>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/eventos' component={ContentPage}/>
            <Route exact path='/historias' component={Historias}/>

        </BrowserRouter>
      </div>
    )
  }

}
export default App;
