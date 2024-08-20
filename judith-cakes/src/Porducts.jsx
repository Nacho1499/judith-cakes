import { Link } from "react-router-dom";
import donut from "./assets/donut.jpg";
import samusa3 from "./assets/samusa3.jpg";
import puff from "./assets/puff.jpg";
import pie from "./assets/pie.jpg";
import choco from "./assets/choco.jpg"
import pinut8 from "./assets/8.jpg"

function Products(){
    return(
        <div className="container mt-5 mb-5">
            <h4 className=" mb-3">Our popular tasty products</h4>
            <hr />
            <div className="row g-3 mt-4">
                
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={donut} alt="" />
                        
                        <div className="card-body">
                            <h5>Doughnut</h5>
                            <p>doughnut is a fried or baked pastry made from sweetened dough. Donuts come in various shapes and sizes,</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>
                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={pie} alt="" />
                        
                        <div className="card-body">
                        <h5>Meatpie</h5>
                            <p>A meat pie is a baked pastry filled with a savory mixture of meat, vegetables, and seasonings.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={choco} alt="" />
                        
                        <div className="card-body">
                        <h5>Chocolate / Milky Doughnut</h5>
                            <p>Chocolate/milky doughnuts are a type of doughnut where chocolate is incorporated into the dough</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={samusa3} alt="" />
                        
                        <div className="card-body">
                        <h5>Samosa</h5>
                            <p>A samosa is a deep-fried or baked pastry filled with a savory mixture of ingredients.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={puff} alt="" />
                        
                        <div className="card-body">
                        <h5>Puff Puff</h5>
                            <p>Puff puff is a type of fried dough ball that’s soft and fluffy on the inside with a golden-brown exterior.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={pinut8} alt="" />
                        
                        <div className="card-body">
                        <h5>Peanut</h5>
                            <p>Peanuts are a popular legume enjoyed worldwide for their crunchy texture and rich flavor.</p>
                            <Link className="btn btn-dark" to="/order" >Order now</Link>

                        </div>

                    </div>

                </div>


            </div>
            
            <Link className="text-center mt-4 text-decoration-none nav-link " to="/products">View all Products <i class="fa-solid fa-arrow-right"></i></Link>
                
            
        </div>

    )
};
export default Products