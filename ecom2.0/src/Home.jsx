import { useContext, useState } from "react";
import { UserContext } from "./App";
import ProductItem from "./ProductItem";





const Home = ({onAddtoCart,}) => {
  const { products } = useContext(UserContext);
  const[searchTerm,setSearchTerm]=useState("")
  const[searchResult,setSearchResult]=useState([])

  const searchHandler=(searchTerm)=>{
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    if(searchTerm!==""){
const newProductList=products.filter((product)=>{
  if (
    product.description.toLowerCase().includes(searchTerm) ||
    product.title.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  ) {
    return product;
  }


})
 setSearchResult(newProductList);  
 console.log(searchResult);                
    }
    else{
      //setSearchResult(products)
      console.log( setSearchResult(products)); 
    }
  }


  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
       
       <ProductItem  products={ searchResult.length<1? products:searchResult}
       
        onAddtoCart={onAddtoCart} 
        term={searchTerm}
        searchKeyword={searchHandler}/>
      </section>
     
    </>
  );
};

export default Home;
