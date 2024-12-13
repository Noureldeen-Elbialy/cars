import car from "../../assets/assignment-images/imges/landing-page/sec-5/Audi 1.png";
import { ThreeDots } from "react-loader-spinner";
import Vector from "../../assets/assignment-images/imges/landing-page/sec-5/Vector.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const CarInfo = () => {
    let { id } = useParams();
    console.log(id);
    const [carData, setCarData] = useState();
    const fetchData = async () => {
        const { data } = await axios.get(`https://myfakeapi.com/api/cars/${id}`);
        setCarData(data.Car);
    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className={`${carData ? 'grid lg:grid-cols-2' : 'md:h-[600px]  flex items-center justify-center'}`}>
            {carData ?
                <>
                    {console.log(carData)}
                    <div className="image relative">
                        <img src={Vector} className="h-full absolute -z-20 w-full" alt="vector" />
                        <img data-aos="fade-right" data-aos-duration="1000" src={car} className="w-5/6" alt="car" />
                    </div>
                    <div className="content space-y-8 ms-4 mt-8" data-aos="zoom-in-left" data-aos-duration="1000">
                        <h2 className="text-4xl font-semibold">{carData.car}</h2>
                        <div className="ps-1 space-y-4">
                            <h3 className="text-blue-600 font-semibold text-lg">{carData.car_model}</h3>
                            <p className="text-gray-500">model-year: <span className="text-black font-semibold">{carData.car_model_year}</span></p>
                            <p className="text-gray-500">color: <span className="text-black font-semibold">{carData.car_color}</span></p>
                            <p className="text-3xl font-semibold">{carData.price}</p>
                            <div className=" flex gap-8">
                                <button className="bg-blue-600 py-2 px-4 rounded-lg text-white">Rent a car</button>
                                <Link to={'/cars'} className="bg-gray-300 py-2 px-4 rounded-lg text-gray-600/90 hover:bg-blue-600 hover:text-white duration-500">Go Back</Link>
                            </div>
                        </div>
                    </div>
                </> : <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#2563eb"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />}
        </div>
    )
}

export default CarInfo
