import {arrowRight} from '../assets/icons'

const Button = () => {
  return (
    <button className='flex justify-center items-center gap-2 px-7
    py-4 border font-montserrat text-lg leading-none bg-coral-red
    rounded-full text-white '>
      Shop Now

      <img src={arrowRight} alt="arrow right icon" w-5 h-5 />
    </button>
  )
}

export default Button

