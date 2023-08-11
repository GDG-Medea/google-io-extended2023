
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Wrap from "./components/Wrap";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1640px] m-auto">
        <Wrap />
      </main>
    </>
  );
}

export default App;
