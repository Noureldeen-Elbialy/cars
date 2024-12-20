import { ArrowRight, MapPin } from "lucide-react";
import Title from "../Title";
import axios from "axios";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CarCard from "../CarCard/CarCard";
import car1 from "../../assets/assignment-images/imges/card/car1.png";
import car2 from "../../assets/assignment-images/imges/card/car2.png";
import car3 from "../../assets/assignment-images/imges/card/car3.png";
const PopularCars = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await axios.get(`https://myfakeapi.com/api/cars`);
        const finalRes = res?.data.cars;
        const filterdData = finalRes?.filter((item) => {
            return item.id <= 4;
        });
        setData(filterdData);
        console.log(filterdData);
    }
    const carsImage = [car1, car2, car3];
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <section id="popularCars" className="py-5">
            <Title title={"popular rental deals"} desc={'most popular cars rental deals'} className={'text-center'} />
            <div className="cars grid gap-4 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 m-auto">
                {data?.map((car) => <CarCard key={car.id} carInfo={car} image={carsImage} />)}
            </div>
            <div className="flex justify-center mt-10">
                <Link to={'/cars'} onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="border text-gray-500 py-2 text-xl px-12 border-gray-500 flex items-center rounded-lg justify-center hover:bg-gray-500 hover:text-white"><span>Show All Vehicles</span><span><ArrowRight /></span></Link>
            </div>
        </section>
    )
}

export default PopularCars;
