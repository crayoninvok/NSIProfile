import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:flex md:justify-between">
      
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">Nautika Sentra Indonesia</h2>
          <p className="text-gray-400 mt-2">Your trusted partner in maritime service and maintenance solution.</p>
        </div>
        
      
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-teal-400 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-400 transition">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-teal-400 transition">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-400 transition">Contact</a>
            </li>
          </ul>
        </div>

       
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Bangunan Barat Street, Jakarta, Indonesia</p>
          <p className="text-gray-400">Phone: +021 60 71 543</p>
          <p className="text-gray-400">Email: office@nautikasentra.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/?locale=id_ID" className="hover:text-teal-400 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com/?lang=id" className="hover:text-teal-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-teal-400 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/" className="hover:text-teal-400 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>    


      <div className="mt-10 text-center text-gray-500">
        © {new Date().getFullYear()} Nautika Sentra Indonesia. All rights reserved.
      </div>
    </footer>
  );
}
