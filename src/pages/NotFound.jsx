import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';
import { Link } from 'react-router-dom';

const NotFound = () => {

    useEffect(() => {
		document.title = `${appTitle} - Page Not Found`;
	}, []);

    return (
        <main>
            <section className="section-not-found" >
                <h2>404...</h2>
                <p>Page not found.</p>
                <p>Go to <Link to="/">Home</Link>.</p>
            </section>
        </main>
    );
}

export default NotFound;