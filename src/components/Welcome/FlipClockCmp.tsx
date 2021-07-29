import React, { Component, createRef } from 'react';

import "./flipclock.css";
// eslint-disable-next-line import/extensions
import "./flipclock.js";


class FlipClockCmp<P={time:number}> extends Component {
  element$:any = null;

  flipclockRef:any;

  constructor(public props: P, public context: any) {
    super(props, context);
    this.flipclockRef = createRef();
  }

  componentDidMount() {
    const flipclockRef = this.flipclockRef.current;
    // eslint-disable-next-line react/destructuring-assignment
    this.element$ = (window as any).$(flipclockRef).FlipClock((this.props as any).time, {
      countdown: true,
      ...this.props
    });
  }

  componentDidUpdate(prevProps:any) {
    this.setTimeWhenChanges(prevProps);
  }

  setTimeWhenChanges = ({ time: prevTime }:any) => {
    const { time } = this.props as any;
    if (time !== prevTime) {
      this.element$.setTime(time);
      this.element$.start();
    }
  };

  render() {
    return <div ref={this.flipclockRef} />;
  }
}
export default FlipClockCmp;
