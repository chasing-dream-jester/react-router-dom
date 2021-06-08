import React, { useContext, Component } from "react";
import { RouterContext } from "./Context";
// export default class Link extends Component {
//   static contextType = RouterContext;
//   handleClick = event => {
//     event.preventDefault();
//     // 事件做跳转
//     this.context.history.push(this.props.to);
//   };
//   render() {
//     const {to, children, ...restProps} = this.props;
//     return (
//       <a href={to} {...restProps} onClick={this.handleClick}>
//         {children}
//       </a>
//     );
//   }
// }

export default function Link(props) {
  const context = useContext(RouterContext);
  const { to, children, ...restProps } = props;
  const handleClick = (event) => {
    event.preventDefault();
    // 事件做跳转
    context.history.push(to);
  };
  return (
    <a href={to} {...restProps} onClick={handleClick}>
      {children}
    </a>
  );
}
