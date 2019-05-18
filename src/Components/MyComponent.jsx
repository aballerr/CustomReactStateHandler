import React from "react";
import MySecondLevelComponent from "./SecondLevelComponent.jsx/SecondLevelComponent";

class MyComponent extends React.Component {
  render() {

    // return <h1>{JSON.stringify(this.props)}</h1>;
    return <MySecondLevelComponent  />;
  }
}

export default MyComponent;
