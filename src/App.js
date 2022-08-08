import './App.css';
import "./media.css"
import logo from "./images/logo.png"
import faded from "./images/faded.png"
import Navigation from "./components/Navigation"
import TemplateWithRouter from "./components/Template"
import {Switch, Route, withRouter, Link, useLocation} from "react-router-dom"
import Home from "./pages/Home"
import Work from "./pages/Work"
import WorkDetails from "./pages/WorkDetails"
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, useEffect } from 'react';
import ScrollToTop from './components/scrollToTop';
import CursorProvider from './Providers/cursorProvider';



function App() {
  const location = useLocation()
  const [profile, setProfile] = useState(true)

  const passData = (data) =>{
    setProfile(data)
  }

  


  return (
    <CursorProvider>

    <div className="App">
 


    <ScrollToTop/>
      <header>
        <Link to="/"><img src={logo} alt="logo"/></Link>
        <Navigation/>
      </header>
      <main>
        <img src={faded} alt="logo" className='faded'/>
        <TemplateWithRouter passData={passData} profile={profile}>
        <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames="transition"
          key={location.key}
          >
          <Switch>
            <Route exact path="/"><Home passData={passData} /></Route>
            <Route exact path="/:workPage"><Work passData={passData}/></Route>
            <Route path="/:workPage/:detailsPage"><WorkDetails passData={passData}/></Route>
          </Switch>
          </CSSTransition>
      </TransitionGroup>
        </TemplateWithRouter>
      </main>
    </div>
    </CursorProvider>

  );
}

export default App;
