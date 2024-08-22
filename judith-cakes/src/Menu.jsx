
import cakes from "./assets/cakes.jpg";
import fries from "./assets/fries.jpg";
import chiken from "./assets/chiken.jpg"
function Menu(){
    return(
        <div className="menu-bg container mt-5">
            <h4>Our exclusive menu</h4>
            <hr />

            <div className="row g-4 mt-4 mb-5 text-center">
                <div className="col-12 col-lg-4">
                    
                        <img className="menu img-fluid rounded" src={cakes} alt="chinchin" /> 
              </div>

                
                
                <div className="col-12 col-lg-4">
                        <img className="menu img-fluid rounded" src={chiken} alt="chinchin" />

                </div>
                <div className="col-12 col-lg-4">
                        <img className="menu img-fluid rounded" src={fries} alt="chinchin" />
                </div>
                 
                

            </div>

           

        </div>

    )
};
export default Menu