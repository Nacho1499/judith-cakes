import catering from "./assets/catering.jpg";
function Catering(){
    return(
        <div className="catering container-fluid  mt-5 p-4 text-light">
            <div className="container">
           <div className="row g-3 d-flex justify-content-between mt-4">
            <div className="col-12 col-lg-6">
                <h3>We offer catering and event planning services</h3>
                <p>When planning an event, whether it’s a wedding, corporate gathering, or intimate celebration, the food you serve plays a crucial role in creating a memorable experience. At Judith
                     Cakes and Pastry, we offer top-notch catering services to make your occasion truly special.</p>
                     <h5 className="mt-4">Why Choose Our Catering Services:</h5>
                     <ul>
                        <li>Exceptional Quality</li>
                        <li> Diverse Menu Options</li>
                        <li> Personalized Service</li>
                        <li>Stress-Free Experience</li>
                     </ul>

            </div>
            <div className="col-12 col-lg-6 mb-4">
                <img className="catering-image img-fluid" src={catering} alt="catering-image" />
            </div>

           </div>
           </div>
        </div>

    )
};
export default Catering