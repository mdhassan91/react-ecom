import View from "./View";

const ViewProduct = ({viewItems,openPopup,setOpenPopup}) => {
    return ( <>
    {openPopup &&  <View setOpenPopup={setOpenPopup} viewItems={viewItems}/>}
    
       
   




    </> );
}
 
export default ViewProduct;