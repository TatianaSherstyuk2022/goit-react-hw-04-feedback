import React from 'react';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1 
      }
    });
  };

  onNeutralBtnClick = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1 
      }
    });
  };

  onBadBtnClick = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1 
      }
    });
  };

  countTotalFeedback = () => {
    return this.state.neutral + this.state.good + this.state.bad
  }
  
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please live feedback</h2>
        <button
          type="button"
          onClick={this.onGoodBtnClick}
        >
          Good
        </button>
        <button onClick={this.onNeutralBtnClick}>Neutral</button>
        <button onClick={this.onBadBtnClick}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {good} </p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad} </p>
        <p>Total: { this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
      </>
    );
  }
}
