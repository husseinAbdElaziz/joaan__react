import Navbar from './components/Navbar';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='drawer h-full'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <Home />
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
            <li>
              <span>Menu Item</span>
            </li>
            <li>
              <span>Menu Item</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
