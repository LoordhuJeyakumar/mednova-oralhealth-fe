import React from "react";
import johndeo from "../assets/images/doctors/Dr._John_Doe.jpg";
import jane from "../assets/images/doctors/Dr._Jane_Smith.jpg";
import michael from "../assets/images/doctors/Dr._Michael_Johnson.jpg";
import emily from "../assets/images/doctors/Dr._Emily_Davis.jpg";
import david from "../assets/images/doctors/Dr._David_Wilson.jpg";
import sarah from "../assets/images/doctors/Dr._Sarah_Thompson.jpg";
import user from "../assets/images/user.jpeg";
import BreadcrumbNav from "./BreadcrumbNav";

function Experts() {
  const expertsObj = [
    {
      id: 1,
      name: "Dr. John Doe",
      specialization: "Orthodontist",
      experience: "10 years",
      image: johndeo,
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialization: "Periodontist",
      experience: "8 years",
      image: jane,
    },
    {
      id: 3,
      name: "Dr. Michael Johnson",
      specialization: "Endodontist",
      experience: "12 years",
      image: michael,
    },
    {
      id: 4,
      name: "Dr. Emily Davis",
      specialization: "Prosthodontist",
      experience: "15 years",
      image: emily,
    },
    {
      id: 5,
      name: "Dr. David Wilson",
      specialization: "Oral Surgeon",
      experience: "20 years",
      image: david,
    },
    {
      id: 6,
      name: "Dr. Sarah Thompson",
      specialization: "Pediatric Dentist",
      experience: "5 years",
      image: sarah,
    },
    // Add more experts as needed
  ];

  return (
    <div>
      <div>
        <BreadcrumbNav />
      </div>
      <div className="row border-bottom border-2 pb-3 mb-4">
        <div className="col-md-2 col d-flex m-auto ">
          <img src={user} alt="" className="user-profile-picture" />
        </div>
        <div className="col-10 ">
          <div className="w-75">
            <h5>Ashish Raj</h5>
            <small>
              Lorem ipsum dolor sit amet consectetur. Suspendisse velit sit
              convallis venenatis aliquam cras id fermentum. Aliquam faucibus
              dignissim nibh scelerisque dignissim interdum vestibulum neque
              suscipit. In sapien eget aenean lobortis. Neque bibendum aliquet
              montes turpis egestas nunc.
            </small>
          </div>
        </div>
      </div>
      <h5 className="experts heading">Talk to our Experts</h5>
      {/* Experts Card */}

      <div className="row gap-5">
        {expertsObj.map((expert) => (
          <div className="col-md-4 col-sm-6 col-xl-3" key={expert.id}>
            <div className="card dr-card">
              <div className="d-flex">
                <img
                  src={expert.image}
                  className="card-img-top profile-picture-dr "
                  alt={expert.name}
                />
              </div>
              <div className="card-body p-1 m-0">
                <h6 className="card-title dr-name">{expert.name}</h6>
                <p className="card-text dr-specialization ">
                  @{expert.specialization}
                </p>
                <p className="card-text dr-experience">{expert.experience}</p>
              </div>

              <div className="d-flex justify-content-evenly pb-2 mb-2">
                <button className="btn dr-btn-primary-outline">
                  Appointment
                </button>
                <button className="btn dr-btn-primary-outline">Message</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experts;
