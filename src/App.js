import "./App.css";
import Login from "./components/login/login";
import Navbar from "./common/navbar";
import Register from "./components/register/register";
function App() {
  return (
    <div className="bg-neutral-400">
      <Navbar></Navbar>
      <div className="flex flex-col gap-4 min-h-screen max-w-7xl items-center justify-center">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
