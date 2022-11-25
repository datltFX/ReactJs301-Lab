import React, { Component } from "react";
import classes from "./ErrorBoundary.module.css";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  //hien thi loi
  componentDidCatch(error) {
    // console.log("DidCatch");
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    // console.log("Error render");
    if (this.state.hasError) {
      return <p className={classes.error}>Invalid</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
