import React from "react";
import { connect } from "../../MyState";

class SecondLevelComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{JSON.stringify(this.props)}</h1>
      </div>
    );
  }
}

export default connect(SecondLevelComponent);
