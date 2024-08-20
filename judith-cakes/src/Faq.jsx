function Faq(){


    return(
        <div className="faq container mt-5 mb-5 p-4 rounded-2">
            <h4 className="text-light mb-4 mt-2">Frequently asked questions:</h4>
        <div className="accordion accordion-flush " id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Can I customize my cake?

      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Yes, we specialize in custom cakes! You can choose your preferred flavors, fillings, and designs. Whether you have a specific theme or need a custom message, our team
         is here to bring your vision to life. Contact us to discuss your customization options.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How do I place an order for a cake or pastry?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">You can place an order by visiting our website, calling us directly, or visiting our store in person. For custom orders or special 
        requests, we recommend contacting us ahead of time to discuss details and availability.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What should I do if I have a problem with my order?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> If you encounter any issues with your order, please contact us as soon
         as possible. We are committed to resolving any concerns and ensuring your satisfaction.
          Your feedback helps us improve, and we are always here to address any problems promptly.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What is your delivery policy?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">We offer delivery services for cakes, pastries, and catering orders. Delivery times and fees vary depending on location and order size. Please provide us with your delivery address and preferred
         time when placing your order, and we’ll arrange the details accordingly.</div>
    </div>
  </div>
</div>
</div>

    )
};
export default Faq