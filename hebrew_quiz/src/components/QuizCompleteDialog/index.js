import React from "react";
import PropTypes from "prop-types";
import { Header, Container, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import { URL_QUIZZES } from "../URLs/index";

// Create the set of colors to use
const COLORS = ["#DD2230", "#4AB93A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {index === 0 && percent > 0 && "✘"}
      {index !== 0 && percent > 0 && "✔"}
    </text>
  );
};
function QuizCompleteDialog({
  quizName,
  correctAnswers,
  incorrectAnswers,
  inverted,
  history,
}) {
  // Create the data for the pie-chart
  const data = [
    {
      name: "Incorrect",
      value: incorrectAnswers,
    },
    {
      name: "Correct",
      value: correctAnswers,
    },
  ];

  return (
    <Container style={{ marginTop: 32 }}>
      <p>
        <Header as="h2">
          You have successfully completed the quiz for {quizName}
        </Header>
        {correctAnswers !== null && incorrectAnswers !== null && (
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )}
        <Button onClick={() => history.push(URL_QUIZZES)}>
          Return to Quiz List
        </Button>
      </p>
    </Container>
  );
}

QuizCompleteDialog.propTypes = {
  quizName: PropTypes.string,
  inverted: PropTypes.bool,
  history: PropTypes.object.isRequired,
  incorrectAnswers: PropTypes.number,
  correctAnswers: PropTypes.number,
};

QuizCompleteDialog.defaultProps = {
  inverted: false,
  incorrectAnswers: null,
  correctAnswers: null,
};

export default withRouter(QuizCompleteDialog);
