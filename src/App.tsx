


import Wrap from "./components/Wrap";

import './App.css'
// import "./index.css"
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'


function App() {
  return (
    <div className='w-full h-full   '>
      <Navbar />
      <main className="max-w-[1640px] m-auto flex flex-col justify-start items-center gap-4 ">
        <Wrap />
        <Carousel />
      </main >
    </div>

  );


}

export default App;
