import './OurProjects.css';

import companies from '/images/companies.png';
import bedroom1 from '/images/Modern_bedroom_1.png';
import bedroom2 from '/images/Modern_bedroom_2.png';
import bedroom3 from '/images/Modern_bedroom_3.png';
import bedroom4 from '/images/Modern_bedroom_4.png';

const OurProject= () => {
    const ourProjectData = [
        {
            title: "Modern Bedroom",
            type: "Decor / Architecture",
            image: bedroom1,
        },
        {
            title: "Modern Bedroom",
            type: "Decor / Architecture",
            image: bedroom2,
        },
        {
            title: "Modern Bedroom",
            type: "Decor / Architecture",
            image: bedroom3,
        },
        {
            title: "Modern Bedroom",
            type: "Decor / Architecture",
            image: bedroom4,
        },
    ];
    return (
        <>
        <div className="container">
            <div className="companies">
                <img src={companies} alt="Companies that work with us." width="100%" height="100%" className='companies' />
            </div>
            <h1 className='projectsTitle text-center'>Follow Our Projects</h1>
            <p className='projectsDesc text-center'>Here you can see all our projects!</p>
            <div className="row">
                {ourProjectData.map((project, index) => (
                    <div className="col-lg-6 col-md-6" key={index}>
                        <div className="project-card">
                            <div className="project-card-body">
                                <img src={project.image} alt="Project image" width="100%" height="100%" className='project-image' />
                            </div>
                            <div className="project-card-header">
                                <h3 className="project-title text-left">{project.title}</h3>
                                <p className="project-type">{project.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        
        </>
    )
}

export default OurProject;