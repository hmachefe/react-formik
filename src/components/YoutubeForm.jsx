import { Form, Formik, Field, ErrorMessage, FieldArray } from 'formik';
import './YoutubeForm.css';
import * as Yup from 'yup';
import TextError from './TextError';

function YoutubeForm() {
  const initialValues = {
    name: 'Hugo',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: { facebook: '', twitter: '' },
    phNumbers: [''],
    phoneNumbers: ['', ''],
  };

  const onSubmit = (values) => console.log('Form data submitted:', values);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
  });

  return (
    <div className='form-container'>
      <div className='form-card'>
        <h2>📺 YouTube Creator Form</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            {/* Name + Email side by side */}
            <div className='form-row'>
              <div className='form-field'>
                <label htmlFor='name'>Name</label>
                <Field type='text' id='name' name='name' />
                <ErrorMessage name='name' component={TextError} />
              </div>

              <div className='form-field'>
                <label htmlFor='email'>E-mail</label>
                <Field type='email' id='email' name='email' />
                <ErrorMessage name='email'>
                  {(msg) => <div className='error'>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <div className='form-field'>
              <label htmlFor='channel'>Channel</label>
              <Field type='text' id='channel' name='channel' placeholder='YouTube Channel Name' />
              <ErrorMessage name='channel' component={TextError} />
            </div>

            <div className='form-field'>
              <label htmlFor='comments'>Comments</label>
              <Field component='textarea' id='comments' name='comments' placeholder='Leave a comment...' />
            </div>

            {/* Facebook + Twitter side by side */}
            <div className='form-row'>
              <div className='form-field'>
                <label htmlFor='facebook'>Facebook</label>
                <Field type='text' id='facebook' name='social.facebook' placeholder='Profile URL' />
              </div>

              <div className='form-field'>
                <label htmlFor='twitter'>Twitter / X</label>
                <Field type='text' id='twitter' name='social.twitter' placeholder='@handle' />
              </div>
            </div>

            <div className='form-field'>
              <label htmlFor='address'>Address</label>
              <Field id='address' name='address'>
                {({ field, meta }) => (
                  <>
                    <input type='text' id='address' {...field} />
                    {meta.touched && meta.error && (
                      <div className='error'>{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>

            <div className='form-field'>
                <label htmlFor='primaryPhone'>Primary Phone</label>
                <Field type='text' id='primaryPhone' name='phoneNumbers[0]' />
            </div>
            <div className='form-field'>
                <label htmlFor='secondaryPhone'>Secondary Phone</label>
                <Field type='text' id='secondaryPhone' name='phoneNumbers[1]' />
            </div>

            <div className='form-field'>
                <label>List of Phone Numbers</label>
                <FieldArray name='phNumbers'>       
                    {(fieldArrayProps) => {
                        console.log('FieldArray render props:', fieldArrayProps);
                        const { push, remove, form } = fieldArrayProps;
                        const { values } = form;    
                        const { phNumbers } = values;
                        return (
                            <div>   
                                {phNumbers.map((phNumber, index) => (
                                    <div key={index}>
                                        <Field name={`phNumbers[${index}]`} />  
                                        {index > 0 && (
                                            <button type='button' onClick={() => remove(index)}>
                                                -
                                            </button>
                                        )}
                                        <button type='button' onClick={() => push('')}>
                                            +    
                                        </button>
                                    </div>
                                ))}
                            </div>
                        );
                    }}
                </FieldArray>
            </div>

            <button type='submit'>Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default YoutubeForm;