import Accordion from "react-bootstrap/Accordion";
import PrivacyPolicy from "../components/PrivacyPolicy";

const Contact = () => {
  return (
		<div className='container-fluid'>
			<div
				className='mt-6'
				style={{
					textAlign: "justify",
					paddingTop: "48px",
					paddingBottom: "24px",
					paddingLeft: "32px",
					paddingRight: "32px",
				}}
			>
				<div className='row'>
					<div className='col-2'></div>
					<div className='col mt-5 border-bottom'>
						<p>If you want to collaborate with me, please reach out.</p>
						<div className='container'>
							<div className='row'>
								<div className='col-2'>
									<p>
										<strong>Finnja Willner</strong>
										<br />
										Berlin, Germany.
										<br />
										Email: finnja.willner@web.de
									</p>
								</div>
								<div className='col-10'>
									<img
										src='https://res.cloudinary.com/dw1ht0zfd/image/upload/v1735848821/planta1_qxh4xw.png'
										alt='Signature'
										style={{ width: "50px", height: "auto", rotate: "-45deg"}}
									/>
								</div>
							</div>
						</div>

						<div></div>
						<Accordion defaultActiveKey={null} flush>
							<Accordion.Item eventKey='0'>
								<Accordion.Header>Privacy Policy</Accordion.Header>
								<Accordion.Body>
									<PrivacyPolicy />
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='col-2'></div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
