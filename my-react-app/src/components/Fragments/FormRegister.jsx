import Button from "../Elements/Buttons/Index";
import InputForm from "../Elements/Index";

const FormRegister = () =>{
    return (
        <form action="">
            <InputForm label="fullname" type="text" placeholder="sulthan dzaky" name="fullname"></InputForm>
            <InputForm label="email" type="email" placeholder="exmple@gmail.com" name="email"></InputForm>
            <InputForm label="Password" type="password" placeholder="*******" name="password"></InputForm>
            <InputForm label="Confirm Password" type="password" placeholder="*******" name="ConfirmPassword"></InputForm>
            <Button className="bg-red-600 w-auto">login</Button>
        </form>


    );
}
// 17;38 terakhir
export default FormRegister;