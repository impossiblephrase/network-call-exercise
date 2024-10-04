import { Formik, Form, Field, FormikProps } from "formik";
import IUser from "../../interface/user.interface";
import axios from "axios";
import Schema from "../../schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();

    const postUser = async (params: IUser) => {
        try{
            await axios.post(
                "https://66fd3bcfc3a184a84d199197.mockapi.io/api/v1/users",
                {
                    name: params.name,
                    email: params.email,
                    password: params.password,
                })
                toast.success("Aw, kamu baru saja mendaftar!", {
                    onClose: () => {
                        navigate('/');
                    }
                });
            } catch (error) {
                console.log(error)
            }
        }
        return(
            <div>
                <Formik
                    initialValues={{
                        id: 0,
                        name: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        console.log(values)
                        postUser(values)
                    }}
                >
    
                    {(props: FormikProps<IUser>) => {
                        const {values, errors, touched, handleChange} = props;
                        
                        return(
                            <div className="flex justify-center rounded-xl items-center min-h-screen bg-gray">
                                <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                                    <ToastContainer position="top-right" autoClose={2000} theme="dark" />
                                    <Form>
                                        <div className="mb-4">
                                            <h1 className="font-serif text-[2em]">Register</h1>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="name" className="block text-gray-700 font-serif font-medium mb-2 text-left">Name</label>
                                            <Field className='border rounded w-full bg-transparent h-[3em] p-2' type="text" name="name" onChange={handleChange} value={values.name} />
                                            {touched.name && errors.name ? (
                                                <div className="text-left text-red-500 text-sm mt-1">{errors.name}</div>
                                            ) : null}
                                        </div>
    
                                        <div className="mb-4">
                                            <label htmlFor="email" className="block text-gray-700 font-serif font-medium mb-2 text-left">Email</label>
                                            <Field className='border rounded w-full bg-transparent h-[3em] p-2' type="text" name="email" onChange={handleChange} value={values.email} />
                                            {touched.email && errors.email ? (
                                                <div className="text-left text-red-500 text-sm mt-1">{errors.email}</div>
                                            ) : null}
                                        </div>
    
                                        <div className="mb-4">
                                            <label htmlFor="password" className="block text-gray-700 font-serif font-medium mb-2 text-left">Password</label>
                                            <Field className='border rounded w-full bg-transparent h-[3em] p-2' type="password" name="password" onChange={handleChange} value={values.password} />
                                            {touched.password && errors.password ? (
                                                <div className="text-left text-red-500 text-sm mt-1">{errors.password}</div>
                                            ) : null}
                                        </div>
    
                                        <button type="submit" className="bg-violet-400 h-[3em] text-white w-full p-2 rounded-lg hover:bg-violet-600 transition font-serif">
                                            Submit
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        )
                    }}
    
                </Formik>
            </div>
        )
    }
            
export default Register;