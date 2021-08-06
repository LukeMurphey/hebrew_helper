import "./App.css";
import "semantic-ui-css/semantic.min.css";

import {
  HashRouter as Router,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Menu } from "semantic-ui-react";
import About from "./components/About/index";
import Home from "./components/Home/index";
import QuizList from "./components/QuizList/index";
import { URL_QUIZZES, URL_ABOUT, URL_HOME } from "./components/URLs/index";
import history from "./history";
import QuizRegistry from "./components/QuizRegistry";

/**
 * This class offers a menu entry for a tab that works with the React router to show the tab when clicked.
 */
function TabMenuItem({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Menu.Item name={label} active={match}>
      <Link to={to}>{label}</Link>
    </Menu.Item>
  );
}

function App({ inverted }) {
  return (
    <Router history={history}>
      <Container
        fluid
        style={{
          padding: "8px",
          marginBottom: 16,
        }}
      >
        <Container text>
          <Menu pointing inverted={inverted}>
            <TabMenuItem
              to="/"
              label="Get the Book"
              activeOnlyWhenExact={true}
            />
            <TabMenuItem to="/quizzes" label="Quizzes" />
            <TabMenuItem to="/about" label="About" />
          </Menu>
        </Container>
      </Container>
      <Route exact path={URL_QUIZZES}>
        <QuizList inverted={inverted} />
      </Route>
      <Route exact path={URL_ABOUT}>
        <About />
      </Route>
      <Route exact path={URL_HOME}>
        <Home />
      </Route>
      {QuizRegistry({ inverted }).map((quiz, i) => (
        <Route exact path={quiz.path}>
          {quiz.render}
        </Route>
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
