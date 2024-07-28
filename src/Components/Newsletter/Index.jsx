import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.scss';

const initialValues = { email: '' };

const validationSchema = Yup.object({
    email: Yup.string().required('Email é obrigatório'),
});

const Newsletter = () => {
    return(
        <section id="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="bold text-center">Você é inspirado por Franco?</h3>
                        <p className="text-center">Junte-se a nossa lista de e-mails para
                        <span className="bold"> Conteúdo Exclusivo</span></p>
                        <br />

                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={validationSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            alert(JSON.stringify(values, null, 2));
                                            setSubmitting(false);
                                        }, 400);
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form>
                                            <div className="form-group col-md-7 col-md-offset-2">
                                                <Field type="email" name="email" className="form-control" placeholder="E-mail"/>
                                                <ErrorMessage name="email" component='div' className='text-danger' />

                                                <button type='submit' className='btn btn-primary' disabled={isSubmitting} >
                                                    Inscreva-se
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;