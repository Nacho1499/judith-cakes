import wed from "./assets/wed.jpg";
import birth from "./assets/birth.jpg";
import cake from "./assets/cake.jpg";
function Cakes(){
    return(
        <div className="container mt-5">
            <h4>Our popular cakes</h4>
            <hr />
            <div className="row g-3 mt-4 mb-3" >
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="cakes" src={cake} alt="" />
                        <div className="card-body">
                            <h6 className="cake-text p-2 rounded shadow text-light text-center">Party cakes</h6>



                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="cakes" src={wed} alt="" />
                        <div className="card-body">
                            <h6 className=" cake-text p-2 rounded shadow text-light text-center">Wedding cakes</h6>


                        </div>

                    </div>

                </div>
                <div className="col-12 col-lg-4">
                    <div className="card mx-auto">
                        <img className="cakes" src={birth} alt="" />
                        <div className="card-body">
                            <h6 className="cake-text shadow p-2 rounded text-light text-center">Birthday cakes</h6>


                        </div>

                    </div>

                </div>


                

            </div>

        </div>

    )
};
export default Cakes