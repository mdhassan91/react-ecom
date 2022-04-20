



const EmptyCart = () => {
    return ( <>
    <div className="w-screen h-screen flex justify-center items-center">
  <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
    <div className="prod-img">
        <img src="https://cdn.dribbble.com/users/844846/screenshots/2981974/empty_cart_800x600_dribbble.png"
             className="w-full object-cover object-center" alt="f" />
      </div>
     
      <div className="prod-title">
        
        <p className="uppercase text-sm text-black-400">
       Please add something in your Cart
        </p>
      </div>
    
      <div className="prod-info grid gap-10">
        
        <div className="flex flex-col  mt-5 md:flex-row justify-center items-center text-gray-900">
         
        <button type="button"
         className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">
        Continue Shopping</button>
        </div>
      </div>
    </div>
  </div>
</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </> );
}
 
export default EmptyCart;