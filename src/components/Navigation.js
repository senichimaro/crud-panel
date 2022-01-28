import logo from '../logo.svg';
import './Navigation.css';


function Navigation() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <img src={logo} className="App-logo" alt="logo" />
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
            </li>
        </ul>
    )
}

export default Navigation;