import { Form, Formik, Field, ErrorMessage } from 'formik';
import './YoutubeForm.css';
import * as Yup from 'yup';

function YoutubeForm() {

  const initialValues = {
    name: 'Hugo',
    email: '',
    channel: '',
    comments: '',
    address: ''
  };

  const onSubmit = (values) => {
    console.log('Form data submitted:', values);
  }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        channel: Yup.string().required('Required')
    });


  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
            <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <Field type='text' id='name' name='name' />
                <ErrorMessage name='name'   />
            </div>

            <div className='form-field'>
                <label htmlFor='email'>E-mail</label>
                <Field type='email' id='email' name='email' />
                <ErrorMessage name='email'   />
            </div>

            <div className='form-field'>
                <label htmlFor='channel'>Channel</label>
                <Field type='text' id='channel' name='channel' placeholder='Youtube Channel Name' />
                <ErrorMessage name='channel'   />
            </div>

           <div className='form-field'>
                <label htmlFor='comments'>Comments</label>
                <Field component='textarea' type='text' id='comments' name='comments' placeholder='comments' />
            </div>

           <div className='form-field'>
                <label htmlFor='address'>Address</label>
                <Field id='address' name='address'>
                {
                    (props) => {
                        console.log('Field Render Props', props);
                        const { field, form, meta } = props;
                        return (
                            <div>
                                <input type='text' id='address' {...field} />
                                {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
                            </div>
                        );
                    }
                }
                </Field>
            </div>

            <button type='submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm
