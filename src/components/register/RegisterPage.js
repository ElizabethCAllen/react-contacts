import RegisterForm from './RegisterForm';

import { Link } from 'react-router-dom';

const RegisterPage = (props) => {
    return (
        <div>
            <RegisterForm />
            <div>
                <p>Already have an account? <a href="/login">Login</a>.</p>
            </div>
        </div>
    )
}

export default RegisterPage;