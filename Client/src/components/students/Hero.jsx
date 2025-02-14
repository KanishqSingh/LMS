import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicinpit <span>hello hello </span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/></h1>

      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima illum ad magni, sint tenetur, ipsa dolores at temporibus reiciendis, cupiditate ut? Magnam, quas. Facere aspernatur ut harum tempora atque saepe.</p>

      <p className='md:hidden text-gray-5 max-w-sm mx-auto'> 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in repellat cumque maiores dolores accusamus velit dicta sunt sed nobis dolore modi rem veniam possimus, dolorum aspernatur expedita magni et.
      </p>
      <SearchBar/>
      
    </div>
  )
}

export default Hero