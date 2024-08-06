import { Link } from 'react-router-dom';
import './Login.scss';
import { useContext, useState } from 'react';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { AppContext } from '../../Context/AppContext';
import classNames from 'classnames';
import axios from 'axios';

function Login() {

     const [username, setUsername] = useState();
     const [password, setPassword] = useState();
     const [showPassword, setShowPassword] = useState(false);
     const { setShowLogin, setShowSignUp, userLogin, setUserLogin } = useContext(AppContext);

     const [loading, setLoading] = useState(false);

     const handleSignUpButton = () => {
          setShowLogin(false);
          setShowSignUp(true);
     }

     const handleLogin = async (e) => {
          e.preventDefault();

          await axios.post('http://localhost:3000/login/validate', {
               username: username,
               password: password
          })
               .then((res) => {
                    
               })
               .catch(() => {

               })
     }

     console.log(userLogin);

     return (
          <div className="login-block" onSubmit={handleLogin}>
               <div
                    className="overlay"
                    onClick={() => { setShowLogin(false) }}
               ></div >
               <form className="sign-up-form" >
                    <h1 className='title'>Đăng nhập</h1>
                    <Icon
                         icon="zondicons:close-outline"
                         className='icon-close'
                         onClick={() => { setShowLogin(false) }}
                    />
                    <hr className='line-top' />
                    <div className='input-block'>
                         <input
                              type="text"
                              className="input"
                              id='username'
                              placeholder=''
                              required
                              value={username}
                              onChange={(e) => { setUsername(e.target.value) }}
                         />
                         <label htmlFor="username" className='label'>Tên đăng nhập</label>
                    </div>
                    <br />
                    <div className='input-block'>
                         <input
                              type={showPassword ? "text" : "password"}
                              className="input"
                              id='password-input'
                              placeholder=''
                              required
                              value={password}
                              onChange={(e) => { setPassword(e.target.value) }}
                         />
                         <label htmlFor="password-input" className='label'>Mật khẩu</label>
                         <Icon icon="clarity:eye-show-line"
                              className={classNames('icon-show', { 'hide': showPassword })}
                              onClick={() => { setShowPassword(true) }}
                         />
                         <Icon icon="clarity:eye-hide-line"
                              className={classNames('icon-hide', { 'hide': !showPassword })}
                              onClick={() => { setShowPassword(false) }}
                         />
                    </div>

                    <div className="button-block">
                         <Link className='forget-password'>Quên mật khẩu?</Link>

                         <button className='button-login'>Đăng nhập</button>
                         <Link
                              className='button-sign-up'
                              onClick={handleSignUpButton}
                         >
                              Chưa có tài khoản? Đăng ký
                         </Link>
                    </div>
               </form>
          </div >


     );
}

export default Login;