import { object, ref, string,  } from 'yup';

const emailMessage="Not a valid email"
const requiredMessage ="This field cannot be left blank"
const minName="Name field must have at least 2 characters"
const minMessage="Message field must have at least 10 characters"

let validation = object({
  email: string().email(emailMessage).required(requiredMessage),
  firstName:string().required(requiredMessage).min(2,minName),
  message:string().required(requiredMessage).min(10,minMessage)
});

export default validation;