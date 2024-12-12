import { useState } from "react";
import ReactPaginate from "react-paginate";
import CarCard from "../CarCard/CarCard";
import car1 from "../../assets/assignment-images/imges/card/car1.png";
import car2 from "../../assets/assignment-images/imges/card/car2.png";
import car3 from "../../assets/assignment-images/imges/card/car3.png";
import Style from "./Pagination.module.css";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

function Pagination({ data }) {
    const itemsPerPage = 20;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const carsImage = [car1, car2, car3];
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {currentItems.map((car) => <CarCard key={car.id} carInfo={car} image={carsImage} />)}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ArrowRightFromLine />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<ArrowLeftFromLine />}
                renderOnZeroPageCount={null}
                containerClassName={Style.paginationContainer}
                pageLinkClassName={Style.pageNum}
                previousLinkClassName={Style.pageNum}
                nextLinkClassName={Style.pageNum}
                activeLinkClassName={Style.active}
            />
        </>
    );
}

export default Pagination;