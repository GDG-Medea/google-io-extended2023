


import Wrap from "./components/Wrap";

import './App.css'
// import "./index.css"
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className='w-full h-full   '>
      <Navbar />
      <main className=" max-width  pt-12 lg:p-12 flex flex-col justify-start items-center gap-8 ">
        <Wrap /> 
        <Carousel />
      </main >
      <Footer/>
    </div>

  );


}

export default App;
