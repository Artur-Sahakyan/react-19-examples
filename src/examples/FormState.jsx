import { useFormState} from 'react-dom';

const FormState = () => {
    const submitForm = (prevState, queryData) => {
        const name =  queryData.get("username");
        if(name === 'Artur'){
            return {
                success: true,
                text: "Welcome"
            }
        }
        else{
            return {
                success: false,
                text: "ERRORRR"
            }
        }
    }
    const [ message, formAction ] = useFormState(submitForm, null)

    return <>
    <h3>useFormState() example</h3>
    <form action={formAction} className='my-3'>
        <label>Name</label>
        <input type="text" name="username" className="border-2 rounded-md"/>
        <br />
        <button className="bg-blue-400">Submit</button>
        {message && <h4>{message.text}</h4>}
    </form>
    </>
}

export default FormState;