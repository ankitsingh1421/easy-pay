import fb from "../../assets/fb.png"
import ig from "../../assets/ig.png"
import x from "../../assets/x.png"
import wa from "../../assets/wa.png"
import gh from "../../assets/gh.png"


export default function Footr(){


    return (
        <footer className="py-8 text-white bg-gray-800">
          <div className="container grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
            
            {/* Social Media Section */}
            <div>
              <h2 className="mb-4 text-lg font-bold">Follow Us</h2>
              <div className="flex w-10 space-x-2 ">
                <img src={fb} alt="facebook" className="transition hover:scale-150" />
                <img src={ig} alt="instagream"  className="transition hover:scale-150"/>
                <img src={x} alt="twitter" className="transition hover:scale-150"/>
                <img src={wa} alt="Whatsaap"  className="transition hover:scale-150"/>
                
              </div>
            </div>
    
            {/* Quick Links Section */}
            <div>
              <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
    
            {/* Contact Section */}
            <div>
              <h2 className="mb-4 text-lg font-bold">Contact Us</h2>
              <p>1234 Street Name, City</p>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
    
          </div>
    
          <div className="flex flex-col items-center justify-center mt-8 text-center text-gray-500">
<a href="https://github.com/ankitsingh1421/easy-pay.git" target="_blank" rel="noopener noreferrer">
  <img src={gh} alt="Github" className="w-8 transition hover:scale-150" />
</a>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </footer>
      );
}