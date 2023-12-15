import { useState, useRef, useContext } from 'react';

import './LoginForm.css';
import cartContext from '../../Store/cart-context';


const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ctx = useContext(cartContext)

  const emailRef = useRef('')
  const passRef = useRef('')

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value
    const enteredPass = passRef.current.value

    setIsLoading(true)
    
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBAX17nBJFg6o4XXPR5zeqGA_dM1JM5XrM' , 
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPass,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        setIsLoading(false)
        if(res.ok) {
          return res.json()
        } else {
          return res.json().then(data => {
            let errormsg = 'Athentication Failed!';
            if(data && data.error && data.error.message) {
              errormsg = data.error.message
            };
            throw new Error(errormsg)
          })
        }
      })
      .then((data) => { ctx.login(data.idToken) })
      .catch(err => {
        alert(err.message)
      })
    setIsLogin(true)
  }

  return (
    <section className='auth'>
      <h1>User Login</h1>
      <form >
        <div className='control'>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef}/>
        </div>
        <div className='control'>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passRef}
            required
          />
        </div>
        
        <div className='actions'>
          {!isLoading && <button onClick={submitHandler}>Login</button>}
          {isLoading && <p>Signing Up...</p>}
          
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
