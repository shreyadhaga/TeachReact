import { Clock, Cuisine, Star } from "../../assets/Icons";
import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = props.resData?.info;
    return (
        <div className="card h-full p-x-2 w-60 border border-gray-200 bg-slate-300 rounded-lg gap-2">
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

export default ResturantCard;