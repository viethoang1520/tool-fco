import { Link, useNavigate } from 'react-router-dom';
import './SignUp.scss';
import { useContext, useState } from 'react';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { AppContext } from '../../Context/AppContext';
import classNames from 'classnames';
import axios from 'axios';

function SignUp() {
     //FORM SIGN-UP STATE:
     const [username, setUsername] = useState();
     const [password, setPassword] = useState();
     const [email, setEmail] = useState();
     const [passwordConfirm, setPasswordConfirm] = useState();
     // 
     const [showPassword, setShowPassword] = useState(false);
     const [loading, setLoading] = useState(false);
     // CONTEXT API:
     const { setShowSignUp, setShowLogin } = useContext(AppContext);

     const handleGoToLogin = () => {
          setShowSignUp(false);
          setShowLogin(true);
     }

     //Call API:
     const handleSignup = async (e) => {
          setLoading(true);
          e.preventDefault();

          await axios.post("http://localhost:3000/register/validate", {
               username: username,
               password: password,
               email: email,
               name: username
          })
               .then((res) => {
                    setLoading(false);
               })
               .catch(() => {
                    // setLoading(false);
               })
     }

     return (
          <div className="sign-up-block">
               <div className="overlay" onClick={() => { setShowSignUp(false) }}></div>
               <form className="sign-up-form" onSubmit={handleSignup}>
                    <h1 className='title'>Đăng ký</h1>
                    <Icon
                         icon="zondicons:close-outline"
                         className='icon-close'
                         onClick={() => { setShowSignUp(false) }}
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
                              type="text"
                              className="input"
                              id='email'
                              placeholder=''
                              required
                              value={email}
                              onChange={(e) => { setEmail(e.target.value) }}
                         />
                         <label htmlFor="email" className='label'>Email</label>
                    </div>
                    <br />
                    <div className='input-block'>
                         <input
                              type={showPassword ? "text" : "password"}
                              className="input"
                              id='password'
                              placeholder=''
                              required
                              value={password}
                              onChange={(e) => { setPassword(e.target.value) }}
                         />
                         <label htmlFor="password" className='label'>Mật khẩu</label>

                         <Icon icon="clarity:eye-show-line"
                              className={classNames('icon-show', { 'hide': showPassword })}
                              onClick={() => { setShowPassword(true) }}
                         />
                         <Icon icon="clarity:eye-hide-line"
                              className={classNames('icon-hide', { 'hide': !showPassword })}
                              onClick={() => { setShowPassword(false) }}
                         />
                    </div>
                    <br />
                    <div className='input-block'>
                         <input
                              type={showPassword ? "text" : "password"}
                              className="input"
                              id='passwordConfirm'
                              placeholder=''
                              required
                              value={passwordConfirm}
                              onChange={(e) => { setPasswordConfirm(e.target.value) }}
                         />
                         <label htmlFor="passwordConfirm" className='label'>Nhập lại mật khẩu</label>
                    </div>
                    <div className="button-block">
                         <Link className='forget-password'>Quên mật khẩu?</Link>
                         <button className='button-login'>Đăng nhập</button>
                         <Link className='button-sign-up' onClick={handleGoToLogin}>Đã có tài khoản? Đăng nhập</Link>
                    </div>
               </form>
          </div>
     );
}

export default SignUp;