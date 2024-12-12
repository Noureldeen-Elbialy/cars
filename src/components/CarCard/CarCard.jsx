import { ArrowRight, CalendarDays, GitFork, Snowflake, Star, UserRound } from 'lucide-react';
const CarCard = ({ carInfo ,image}) => {
    const { id, car, price, car_model_year } = carInfo;
    return (
        <div>
            <div className="car-card space-y-3 h-full flex flex-col justify-between border-2 p-3 rounded-lg ">
                <div className="image">
                    <img src={image[id%3]} className="w-4/5 m-auto" alt="car" />
                </div>
                <div className="content">
                    <h3 className="text-3xl font-semibold">{car}</h3>
                    <span className="flex my-3 text-gray-500 items-center gap-1"><Star size={16} className="text-yellow-500 fill-yellow-500" />(1345 reviews)</span>
                </div>
                <div className="details grid grid-cols-2 gap-2 text-gray-500">
                    <div className="flex items-center gap-1">
                        <UserRound size={16} />
                        <span>2 Passanger</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Snowflake size={16} />
                        <span>Air conditioning</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CalendarDays size={16} />
                        <span>{car_model_year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <GitFork size={16} />
                        <span>Automatic</span>
                    </div>
                </div>
                <div className="py-3 border-t border-gray-300 flex justify-between">
                    <span className="text-gray-500 text-lg">Price</span>
                    <div className="flex">
                        <span>{price}</span>
                        <span className="text-gray-500 ms-[1px] mt-[1px]">/day</span>
                    </div>
                </div>
                <div className="details-btn">
                    <button className="flex gap-2 items-center justify-center text-lg w-full py-2 rounded-lg bg-blue-600 text-white">View Details <ArrowRight size={16} /></button>
                </div>
            </div>
        </div>
    )
}

export default CarCard
