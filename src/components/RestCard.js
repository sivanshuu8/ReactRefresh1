import React from "react";
import { CdnURL } from "./Utils/constants";

const RestCard = (props) => {
    const {resData} = props;
    const {info} = resData;
    const {name, avgRating, areaName, costForTwo, cuisines} = info;
    console.log(resData);
    return(
        <div className="rest-container">
            <div className="rest-img-container">
                <img className="rest-image" alt='rest image' src={CdnURL} />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.map((item) => item)}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating}</h4>
            <h5>{costForTwo}</h5>
        </div>
    )
 }

 export default RestCard; 