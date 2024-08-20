import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "./assets/logo.jpg"

function About(){
    return(
        <>
        <Navbar/>

        <div className=" about container-fluid">
            <h3 className="text-light">About Us</h3>

        </div>
        <div className="container mt-5 mb-3 text-center">
            <img className="about-logo img-fluid" src={logo} alt="logo" />
        </div>
        <br />

        <div className="container mt-5 mb-5  ">
            
                <div className=" mt-5">
                <h4>Our Vision</h4>
                <hr />
                <p>“Our vision is to be a cherished destination for exceptional cakes and pastries, renowned for our creativity, craftsmanship, and dedication to quality. We aspire to set the standard for excellence in the baking industry, inspiring moments of joy and celebration in every community we serve. By continuously innovating and embracing the artistry 
                    of baking, we aim to build a legacy of sweet memories and elevate the art of pastry-making to new heights.”</p>

            </div>
            <div className="mt-5">
            
                <h4>Our Mission</h4>
                <hr />
                <p>“At Judith Cakes and Pastry, our mission is to create unforgettable moments through the art of baking. We are dedicated to crafting exquisite cakes and pastries that not only delight the senses but also celebrate life’s special occasions. Using only the finest ingredients and traditional techniques, we aim to bring joy and a touch of sweetness to every customer. Our commitment to quality, creativity, and exceptional service ensures
                     that each bite is a cherished experience, making every celebration a little more extraordinary.”</p>
            </div>
            

            </div>

        

        
        
        <Footer/>
        </>

    )
};

export default About