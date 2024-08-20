import delivery from "./assets/delivery bike.png";
import { Link } from "react-router-dom";
function Delivery(){
    return(
        <div className=" delivery container-fluid mt-5 mb-5 p-4">
            <div className="container">
            <div className="row mx-auto d-flex justify-content-evenly">
                <div className="col-12 col-lg-4 text-light">
                    <h3>Choose your favourite cakes and treats</h3>
                    <p className="mt-3">When it comes to celebrating life's special moments or simply indulging in a little self-care, few things compare to the joy of enjoying a delicious 
                        cake or treat. With countless options available, selecting your favorites can be both exciting.</p>

                </div>
                <div className="col-12 col-lg-4">
                    <img className="delivery-image img-fluid d-block" src={delivery} alt="delivery-means" />

                </div>
                <div className="col-12 col-lg-4 text-light ">
                    <h3>Order online and get fast delivery</h3>
                    <p className="mt-3">In today’s fast-paced world, convenience is key, especially when it comes to satisfying our cravings for delicious treats and meals. With online ordering and fast delivery services,
                         enjoying your favorite cakes, pastries, or meals has never been easier.</p>
                         <Link className="btn btn-outline-light shadow" to="/order">Place an order now!!</Link>

                </div>
                

            </div>
            </div>

        </div>

    )
};
export default Delivery