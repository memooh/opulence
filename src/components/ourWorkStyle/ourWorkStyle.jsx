import "./OurWorkStyle.css";

const OurWorkStyle = () => {
  const ourWorkData = [
    {
      name: "Project Plan",
      description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Interior Work",
      description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Retail Design",
      description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "2d/3d Art Work",
      description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Interior Work",
      description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Decoration Work",
      description: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
  ];

  return (
    <div className="ourWorkStyle py-5">
      <div className="container">
        <div className="row g-4">
          {ourWorkData.map((ourWork, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="work-item p-3">
                <h2 className="wwoTitle mb-3">{ourWork.name}</h2>
                <p className="wwoText mb-3">{ourWork.description}</p>
                <a href="/example_services" className="wwoLink">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorkStyle;
