import notFoundImg from "../../assets/assignment-images/imges/not-found/404-not-found.png";
const NotFound = () => {
    return (
        <section className="py-20 md:py-40 lg:py-4">
            <img src={notFoundImg} className="w-2/3 lg:w-1/4  m-auto" alt="notfound" />
        </section>
    )
}

export default NotFound
