"use client";

import { useState, useOptimistic } from "react";

function fakeDelayAction(payload) {
  return new Promise((res) => setTimeout(() => res(payload), 1000));
}

export default function Optimistic() {

  const [messages, setMessages] = useState([
    { id: 1, text: "Initial message", sending: false },
  ]);
  
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, optimisticItem) => [...state, optimisticItem]
  );

  async function submitData(formData) {
    const username = formData.get("username")?.trim() || "Art";
    const message = formData.get("message")?.trim() || "Messageee";

    const text = `${username}: ${message}`;
    const tempId = Date.now();

    addOptimisticMessage({ id: tempId, text, sending: true });
    const sent = await fakeDelayAction(text);

    setMessages((prev) => [
      ...prev,
      { id: tempId, text: sent, sending: false },
    ]);
  }

  return (
    <>
      <h3 className="text-red-300 font-bold">useOptimistic() example</h3>

      <div className="space-y-1 mb-4">
        {optimisticMessages.map((m) => (
          <div className="font-bold" key={m.id}>
            {m.text}
            {m.sending ? <p> (Sending...)</p> : null}
          </div>
        ))}
      </div>

      <form action={submitData} className="space-y-3">

        <div>
          <label className="mr-2">Username</label>
          <input name="username" className="border-2 rounded-md p-1" />
        </div>

        <div>
          <label className="mr-2">Message</label>
          <input name="message" className="border-2 rounded-md p-1"/>
        </div>

        <button type="submit" className="bg-blue-400 text-white px-3 py-1 rounded">
          Submit
        </button>

      </form>
    </>
  );
}
