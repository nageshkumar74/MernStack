import React from 'react'

function SearchField({searchQuery}){

return (
    <div>
      <input type="text"
      placeholder='Search Transactions..'
      value={searchQuery}
      onChange={(e)=>(e.target.value)}
      className='border- p-2 rounded w-full'

      >
      
      </input>  
    </div>
)
}

export default SearchField
