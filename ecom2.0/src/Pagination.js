import { useEffect, useState } from "react";
import { HiArrowRight,HiArrowLeft } from "react-icons/hi";



const Pagination = ({showPerPage,onPaginationChange,total}) => {
    const[counter,setCounter]=useState(1)
    console.log(showPerPage)

    useEffect(() => {
        console.log("Counter changed....");
        const value=showPerPage*counter;
        console.log("Start value",value-showPerPage);
        console.log("End Value",value);
        onPaginationChange(value-showPerPage,value)
    },[counter])



    const onButtonClick = (type) =>{
        if (type ==="prev"){
if (counter===1){
    setCounter(1)
}
else{
    setCounter(counter-1)
}
        }
        else if(type ==="next"){
            if (Math.ceil(total/showPerPage)===counter){
                setCounter(counter)
            }
            else{
                setCounter(counter+1)
            }
        }

    }
    return ( <>
    
<div className="flex flex-col items-center">
<div className="inline-flex mt-2 xs:mt-0">


<button className="inline-flex items-center  py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
onClick={()=> onButtonClick("prev")}>
<HiArrowLeft/>
</button>

<button className="inline-flex items-center   py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
onClick={()=>onButtonClick("next")}>
<HiArrowRight/>
</button>

</div>
</div>

    
    
    
    
    
    </> );
}
 
export default Pagination;