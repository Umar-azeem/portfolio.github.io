import logo from './logo.svg';
import './App.css';
import app from './imag/umer.png'
import app1 from './imag/small.png'
import app2 from './imag/prc1.png'
import app3 from './imag/pr2.png'
import app4 from './imag/prc3.png'
import app5 from './imag/prc4.png'
import Facebook from "./imag/facebook.svg";
import LinkedIn from "./imag/linkedin.svg";
import Instagram from "./imag/instagram.svg";
import Snapchat from "./imag/snap.png";
import Github from "./imag/git.png";
import ArrowDown from "./imag/arrow-down.svg";

import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])
  return (
    <>
     <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className='container m-auto px-4 py-8 max-w-4xl bg-black'>
          <div className='flex flex-col gap-4 sm:flex-row justify-between items-center'>
            <div>
              <h1 className='font-extrabold text-2xl' >Umar portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-10'>
                <li><a className='text-gray-500 hover:text-cyan-500 cursor-pointer'>Projects</a></li>
                <li><a className='text-gray-500 hover:text-cyan-500 cursor-pointer'>Portfolio</a></li>
                <li><a className='text-gray-500 hover:text-cyan-500 cursor-pointer'>Contact me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* intro/banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h1 className='font-bold text-4xl'>Hello, i'm Umar Azeem</h1>
              <h1 className='font-bold text-4xl mt-1 gradiant-text'>front-end developer</h1>
              <p className='mt-4 text-gray-400 hover:text-cyan-500'>Former digital-marketing specialist,seeking to apply competent <br></br> development skills with focus on collabortion,communication,<br></br>and passion</p>
              <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                  <a href='https://drive.google.com/file/d/1oqGi7DXULYdTi0rvi5omf_M8ez5gxLz1/view?usp=sharing' target='_blank'>Download resume</a>
                </button> 
            </div>
          <div className='relative'>
          <img src={app} className='relative z-10 rounded-full w-[150px] m-auto sm:w-[150px]'></img>
          <img src={app1} className='absolute top-[-10px] left-14 z-0 w-[150px] h-[150px] m-auto sm:w-[220px]'></img>
          </div>
          </div>
        </section>
         {/* Projects section */}
        <section>
          <div className='container m-auto px-4 sm:py-12' id='pro'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex flex-col sm:flex-row gap-10 mt-11'>
            <div className='border border-gray-500 rounded-md p-5 flex-1'>
              <img src={app5} width={400} height={340}></img>{/* cheack all img section */}
              <h3 className='text-2xl font-semibold mt-8'>Iframeshop E-commerce web page</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' >TailwindCSS/React layout layout with working function creat<br></br>with logics.Tailwind CSS v3.4 HTML5, (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
              <a href='https://www.iframeshop.org/' target='_blank'><button className='px-8 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button></a>
              <a href='https://github.com/Umar-azeem/cards-github.io' target='_blank'> <button className='px-8 py-3 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button>
              </a>
              </div>           {/* cheack all btn section */}
            </div>
            <div className='border border-gray-500 rounded-md p-5 flex-1'>
              <img src={app3} width={400} height={340}></img>
              <h3 className='text-2xl font-semibold mt-8'>Wather web page t</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' > HTML/CSS/javascript layout with working function creat <br></br> with logics, practice project. HTML5, CSS3 (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
            <a href='https://now-check-weather-update.netlify.app/' target='_blank'><button className='px-8 py-3  text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button></a>
             <a href='https://github.com/Umar-azeem/wather.github.io/blob/main/wather.html' target='_blank'><button className='px-8 py-3 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button></a>
              </div>           
            </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-10 mt-11'>
            <div className='border border-gray-500 rounded-md p-5 flex-1'>
              <img src={app4} width={400} height={340}></img>
              <h3 className='text-2xl font-semibold mt-8'>Web clock web page</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' > HTML/CSS/javascript layout with working function creat<br></br>with logics, only web view. HTML5, CSS3 (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
              <a href='https://clock-timedail.netlify.app/' target='_blank'><button className='px-8 py-3  text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
              </a>
             <a href='https://github.com/Umar-azeem/clock.design.github.io' target='_blank'><button className='px-8 py-3 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button>
             </a>
              </div>           
            </div>
            <div className='border border-gray-500 rounded-md p-5 flex-1'>
              <img src={app2} width={400} height={340}></img>
              <h3 className='text-2xl font-bold mt-8'>Apple store web page project</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' >Responsive/HTML/CSS layout practice  <br></br>projects. HTML5, CSS3 (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
              <button className='px-8 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
             <a href='https://github.com/Umar-azeem/apply.github.io' target='_blank'> <button className='px-8 py-3 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button></a>
              </div>           
            </div>
          </div>
          </div>
          {/* Technoglies section */}
          <section className='mt-12' id="technologies">
            <div className='container m-auto px-4'>
              <h2 className='text-2xl font-semibold'>Technologies</h2>
              
            <div className='mt-14'>
            <div>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>HTML</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-full h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>CSS & Bootstrap</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[75%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>JavaScript</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[45%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>Tailwind CSS v3.4</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[67%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>UI design</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[85%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            <div className='mt-6'>
            <div className='flex justify-between items-center'> 
                <h2 className='font-semibold'>React</h2>
                <p className='text-gray-500 hover:text-cyan-500 '>Advanced</p>
                </div>
               <span className='w-[40%] h-2 mt-2 bg-gradient-to-t  from-blue-700 to-cyan-700 block rounded-md'/>
            </div>
            
            </div>
            </div>
          </section>
             {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                Lens Studio - Snap AR
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Social media marketing
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Canva
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  create your on nfts 
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2B B2C C2C
                </p>
              </div>
            </div>
          </div>
        </section>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                Internship As a front end developer ==== Wixpa pvt LTD Company
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-l font-semibold">2023</h3>
                <p>
                Computer Operator & Management ==== shangrilla bakery and departmental store <br></br>
                Computer Operater ==== New Awami general store
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                  Customer care service ==== Brit site telemarketing Call center
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                Coordinator & computer Operator ==== Radio FM 104 bhalwal
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href='https://web.facebook.com/' target='_blank'>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a href= "https://www.linkedin.com/in/umar-azeem-3b2509167/" target='_blank'>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/umar_azeem.64/' target='_blank'>
                  <img src={Instagram} className="w-5"  />
                </a>
              </li>
              <li>
                <a href='https://www.snapchat.com/add/mianu2398?share_id=tu1C5egnfBw&locale=en-US' target='_blank'>
                  <img src={Snapchat} className="w-6 rounded-lg" />
                </a>
              </li>
              <li>
                <a href='https://github.com/' target='_blank' >
                  <img src={Github} className="w-5 rounded-lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0,0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
      </div>
    </>
  );
}

export default App;