import React, { createContext } from "react";

const MyContext = createContext();


export const { Consumer, Provider } = MyContext;

export class MyProvider extends React.Component {
  state = {
    name: "Alex"
  };

  handleChange = state => this.setState(state);

  render() {
    return (
      <Provider value={{ state: this.state, setState: this.handleChange }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const connect = Component => {
  return () => (
    <>
      <Consumer>{val => <Component {...val} />}</Consumer>
    </>
  );
};
