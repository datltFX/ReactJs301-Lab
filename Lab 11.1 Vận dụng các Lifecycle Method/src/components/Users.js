import React, { Component } from "react";
import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUser: true,
    };
  }
  //tao loi
  componentDidUpdate() {
    // console.log("DidUpdate Error");
    if (this.props.filterData.length === 0) throw new Error("Invalid user!");
  }
  //an hien Userlist
  toggleHandler() {
    console.log(`prev:${this.state.showUser}`);
    this.setState({ showUser: !this.state.showUser });
  }

  //render
  render() {
    // console.log("Users render process");
    return (
      <div className={classes.users}>
        <button onClick={this.toggleHandler.bind(this)}>
          {this.state.showUser ? "Hide" : "Show"}Users
        </button>
        {this.state.showUser && (
          <div>
            <ul>
              {this.props.filterData.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Users;
