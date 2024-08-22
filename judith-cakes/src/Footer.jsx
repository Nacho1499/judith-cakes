import logo from "./assets/logo.jpg";
import moni from "./assets/moni.jpg";
import both2 from  "./assets/both2.jpg";
import paypal from "./assets/paypal.jpg";

function Footer(){
    const date= new Date();
    const year= date.getFullYear();
    return(
        
        <div className="container-fluid bg-dark">
        <div className=" d-flex justify-content-center p-4 ">
            <div className=" row mt-5 ">
            <div className=" col-sm-6 col-lg-3 mx-auto  mb-3">
                <img className="logo mb-3" src={logo}  alt="site-logo" />
                <p className=" text-light ">Welcome to judith cake diaries and treats, where we create unforgettable cakes and treats for
                every occassion. taste the tradition,love and passion in every unique taste.  </p>
                <div className="text-light">
                <i class="fa-solid fa-location-dot"></i>
                <h6 className="text-light">
                Opposite Standard Academy Seconadary School,Mpape Abuja.
                </h6>
                </div>
                <div className="text-light">
                <i class="fa-solid fa-phone"></i>

                <h6 className="text-light">+234903-210-6182</h6>
                </div>

            </div>
            
            <div className=" text-light col-sm-6 col-lg-3 mx-auto">
                <h4 className="text-light">Our services</h4>
                <hr />
                <ul className="text-light">
                    <li className="">Catering services</li>
                    <li>event planing services</li>
                    <li>cake diaries and treats services </li>
                    <li>training</li>
                </ul>
                
            </div>
            
            <div className="text-light col-sm-6 col-lg-3 mx-auto">
                
                

                <h4>Social links</h4>
                <div>
                <hr />
                <a href="https://www.facebook.com/profile.php?id=61551626983268&mibextid=ZbWKwL"><i class="fa-brands fa-square-facebook fa-2x text-light"></i></a>
                <a href="https://www.instagram.com/judiths_cake_dairies_n_treats?igsh=MW95dTMzZGc4NHNqZA=="><i class="fa-brands fa-square-instagram fa-2x text-light"></i></a>
                <a href="https://wa.link/t74mwo"><i class="fa-brands fa-square-whatsapp fa-2x text-light"></i></a>
                </div>
                <hr />
                

                
            <div>
            <img className="pay" src={moni} alt="monipoint" />
            <img className="pay" src={paypal} alt="paypal" />
            <img className="pay" src={both2} alt=" master and visa cards" />
            </div>
            </div>
            <p className="text-light text-center">© {year} Judith-Cake Dairies And Treats.  Created by NACHO CODES.</p>
            
            </div>
            

        </div>
    
            

        
        </div>

        

    


    )

};

export default Footer