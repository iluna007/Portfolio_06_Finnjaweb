import { useEffect, useRef } from "react";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleCanPlay = () => {
      console.log("Video can play");
      video.play();
    };

    const handleError = (e) => {
      console.error("Error loading video", e);
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "80vh",
				overflow: "hidden",
				position: "relative",
				width: "90%", // Width of the video container
				margin: "0 auto", // Center the container horizontally
				padding: 10,
			}}
		>
			<video
				ref={videoRef}
				src='https://res.cloudinary.com/dw1ht0zfd/video/upload/v1735817364/Reel_provisorio_mfezmn.mov'
				autoPlay
				loop
				muted
				playsInline
				type='video/quicktime'
				style={{
					width: "100%",
					height: "auto",
					borderRadius: "12px", // Reintroduce rounded corners
				}}
			></video>

			{/* Media Queries to handle different screen sizes */}
			<style>
				{`
          @media (max-width: 768px) {
            video {
              width: 100vw;   /* Full width for smaller devices */
              height: auto;    /* Keep the aspect ratio intact */
              max-height: 80vh; /* Leave room for other elements (like navbar and footer) */
              object-fit: contain; /* Keep the video visible without cropping */
              border-radius: 12px; /* Keep rounded corners on mobile */
            }
          }

          @media (min-width: 769px) {
            video {
              max-width: 85%; /* Maintain previous proportions on larger screens */
              height: auto;   /* Keep aspect ratio */
              border-radius: 12px; /* Keep rounded corners on desktop */
            }
          }
        `}
			</style>
		</div>
	);
};

export default Home;
