import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();

  return <button className="min-w-[100px]" disabled={pending}>{pending ? 'Loadinggggg...' : 'Submit'}</button>;
}

const formAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

const FormStatus = () => {
  return (
   <>
    <h3>useFormStatus() example</h3>
    <form action={formAction}> <Submit /> </form>
   </>
  );
};

export default FormStatus;
