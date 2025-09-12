import { Component } from "react";
import { Title } from "./Title";
import { Btns } from "./Btns";
import { Statistics } from "./Statistics";
// import styled from "styled-components";


// const BoxS = styled.div`
//   background-color: rgb(255, 153, 122);
  
// `

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addNum = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Title />
        <Btns onLeave={this.addNum} />
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}/>
        
      </div>
    );
  }
}
