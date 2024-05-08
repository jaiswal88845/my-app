import "bootstrap/dist/css/bootstrap.min.css";
import Authuser from "./services/AuthUserService";
import Guest from "./components/navbar-components/GuestPages";
import Auth from "./components/navbar-components/AuthenticatedPage";


function App() {
  const { getToken } = Authuser();
  if (!getToken()) {
    return <Guest />;
  }
  return <Auth />;
}

export default App;
