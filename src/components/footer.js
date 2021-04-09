/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { RiHeart2Line } from 'react-icons/ri';

const Footer = () => (
	<footer
		className="site-footer"
		sx={{
			bg: 'primary'
		}}
	>
		<div className="container">
			<p>
				A personal website of <Link to="https://www.linkedin.com/in/tonyservs/">Mark Anthony Servanda</Link>
			</p>
		</div>
	</footer>
);

export default Footer;
