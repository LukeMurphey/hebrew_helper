import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import PropTypes from 'prop-types';
import Pronominal from './components/Pronominal/index';
import QuizList from './components/QuizList/index';
import {URL_PRONOMINAL} from './components/URLs/index';
import history from './history';
import QuizRegistry from "./components/QuizRegistry";

function App({ inverted }) {

  return (
    <Router history={history}>
      <Route exact path="/">
        <QuizList inverted={inverted} />
      </Route>
      <Route exact path={URL_PRONOMINAL}>
        <Pronominal inverted={inverted} />
      </Route>
      {QuizRegistry({ inverted }).map((quiz, i) => (
        <Route exact path={quiz.path}>
          {quiz.render}
        </Route>
        )
      )}
    </Router> 
  );
}

App.propTypes = {
  inverted: PropTypes.bool,
};

App.defaultProps = {
  inverted: true,
};

export default App;
