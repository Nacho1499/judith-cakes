import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Event = () => {
    return(
        <>
        <Navbar/>
        <div className="event container-fluid">
            <div>
            <h3 className="text-light text-center">Up Comming Events</h3>
            </div>


        </div>
        <div className='container mt-5'>
            <h4>Events Posts</h4>
            <hr />
            <h3 className='text-center mt-4 mb-5'>No Current Events Available.</h3>

        </div>



        <Footer/>
            
        </>
    )
}
export default Event;