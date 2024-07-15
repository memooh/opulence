import "./OurWorkStyle.css";

const OurWorkStyle = () => {
  const ourWorkData = [
    {
      name: "Project Plan",
      desription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Interior Work",
      desription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Retail Design",
      desription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "2d/3d Art Work",
      desription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Interior Work",
      desription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
    {
      name: "Decoration Work",
      desription:
        "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
  ];

  return (
    <>
      <div className="ourWorkStyle vh-100">
        <div className="container">
          <div className="row">
            {ourWorkData.map((ourWork, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <h1 className="text-center wwoTitle">{ourWork.name}</h1>
                <p className="text-center wwoText">{ourWork.desription}</p>
                <a href="/example_services" className="text-center wwoLink">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorkStyle;
