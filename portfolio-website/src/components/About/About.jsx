import { useState } from "react";
import { NavLink } from "react-router-dom";

function About() {
  const [show, setShow] = useState(false);
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  function toggle() {
    setShow((pre) => !pre);
  }
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex justify-center items-start">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="font-bold text-xl">About me</h1>
        <p className="text-gray-700 my-4 text-justify">
          Hi! I'm a frontend developer with a passion for clean and functional
          user interfaces. I love bringing designs to life with modern web
          technologies and making websites responsive and accessible. I’ve been
          building web apps using React, Tailwind CSS, and REST APIs. I enjoy
          solving real-world problems and always eager to learn new skills.
        </p>
        <button
          onClick={() => toggle()}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {show ? "Hide Skills" : "Show Skills"}
        </button>

        {show && (
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        )}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "m-3 text-blue-600 underline font-semibold"
              : "m-3 text-blue-600 hover:underline"
          }
        >
          View My Projects →
        </NavLink>
      </div>
    </div>
  );
}

export default About;
