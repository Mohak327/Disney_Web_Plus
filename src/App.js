
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
	  <Router>
		<Header/>
		<Switch>
			<Route path="/detail/:id">
            	<Detail />
          	</Route>

			<Route exact path = "/home">
				<Home/>
			</Route>

			<Route exact path = "/">
				<Login/>
			</Route>
		</Switch>
	  </Router>
    </div>
  );
}

export default App;
