import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "../../assets/assignment-images/imges/footer/logo-footer.png";
const Footer = () => {
    return (
        <footer className="text-white bg-slate-900 py-3">
            <div className="container border-b border-b-gray-500/50 w-11/12 m-auto py-10 gap-y-10 gap-x-2 md:gap-0 grid grid-cols-3 md:grid-cols-6">
                <div className="info col-span-2">
                    <p><img src={Logo} alt=""/></p>
                    <ul className="space-y-3 mt-8">
                        <li className="flex items-center gap-x-2">
                            <MapPin className="text-gray-500" />
                            <span>25566 Hc 1,Glenallen,<br />
                                Alaska, 99588, USA</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <Phone className="text-gray-500" />
                            <span>+603 4784 273 12</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <Mail className="text-gray-500" />
                            <span>rentcars@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div className="products">
                    <p className="font-semibold">Our products</p>
                    <ul className="mt-4">
                        <li><a href="#">Carrers</a></li>
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">Packages</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Priceline</a></li>
                    </ul>
                </div>
                <div className="about">
                    <p className="font-semibold">About rent cars</p>
                    <ul className="mt-4">
                        <li><a href="#">Why choose us</a></li>
                        <li><a href="#">Our story</a></li>
                        <li><a href="#">Investor relations</a></li>
                        <li><a href="#">Press center</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                </div>
                <div className="resources">
                    <p className="font-semibold">Resources</p>
                    <ul className="mt-4">
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Partner network</a></li>
                        <li><a href="#">Cruises</a></li>
                        <li><a href="#">Developer</a></li>
                    </ul>
                </div>
                <div className="follow">
                    <p className="font-semibold">Follow Us</p>
                    <ul className="mt-4 flex space-x-3">
                        <li><a href="#"><Facebook  size={20} className="text-gray-500"/></a></li>
                        <li><a href="#"><Instagram size={20} className="text-gray-500"/></a></li>
                        <li><a href="#"><Youtube size={20} className="text-gray-500"/></a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright w-11/12 m-auto mb-5 mt-10 text-center md:text-start md:ps-5">
                <p>Copyright 2023 ・ Rentcars, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
