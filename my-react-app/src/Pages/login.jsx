import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayouts";


const LoginPage = () => {
    return (
        <AuthLayout title="login" type="login">
            <FormLogin></FormLogin>
        </AuthLayout>

    )
    // pada code baris kita menggunakan tag a href, tapi dengan router react kita bisa mengganti tag<a></a> menjadi <link> dan href menjadi to
    // <p className="text-sm mt-5 text-center">Don't have an account? 
    // <Link to="/register" className="font-bold text-blue-600">sign up</Link>
    // </p>
}

export default LoginPage;