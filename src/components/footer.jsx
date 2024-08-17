import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-800 pt-10'>
        <h1 className='text-white text-5xl font-black mt-6 font-lato text-center mb-10'>Wonderful Lyon.</h1>
        <div className='bg-gray-900 p-2 sm:px-16 sm:flex justify-between items-center sm:text-left text-center'>
            <p className='text-gray-400 sm:mb-0 mb-4'>&copy; Copright 2024. Wonderful Lyon LLC.</p>
            <div className="sm:flex items-center gap-5">
            <p className='text-gray-400'>Also visit:</p>
            <a href='#' className='text-gray-400 hover:underline sm:mr-0 mr-2'>Paris</a>
            <a href='#' className='text-gray-400 hover:underline sm:mr-0 mr-2'>Bordeaux</a>
            <a href='#' className='text-gray-400 hover:underline sm:mr-0 mr-2'>Stratsbourg</a>
            <a href='#' className='text-gray-400 hover:underline sm:mr-0 mr-2'>Marseille</a>
            <a href='#' className='text-gray-400 hover:underline sm:mr-0 mr-2'>Lille</a>
            </div>
        </div>
    </footer>
  )
}
