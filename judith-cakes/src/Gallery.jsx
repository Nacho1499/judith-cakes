import Navbar from "./Navbar";
import Footer from "./Footer";
import puff from "./assets/puff.jpg"
import gallery2 from "./assets/2.jpg";
import gallery3 from "./assets/3.jpg";
import gallery4 from "./assets/4.jpg";
import gallery1 from "./assets/1.jpg";
import gallery6 from "./assets/6.jpg";
import gallery7 from "./assets/7.jpg";
import gallery8 from "./assets/8.jpg";
import gallery9 from "./assets/9.jpg";
import gallery10 from "./assets/10.jpg";
import samusa2 from "./assets/samusa2.jpg";
import pancake from "./assets/pancake.jpg";
import choco from "./assets/choco.jpg";
import roll from "./assets/roll.jpg";
import chiken from "./assets/chiken.jpg";
import piemeat from "./assets/piemeat.jpg";
import chinchin from "./assets/chinchin.jpg";
import last from "./assets/last.jpg";


function Gallery(){
    return(
        <>
        <Navbar/>
        <div className="Gallery container-fluid">
            <h3 className="text-light">Welcome to Our Gallery</h3>
        </div>

        <div className="container mt-5  mb-5 text-center">
            <div className="row g-3">
                <div className="col-12 col-lg-4   ">
                    <img className="gallery-image" src={chinchin} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery2} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery3} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery4} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery1} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery6} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery7} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery8} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img className="gallery-image" src={gallery9} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={gallery10} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={puff} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={samusa2} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={pancake} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={roll} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={chiken} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={piemeat} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={choco} alt="" />

                </div>
                <div className="col-12 col-lg-4   ">
                    <img  className="gallery-image" src={last} alt="" />

                </div>
                

            </div>

           

        </div>

        <Footer/>
        </>

    )
};
export default Gallery