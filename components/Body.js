import React, {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import {RestStatic} from './config';

const filterRestaurant = (res,searchTxt) =>{
	const filteredData=res.filter((res)=>
		res.info.name.toLowerCase().includes(searchTxt)
	);
	return filteredData;
}

export default function Body() {
    const [restaurant,setRestaurant]=useState(RestStatic);
	const [searchTxt,setSearchTxt]=useState("");
    return (
        <>	
        <div className="search-bar">
            <div className="search" key="1">
                <input type="text" placeholder="   Search..."
                value={searchTxt} 
                onChange={(e)=>{ 
                    setSearchTxt(e.target.value);
                }}
                />
                <button type="button" 
                onClick={()=>{
                    const data = filterRestaurant(RestStatic,searchTxt);
                    setRestaurant(data);
                }}>
                    <img src={require("./images/search.png")} alt="" />
                </button>
            </div>
        </div>
        <div className='restaurant-list' key="2">
            {
            restaurant.map((restaurant)=>(
                <RestaurantCard  key={restaurant.info.id} {...restaurant.info} />
                                                    
            ))}
        </div>
    </>
    )
}
