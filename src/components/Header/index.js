import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/netflix_logo.png';
import './style.css';

export default function Header(){
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorChange(true);
        }
        else{
            setColorChange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        <nav className={colorChange ? 'navbarSolidColor' : ''}>
            <ul>
                <li>
                    <Link className='logo' to="/"> 
                        <img src={logo} alt="" />
                    </Link>
                </li>
                <li className="desktop-element"><Link to="/">Inicio</Link></li>
                <li className="desktop-element"><Link to="/">Séries</Link></li>
                <li className="desktop-element"><Link to="/">Filmes</Link></li>
                <li className="desktop-element"><Link to="/">Bombando</Link></li>
            </ul>
            <ul>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa-solid fa-bell"></i>
                    </a>
                </li>
                <li className='profile-icon-group'>
                    <div className='profile-icon'>JS</div>
                    <i className="fa-solid fa-caret-down arrow-icon"></i>
                    <div className='profile-popup'>
                        <div><i className="fa-solid fa-pencil"></i> Gerenciar perfis</div>
                        <div><i className="fa-solid fa-user"></i> Conta</div>
                        <div><i className="fa-solid fa-circle-info"></i> Central de ajuda</div>
                        <div><i className="fa-solid fa-video"></i> Meus filmes</div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}