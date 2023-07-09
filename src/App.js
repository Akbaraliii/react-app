import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/hello'>
          <h1>Hello there </h1>
        </Route>
        <Route path='/detail'>
          <Detail />
        </Route>
        <Route exact={true} path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
