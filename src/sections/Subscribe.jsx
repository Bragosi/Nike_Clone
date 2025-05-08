import Button4 from "../components/Button4"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center
    max-lg:flex-col gap-10" id="contact-us">
      <div>
      <h3 className="text-4xl leading-[68px] font-bold lg:max-w-md font-palanquin">
        Sign Up for <span className="text-coral-red">
          Updates 
        </span> & Newsletter
      </h3>
      </div>
      <div className="lg:max-w-[40%] w-full flex items-center 
      max-sm:flex-col
      gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com"
         className="input" />
         <div className="flex max-sm:justify-end items-center
          max-sm:w-full">
          <Button4/>
         </div>
      </div>
    </section>
  )
}

export default Subscribe
