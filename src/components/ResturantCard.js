import { Clock, Cuisine, Star } from "../../assets/Icons";
import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.resData?.info;
    return (
        <div className="resturant-card">
            <img alt='resturant-logo' className='resturant-logo' src={CDN_URL + cloudinaryImageId} />
            <div className="resturant-details">
                <div className="resturant-name">
                    <h3> {name} </h3>
                </div>
                <div className="resturant-rating">
                    <Star />
                    <span> {avgRating}</span>
                </div>
                <div className="resturant-delivery-details">
                    <div className="resturant-cuisine-details"><Cuisine /> <span>{cuisines.join(',')}</span></div>
                    <div className="resturant-eta-details"> <Clock /><span>{sla.deliveryTime} mins </span></div>
                </div>
            </div>
        </div>
    )
}

export default ResturantCard;