import { Link } from "react-router-dom";

function Hero(){
    return(
        <section className="hero container-fluid text-center">
            <div>
                
            <h1 className="herostyle text-light mb-4" >INDULGE IN THE FINEST CAKE AND TREATS</h1>
            <p className=" text-light ">Welcome to judith cake diaries and treats, where we create unforgettable cakes and treats for <br />
                every occassion. taste the tradition,love and passion in every unique taste.  </p>

                
                    <Link className="btn text-light  mt-2 me-2 shadow" to="/order">ORDER NOW</Link>
                    <Link className="btn text-light mt-2 shadow" to="/contact">CONTACT US</Link>


                   
            </div>    

        
        
            

        </section>

    )
};
export default Hero