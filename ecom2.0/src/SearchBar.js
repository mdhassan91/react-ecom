import { FaSearch} from 'react-icons/fa';
import { useRef } from 'react';

const SearchBar = ({term,getSearchTerm,}) => {
 const inputEl=useRef()

  
    return ( 
        <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input 
            ref={inputEl}
            type="search"
             className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
             placeholder="Search" 
             aria-label="Search" aria-describedby="button-addon2"
             value={term}
             onChange={()=>getSearchTerm(inputEl)}/>
            <button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center absolute right-0 top-0 mt-1 mr-1" type="button" id="button-addon2">
             <FaSearch/>
            </button>
          </div>
        </div>
      </div>
     );
}
 
export default SearchBar;