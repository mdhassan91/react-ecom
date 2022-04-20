
import { IoClose } from "react-icons/io5";


const View = ({setOpenPopup,viewItems}) => {
    console.log(viewItems);
    return ( <>
 <div className="modal-background  bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center   ">
<div className="modal-cointainer bg-white relative  rounded-lg px-4 w-full max-w-2xl h-full md:h-auto">


<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                  {viewItems.category}
                </h3>
                <button 
                onClick={()=>setOpenPopup(false)}
                type="button" className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                   <IoClose/>
                </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6    ">
                <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center ">
    
                    <img  className="p-8 rounded-lg w-1/2 " src={viewItems.image} alt="" />
                </div>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {viewItems.title}
                </h1>

                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {viewItems.description}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                   ${viewItems.price}
                </p>
            </div>
            </div>





    </div>    
</div>



  </> );
}
 
export default View;


