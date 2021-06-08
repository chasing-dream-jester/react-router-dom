import React from "react";
import { RouterContext } from "./Context";
export default function Prompt({ message, when = true }) {
  return (
    <RouterContext.Consumer>
      {(context) => {
        if (!when) {
          return null;
        }
        let method = context.history.block;
        return (
          <LifeCycle
            onMount={(self) => {
              self.release = method(message);
            }}
            onUnMount={(self)=>{
              self.release();
            }}
          ></LifeCycle>
        );
      }}
    </RouterContext.Consumer>
  );
}

class LifeCycle extends React.Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount.call(this, this);
    }
  }
  componentWillUnmount() {
    console.log('com',11111)
    
    if (this.props.onUnMount) {
      this.props.onUnMount.call(this, this);
    }
  }
  render() {
    return null;
  }
}
