import Navbar from "./Navbar";
import Footer from "./Footer";
function Order(){
    return(
        <>
        <Navbar/>
        <div className="order container-fluid">
            <h3 className="text-light">WE AWAIT YOUR ORDERS</h3>
        </div>

        <div className="message container-fluid mt-5 p-5">
            <fieldset className="rounded shadow">
                <form className="p-5" action="https://formspree.io/f/xgvwpwwa" method="POST">
                    <input className=" form-control mb-2" type="text" name="item" placeholder="item name"/>
                    <input className="form-control mb-2" type="email" name="quantity" placeholder="Quantity"/>
                    <input type="text" className="form-control mb-2" name="address" placeholder="address"/>
                    <input className="form-control mb-2" type="tel" name="phone Number" placeholder=" phone Number"/>
                    <textarea className="form-control mb-2" name="description" id="" placeholder="item description"></textarea>
                    <button className="btn btn-outline-light mt-3 shadow">Place order</button>
                </form>
            </fieldset>
            </div>
        
        <Footer/>
        </>

    )
};

export default Order
