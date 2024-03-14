import { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Accueil from '../../VersionBootstrap/components/accueil';
import Apropos from '../../VersionBootstrap/components/apropos';
import ListDeparts from '../../VersionBootstrap/components/listDeparts';
import Photos from '../../VersionBootstrap/components/photos';
import HitDetails from '../../VersionBootstrap/components/hitDetails';
import Logout from '../../VersionBootstrap/components/logout';
import UserSign from '../../VersionBootstrap/components/userSign';
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand navbar-brand m-2 navbar-dark bg-primary">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/apropos">A propos</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/listDeparts">Départements</Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/photos">Photos</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {(localStorage.getItem("token")) ?
                            <li><Link className="nav-link" to="/logout">Se déconnecter</Link></li>
                            :
                            <li><Link className="nav-link" to="/login">Se connecter</Link></li>
                        }
                        <li><Link className="nav-link" to="/signup">S'inscrire</Link></li>
                    </ul>
                </nav>

                <div className="m-4">
                    <Routes>
                        <Route path="/" element={<Accueil />}></Route>
                        <Route path="/apropos" element={<Apropos />}></Route>
                        <Route path="/listDeparts" element={<ListDeparts />}></Route>
                        <Route path="/photos" element={<Photos />}></Route>
                        <Route path="/hitDetails/:id" element={<HitDetails />}></Route>
                        <Route path="/logout" element={<Logout />}></Route>
                        <Route path="/login" element={<UserSign option='login' />}></Route>
                        <Route path="/signup" element={<UserSign option='signUp' />}></Route>
                    </Routes>
                </div>
            </Router>);
    }
}
export default Menu;