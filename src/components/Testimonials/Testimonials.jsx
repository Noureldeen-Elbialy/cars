import Style from ".//Testimonials.module.css";
import Title from "../Title";
import testimonial1 from "../../assets/assignment-images/imges/landing-page/sec-6/girlcopy.png";
import testimonial2 from "../../assets/assignment-images/imges/landing-page/sec-6/Rectangle.png";
import { Star } from "lucide-react";
import Slider from "react-slick";
const Testimonials = () => {
    const settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 6000,
        pauseOnHover: false,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
    };

    const data = [
        { url: testimonial1, rate: '5.5', desc: `“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”`, name: 'Sarah Johnson', date:'Last updated 3 mins ago'},
        { url: testimonial2, rate: '7.0', desc: `“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”`, name: 'Taylor Hendnson', date:'Last updated 1 day ago'}
    ]
    return (
        <>
            <section id='testimonials' className={`${Style.bg} py-10`}>
                <Title title={"testimonials"} desc={'what people say about us?'} className={'text-center'} />
                <div className="testimoniala-container overflow-hidden w-full m-auto">
                    <div className="slider-container mt-10">
                        <Slider {...settings}>
                            {data.map(({ name,date,desc,rate,url }, idx) => <div key={idx}>
                                <div className="testimonial bg-white grid grid-cols-1 lg:grid-cols-2 mx-12 lg:mx-20 rounded-t-2xl overflow-hidden">
                                    <div className="testimonial-img">
                                        <img className="w-full lg:w-11/12" src={url} alt="" />
                                    </div>
                                    <div className="testimonial-content px-5 mt-10 leading-10">
                                        <div className="rank mb-1 flex items-end gap-x-2">
                                            <h3 className="text-4xl font-semibold">{rate}</h3>
                                            <p className="font-semibold">stars</p>
                                        </div>
                                        <div className="stars flex">
                                            <Star className="text-yellow-500 fill-yellow-500" size={16} />
                                            <Star className="text-yellow-500 fill-yellow-500" size={16} />
                                            <Star className="text-yellow-500 fill-yellow-500" size={16} />
                                            <Star className="text-yellow-500 fill-yellow-500" size={16} />
                                            <Star className="text-yellow-500 fill-yellow-500" size={16} />
                                        </div>
                                        <p className="text-xl">{desc}</p>
                                        <p>{name}</p>
                                        <p className="text-gray-500">{ date}</p>
                                    </div>
                                </div >
                            </div>)}
                        </Slider>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Testimonials
