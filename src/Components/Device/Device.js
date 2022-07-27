import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form, ErrorMessage } from "formik";
export default function Device({modalIsOpen, closeModal, initialValues, validationSchema, onSubmit, model}){
    return (
        <div>
            <Modal show={modalIsOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add {model}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    render={({ errors, touched, values }) => (
                    <div className="row">
                    <Form>
                        <div className="form-group">
                        <label htmlFor="id">Id </label> 
                        <Field type="text" 
                        name="id" 
                        id="id"
                        className={
                            "form-control" +
                            (errors.id && touched.id ? " is-invalid" : "") +
                            (!errors.id && touched.id ? " is-valid" : "")
                        }
                        />
                        <ErrorMessage
                                name="id"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group mt-2">
                        <label htmlFor="name">Name </label> 
                        <Field type="text" 
                        className={
                            "form-control" +
                            (errors.name && touched.name ? " is-invalid" : "") +
                            (!errors.name && touched.name ? " is-valid" : "")
                        }
                        name="name"
                        id="name" />
                        <ErrorMessage
                                name="name"
                                component="div"
                                className="invalid-feedback"
                            />
                        </div>
                        <div className="form-group mt-2">
                        <Button variant="success" type="submit">Add</Button>
                        </div>
                    </Form>
                    </div>
                    )} />
                </Modal.Body>
            </Modal>
        </div>
    );
}