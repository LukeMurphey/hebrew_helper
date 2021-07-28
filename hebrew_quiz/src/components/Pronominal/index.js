import React from "react";
import PropTypes from "prop-types";
import QuizQuestion from "../QuizQuestion";
import PronominalAnswer from "./PronominalAnswer";
function Pronominal({ title, inverted }) {
  return (
    <QuizQuestion title={""} inverted={inverted}>
      <PronominalAnswer />
    </QuizQuestion>
  );
}

Pronominal.propTypes = {
  title: PropTypes.string,
  inverted: PropTypes.bool,
};

Pronominal.defaultProps = {
  inverted: false,
  title: "Pronominal",
};

export default Pronominal;
