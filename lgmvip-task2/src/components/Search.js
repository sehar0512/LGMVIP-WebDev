import React from 'react';


const Search=({searchfeild, searchChange})=>{
    return(
            <div className='container p-2 mainSearch'>
                <input 
                className='searchBox'
                 type="search" 
                 placeholder='Search by Name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default Search;
