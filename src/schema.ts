import { object, string } from "yup";

const Schema = object({
    name: string().min(6, 'must be 6 characters').required('Required'),
    email: string().email('invalid format').required('Required'),
    password: string().min(6, 'must be 6 characters').matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,'min 6 characters, at least contain one lowercase, one uppercase, one number, and one symbol').required('Required'),
})

export default Schema;