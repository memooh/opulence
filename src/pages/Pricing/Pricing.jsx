import "./Pricing.css";

const Pricing = () => {
    const prices = [
        {
            title: "Design Advices",
            price: "29",
            description: "General living space advices,Rennovation advices,Interior design advices,Furniture reorganization,Up to 5 hours meetings",
            button: "Select",
        },
        {
            title: "Standard",
            price: "200",
            description: "Standard",
            button: "Select",
        },
        {
            title: "Premium",
            price: "300",
            description: "Premium",
            button: "Select",
        },
    ];

    return (
        <div className="container">
            <div className="row">
                {prices.map((price, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                        <h4 className="pricingTitle">{price.title}</h4>
                        <p className="pricingPrice">${price.price}</p>
                        <ul className="pricingDescription">
                            {price.description.split(',').map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                        <button className="pricingButton">{price.button}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
