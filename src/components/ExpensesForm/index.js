import React from 'react';
import "./style.css"
import {Formik} from "formik";
import {useDispatch} from "react-redux"
import * as yup from "yup"
import {addCost} from "../../redux/actions/taskActions";

const ExpensesForm = () => {
    const dispatch = useDispatch()
    const validationSchema = yup.object().shape({
        data: yup.string().required("Choose date"),
        title: yup.string().required("Add title"),
        balance: yup.number().required("Choose date")
    })
    return (
        <Formik initialValues={{
            data: "",
            title: "",
            balance: ""
        }}
                validateOnBlur
                validationSchema={validationSchema}
                onSubmit={((values, {resetForm}) => {
                    resetForm()
                    dispatch(addCost(values))
                })}
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                <form className="row g-3">
                    <div className="col-md-4 mb-3">
                        <div className="row align-items-end">
                            <div className="col-md-auto">
                                <i className='bx bx-calendar'/>
                            </div>
                            <div className="col-md-10">
                                <label htmlFor="date" className="d-flex justify-content-between ms-2">Date {touched?.data && errors?.data && <span className='text-danger'>{errors?.data}</span>}</label>
                                <input type="date" className="form-control" id="date" placeholder="dd/mm/yyyy"
                                       name="date"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.start}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="row align-items-end">
                            <div className="col-md-auto">
                                <i className='bx bxs-pencil'/>
                            </div>
                            <div className="col-md-10">
                                <label htmlFor="title" className="d-flex justify-content-between ms-2">Title {touched.title && errors.title && <span className='text-danger'>{errors.title}</span>}</label>
                                <input type="text" className="form-control" id="title" placeholder="title"
                                       name="title"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.start}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="row align-items-end">
                            <div className="col-md-auto">
                                <i className='bx bx-dollar'/>
                            </div>
                            <div className="col-md-10">
                                <label htmlFor="amount" className="d-flex justify-content-between ms-2">Amount {touched.balance && errors.balance && <span className='text-danger'>{errors.balance}</span>}</label>
                                <input type="number" className="form-control" id="amount" placeholder="0"
                                       name="balance"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       value={values.start}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto ms-auto">
                        <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-3 ms-auto d-block">Добавить</button>
                    </div>
                </form>
            )}
        </Formik>
    );
};

export default ExpensesForm;

// <form>
//     <div className="row">
//         <div className="col d-flex align-items-center">
//             <i className='bx bx-calendar'/>
//             <input type="date"
//                    name="data"
//                    onChange={handleChange}
//                    onBlur={handleBlur}
//                    value={values.start}
//             />
//             {touched.data && errors.data && <p className='text-danger'>{errors.data}</p>}
//         </div>
//         <div className="col d-flex align-items-center">
//             <i className='bx bxs-pencil'/>
//             <input type="text"
//                    name="title"
//                    onChange={handleChange}
//                    onBlur={handleBlur}
//                    value={values.start}
//                    className="form-control"
//                    placeholder="Title" />
//             {touched.title && errors.title && <p className='text-danger'>{errors.title}</p>}
//         </div>
//         <div className="col d-flex align-items-center">
//             <i className='bx bx-dollar'/>
//             <input type="number"
//                    name="balance"
//                    onChange={handleChange}
//                    onBlur={handleBlur}
//                    value={values.start}
//                    className="form-control"
//                    placeholder="0" />
//             {touched.balance && errors.balance && <p className='text-danger'>{errors.balance}</p>}
//         </div>
//         <div className='my-3'>
//             <button onClick={handleSubmit} className='btn btn-primary d-inline-block'>Add</button>
//         </div>
//     </div>
// </form>