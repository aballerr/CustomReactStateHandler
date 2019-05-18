import React from "react";
import {  connect } from "../../MyState";

class ThirdLevelComponent extends React.Component {
  render() {
    return (
      <div>
        <input onChange={e => this.props.setState({name: e.target.value})} />
      </div>
    );
  }
}

export default connect(ThirdLevelComponent);
