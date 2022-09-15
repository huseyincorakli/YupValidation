import { useFormik } from "formik";
import  validationSchema from "../validation";

function Contact() {
  const {handleSubmit,values,handleChange,errors,handleBlur,touched} = useFormik({
   initialValues:{
    firstName:"",
    email:"",
    message:""
   },
   onSubmit:()=>{
    alert(JSON.stringify(values))
   },
   validationSchema
  });
  
  return(
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" value={values.firstName} onBlur={handleBlur} onChange={handleChange}></input>
            {errors.firstName && touched.firstName && <div>{errors.firstName}</div>}
            <br/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input name="email" value={values.email} onBlur={handleBlur} onChange={handleChange}></input>
            {errors.email && touched.email && <div>{errors.email}</div>}
            <br/>
            <br/>
            <label htmlFor="message">Message:</label>
            <textarea name="message" value={values.message} onBlur={handleBlur} onChange={handleChange}></textarea>
            {errors.message &&touched.message && <div>{errors.message}</div>}
            <br/>
            <br/>
            <button>Send</button>
            <br/>
            <br/>
            <code>{JSON.stringify(values)}</code>
        </form>
    </div>
  );
}

export default Contact;
