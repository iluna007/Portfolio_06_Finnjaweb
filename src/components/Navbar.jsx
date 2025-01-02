import PropTypes from "prop-types";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CustomNavbar.css"; // Asegúrate de crear e importar este archivo CSS

const CustomNavbar = ({ artist }) => {
	return (
		<BootstrapNavbar expand='lg' className='custom-navbar' collapseOnSelect>
			<Container>
				<BootstrapNavbar.Brand href='/'>
					<h2 className='mb-0 example'>Finnja Willner</h2>
					<p className='mb-0 example' style={{ color: "gray" }}>
						{artist}
					</p>
				</BootstrapNavbar.Brand>

				<BootstrapNavbar.Toggle aria-controls='navbarNavAltMarkup' />
				<BootstrapNavbar.Collapse id='navbarNavAltMarkup'>
					<Nav className='ms-auto example'>
						<Nav.Item>
							<Link className='nav-link' to='/'>
								Home
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link className='nav-link' to='/projects'>
								Projects
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</Nav.Item>
						<Nav.Item>
							<Link className='nav-link' to='/contact'>
								Contact
							</Link>
						</Nav.Item>
					</Nav>
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
};

CustomNavbar.propTypes = {
	artist: PropTypes.string.isRequired,
};

export default CustomNavbar;
