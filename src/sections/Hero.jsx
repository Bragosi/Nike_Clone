import {bigShoe1} from '../assets/images'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'
import { useState } from 'react'
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  return (
    <section id="home" className=" flex xl:flex-row flex-col justify-center
    min-h-screen gap-10 max-container">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start
      w-full max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
       max-sm:leading-[1] font-bold '>
          <span className='xl:whitespace-nowrap relative
          z-10 pr-10 xl:bg-white'>
            The New Arrivals</span> <br/>
          <span className='text-coral-red inline-block mt-3'>
            Nike</span> Shoes
        </h1>

        <p className='font-montserrat text-slate-gray tsex-lg
         leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort,
          and innovation for your active life
        </p>
        <Button/>

        <div className='flex justify-start items-start flex-wrap
        w-full mt-20 gap-16'>
          {statistics.map((stat)=>(
            <div>
            <p className='text-4xl font-palanquin font-bold '>
              {stat.value}</p>
            <p className='leading-7 font-montserrat text-slate-gray'>
              {stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center
      xl:min-h-screen max-xl:py-40 bg-primary bg-hero'>

        <img src={bigShoeImg} alt="Shoe Collection" width={610}
        height={500} className='object-contain relative z-10'/>
        <div className='flex sm:gap-6 gap-4 absolute 
        -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe)=> setBigShoeImg(shoe)}
              bigShoeImg = {bigShoeImg}/>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero
