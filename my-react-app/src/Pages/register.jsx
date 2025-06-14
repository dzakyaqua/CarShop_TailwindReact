
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayout title="regist" type="register">
            <FormRegister></FormRegister>
        </AuthLayout>
        // pada code baris kita menggunakan tag a href, tapi dengan router react kita bisa mengganti tag<a></a> menjadi <link> dan href menjadi to
    //     <p className="text-sm mt-5 text-center">have an account?{" "}
    //     <Link to="/login" className="font-bold text-blue-600">login</Link>
    // </p>
        
    )
}

export default RegisterPage;