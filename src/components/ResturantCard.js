import { Clock, Cuisine, Star } from "../../assets/Icons";
import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.resData?.info;
    return (
        <div className="card">
            <img alt='resturant-logo'
                className='h-40 mt-4 m-auto'
                src={CDN_URL + cloudinaryImageId} />
            <div>
                <h3 className="text-center text-lg font-semibold"> {name} </h3>
                <div className="grid grid-cols-[minmax(16px,17px)_minmax(150px,350px)] items-center">
                    <div className="max-w-4">
                        <Cuisine />
                    </div>
                    <span className="break-words text-sm">{cuisines.join(',')}</span>
                </div>
                <div className="grid grid-cols-2 items-center max-w-10">
                    <div className="max-w-4">
                        <Star />
                    </div>
                    <span className="break-words text-sm"> {avgRating}</span>
                </div>
                <div className="grid grid-cols-[minmax(16px,17px)_minmax(150px,350px)] items-center max-w-10">
                    <div className="max-w-4">
                        <Clock />
                    </div>
                    <span className="break-words text-sm">{sla.deliveryTime} mins </span>
                </div>
            </div>
        </div>
    )
}

export const withPromotedLabel = (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-lime-800 text-white rounded-lg p-2 m-1"> VEG </label>
                <ResturantCard {...props} />
            </div>
        )
    }
}

export default ResturantCard;