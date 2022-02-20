import logo from '../logo.svg';
import './Navigation.css';
import { AuthButton } from '../auth/AuthButton';

// routes
import { routes } from '../routes'

function Navigation({ isAuthenticated }) {
    return (
        <ul className="nav">
            <li className="nav-item">
                <img src={logo} className="Nav-logo" alt="logo" />
            </li>
            {
                routes.map((item, i) => {
                    return (
                        <li className="nav-item" key={i}>
                            <a className="nav-link" href={item.path}>{item.name}</a>
                        </li>
                    )
                })
            }
            <li className="d-flex">
                <AuthButton isAuthenticated={isAuthenticated} />
            </li>
        </ul>
    )
}

export default Navigation;