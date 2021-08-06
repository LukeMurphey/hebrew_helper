import React from "react";
import PropTypes from "prop-types";
import { Header, Container, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { URL_QUIZZES } from "../URLs/index";
import bookCover from'../../files/bookCover.jpg';

function Home({ inverted, history }) {
  return (
    <Container text style={{ marginTop: 32 }}>
      <p>
        <Header as='h1'>Hebrew Quizzes for Learning Biblical Hebrew</Header>
        <img src={bookCover} style={{width: "25%", marginRight: 16, marginBottom: 16, float: "left"}} alt="bookCover" />
        This web-app provides a series of interactive quizzes to help students attempting to learn
        ancient Hebrew using Kutz and Josberger's book "Learning Biblical Hebrew." You can purchase
        the book on <a href="https://www.amazon.com/Learning-Biblical-Hebrew-Comprehension-Introductory/dp/1683590848">Amazon.com</a> or <a href="https://lexhampress.com/product/147180/learning-biblical-hebrew-reading-for-comprehension-an-introductory-grammar">Lexham press</a>.
      </p>
      <p>
        <Button primary onClick={() => history.push(URL_QUIZZES)}>Go to the quizzes</Button>
      </p>
    </Container>
  );
}

Home.propTypes = {
  inverted: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

Home.defaultProps = {
  inverted: false,
};

export default withRouter(Home);
