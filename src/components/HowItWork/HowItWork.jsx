import { Car, MapPinCheckInside } from "lucide-react"
import Title from "../Title"

const HowItWork = () => {
    return (
        <section id='howItWork' className="py-10">
            <Title className={'text-center'} title={"how it work"} desc={'Rent with following 3 working steps'} />
            <div className="items grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-3 w-[90%] m-auto mt-20">
                <div className="item text-center">
                    <p className="text-blue-600 bg-blue-100/50 p-6 rounded-2xl inline-block"><Car size={50} /></p>
                    <h3 className="text-[1.8rem] font-semibold my-3">Choose location</h3>
                    <p className="text-gray-500">Choose your and find your best car</p>
                </div>
                <div className="item text-center">
                    <p className="text-blue-600 bg-blue-100/50 p-6 rounded-2xl inline-block"><MapPinCheckInside size={50} /></p>
                    <h3 className="text-[1.8rem] font-semibold my-3">Pick-up date</h3>
                    <p className="text-gray-500">Select your pick up date and time to book your car</p>
                </div>
                <div className="item text-center">
                    <p className="text-blue-600 bg-blue-100/50 p-6 rounded-2xl inline-block"><Car size={50} /></p>
                    <h3 className="text-[1.8rem] font-semibold my-3">Book your car</h3>
                    <p className="text-gray-500">Book your car and we will deliver it directly to you</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWork
