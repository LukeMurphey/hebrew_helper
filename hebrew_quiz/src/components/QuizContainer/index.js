import React from "react";
import PropTypes from "prop-types";
import { Header, Container, Progress, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function QuizContainer({
  title,
  subtitle,
  inverted,
  percent,
  onClose,
  children
}) {
  return (
    <Container style={{ marginTop: 32 }}>
      <p>
        <Icon name="close" onClick={() => onClose()} />
        {percent !== null && (
          <Progress percent={percent} success />
        )}
        <Header as="h2">{title}</Header>
        <Header as="h3" color="grey">
          {subtitle}
        </Header>
        {children}
      </p>
    </Container>
  );
}

QuizContainer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  inverted: PropTypes.bool,
  percent: PropTypes.number,
  onClose: PropTypes.func,
};

QuizContainer.defaultProps = {
  inverted: false,
  percent: null,
};

export default withRouter(QuizContainer);
