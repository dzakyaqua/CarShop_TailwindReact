import { useRouteError } from "react-router";
// di atas ini PENTING

const ErrorPages=()=>{
    const error = useRouteError();
    return(
        <div className="flex justify-center min-h-screen items-center flex-col">
            <h1>Oops!</h1>
            <p>sorry, an unexpected page</p>
            <p>
                {error.statusText ||  error.message}
            </p>
        </div>
    )
}

export default ErrorPages;