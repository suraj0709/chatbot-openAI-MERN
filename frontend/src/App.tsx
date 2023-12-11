import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Siginup from "./pages/Siginup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
// import { useAuth } from "./context/AuthContext";

function App() {
  // console.log(useAuth()?.isLoggedIn);
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Siginup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
