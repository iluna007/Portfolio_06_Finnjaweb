import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  // Ensure the initial media is a valid link (either video or image)
  const [selectedMedia, setSelectedMedia] = useState(
    project && project.images.length > 0
      ? project.images[0]
      : project.videolink
      ? (Array.isArray(project.videolink) ? project.videolink[0] : project.videolink)
      : ""
  );

  const [videoThumbnails, setVideoThumbnails] = useState([]);

  useEffect(() => {
    const fetchVideoThumbnails = async () => {
      if (!project || !project.videolink) return;

      const videoLinks = Array.isArray(project.videolink) ? project.videolink : [project.videolink];
      try {
        const thumbnails = await Promise.all(
          videoLinks.map(async (videoUrl) => {
            try {
              const videoId = videoUrl.split('/').pop();
              const response = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`);
              const data = await response.json();
              return data.thumbnail_url;
            } catch (error) {
              console.error("Failed to fetch video thumbnail:", error);
              return "/path/to/default-thumbnail.jpg"; // Fallback thumbnail path
            }
          })
        );
        setVideoThumbnails(thumbnails);
      } catch (error) {
        console.error("Error fetching video thumbnails:", error);
      }
    };

    fetchVideoThumbnails();
  }, [project]);

  if (!project) {
    return <div>Project not found!</div>;
  }

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };

  const videoLinks = Array.isArray(project.videolink)
    ? project.videolink
    : project.videolink
    ? [project.videolink]
    : [];

  const galleryItems = videoLinks
    .map((video, index) => ({
      type: "video",
      src: video,
      thumbnail: videoThumbnails[index] || "/path/to/default-thumbnail.jpg",
    }))
    .concat(project.images.map((image) => ({ type: "image", src: image })));

  return (
    <div className="container example">
      <div className="row mt-4">
        <div className="col-12 mb-4">
          {selectedMedia.includes("vimeo.com") ? (
            <iframe
              src={selectedMedia}
              title="Project Video"
              style={{
                width: "100%",
                height: "500px",
                border: "none",
              }}
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={selectedMedia}
              alt="Selected"
              className="img-fluid rounded"
              style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = "/path/to/default-thumbnail.jpg"; // Fallback image path
              }}
            />
          )}
        </div>

        <div className="col-12">
          <div className="row">
            {galleryItems.map((item, index) => (
              <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
                {item.type === "video" ? (
                  <div
                    className="position-relative"
                    onClick={() => handleMediaClick(item.src)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.thumbnail}
                      alt="Video Thumbnail"
                      className="img-fluid rounded"
                      style={{
                        border: selectedMedia === item.src ? "2px solid #6c757d" : "none",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/path/to/default-thumbnail.jpg"; // Fallback for broken video thumbnail
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "2rem",
                        color: "white",
                        background: "rgba(0, 0, 0, 0.5)",
                        padding: "0.5rem",
                        borderRadius: "50%",
                      }}
                    >
                      ▶
                    </div>
                  </div>
                ) : (
                  <img
                    src={item.src}
                    alt={`Thumbnail ${index}`}
                    className="img-fluid rounded"
                    onClick={() => handleMediaClick(item.src)}
                    style={{
                      cursor: "pointer",
                      border: selectedMedia === item.src ? "2px solid #6c757d" : "none",
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/path/to/default-thumbnail.jpg"; // Fallback for broken image
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 border-top pt-4 example">
        <h1 className="mt-5 mb-5">{project.title}</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <p style={{ textAlign: "justify" }}>{project.description}</p>
          </div>
          <div className="col-12 col-md-6">
            <p>
              <strong>Category:</strong> {project.category}
            </p>
            <p>
              <strong>Place:</strong> {project.place}
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

      <div className="mt-4 border-top pt-4 example">
        <Link to="/projects" className="btn btn-outline-secondary mt-3">
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
