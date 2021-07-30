import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import PropTypes from 'prop-types';
import Pronominal from './components/Pronominal/index';
import QalPerfect from './components/QalPerfectQatal/index';
import QuizList from './components/QuizList/index';
import {URL_PRONOMINAL, URL_QAL_PERFECT} from './components/URLs/index';
import history from './history';

function App({ inverted }) {
  return (
    <Router history={history}>
      <Route exact path="/">
        <QuizList inverted={inverted} />
      </Route>
      <Route exact path={URL_PRONOMINAL}>
        <Pronominal inverted={inverted} />
      </Route>
      <Route exact path={URL_QAL_PERFECT}>
        <QalPerfect inverted={inverted} />
      </Route>
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
