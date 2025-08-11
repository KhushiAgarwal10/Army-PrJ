import React, { useState } from 'react';


export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sending form (e.g., API call)
    console.log(form);
    setStatus('✅ Message sent successfully!');
    setForm({ name: '', email: '', message: '' });

    // Clear the message after 2 seconds
    setTimeout(() => {
      setStatus('');
    }, 2000); // 3000ms = 2 seconds
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-2xl border border-green-600">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">📬 Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-4 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white"
          required
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-4 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          className="w-full p-4 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-green-600 text-center font-semibold">{status}</p>}


    </div>
  );
}

