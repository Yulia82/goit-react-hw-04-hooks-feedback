import { useState } from "react";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import SectionTitle from "../SectionTitle";
import Notification from "../Notification";
import { Wrapper } from "../Wrapper/Wrapper.styles";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = evt => {
    // console.log(evt.target.name);
    const { name } = evt.target;

    switch (name) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percent = Math.round((good * 100) / countTotalFeedback());
    return `${percent}%`;
  };

  function getStatistic() {
    if (countTotalFeedback() === 0) {
      return false;
    } else {
      return true;
    }
  }

  const optionsArr = ["good", "neutral", "bad"];
  const stateObj = {
    good,
    neutral,
    bad,
  };

  return (
    <Wrapper>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={optionsArr}
          onLeaveFeedback={onLeaveFeedback}
        />
      </SectionTitle>

      <SectionTitle title="Statistic">
        {getStatistic() ? (
          <Statistics
            stateObj={stateObj}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </SectionTitle>
    </Wrapper>
  );
}

export default App;

// class App extends Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   onLeaveFeedback = evt => {
//     this.setState(prevState => ({
//       [evt.target.name]: prevState[`${evt.target.name}`] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((sum, current) => sum + current, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const percent = Math.round(
//       (this.state.good * 100) /
//         this.countTotalFeedback(Object.values(this.state)),
//     );
//     return `${percent}%`;
//   };

//   getStatistic() {
//     if (this.countTotalFeedback(Object.values(this.state)) === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }

//   render() {
//     const optionsArr = Object.keys(this.state);

//     return (
//       <Wrapper>
//         <SectionTitle title="Please leave feedback">
//           <FeedbackOptions
//             // options={Object.keys(this.state)}
//             options={optionsArr}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </SectionTitle>

//         <SectionTitle title="Statistic">
//           {this.getStatistic() ? (
//             <Statistics
//               stateObj={this.state}
//               total={this.countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </SectionTitle>
//       </Wrapper>
//     );
//   }
// }

// export default App;
