import Optimistic from "./examples/Optimistic";
import FormStatus from "./examples/FormStatus";
import FormState from "./examples/FormState";
import Theme from "./examples/Theme";
import Users from "./examples/Users";
import { Suspense } from "react";
import { use } from "react";
import "./App.css";

const fetchPosts =  fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json());


function Loading() {
  return <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>;
}

function App() {
  const users = use(fetchPosts)

  return (
    <>
      <div>
        <Suspense fallback={ <Loading/> }>

          <Users fetchPosts={users} />
          <FormState />
          <FormStatus />
          <Optimistic />
          <Theme />

        </Suspense>
      </div>
    </>
  );
}

export default App;
