import { Link, NavLink } from 'react-router-dom';
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

import './Header.scss';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

function Header() {
     const { setShowLogin, setShowSignUp, showLogin, showSignUp } = useContext(AppContext);
     return (
          <>
               <header className='header'>
                    <div className='logo-block'>
                         <h1 className='tool'>tool<span className='fc'>FC <Icon icon="ph:gear" className='gear' style={{ color: '#07f468' }} /> </span></h1>
                    </div>
     
                    <div className='navbar-block'>
                         <ul className='navbar-list'>
                              <li className='navbar-item'>
                                   <NavLink className='navbar-link' to='/'>Trang chủ</NavLink>
                              </li>
                              <li className='navbar-item'>
                                   <NavLink className='navbar-link' to='/service'>Dịch vụ</NavLink>
                              </li>
                              <li className='navbar-item'>
                                   <NavLink className='navbar-link' to='/support'>Hỗ trợ</NavLink>
                              </li>
                         </ul>
                    </div>
     
                    <ul className='button-block'>
                         <li className='login-item'>
                              <Link
                                   className='login-link login'
                                   onClick={() => { setShowLogin(true) }}
                              >
                                   Đăng nhập
                              </Link>
                         </li>
     
                         <li className='login-item'>
                              <Link
                                   className='login-link signup'
                                   onClick={() => {setShowSignUp(true)}}
                              >
                                   Đăng ký
                              </Link>
                         </li>
                    </ul>
               </header>

               {showLogin && <Login />}
               {showSignUp && <SignUp />}
          </>
     );
}

export default Header;