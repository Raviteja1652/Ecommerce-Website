import React, { useRef } from 'react';
import './ContactUs.css'

function ContactUs(props) {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phnNoRef = useRef('');

    const submitHandler = (e) => {
        e.preventDefault();
        const detail = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phnNo: phnNoRef.current.value,
        };
        props.onAddDetail(detail);
    };

  return (
    <section className='section'>
        <form onSubmit={submitHandler}>
            <div className='styleClass'>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className='styleClass'>
                <label htmlFor='email'>Email ID: </label>
                <input type='email' id='email' ref={emailRef} />
            </div>
            <div className='styleClass'>
                <label htmlFor='phnNo'>Phone Number: </label>
                <input type='number' id='phnNo' ref={phnNoRef} />
            </div>
            <button>Submit</button>
        </form>
    </section>
  )
};

export default ContactUs; 