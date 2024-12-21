import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";
import "../pages/Projectdetail.css";



const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Ensure the initial media is a valid link (either video or image)
  const [selectedMedia, setSelectedMedia] = useState(
    project && project.images.length > 0
      ? project.images[0]
      : project.videolink
      ? (Array.isArray(project.videolink) ? project.videolink[0] : project.videolink)
      : ""
  );

  const [videoThumbnails, setVideoThumbnails] = useState([]);

  // Scroll to the top of the page when the component mounts
  

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
		<div className='container example'>
			<div className='row mt-4'>
				<div className='col-12 mb-4'>
					{selectedMedia.includes("vimeo.com") ? (
						<iframe
							src={selectedMedia}
							title='Project Video'
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
							alt='Selected'
							className='img-fluid rounded'
							style={{
								width: "100%",
								maxHeight: "500px",
								objectFit: "contain",
							}}
							onError={(e) => {
								e.target.onerror = null; // Prevent infinite loop
								e.target.src = "/path/to/default-thumbnail.jpg"; // Fallback image path
							}}
						/>
					)}
				</div>

				<div className='col-12 position-relative'>
					{/* Botón para desplazarse a la izquierda */}
					<button
						className='carousel-control-left'
						onClick={() => {
							const scrollContainer =
								document.querySelector(".horizontal-scroll");
							scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
						}}
						style={{
							position: "absolute",
							left: "-50px", // Ajusta la posición al lado del carrusel
							top: "50%",
							transform: "translateY(-50%)",
							background: "none",
							border: "none",
							cursor: "pointer",
							zIndex: 10,
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='grey'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5'
							></path>
						</svg>
					</button>

					{/* Contenedor de miniaturas */}
					<div
						className='horizontal-scroll'
						style={{ display: "flex", overflowX: "auto", gap: "1rem" }}
					>
						{galleryItems.map((item, index) => (
							<div
								className='thumbnail-container'
								key={index}
								onClick={() => handleMediaClick(item.src)}
								style={{
									width: "150px",
									height: "150px",
									flexShrink: 0,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									cursor: "pointer",
									borderRadius: "5px",
									background: "#f8f9fa", // Fondo para que resalte la miniatura
								}}
							>
								{item.type === "video" ? (
									<div className='position-relative'>
										<img
											src={item.thumbnail}
											alt='Video Thumbnail'
											style={{
												width: "100%",
												height: "100%",
												objectFit: "cover",
											}}
											onError={(e) => {
												e.target.onerror = null;
												e.target.src = "/path/to/default-thumbnail.jpg"; // Fallback para miniaturas rotas
											}}
										/>
									</div>
								) : (
									<img
										src={item.src}
										alt={`Thumbnail ${index}`}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										onError={(e) => {
											e.target.onerror = null;
											e.target.src = "/path/to/default-thumbnail.jpg"; // Fallback para imágenes rotas
										}}
									/>
								)}
							</div>
						))}
					</div>

					{/* Botón para desplazarse a la derecha */}
					<button
						className='carousel-control-right'
						onClick={() => {
							const scrollContainer =
								document.querySelector(".horizontal-scroll");
							scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
						}}
						style={{
							position: "absolute",
							right: "-50px", // Ajusta la posición al lado del carrusel
							top: "50%",
							transform: "translateY(-50%)",
							background: "none",
							border: "none",
							cursor: "pointer",
							zIndex: 10,
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							fill='grey'
							viewBox='0 0 16 16'
						>
							<path
								fillRule='evenodd'
								d='M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8m-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5'
							/>
						</svg>
					</button>
				</div>
			</div>

			<div className='mt-4 border-top pt-4 example'>
				<h1 className='mt-5 mb-5'>{project.title}</h1>
				<div className='row'>
					<div className='col-12 col-md-6'>
						{project.description.map((paragraph, index) => (
							<p
								key={index}
								style={{ textAlign: "left", marginBottom: "1rem" }}
							>
								{paragraph.text}
								{paragraph.link && (
									<a
										href={paragraph.link.url}
										target='_blank'
										rel='noopener noreferrer'
										style={{ color: "blue", textDecoration: "underline" }}
									>
										{paragraph.link.text}
									</a>
								)}
								{paragraph.afterText && paragraph.afterText}
							</p>
						))}
					</div>
					<div className='col-12 col-md-6'>
						<p>
							<strong>Category:</strong>{" "}
							{Array.isArray(project.category)
								? project.category.join(", ")
								: project.category}
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

			<div className='mt-4 border-top pt-4 example'>
				<Link to='/projects' className='btn btn-outline-secondary mt-3'>
					Back to Projects
				</Link>
			</div>
		</div>
	);
};

export default ProjectDetail;
