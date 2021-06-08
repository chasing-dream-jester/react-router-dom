import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   useRouteMatch,
//   useHistory,
//   useLocation,
//   useParams,
//   withRouter,
//   Prompt
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  withRouter,
  // Prompt
} from "./react-router-dom/";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";
import RouteComponentPage from "./pages/RouteComponentPage";
import WelcomePage from "./pages/WelcomePage";
import Prompt from "./pages/Prompt";
export default function App(props) {
  return (
    <div className="app">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        <Link to="/product/123">商品</Link>
        <Link to="/prompt">prompt</Link>
       

        <Switch>
          <Route
            exact
            path="/"
            // children={children} // 这是测试 children component render 三者渲染优先级
            component={HomePage}
            //render={render}
          >
            {/* children 0000 */}
          </Route>
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/product/:id" component={Product} /> */}
          <Route path="/product/:id" render={() => <Product />} />
          <Route path="/prompt" component={Prompt} />

          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}

function children(props) {
  return <div>children</div>;
}

function render(props) {
  console.log("render props", props); //sy-log
  return <div>render</div>;
}

// function Product() {
//   const match = useRouteMatch();
//   const history = useHistory();
//   const location = useLocation();
//   const _params = useParams();
//   console.log("hhhhhh", history, location, match, _params);
//   console.log("match", match);
//   const {params, url} = match;
//   const {id} = params;
//   return (
//     <div>
//       <h1>Search-{id}</h1>
//       <Link to={url + "/detail"}>详情</Link>
//       <Route path={url + "/detail"} component={Detail} />
//     </div>
//   );
// }

@withRouter
class Product extends React.Component {
  render() {
    console.log("props", this.props);
    const {params, url} = this.props.match;
    const {id} = params;

    return (
      <div>
        <h1>Search-{id}</h1>
        <Link to={url + "/detail"}>详情</Link>
        <Route path={url + "/detail"} component={Detail} />
      </div>
    );
  }
}

function Detail({ match }) {
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}
