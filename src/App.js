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



function App() {
  const location = useLocation()

  
  return (
    <div className="App">
      <header>
        <Link to="/"><img src={logo} alt="logo"/></Link>
        <Navigation/>
      </header>
      <main>
        <img src={faded} alt="logo" className='faded'/>
        <TemplateWithRouter>
        <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames="transition"
          key={location.key}
          >
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/:workPage"><Work/></Route>
            <Route path="/:workPage/:detailsPage"><WorkDetails/></Route>
          </Switch>
          </CSSTransition>
      </TransitionGroup>
        </TemplateWithRouter>
      </main>
    </div>
  );
}

export default App;
