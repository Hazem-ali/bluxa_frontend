import "./App.css";
import Navbar from "./common/navbar/navbar";
import MainRoutes from "./routes/mainRoutes";
// import Backdrop from "./common/backdrop";
// import { useState } from "react";
import Home from "./components/home/home";

function App() {
  // let [backdropShow, setBackdropShow] = useState(true);
  return (
    <div>
      <Navbar />

      <div className="bg-neutral-400" >
        {/* <div className="flex flex-col gap-4 min-h-screen justify-center items-center"> */}
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
