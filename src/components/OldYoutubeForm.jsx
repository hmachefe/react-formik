import React from 'react'
import { useFormik } from 'formik';
import './YoutubeForm.css';
import * as Yup from 'yup';

function OldYoutubeForm() {

  const initialValues = {
    name: 'Hugo',
    email: '',
    channel: ''
  };

  const onSubmit = (values) => {
    console.log('Form data submitted:', values);
  }

//   const validate = (values) => {
//         let errors = {};
//         if (!values.name) {
//             errors.name = 'Required';    
//         }
//         if (!values.email) {
//             errors.email = 'Required';
//         }
//         if (!values.channel) {
//             errors.channel = 'Required';
//         } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
//             errors.email = 'Invalid email format';
//         }
//         return errors;
//     }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        channel: Yup.string().required('Required')
    });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
    <div className='form-container'>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.name} />
                {formik.touched.name && formik.errors.name 
                ? <div style={{color: 'red'}}>{formik.errors.name}</div> 
                : null}
            </div>

            <div className='form-field'>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
                {formik.touched.email && formik.errors.email 
                ? <div style={{color: 'red'}}>{formik.errors.email}</div> 
                : null}
            </div>

            <div className='form-field'>
                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.channel}/>
                {formik.touched.channel && formik.errors.channel 
                ? <div style={{color: 'red'}}>{formik.errors.channel}</div> 
                : null}
            </div>

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default OldYoutubeForm
