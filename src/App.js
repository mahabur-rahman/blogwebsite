// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

// custom css / sass
import "./index.scss";

// Responsive scss
import "./Responsive.scss";

// React Router
import { Route, Switch, Redirect } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Write from "./pages/Write";
import Logout from "./pages/Logout";
// import Error from "./pages/Error";

// components
import Navbar from "./components/Navbar";
import Accounts from "./components/Accounts";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/accounts" component={Accounts} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/write" component={Write} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
