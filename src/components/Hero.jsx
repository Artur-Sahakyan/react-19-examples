import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  entity: yup.string().required("Please enter an entity name or number."),
});

const initial = { ok: false, error: null };

async function submitAction(_prev, { entity }) {
  try {
    const res = await fetch("/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: entity }),
    });
    // if (!res.ok) throw new Error("Request failed");
    // reset();
    console.log(res)
  } catch {
    ///
  }
}

export default function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { entity: "" },
  });

  const [formAction, pending] = useActionState(submitAction, initial);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
        <div className="grid gap-10 md:grid-cols-2 md:items-stretch">
          <div className="md:h-full md:flex md:flex-col md:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                File The <span className="text-[#1f275a]">Easy</span> Way
              </h1>
              <p className="mt-6 text-lg text-slate-800">
                We have helped thousands of business owners, let us handle the paperwork for you.
              </p>
            </div>

            <form
              onSubmit={handleSubmit((data) => formAction(data))}
              className="mt-8 max-w-md"
            >
              <div className="flex items-stretch gap-3">
                <input
                  placeholder="Entity Name or Number"
                  disabled={pending}
                  className="flex-1 rounded-md border border-[#1f275a] px-4 py-3 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#1f275a] disabled:opacity-70"
                  {...register("entity")}
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="inline-flex items-center justify-center rounded-md bg-[#1f275a] px-6 py-3 text-white font-medium transition-colors hover:bg-[#2a3475] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {pending ? (
                    <>
                      Submitting…
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>

              {errors.entity && <p className="mt-2 text-sm text-red-600">{errors.entity.message}</p>}
            </form>
          </div>

          <div className="flex justify-center  rounded-xl overflow-hidden">
            <img src="/wife.png" alt="Business meeting" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
