import React, { useEffect, useRef } from "react";

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
        position: "relative"
      }}
    >
      <video
        ref={videoRef}
        src="/Reel_provisorio.MOV"
        className="object-fit-none rounded"
        autoPlay
        loop
        muted
        playsInline
        type="video/quicktime"
        style={{
          width: "100%", // Default for all screens
          height: "auto" // Default for all screens
        }}
      ></video>

      {/* Inline styles using media queries for different screen sizes */}
      <style>
        {`
          @media (max-width: 768px) {
            video {
              width: 100vw;  /* Full viewport width */
              height: 100vh; /* Full viewport height */
              object-fit: cover; /* Cover the entire screen */
              position: absolute; /* To cover the entire viewport */
              top: 0;
              left: 0;
            }
          }

          @media (min-width: 769px) {
            video {
              max-width: 85%; /* Maintain previous proportions on larger screens */
              height: auto; /* Keep aspect ratio */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
