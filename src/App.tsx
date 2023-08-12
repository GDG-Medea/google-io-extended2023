import "./App.css";
import Wrap from "./components/GGLIO-Wrap/Wrap";
import JoinDc from "./components/Discord/JoinDc";
import Topics from "./components/Topics/Topics";

function App() {
  return (
    <>
      <main className="max-w-[1640px] m-auto">
        <Wrap />
        <JoinDc />
        <Topics />
      </main>
    </>
  );
}

export default App;
