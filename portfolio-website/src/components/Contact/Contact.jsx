import { useEffect, useState } from "react";

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    msg: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  }
  function handleClick() {
    alert(`${contact.name} ${contact.email} ${contact.msg}`);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        to="/contact"
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Contact me
        </h2>
        <input
          onChange={handleChange}
          name="name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Your name"
        />
        <input
          onChange={handleChange}
          name="email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Your email"
        />
        <textarea
          onChange={handleChange}
          name="msg"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          type="email"
          placeholder="Your message."
        />
        <button
          onClick={handleClick}
          className="w-full bg-gray-300 rounded px-4 py-2 hover:bg-gray-500 hover:text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
