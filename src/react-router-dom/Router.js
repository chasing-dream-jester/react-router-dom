// import React, {Component} from "react";
// import {RouterContext} from "./Context";

// // const RouterContext = React.createContext()
// export default class Router extends Component {
//   static computeRootMatch(pathname) {
//     return {path: "/", url: "/", params: {}, isExact: pathname === "/"};
//   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       location: props.history.location
//     };
//     // location发生变化，要执行这里的回调
//     this.unlisten = props.history.listen(location => {
//       this.setState({location});
//     });
//   }

//   componentWillUnmount() {
//     if (this.unlisten) {
//       this.unlisten();
//     }
//   }

//   render() {
//     return (
//       <RouterContext.Provider
//         value={{
//           history: this.props.history,
//           location: this.state.location,
//           // path url params isExact 四个属性
//           match: Router.computeRootMatch(this.state.location.pathname)
//         }}>
//         {this.props.children}
//       </RouterContext.Provider>
//     );
//   }
// }

// 函数式
import React, { useState, useEffect } from "react";
import { RouterContext } from "./Context";
export default function Router(props) {
  const [location, setLocation] = useState(props?.history?.location);
  useEffect(() => {
    // setLocation()
    // location发生变化，要执行这里的回调
    const unlisten = props.history.listen((location) => {
      setLocation(location);
    });
    return () => {
      if (unlisten) {
        unlisten();
      }
    };
  }, [props.history]);
  const computeRootMatch = (pathname) => {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  };
  return (
    <RouterContext.Provider
      value={{
        history: props.history,
        location: location,
        // path url params isExact 四个属性
        match: computeRootMatch(location.pathname),
      }}
    >
      {props.children}
    </RouterContext.Provider>
  );
}
