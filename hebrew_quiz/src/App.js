import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import Pronominal from './components/Pronominal/index';
import QalPerfect from './components/QalPerfect/index';
import QuizList from './components/QuizList/index';
import {URL_PRONOMINAL, URL_QAL_PERFECT} from './components/URLs/index';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <QuizList />
      </Route>
      <Route exact path={URL_PRONOMINAL}>
        <Pronominal />
      </Route>
      <Route exact path={URL_QAL_PERFECT}>
        <QalPerfect />
      </Route>
    </Router> 
  );
}

export default App;
