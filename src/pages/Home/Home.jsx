import Contact from "../../components/Contact/Contact"
import Hero from "../../components/Hero/hero"
import HowItWork from "../../components/HowItWork/HowItWork"
import PopularCars from "../../components/PopularCars/PopularCars"
import SponsorSlider from "../../components/SponsorSlider/SponsorSlider"
import Testimonials from "../../components/Testimonials/Testimonials"
import WhyUs from "../../components/WhyUs/WhyUs"

const Home = () => {
    return (
        <>
            <Hero />
            <PopularCars/>
            <HowItWork />
            <SponsorSlider />
            <WhyUs />
            <Testimonials />
            <Contact />
        </>
    )
}

export default Home
