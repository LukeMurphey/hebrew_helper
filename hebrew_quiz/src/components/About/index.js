import React from "react";
import PropTypes from "prop-types";
import { Header, Container } from "semantic-ui-react";

function About({ inverted }) {
  return (
    <Container text style={{ marginTop: 32 }}>
      <p>
        <Header as='h1'>About</Header>
        This website was made by Luke Murphey. This is an open-source project and you can get the source-code
        on <a href="https://github.com/LukeMurphey/hebrew_quizzes">Github</a>. You may be interested in some
        of my other projects, including <a href="https://textcritical.net">TextCritical.net</a>, a
        website dedicated to the study of ancient Greek.
      </p>
    </Container>
  );
}

About.propTypes = {
  inverted: PropTypes.bool,
};

About.defaultProps = {
  inverted: false,
};

export default About;
