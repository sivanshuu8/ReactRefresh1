import React from "react";
import RestCard from "./RestCard";
import { useEffect, useState } from "react";

const Body = () => {

    const [listOfRest, setListOfRest] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1756772&lng=91.7417143&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        const cards = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setListOfRest(cards);
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return(
        <div className="body">
            <div className="searchbar"></div>
            {listOfRest.map((rest) => <RestCard resData={rest}/>)}
            {/* <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard /> */}
        </div>
    )
}

export default Body;