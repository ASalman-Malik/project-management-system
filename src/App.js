import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import PageNotFoundScreen from "./screens/PageNotFoundScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import NavList from "./components/common/header/NavList";
import FormikForm from "./FormikForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavList/>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/f" element={<FormikForm/>} />
          <Route path="/user-login" element={<LoginScreen />} />
          <Route path="/user-register" element={<RegisterScreen />} />
          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
