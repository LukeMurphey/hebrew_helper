import {
  HashRouter as Router,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import { Container, Menu } from "semantic-ui-react";

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

function NavContainer({ inverted, children }) {
  return (
      <>
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
      {children}
      </>
  );
}

NavContainer.propTypes = {
  inverted: PropTypes.bool,
};

NavContainer.defaultProps = {
  inverted: true,
};

export default NavContainer;
