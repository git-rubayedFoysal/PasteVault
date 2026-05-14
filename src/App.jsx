import { Outlet } from "react-router";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="w-full max-w-3xl mx-auto border-2 border-[#3a3a3a] overflow-hidden shadow-lg rounded-xs sm:rounded-md min-h-screen sm:min-h-[95vh] my-0 sm:my-2.5 bg-[#2e2e2e] flex flex-col">
      <Navbar />
      <div className="flex-1 selection:bg-teal-900 selection:text-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
