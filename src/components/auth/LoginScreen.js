import React from 'react';
import { useDispatch }  from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
      email: '',
      password: ''
  });

  const {email, password} = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email,password));
  }

  return (
    <>
        <h3 className='auth__title'>Login</h3>

        <form onSubmit={ handleLogin } >
          <input className='auth__input' type='email' placeholder='email' name='email' autoComplete='off' value={email} onChange={handleInputChange} />
          <input className='auth__input' type='password' placeholder='Password' name='password' value={password} onChange={handleInputChange}/>

          <button type='submit' className='btn btn-primary btn-block' disabled={true}>
            Login
          </button>
          <hr />
          <div className='auth__social-network'>
            <p>Login with social network</p>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
            </div>
          </div>

          <Link to='/auth/register' className='link'>
            Create new account
          </Link>
        </form>
    </>
  )
}
