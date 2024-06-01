import { getYear } from '../utilities/getYear';
import { appAuthor } from '../globals/globalVariables';

const Footer = ({ copyright = getYear(), author = appAuthor }) => (
	<footer>
        <p>&copy; {copyright} {author}</p>
        <p>For educational purposes only</p>
    </footer>
);

export default Footer;