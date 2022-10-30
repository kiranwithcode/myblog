import TopBar from "./components/topbar/TopBar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/homepage/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";
import { useContext } from "react";
import { Context } from "./context/Contex";
import Settings from "./pages/settings/Settings"
function App() {
  const {user} = useContext(Context);
  return (
     <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
     </>
  );
}

export default App;
