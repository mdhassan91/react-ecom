import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { HiEye } from "react-icons/hi";
import { FaShoppingCart} from 'react-icons/fa';
import { useState } from "react";
import SearchBar from "./SearchBar";
import ViewProduct from './ViewProduct';

const ProductItem = ({products,onAddtoCart,term,searchKeyword, }) => {
  const[openPopup,setOpenPopup] =useState(false)
  const[viewItems,setViewItems]=useState([])
    const[showPerPage,setShowPerPage]=useState(8)
    const [pagination,setPagination]=useState({
      start:0,
      end:showPerPage,
    })
  
    const onPaginationChange=(start,end) => {
      console.log(start,end);
      setPagination({
        start:start,
        end:end
      })
    }
  
    const getSearchTerm = (inputEl) =>{
      console.log(inputEl.current.value);
      searchKeyword(inputEl.current.value)

    }

    const onViewProducts = (productItem)=>{
      console.log(productItem)
      setViewItems(productItem)
    }

    return ( 
        <>
      <SearchBar term={term} getSearchTerm={getSearchTerm}/>
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {products.slice(pagination.start,pagination.end).map((product, index) => (
        <>
        
          <div  key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full" >
            <Link
              to=""
              className="block relative h-48 rounded overflow-hidden"
            >
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={product.image}
              />
            </Link>
            <div className="mt-4" >
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <h2 className="text-white title-font text-lg font-medium">
                {product.title}
              </h2>
              <p className="mt-1">${product.price}</p>
             

              <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
             onClick={()=>{
               setOpenPopup(true)
               onViewProducts(product)}}>
              <HiEye/> </button>
              <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
               onClick={()=>onAddtoCart(product)}>
              <FaShoppingCart/> </button>
            </div>
          </div>
        </>
      ))}
    </div>
  </div>
  <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={products.length}/>
<ViewProduct viewItems={viewItems} openPopup={openPopup} setOpenPopup={setOpenPopup} />
  </>  )
  ;
}
 
export default ProductItem;