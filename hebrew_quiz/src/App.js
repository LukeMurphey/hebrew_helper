import "./App.css";
import "semantic-ui-css/semantic.min.css";

import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import PropTypes from "prop-types";
import About from "./components/About/index";
import Home from "./components/Home/index";
import QuizList from "./components/QuizList/index";
import NavContainer from "./components/NavContainer/index";
import { URL_QUIZZES, URL_ABOUT, URL_HOME } from "./components/URLs/index";
import history from "./history";
import QuizRegistry from "./components/QuizRegistry";

/**
 * Determine which quiz to render if there are multiple stages.
 * @param {*} quiz A quiz object
 * @returns 
 */
function renderQuiz(quiz) {
  if(Array.isArray(quiz.render)){
    return <Route exact path={quiz.path[0]}>{quiz.render[0]}</Route>;
  }
  else {
    return <Route exact path={quiz.path}>{quiz.render}</Route>;
  }
}

/**
 * The main app class.
 * @returns 
 */
function App({ inverted }) {
  return (
    <Router history={history}>
      <Route exact path={URL_QUIZZES}>
        <NavContainer>
          <QuizList inverted={inverted} />
        </NavContainer>
      </Route>
      <Route exact path={URL_ABOUT}>
        <NavContainer>
          <About />
        </NavContainer>
      </Route>
      <Route exact path={URL_HOME}>
        <NavContainer>
          <Home />
        </NavContainer>
      </Route>
      {QuizRegistry({ inverted }).map((quiz, i) => (
        renderQuiz(quiz)
      ))}
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
