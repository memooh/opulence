import "./Reviews.css";
import placeholderUser from '/images/placeholder-user.jpg';

const Reviews = () => {
  const reviewsData = [
    {
      customerName: "John Doe",
      review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
      location: "UK, London",
    },
    {
        customerName: "Jane Smith",
        review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
        location: "Moscow, Russia",
    },
    {
        customerName: "Memo Ozzie",
        review: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
        location: "USA, New York",
    },
  ];

  return (
    <div className="container mb-5">
      <div className="reviews-container">
        <h1 className="reviewsTitle">
          What the People Thinks <br />
          About Us
        </h1>
        <div className="row">
          {reviewsData.map((review, index) => (
            <div className="col-12 col-sm-12 col-md-12 col-lg-4 " key={index}>
              <div className="review-card">
                <div className="review-card-header">
                    <div className="row">
                        <div className="col-auto">
                        <img src={placeholderUser} alt="Placeholder image for user profile icon." className="user-icon rounded-circle" width="75" height="75" />
                        </div>
                        <div className="col-auto nameLocation">
                        <h3 className="reviewName">{review.customerName}</h3>
                        <h4 className="reviewLocation">{review.location}</h4>

                        </div>

                    </div>
                  <p className="reviewText">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
