import "./App.css";
import Navbar from "./common/navbar";
import MainRoutes from "./routes/mainRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-neutral-400">
        {/* <div className="flex flex-col gap-4 min-h-screen justify-center items-center"> */}
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
