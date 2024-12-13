import axios from "axios"
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Pagination from "../../components/pagination/Pagination";
import { MapPin } from "lucide-react";

import NoCar from "../../assets/assignment-images/imges/nocar/28.svg";
const Cars = () => {
    // states
    const [allData, setAllData] = useState([]);
    const [filteredCars, setFilteredCars] = useState(allData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFound, setIsFound] = useState(true);

    // fetch all data
    const getAllData = async () => {
        const { data } = await axios.get(`https://myfakeapi.com/api/cars`);
        setAllData(data?.cars);
    };

    /// handlers
    const debouncedFilterUsers = (searchTerm) => {
        const filtered = allData.filter(car => car?.car.toLowerCase().includes(searchTerm.toLowerCase()));
        if (filtered.length > 0) {
            setIsFound(true)
        } else {
            setIsFound(false)
        }
        setFilteredCars(filtered);
        console.log(filteredCars);
    };

    const handelChange = (e) => {
        setSearchTerm(e.target.value);
    }

    // effect
    useEffect(() => {
        getAllData();
    }, []);
    useEffect(() => {
        debouncedFilterUsers(searchTerm)
    }, [searchTerm])
    return (
        <>
            <section id='allCars' className="mt-28 lg:mt-10">
                <Title title={"popular rental deals"} className={"text-center"} desc={"most popular cars rental deals"} />
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="w-9/12 flex justify-center h-full m-auto mt-5 mb-14">
                        <span className="bg-gray-100 flex justify-center items-center rounded-s-md px-2 border border-gray-300"><MapPin size={18} /></span>
                        <input type="text" className="w-full h-full border-y py-2 placeholder:text-black/80 px-5 border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Search by car model"
                            value={searchTerm} onChange={handelChange} />

                        <button type="submit" className="bg-blue-500 text-white rounded-e-md px-3">Search</button>
                    </div>
                </form>

                <div className="pagination-container w-10/12 m-auto mt-10 md:min-h-[500px] lg:min-h-0">
                    {searchTerm ? <>
                        {isFound ? <Pagination data={filteredCars} /> : <>
                            <div className="grid grid-cols-1 text-center justify-center lg:grid-cols-2 items-center md:h-[500px]">
                                <img src={NoCar} className="w-1/3 m-auto pt-10" alt="" />
                                <h1 className="font-semibold my-8 text-lg text-red-500">This car is not available</h1>
                            </div>
                        </>}
                    </> : <Pagination data={allData} />}
                </div>
            </section>
        </>
    )
}

export default Cars