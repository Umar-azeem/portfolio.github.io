import logo from './logo.svg';
import './App.css';
import app from './imag/umar.jpeg'
import app1 from './imag/1img_prev_ui.png'
import app2 from './imag/prc1.png'
import app3 from './imag/pr2.png'
import app4 from './imag/prc1.png'
import app5 from './imag/pr2.png'
function App() {
  return (
    <>
      <header>
        <div className='container m-auto px-4 py-8'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-extrabold text-xl' >Umar portfolio</h1>
            </div>
            <div>
              <ul className='flex gap-10'>
                <li><a className='text-gray-500 hover:text-cyan-500'>Projects</a></li>
                <li><a className='text-gray-500 hover:text-cyan-500'>Portfolio</a></li>
                <li><a className='text-gray-500 hover:text-cyan-500'>Contact me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* intro/banner section */}
        <section>
          <div className='container m-auto px-4 py-10 flex gap-6'>
            <div>
              <h1 className='font-bold text-4xl'>Hello, i'm Umar Azeem</h1>
              <h1 className='font-bold text-4xl gradiant-text'>front-end developer</h1>
              <p className='mt-4 text-gray-400 hover:text-cyan-500'>Former digital-marketing specialist,seeking to apply competent <br></br> development skills with focus on collabortion,communication,<br></br>and passion</p>
            </div>
          <div className='relative'>
          <img src={app} width={140} height={160} className='relative z-10 rounded-full'></img>
          <img src={app1} width={150} height={150} className='absolute top-0 left-10 z-0'></img>
          </div>
          </div>
        </section>

        <section>
          <div className='container m-auto px-4'>
            <h2 className='text-2xl font-semibold'>Projects</h2>
            <div className='flex gap-4 mt-16'>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={app2} width={400} height={340}></img>
              <h3 className='text-2xl font-bold mt-8'>Apple store practice project</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' >Responsive HTML/CSS layout practice project.<br></br> HTML5, CSS3 (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
              <button className='px-8 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
              <button className='px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button>
              </div>           
            </div>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={app3} width={400} height={340}></img>
              <h3 className='text-2xl font-bold mt-8'>Wather web page practice project</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' > HTML/CSS/javascript layout with working function creat <br></br> with logics, practice project. HTML5, CSS3 (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
              <button className='px-8 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
              <button className='px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button>
              </div>           
            </div>
            
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={app4} width={400} height={340}></img>
              <h3 className='text-2xl font-bold mt-8'>Apple store practice project</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' >Responsive HTML/CSS layout practice project.<br></br> HTML5, CSS3 (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
              <button className='px-8 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
              <button className='px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button>
              </div>           
            </div>
            <div className='border border-gray-500 rounded-md p-5'>
              <img src={app5} width={400} height={340}></img>
              <h3 className='text-2xl font-bold mt-8'>Wather web page practice project</h3>
              <p className='text-gray-500 hover:text-cyan-500 text-sm mt-5' > HTML/CSS/javascript layout with working function creat <br></br> with logics, practice project. HTML5, CSS3 (SCSS)</p>
            <div className='flex justify-evenly gap-2 mt-12'>
              <button className='px-8 py-3 text-lg bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700'>Live preview</button>
              <button className='px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-700'>Checkout github</button>
              </div>           
            </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
