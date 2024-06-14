import "./App.css";
import Navbar from "./common/navbar/navbar";
import MainRoutes from "./routes/mainRoutes";
import Backdrop from "./common/backdrop";
import { useState } from "react";

function App() {
  let [backdropShow, setBackdropShow] = useState(true);
  return (
    <div className="bg-neutral-400">
      <Navbar></Navbar>
      <div className="flex flex-col gap-4 min-h-screen justify-center items-center">
        <MainRoutes />
      </div>
      <Backdrop
        show={backdropShow}
        onClick={() => setBackdropShow(!backdropShow)}
      />
    </div>
  );
}

export default App;
