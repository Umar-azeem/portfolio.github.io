import logo from './logo.svg';
import './App.css';
import app from './imag/umar.jpeg'
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
              <ul className='flex gap-4'>
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
              <h1 className='font-bold text-4xl'>front-end developer</h1>
              <p className='mt-4 text-gray-400 hover:text-cyan-500'>Former digital-marketing specialist,seeking to apply competent <br></br> development skills with focus on collabortion,communication,<br></br>and passion</p>
            </div>
          <div>
          <img src={app} width={120} ></img>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;