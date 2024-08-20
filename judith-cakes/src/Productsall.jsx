import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import donut from "./assets/donut.jpg";
import samusa3 from "./assets/samusa3.jpg";
import puff from "./assets/puff.jpg";
import pie from "./assets/pie.jpg";
import choco from "./assets/choco.jpg"
import pinut8 from "./assets/8.jpg"
import chinchin from "./assets/chinchin.jpg";
import pancake from "./assets/pancake.jpg"
import fries from "./assets/fries.jpg";



function Productsall(){
    return(
        <>
        <Navbar/>
        <div className=" productall container-fluid">
            <h4 className="text-light">Our Tasty Products</h4>

        </div>

        <div className="container mt-5 mb-5">
            
            <div className="row g-3 mt-4">
                
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={pancake} alt="pancake" />
                        
                        <div className="card-body">
                            <h5>Pancake</h5>
                            <p>Pancakes are a popular breakfast dish made from a simple batter of flour, milk, eggs, and baking powder.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>
                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={chinchin} alt="chinchin" />
                        
                        <div className="card-body">
                        <h5>Chinchin</h5>
                            <p> fried dough snack that’s crunchy and slightly sweet. Made from a dough mixture of flour, sugar, and more.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={choco} alt="choco" />
                        
                        <div className="card-body">
                        <h5>Chocolate / Milky Doughnut</h5>
                            <p>Chocolate/milky doughnuts are a type of doughnut where chocolate is incorporated into the dough.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={samusa3} alt="samosa" />
                        
                        <div className="card-body">
                        <h5>Samosa</h5>
                            <p>samosa is a deep-fried or baked pastry filled with a savory mixture of ingredients.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={puff} alt="puff puff" />
                        
                        <div className="card-body">
                        <h5>Puff Puff</h5>
                            <p>Puff puff is a type of fried dough ball that’s soft and fluffy on the inside with a golden-brown exterior.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={pinut8} alt="peanuts" />
                        
                        <div className="card-body">
                        <h5>Peanut</h5>
                            <p>Peanuts are a popular legume enjoyed worldwide for their crunchy texture and rich flavor.</p>
                            <Link className="btn btn-dark" to="/order" >Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={fries} alt="" />
                        
                        <div className="card-body">
                        <h5>fries</h5>
                            <p>They're made by cutting potatoes into sticks or wedges, then deep-frying them until crispy and golden brown. </p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={donut} alt="Doughnut" />
                        
                        <div className="card-body">
                        <h5>Doughnut</h5>
                            <p>doughnut is a fried or baked pastry made from sweetened dough. Donuts come in various shapes and sizes.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="product-image" src={pie} alt="Meatpie" />
                        
                        <div className="card-body">
                        <h5>Meatpie</h5>
                            <p>meat pie is a baked pastry filled with a savory mixture of meat, vegetables, and seasonings.</p>
                            <Link className="btn btn-dark" to="/order">Order now</Link>

                        </div>

                    </div>

                </div>


            </div>
            
            
                
            
        </div>
        
<        Footer/>
        </>

    )
};

export default Productsall