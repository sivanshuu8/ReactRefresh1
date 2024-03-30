import React from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRest, setListOfRest] = useState([]);
    const [searchListOfRest, setSearchListOfRest ] = useState([]);
    const [filteredList, setFilterList] = useState('');

    useEffect(() => {
        fetchData();setSearchListOfRest
    },[listOfRest]);

    const fetchData = async () => {
        const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1756772&lng=91.7417143&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const cards = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRest(cards);
        setSearchListOfRest(cards);
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return listOfRest.length === 0 ? <Shimmer /> : <div className="body">
    <div className="searchbar">
        <input type='text' className="search-box" value={filteredList} onChange={(e) => setFilterList(e.target.value)} />
        <button className="search-btn" onClick={() => {
            const searchedResult = listOfRest.filter((list) => list.info.name.toLowerCase().includes(filteredList.toLowerCase())) 
            searchedResult.length !== 0 ? setSearchListOfRest(searchedResult) : setSearchListOfRest(listOfRest)
        }}>Search</button>
    </div>
    <div style={{display:'flex', gap:'24px', flexWrap:'wrap'}}>
        {searchListOfRest.map((rest) => <RestCard resData={rest}/>)}
    </div>
    {/* <RestCard />
    <RestCard />
    <RestCard />
    <RestCard />
    <RestCard />
    <RestCard />
    <RestCard />
    <RestCard />
    <RestCard /> */}
</div>;

    // if(listOfRest.length === 0){
    //     return(
    //         <Shimmer />
    //     )
    // }

    // return(
    //     <div className="body">
    //         <div className="searchbar"></div>
    //         <div style={{display:'flex', gap:'24px', flexWrap:'wrap'}}>
    //             {listOfRest.map((rest) => <RestCard resData={rest}/>)}
    //         </div>
    //         {/* <RestCard />
    //         <RestCard />
    //         <RestCard />
    //         <RestCard />
    //         <RestCard />
    //         <RestCard />
    //         <RestCard />
    //         <RestCard />
    //         <RestCard /> */}
    //     </div>
    // )
}

export default Body;