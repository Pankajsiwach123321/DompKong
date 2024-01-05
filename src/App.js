
import Faq from './components/Faq';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Utilities from './components/Utilities';
import TheKong from './components/TheKong';
import MintNft from './components/MintNft';
import RoadMap from './components/RoadMap';
import Partners from './components/Partners';
import TheTeam from './components/TheTeam'; import { useEffect, useState } from 'react';
import Backtop from './components/Backtop';
;

document.body.classList.add("overflow-hidden")
function App() {
  const [load, setload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden')
      setload(false)
    }, 4000);
  });
  return (
    <div className="App">
      <div>
        {load === true && <div className=' fixed w-full h-full flex justify-center items-center bg-black z-30'> <div className='w-10 border-t-4 rounded-full animate-spin  h-10'></div></div>}
      </div>
      <Header />
      <About />
      <Utilities />
      <TheKong />
      <MintNft />
      <RoadMap />
      <Partners />
      <TheTeam />
      <Backtop />
      <Faq />
    </div>
  );
}

export default App;
