import { offer } from "../assets/images"
import Button3 from "../components/Button3"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
  <section className="flex justify-wrap items-center
   max-xl:flex-col-reverse gap-10 max-container">

    <div className="flex-1">
        <img src={offer} alt="offer image" width={773} height={687} 
        className="object-contain w-full"/>
    </div>
    <div className="flex flex-1 flex-col">


<h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg '>
  <span className='text-coral-red'>Special</span> Offer
</h2>

<p className='mt-4 lg:max-w-lg info-text'>
  Embark on a shopping journey that redefines your experience widt
  unbeatable deals. From premier selections to incredible savings, we offer
  unparalleled value that sets us apart

  <p className='mt-6 max-w-lg'>
    Navigate a realm of possibilities designed to fulfill your unique desires, surpassing
    the loftiest expectations. Your journey with us is nothing short of exceptionals.
  </p>
</p>

 <div className='mt-11 flex flex-wrap gap-4'>
  <Button/>
  <Button3/>
 </div>
     </div>


  </section>
  )
}

export default SpecialOffer
