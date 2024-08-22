import Navbar from "./Navbar"
import Footer from "./Footer"


function Contact(){
    return(
        <>
        <Navbar/>
        <div className="contact container-fluid">
            <div>
            <h3 className="text-light text-center">CONTACT US</h3>
            <p className="text-light text-center">GET IN TOUCH</p>
            </div>

        </div>
        <div className="message container-fluid mt-5 p-5">
            <fieldset className="rounded shadow">
                <form className="p-5" action="https://formspree.io/f/xgvwpwwa" method="POST">
                    <input className=" form-control mb-2" type="text" name="fullName" placeholder="Enter FullName"/>
                    <input className="form-control mb-2" type="email" name="email" placeholder="Enter Email"/>
                    <input className="form-control mb-2" type="tel" name="phone Number" placeholder="Enter phone Number"/>
                    <textarea className="form-control mb-2" name="message" id="" placeholder="Your message"></textarea>
                    <button className="btn btn-outline-light mt-3 shadow">Send message</button>
                </form>
            </fieldset>
            
        </div>
        <section class="map container text-center mb-5">
      <iframe className="w-100 shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.302984141201!2d7.486438989845312!3d9.127082590938237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104de1e42cfd50bb%3A0x7a062fb69f931c1e!2sMpape%20police%20station!5e0!3m2!1sen!2sng!4v1723849240800!5m2!1sen!2sng" height="350"
       style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    

     </section>
        
        




        <Footer/>

        </>
        
        

    )
};

export default Contact