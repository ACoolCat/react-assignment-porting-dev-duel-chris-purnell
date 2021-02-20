import './App.css';
import { Route, Switch } from 'react-router-dom';

import Inspect from './screens/Inspect'
import Home from './screens/Home'
import Duel from './screens/Duel'

const App = () => {
  return (
    <div className="App">

      <Switch>
        <Route path='/inspect' render={() => <Inspect />} />
        <Route path='/duel' render={() => <Duel />} />
        <Route path='/' render={() => <Home />} />
      </Switch>
      
    </div>
  );
}

export default App;
