import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./routes";
import { isLoggedIn } from "./utils/auth";

function App() {
  return (
    <Switch>
      {routes.map((item, index) => (
        <AuthRoute
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
          title={item.title}
          type={item.type}
        />
      ))}
    </Switch>
  );
}

export default App;

const AuthRoute = (props) => {
  const { type, title } = props;
  const loggedIn = isLoggedIn();

  if ((type === "common" || type === "public") && loggedIn)
    return <Redirect to="/" />;

  if (type === "private" && !loggedIn) return <Redirect to="/login" />;

  return <Route {...props} />;
};
