import React from 'react'
import { useFormik } from 'formik';
import './YoutubeForm.css';

function YoutubeForm() {

  const initialValues = {
    name: 'Hugo',
    email: '',
    channel: ''
  };

  const onSubmit = (values) => {
    console.log('Form data submitted:', values);
  }

  const validate = (values) => {
        // values.name, values.email, values.channel
        // errors.name, errors.email, errors.channel
        // errors.name = 'This field is required'
        let errors = {};
        if (!values.name) {
            errors.name = 'Required';    
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.channel) {
            errors.channel = 'Required';
        } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
            errors.email = 'Invalid email format';
        }
        return errors;
    }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  //  console.log('Form values', formik.values);
  //  console.log('Form errors', formik.errors);
  console.log('Visited fields', formik.touched);


  return (
    <div className='form-container'>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.name} />
                {formik.errors.name 
                ? <div style={{color: 'red'}}>{formik.errors.name}</div> 
                : null}
            </div>

            <div className='form-field'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
                {formik.errors.email 
                ? <div style={{color: 'red'}}>{formik.errors.email}</div> 
                : null}
            </div>

            <div className='form-field'>
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.channel}/>
                {formik.errors.channel 
                ? <div style={{color: 'red'}}>{formik.errors.channel}</div> 
                : null}
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
