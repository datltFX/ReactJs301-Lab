import React, { Component } from "react";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/usersContext";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  //lay dulieu tu context
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filterUsers: [],
      searchOnchage: "",
    };
    // console.log(this.state.filterUsers);
    // console.log(this.state.searchOnchage);
  }

  //cap nhap dulieu context vao state
  componentDidMount() {
    // console.log("DidMount:cap nhap thanh cong");
    // console.log(this.context);
    this.setState({ filterUsers: this.context });
  }

  //cap nhap gia tri tu input
  searchHandler(e) {
    // console.log(e.target.value);
    this.setState({ searchOnchage: e.target.value });
  }

  //thay doi dulieu:loc mang tim kiem
  componentDidUpdate(prevProps, prevState) {
    // console.log("DidUpdate::cap nhap ok!");

    if (prevState.searchOnchage !== this.state.searchOnchage) {
      this.setState({
        filterUsers: this.context.filter((user) =>
          user.name.includes(this.state.searchOnchage)
        ),
      });
    }
    // console.log(this.state.filterUsers);
  }

  //render
  render() {
    // console.log("Finder render process!");
    return (
      <div>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchHandler.bind(this)} />
        </div>

        <ErrorBoundary>
          <Users filterData={this.state.filterUsers} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default UserFinder;
