import React from 'react';
import LogoIcon from './LogoIcon';

function Navbar() {
  return (
    <div className='navbar shadow-lg fixed z-10 bg-white text-black justify-center w-full'>
      <div className='container'>
        <div className='flex-none lg:hidden'>
          <label htmlFor='my-drawer' className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </label>
        </div>

        <div className='flex-none px-2 mx-2 lg:flex'>
          <span className='text-lg font-bold'>
            <LogoIcon width='90' height='71.84' />
          </span>
        </div>

        <div className='flex-1 px-2 mx-2 lg:px-12'>
          <div className='items-stretch hidden lg:flex gap-4'>
            <a href='/' className=''>
              الرئيسية
            </a>
            <a href='/' className=''>
              الخط الزمني
            </a>
            <a href='/' className=''>
              المطاعم
            </a>
            <a href='/' className=''>
              الاقرب اليك
            </a>
            <a href='/' className=''>
              الاصدقاء
            </a>
            <a href='/' className=''>
              {' '}
              اضافة مطعم
            </a>
          </div>
        </div>

        <div className='flex-none'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-6 h-6 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              ></path>
            </svg>
          </button>
        </div>
        <div className='flex-none cursor-pointer'>
          <div className='dropdown dropdown-left'>
            <div tabIndex='0'>
              <div className='avatar'>
                <div className='rounded-full w-10 h-10 m-1'>
                  <img src='https://i.pravatar.cc/500?img=32' alt='img' />
                </div>
              </div>
            </div>
            <ul
              tabIndex='0'
              className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <span>Item 1</span>
              </li>
              <li>
                <span>Item 2</span>
              </li>
              <li>
                <span>Item 3</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
