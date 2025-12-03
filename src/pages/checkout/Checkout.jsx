import { useState } from "react";
import { useLocation } from "react-router-dom";
import BkashLogo from "../../assets/BKash_Logo_icon-700x662 1.png";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { bdLocations } from "../../location/bdLocation";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;
  const selectedImage = location.state?.image;
  const selectedSize = location.state?.size;

  const [quantity, setQuantity] = useState(1);
  const [transactionId, setTransactionId] = useState("");

  // ★ ADD Dynamic District + Thana States
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  if (!product) {
    return (
      <p className="text-center mt-20 text-lg font-semibold">
        No product selected!
      </p>
    );
  }

  console.log(product, "product");

  const subtotal = product.price * quantity;
  const shipping = 150;
  const total = subtotal + shipping;

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create formdata
    const formData = new FormData(e.target);
    // add product details to formdata
    formData.append("product_Name", product?.title);
    formData.append("district", district);
    formData.append("thana", thana);
    formData.append("quantity", quantity);
    formData.append("subtotal", subtotal);
    formData.append("total", total);
    formData.append("selectedSize", selectedSize);

    console.log(
      formData.forEach((value, key) => console.log(key, value)),
      "formdata 47"
    );

    try {
      // send formdata to server
      if (
        !district ||
        !thana ||
        !quantity ||
        !subtotal ||
        !total ||
        !selectedSize
      ) {
        toast.error("Please select district and thana");
        return;
      }
      // show loading toast
      const loadingToast = toast.loading("Submitting order...");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwDJ4Pm9E00HTgiPaHRSY3jCHVi-jyS4jcrhevoGXaPnw0WjVaggIoBmkq-mGCzFfxN6Q/exec",
        {
          method: "POST",
          body: formData,
        }
      );
      // parse response as json
      const data = await response.json();
      // close loading toast
      if (!data.result) {
        toast.error("Order submission failed!");
        return;
      }
      toast.success("Order submitted successfully!", {
        id: loadingToast,
      });
      setTimeout(() => {
        navigate("/");
        //   redirect to home
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen  p-4 sm:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1  lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {/* LEFT SIDE */}
        <div className="lg:col-span-2  space-y-6 sm:space-y-8">
          <div className="bg-[#1F1F1F] rounded-lg border border-[#3C3C3C] p-6 sm:p-8 w-full shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Billing And Shipping
            </h2>

            {/* Name */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-[#C3C3C3] mb-1 sm:mb-2">
                Name :
              </label>
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border bg-[#3C3C3C] text-[#A9A9A9] border-gray-300 rounded-lg"
              />
            </div>

            {/* Phone */}
            {/* Phone */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm font-medium text-[#C3C3C3] mb-1 sm:mb-2">
                Phone Number :
              </label>
              <input
                type="text"
                name="phone"
                required
                maxLength={11}
                placeholder="Phone Number"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Only number
                }}
                className="w-full px-4 py-3 border bg-[#3C3C3C] text-[#A9A9A9] border-gray-300 rounded-lg"
              />
            </div>

            {/* District & Thana */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 sm:mb-6">
              {/* District */}
              <div>
                <label className="block text-sm font-medium text-[#C3C3C3] mb-1 sm:mb-2">
                  District :
                </label>
                <div className="relative">
                  <select
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                      setThana(""); // reset thana
                    }}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg bg-[#3C3C3C] text-[#A9A9A9] appearance-none"
                  >
                    <option value="">Select District</option>

                    {Object.keys(bdLocations).map((dist) => (
                      <option key={dist} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>

                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A9A9A9] w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Thana */}
              <div>
                <label className="block text-sm font-medium text-[#C3C3C3] mb-1 sm:mb-2">
                  Thana :
                </label>
                <div className="relative">
                  <select
                    value={thana}
                    onChange={(e) => setThana(e.target.value)}
                    disabled={!district}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg bg-[#3C3C3C] text-[#A9A9A9] appearance-none"
                  >
                    <option value="">Select Thana / Area</option>

                    {district &&
                      bdLocations[district].map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                  </select>

                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Full Address */}
            <div className="mb-4 sm:mb-8">
              <label className="block text-sm font-medium text-[#C3C3C3] mb-1 sm:mb-2">
                Full Address :
              </label>
              <input
                type="text"
                name="address"
                required
                placeholder="Full Address"
                className="w-full px-4 py-3 border border-gray-300 bg-[#3C3C3C] text-[#A9A9A9] rounded-lg"
              />
            </div>
          </div>

          {/* PAYMENT Terms SECTION */}
          <div className="border border-[#3C3C3C] p-5 rounded-lg pt-4 sm:pt-8">
            <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 sm:mb-4">
              Payment Terms
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm text-[#A9A9A9]">
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 text-base">•</span>
                <span>Payments can be made via bKash.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 text-base">•</span>
                <span>Delivery charges: ৳150.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 text-base">•</span>
                <span> 150 taka must be paid before delivery.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 text-base">•</span>
                <span>
                  Orders are confirmed only after payment verification.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-1">
          <div className="bg-[#141414] rounded-lg border border-[#3C3C3C] p-4 sm:p-6 sticky top-4 sm:top-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
              Product Details
            </h2>

            {/* Product Card */}
            <div className="flex gap-4 mb-4 pb-4 border-b border-gray-200">
              <img
                src={selectedImage || product.img}
                alt={product.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-[#D3D3D3]">{product.title}</h3>
                <p className="text-sm text-[#A9A9A9]">
                  Size: {selectedSize || "S"}
                </p>
                <p className="font-bold text-[#FFFFFF] mt-2">
                  BDT {product.price}
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={decrement}
                className="w-8 h-8 rounded-lg border text-[#B7B7B7] border-[#3C3C3C] flex items-center justify-center"
              >
                −
              </button>
              <span className="w-8 text-center text-[#D3D3D3] font-medium">{quantity}</span>
              <button
                type="button"
                onClick={increment}
                className="w-8 h-8 rounded-lg border text-[#B7B7B7] border-[#3C3C3C] flex items-center justify-center"
              >
                +
              </button>
            </div>

            {/* Price Summary */}
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex justify-between">
                <span className="text-[#D3D3D3]">Subtotal</span>
                <span className="font-medium text-[#FFFFFF]">BDT {subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#D3D3D3]">Shipping Charge</span>
                <span className="font-medium text-[#FFFFFF]">BDT {shipping}</span>
              </div>
              <div className="flex justify-between border-t border-[#3C3C3C] pt-3 font-bold">
                <span className="text-[#D3D3D3]">Total</span>
                <span className="font-medium text-[#FFFFFF]">BDT {total}</span>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-[#141414] border border-[#3C3C3C] rounded-lg p-4 space-y-4">
              {/* Bkash */}
              <div className="border border-[#3C3C3C] rounded-lg p-4 space-y-4">
                <div className="flex justify-between bg-[#1F1F1F] border border-[#3C3C3C] gap-3 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img src={BkashLogo} className="w-6 h-6" />
                    <p className="font-medium text-white">Bkash</p>
                  </div>
                  <div className="flex items-center px-5">
                    <p className="text-sm text-white">01871122774</p>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>Transaction Id</span>
                  <input
                    type="text"
                    value={transactionId}
                    name="transactionId"
                    required
                    placeholder="Trx id"
                    onChange={(e) => setTransactionId(e.target.value)}
                    className="w-36 text-left border border-gray-300 rounded px-2 py-1"
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex gap-3">
                    <span className="text-yellow-600 text-lg">⚠</span>
                    <div>
                      <p className="font-semibold text-yellow-900 mb-2">
                        Delivery Charge Notice
                      </p>
                      <ul className="text-xs text-yellow-800 space-y-1">
                        <li>• ৳ 150 All District</li>
                        
                      
                          <li> • 150 taka Shipping Charge must be paid before delivery.</li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* CASH ON DELIVERY */}
              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    checked
                    name="payment"
                    className="w-4 h-4"
                  />
                  <span className="text-[#D3D3D3] font-medium">
                    Cash on delivery
                  </span>
                </label>
              </div>

              {/* TERMS */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mt-1"
                    defaultChecked
                  />
                  <span className="text-sm text-[#00AE7A] leading-5">
                    Accept Terms & Conditions and Privacy Policy{" "}
                    <span className="text-[#D3D3D3]">of salonee.shop</span>
                  </span>
                </label>
              </div>
            </div>

            {/* CONFIRM ORDER BUTTON */}
            <button
              type="submit"
              // to="/order-animation"

              className="w-full block text-center hover:bg-white hover:text-black bg-black text-white font-bold py-3 rounded-lg mt-4"
            >
              Order Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
