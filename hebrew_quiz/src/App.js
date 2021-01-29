import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Pronominal from './components/Pronominal/index';
import QalPerfect from './components/QalPerfect/index';
import QuizList from './components/QuizList/index';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <QuizList />
      </Route>
      <Route exact path="/pronominal">
        <Pronominal />
      </Route>
      <Route exact path="/qalperfect">
        <QalPerfect />
      </Route>
    </Router> 
  );
}

export default App;
