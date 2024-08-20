import tips from "./assets/tips.webp";
import event from "./assets/event3.jpg";
import blogcake from "./assets/blogacake.webp";
function Blog(){
    return(
        <div className="container mt-5 mb-5">
            <h4>Our blog post</h4>
            <hr />
            <div className="row g-3">
                <div className="col-12 col-md-4">
                    <div className="card mx-auto shadow">
                        <img className="blogs" src={tips} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">10 Tips and Tricks to Improve Your Baking Skills</h5>
                            <hr />
                            <p className="card-text">Have you gotten to the point in your baking where you're ready to take it to the next level?
                                 (Or any level at all?)...</p>
                                 <a href="https://www.thespruceeats.com/baking-tips-and-tricks-4165823">Read more</a>


                        </div>

                    </div>

                </div>
                <div className="col-12 col-md-4">
                    <div className="card mx-auto shadow">
                        <img className="blogs" src={event} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">16 Event Planning Tips From Professional Event Creators</h5>
                            <hr />
                            <p className="card-text">For most creators, getting to a point where event planning is easy is the dream. But the 
                                planning process can...</p>
                                 <a href="https://www.eventbrite.com/blog/event-planning-tips-ds00/">Read more</a>


                        </div>

                    </div>

                </div>
                <div className="col-12 col-md-4">
                    <div className="card mx-auto shadow">
                        <img className="blogs" src={blogcake} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">20 Easy Cake Recipes for Beginners</h5>
                            <hr />
                            <p className="card-text">Describing something as a "piece of cake," means that it's really easy. 
                                Well, making a cake might be easy for an...</p>
                                 <a href="https://www.allrecipes.com/gallery/best-easy-cake-recipes-for-beginners/">Read more</a>


                        </div>

                    </div>

                </div>

            </div>

        </div>


    )
};
export default Blog