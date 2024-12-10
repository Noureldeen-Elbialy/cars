import herocar from "../../assets/assignment-images/imges/landing-page/herocar.png";
import frame from "../../assets/assignment-images/imges/landing-page/Frame.png";
const Hero = () => {
    return (
        <header className="h-dvh grid grid-cols-1 lg:grid-cols-2 py-32 relative">
            <div className="hero-content text-center flex flex-col justify-start lg:justify-end  lg:pe-28 lg:pb-20 p-0">
                <h1 className="md:text-5xl text-3xl font-bold mb-10">Find, book and<br />rent a car<br /><span className="text-blue-600">Easily</span></h1>
                <p className="text-gray-500">Get a car wherever and whenever you <br /> need it with your IOS and Android device.</p>
            </div>
            <div className="hero-img  -order-1 lg:order-1">
                <img src={herocar} className="lg:w-[90%] w-3/4  ms-auto" alt="herocar" />
                <img src={frame} className="h-full lg:w-[30%] w-[40%] absolute top-0 right-0 -z-10" alt="frame" />
            </div>
        </header>
    )
}

export default Hero
