import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import "./Projects.css";
import Card from "../components/Card";
import projectData from "../data/projectData";

const Projects = ({ setArtist }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((project) =>
          project.category.includes(filter) // Verifica si el proyecto tiene la categoría seleccionada
        );

  // Define the breakpoint columns for the Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  const handleFilter = (category, artistName) => {
    setFilter(category);
    setArtist(artistName); // Set artist name based on the category
  };

  return (
		<div className='container example'>
			<div className='filter-buttons mt-5 mb-4 d-flex flex-wrap justify-content-center justify-content-md-between'>
				<button className='btn btn-outline-secondary m-2' onClick={() => handleFilter('All', 'Visual Artist')}>
					All
				</button>
				<button className='btn btn-outline-secondary m-2' onClick={() => handleFilter('Film', 'Filmaker')}>
					Film
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Photography', 'Photographer')}
				>
					Photography
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Workshop', 'Facilitator')}
				>
					Workshop
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Performance', 'Performer')}
				>
					Performance
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Research', 'Researcher')}
				>
					Research
				</button>
				<button
					className='btn btn-outline-secondary m-2'
					onClick={() => handleFilter('Artist Residency', 'Artist')}
				>
					Artist Residency
				</button>
			</div>

			<Masonry
				breakpointCols={breakpointColumnsObj}
				className='masonry-grid'
				columnClassName='masonry-grid-column'
			>
				{filteredProjects.map((project, index) => (
					<div className='masonry-grid-item' key={index}>
						<Link to={`/projects/${project.id}`}>
							<Card image={project.images[0]} title={project.title} category={project.category} />
						</Link>
					</div>
				))}
			</Masonry>
		</div>
  );
};
Projects.propTypes = {
  setArtist: PropTypes.func.isRequired,
};

export default Projects;
