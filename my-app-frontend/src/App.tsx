import "bootstrap/dist/css/bootstrap.min.css";
import Authuser from "./services/AuthUser";
import Guest from "./components/navbar-components/guest";
import Auth from "./components/navbar-components/auth";


function App() {
  const { getToken } = Authuser();
  if (!getToken()) {
    return <Guest />;
  }
  return <Auth />;
}

export default App;
