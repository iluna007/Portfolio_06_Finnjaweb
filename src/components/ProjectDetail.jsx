import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project id from the URL
  const project = projectData.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(
    project ? project.images[0] : ""
  );

  if (!project) {
    return <div>Project not found!</div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="container example">
      <div className="row mt-4">
        {/* Main Selected Image */}
        <div className="col-12 mb-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "cover" }} // Maintain a consistent height
          />
        </div>

        {/* Thumbnail Images */}
        <div className="col-12">
          <div className="row">
            {project.images.map((image, index) => (
              <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="img-fluid rounded"
                  onClick={() => handleImageClick(image)}
                  style={{
                    cursor: "pointer",
                    border:
                      selectedImage === image ? "2px solid #6c757d" : "none"
                  }} // Add a border to selected image
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Description and Details */}
      <div className="mt-4 border-top pt-4 example">
        <h1 className="mt-5">{project.title}</h1>
        <div className="row">
          {/* Project Description */}
          <div className="col-12 col-md-6">
            <p style={{ textAlign: "justify" }}>{project.description}</p>
          </div>
          {/* Project Details */}
          <div className="col-12 col-md-6">
            <p>
              <strong>Category:</strong> {project.category}
            </p>
            <p>
              <strong>Country:</strong> {project.country}
            </p>
            <p>
              <strong>Year:</strong> {project.year}
            </p>
            <p>
              <strong>Collaboration:</strong> {project.collaboration}
            </p>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-4 border-top pt-4 example">
        <Link to="/projects" className="btn btn-outline-secondary mt-3">
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
