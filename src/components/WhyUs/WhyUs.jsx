import Title from "../Title";
import car from "../../assets/assignment-images/imges/landing-page/sec-5/Audi 1.png";
import vector from "../../assets/assignment-images/imges/landing-page/sec-5/Vector.png";
import { Calendar1, MessageCircleMore, UserRound } from "lucide-react";
const WhyUs = () => {
    const data = [
        { title: "Best price guaranteed", desc: "Find a lower price? We’ll refund you 100% of the difference.", icon: <UserRound /> },
        {
            title: "24 hour car delivery", desc: "Book your car anytime and we will deliver it directly to you.", icon: <UserRound />
        },
        {
            title: "Best price guaranteed", desc: "Find a lower price? We’ll refund you 100% of the difference.", icon: <Calendar1 />
        },
        {
            title: "24/7 technical support", desc: "Have a question? Contact Rentcars support any time when you have problem.", icon: <MessageCircleMore />
        }
    ]
    return (
        <section id="whyUs" className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 py-10 items-center overflow-hidden">
            <div className="item relative h-full flex items-center">
                <img data-aos="fade-right" data-aos-duration="1000" src={car} className="w-[80%]" alt="audi car" />
                <img src={vector} className="absolute -z-20 h-full top-0" alt="vector" />
            </div>
            <div className="item px-5 lg:p-0">
                <Title title={'why choose us'} desc={"We offer the best experience with our rental deals"} />
                <ul className="ms-10 mt-10 md:mt-20 lg:mt-24 space-y-5">
                    {data.map(({title,desc,icon}, idx) => <li key={idx} className="flex gap-4">
                        <div className="icon p-5 bg-blue-100/50 text-blue-600 rounded-lg">
                            {icon}
                        </div>
                        <div className="content">
                            <h3 className="font-semibold text-xl">{title}</h3>
                            <p className="text-gray-500">{desc}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
        </section>
    )
}

export default WhyUs
