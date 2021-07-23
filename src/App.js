import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';

import SignUpPage from './components/pages/sign-up-page/sign-up-page.component';
import HomePage from './components/pages/homepage/homepage.component.jsx';
import ContentPage from './components/pages/contentpage/contentpage.component';



class App extends React.Component {

  render(){
    return(
      <div>
        <BrowserRouter basename='/lizards'>
            <Route exact path='/' component={SignUpPage}/>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/content' component={ContentPage}/>
        </BrowserRouter>
      </div>
    )
  }

}
export default App;
