import React from 'react';
import { createValideImage } from '../utils/helpers';

export default function RestauCard({ restaurantDate }) {
  return (
    <div className='restau__card flex h-40 shadow-lg p-2'>
      <div className='w-1/3 overflow-hidden rounded'>
        <img
          className='h-full w-full transform transition duration-500 hover:scale-110'
          src={
            createValideImage(restaurantDate?.mainImage?.imageText) ||
            'https://joaan.me/assets/images/logo.svg'
          }
          alt=''
        />
      </div>
      <div className='card-body text-black'>
        <h2 className='card-title text-red-700 font-extrabold'>
          {restaurantDate?.location?.name}
        </h2>
        <p className='text-sm flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-1'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#2c3e50'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <circle cx='12' cy='11' r='3' />
            <path d='M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z' />
          </svg>
          {restaurantDate?.location?.address.slice(0, 40) + '...'}
        </p>

        <p className='text-sm flex mt-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='ml-1'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#2c3e50'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <circle cx='12' cy='12' r='3' />
            <circle cx='12' cy='12' r='8' />
            <line x1='12' y1='2' x2='12' y2='4' />
            <line x1='12' y1='20' x2='12' y2='22' />
            <line x1='20' y1='12' x2='22' y2='12' />
            <line x1='2' y1='12' x2='4' y2='12' />
          </svg>
          100 متر من موقعك
        </p>
      </div>
    </div>
  );
}
