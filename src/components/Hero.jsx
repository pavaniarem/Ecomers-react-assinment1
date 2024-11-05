const Herosection = () => {
    return (
      <main className="hero conteiner">
        <div className="hero-content">
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>YOYR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
                SHOES.
            </p>
           <div className="Hero-btn"> 
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
           </div>

           <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src="/images/amazon.jpeg" alt="amazon-logo" />
                <img src="/images/flipcort.jpeg" alt="flipcort-logo" />

            </div>
           </div>
        </div>
        <div className="hero-image">
        <img src="/images/hero-image.jpeg" alt="hero-image-logo" />
        </div>
      </main>
    );
};

export default Herosection;
