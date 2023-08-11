


import Wrap from "./components/Wrap";

import './App.css'
// import "./index.css"
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'


function App() {
  return (
    <div className='w-full h-full   '>
      <Navbar />
      <main className="max-w-[1640px] m-auto">
        <Wrap />
        <div id="content" className='p-2 flex flex-col items-center justify-center'>
          <div className='w-full lg:w-2/5 flex flex-col items-center gap-4'>
            <div className='text-4xl font-bold'>Meet Our speakers</div>
            <Carousel />
          </div>
        </div>
      </main >
    </div>

  );


}

export default App;
