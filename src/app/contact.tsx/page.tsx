import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <div className="w-full h-[40vh] bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      </div>

   
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
     
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have a question or want to work together? Feel free to reach out to us!
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FaPhoneAlt className="text-teal-500 mr-3" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="text-teal-500 mr-3" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="text-teal-500 mr-3" />
                <span>123 Street, City, Country</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="w-full mt-2 p-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
