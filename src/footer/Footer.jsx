import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "../assets/rebirth.png";
import america from "../assets/american-express 1.png";
import paypal from "../assets/paypal 1.png";
import visa from "../assets/visa 1.png";
import masterCard from "../assets/card 1.png";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] mt-4  border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* ---------------- TOP SECTION ---------------- */}
        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-6">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="mb-2 w-28" />
          </div>

          {/* Navigation + Policies Left, Social Right */}
          <div className="flex justify-between  w-full gap-8">
            <div className="flex flex-col gap-6">
              {/* Navigation */}
              <ul className="space-y-1">
                <li><a href="#" className="text-white text-xs hover:text-gray-300">Home</a></li>
                <li><a href="#" className="text-white text-xs hover:text-gray-300">Product</a></li>
              </ul>
              {/* Policies */}
              <ul className="space-y-1">
                <li><a href="#" className="text-white text-xs ">Terms</a></li>
                <li><a href="#" className="text-white text-xs ">Shipping Policy</a></li>
                <li><a href="#" className="text-white text-xs ">Refund Policy</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Follow Us</h3>
              <div className="space-y-2  ">
                <a href="https://www.instagram.com/solonee.clo?igsh=N2Fid3MwdW5jOXgw" className="flex items-center gap-2 text-white hover:text-amber-600 text-xs">
                  <Instagram size={18}/> Instagram
                </a>
                <a href="https://www.facebook.com/share/1ACcxe3Xs2/" className="flex items-center gap-2 text-white hover:text-amber-600 text-xs">
                  <Facebook size={18}/> Facebook
                </a>
                {/* <a href="#" className="flex items-center gap-2 text-black hover:text-amber-600 text-xs">
                  <Twitter size={18}/> Twitter
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex w-full items-start justify-between">
          {/* Logo Left */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Logo" className="mb-2 w-28" />
          </div>

          {/* Centered Sections */}
          <div className="flex justify-center flex-1 gap-40">
            {/* Navigation */}
            <ul className="space-y-1 text-center">
              <li><a href="#" className="text-white text-xs hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white text-xs hover:text-gray-300">Product</a></li>
            </ul>

            {/* Policies */}
            <ul className="space-y-1 text-center">
              <li><a href="#" className="text-white text-xs hover:text-gray-300">Terms</a></li>
              <li><a href="#" className="text-white text-xs hover:text-gray-300">Shipping Policy</a></li>
              <li><a href="#" className="text-white text-xs hover:text-gray-300">Refund Policy</a></li>
            </ul>

            {/* Social */}
            <div className="text-center p-3 ">
              {/* <h3 className="text-sm font-semibold text-gray-700 mb-1">Follow Us</h3> */}
              <div className="space-x-3 flex">
                <a href="https://www.instagram.com/solonee.clo?igsh=N2Fid3MwdW5jOXgw" className="flex items-center justify-center gap-2 text-white hover:text-amber-600 text-xs">
                  <Instagram size={18}/> 
                </a>
                <a href="https://www.facebook.com/share/1ACcxe3Xs2/" className="flex items-center justify-center gap-2 text-white hover:text-amber-600 text-xs">
                  <Facebook size={18}/> 
                </a>
                <a href="#" className="flex items-center justify-center gap-2 text-white hover:text-amber-600 text-xs">
                  <Twitter size={18}/> 
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- BOTTOM SECTION ---------------- */}
        <div className="pt-6 space-y-3">

          {/* Payment Icons */}
          <div className="flex items-center gap-3 flex-wrap">
            {[america, paypal, visa, masterCard].map((img, i) => (
              <div key={i} className="w-12 h-8 bg-white rounded flex items-center justify-center shadow">
                <img src={img} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Address */}
          <h2 className="text-sm text-[#CDCDCD]">
            103/A Khulshi 4No Road, Chattogram, Bangladesh
          </h2>

          {/* License */}
          <div className="space-y-0.5 text-right">
            <p className="text-white text-xs">LICENSES</p>
            <p className="text-white text-xs">© 2024 Rebirth</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
