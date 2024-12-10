import Slider from 'react-slick';
import jaguar from "../../assets/assignment-images/imges/landing-page/jaguar.png";
import nissan from "../../assets/assignment-images/imges/landing-page/nissan.png";
import ac from "../../assets/assignment-images/imges/landing-page/ac.png";
import volvo from "../../assets/assignment-images/imges/landing-page/volvo.png";
const SponsorSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        pauseOnHover: false,
        autoplaySpeed: 0,
        cssEase: "linear"
    };
    return (
        <section className='sponsor my-20'>
            <div className="slider-container overflow-hidden w-10/12 m-auto">
                <Slider {...settings}>
                    <div>
                        <img className='h-[40px] md:h-[70] w-[50px] md:w-[80px] lg:w-auto m-auto' src={volvo} alt='volvo' />
                    </div>
                    <div>
                        <img className='h-[40px] md:h-[70] w-[50px] md:w-[80px] lg:w-auto m-auto' src={nissan} alt='nissan' />
                    </div>
                    <div>
                        <img className='h-[40px] md:h-[70] w-[50px] md:w-[80px] lg:w-auto m-auto' src={jaguar} alt='jaguar' />
                    </div>
                    <div>
                        <img className='h-[40px] md:h-[70] w-[50px] md:w-[80px] lg:w-auto m-auto' src={ac} alt='ac' />
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default SponsorSlider
