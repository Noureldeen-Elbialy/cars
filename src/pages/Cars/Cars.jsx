import axios from "axios"
import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Pagination from "../../components/pagination/Pagination";
const Cars = () => {
    const [data, setData] = useState([]);
    const getAllData = async () => {
        const { data } = await axios.get(`https://myfakeapi.com/api/cars`);
        setData(data?.cars);
    };
    useEffect(() => {
        getAllData();
    }, []);

    return (
        <>
            <section id='allCars' className="mt-28 lg:mt-10">
                <Title title={"popular rental deals"} className={"text-center"} desc={"most popular cars rental deals"} />
                <div className="pagination-container w-10/12 m-auto mt-10">
                    <Pagination data={data} />
                </div>
            </section>
        </>
    )
}

export default Cars