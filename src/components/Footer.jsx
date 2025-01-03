import "bootstrap-icons/font/bootstrap-icons.css";
import "./custom-footer.css"; // Importa el archivo CSS personalizado


const Footer = () => {
	return (
		<footer className='custom-footer mt-auto py-3 text-center'>
			<div className='container'>
				<footer className='custom-footer-border'>
					<div className='social-icons'>
						<a
							href='https://www.instagram.com/finnjawillner/'
							target='_blank'
							rel='noopener noreferrer'
							className='me-3'
						>
							<i className='bi bi-instagram'></i>
						</a>
						<a
							href='https://vimeo.com/user18575069'
							target='_blank'
							rel='noopener noreferrer'
							className='me-3'
						>
							<i className='bi bi-vimeo'></i>
						</a>
						<a href='mailto:finnja.willner@web.de' className='me-3'>
							<i className='bi bi-envelope'></i>
						</a>
					</div>
					<p className='text-body-secondary'>
						© 2024 Finnja Willner. All rights reserved. Web design by:{" "}
						<a
							href='mailto:arquitectoikerluna@gmail.com'
							className='text-secondary'
							style={{ textDecoration: "none" }}
						>
							Iker Luna
						</a>
					</p>
				</footer>
			</div>
		</footer>
	);
};

export default Footer;
