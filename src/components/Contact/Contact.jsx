import phone from "../../assets/assignment-images/imges/landing-page/sec-7/iPhone-14.png";
import ios from "../../assets/assignment-images/imges/landing-page/ios.png";
import android from "../../assets/assignment-images/imges/landing-page/andriod.png";
import Vector from "../../assets/assignment-images/imges/landing-page/sec-5/Vector.png";
const Contact = () => {
    const inputs = [
        { type: 'text', placeholder: 'Name' },
        { type: 'tel', placeholder: 'Phone Number' },
        { type: 'email', placeholder: 'Email' }
    ]
    return (
        <section id="contact">
            <div className="w-9/12 pt-10 m-auto grid grid-cols-1 md:grid-cols-2">
                <div className="content relative pb-10 mb-10 lg:mb-0 overflow-hidden">
                    <img src={Vector} className="absolute h-full top-0 bottom-0 -z-20" alt="" />
                    <h2 className="font-semibold text-3xl">Download Rentcars App for <span className="text-blue-600">FREE</span></h2>
                    <p className="text-xl">For faster, easier booking and exclusive deals.</p>
                    <div className="apps flex gap-3 mt-4">
                        <img src={android} className="w-[100px]" alt="" />
                        <img src={ios} className="w-[100px]" alt="" />
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} className="w-full flex flex-col space-y-3 mt-6 items-center md:items-start">
                        {inputs.map(({ placeholder, type }, idx) => <input key={idx} type={type} placeholder={placeholder} className="w-3/5 py-3 px-6 rounded-full bg-blue-200/90 placeholder:text-black/70 outline-none" />)}
                        <div className="btn">
                            <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-full">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="img flex items-end justify-center">
                    <img src={phone} className="w-3/5" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Contact
