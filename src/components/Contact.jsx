import { useEffect } from "react";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().trim().required("Full name is required."),
  phone: yup.string().trim().optional(),
  email: yup.string().trim().email("Enter a valid email.").required("Email is required."),
  message: yup.string().trim().min(10, "Please provide a few details (min 10 chars).").required("Message is required."),
});

const initial = { ok: false, error: null };

async function submitAction(_prev, data) {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Request failed");
    return { ok: true, error: null };
  } catch {
    return { ok: false, error: "Network or server error. Try again." };
  }
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { fullName: "", phone: "", email: "", message: "" },
  });

  const [state, formAction, pending] = useActionState(submitAction, initial);

  useEffect(() => {
    if (state.ok) reset({ fullName: "", phone: "", email: "", message: "" });
  }, [state.ok, reset]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Contact Us</h2>
            <p className="mt-4 max-w-xl text-slate-600 text-lg">
              Have questions or need assistance? Connect with an expert now for personalized guidance and support tailored to your needs!
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" rx="2" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" fill="none" />
                  </svg>
                </span>
                <a href="mailto:info@ebizfile.com" className="text-slate-700 text-lg hover:underline">
                  info@ebizfile.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 3h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3a2 2 0 01-2 2A16 16 0 013 8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <a href="tel:+18003147999" className="text-slate-700 text-lg hover:underline">
                  (800) 314-7999
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Get in Touch</h3>
            <p className="mt-2 text-slate-600">You can reach us anytime</p>

            <form
              noValidate
              onSubmit={handleSubmit((data) => formAction(data))}
              className="mt-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    placeholder="Full name"
                    disabled={pending}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f275a]"
                    {...register("fullName")}
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
                </div>

                <div>
                  <input
                    placeholder="Phone number"
                    disabled={pending}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f275a]"
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 py-3 focus-within:ring-2 focus-within:ring-[#1f275a]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-slate-500">
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  <input
                    placeholder="Your email"
                    disabled={pending}
                    className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none"
                    {...register("email")}
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div className="mt-4">
                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  disabled={pending}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1f275a]"
                  {...register("message")}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={pending}
                className="mt-6 w-full rounded-xl bg-[#1f275a] py-3 text-white font-medium hover:bg-[#2a3475] transition-colors disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center"
              >
                {pending ? (
                  <>
                    {/* <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z" />
                    </svg> */}
                    Submitting…
                  </>
                ) : (
                  "Submit"
                )}
              </button>

              {state.error && <p className="mt-3 text-sm text-red-600">{state.error}</p>}
              {state.ok && !state.error && <p className="mt-3 text-sm text-emerald-600">Thanks! Well get back to you shortly.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
