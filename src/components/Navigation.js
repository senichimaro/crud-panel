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
                    if ( !(item.private) || (item.private && isAuthenticated) ){
                        return (
                            <li className="nav-item" key={i}>
                                <a className="nav-link" href={item.path}>{item.name}</a>
                            </li>
                        )
                    }
                    else return null
                })
            }
            <li className="d-flex">
                <AuthButton isAuthenticated={isAuthenticated} />
            </li>
        </ul>
    )
}

export default Navigation;