import React from 'react'
import { useFormik } from 'formik';
import './YoutubeForm.css';

function YoutubeForm() {

  const formik = useFormik({
    initialValues: {
        name: 'Hugo',
        email: '',
        channel: ''
    },
    onSubmit: (values) => {
        console.log('Form data submitted:', values);
    }
  });

  //console.log('Form values', formik.values);

  return (
    <div className='form-container'>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
            </div>

            <div className='form-field'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
            </div>

            <div className='form-field'>
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default YoutubeForm
