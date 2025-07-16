import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS. It showcases my skills, projects, and contact information in a clean, responsive design.",
    },
    {
      id: 2,
      title: "Task Manager App",
      description:
        "A simple task management tool that lets users add, edit, and delete tasks. Built using React and localStorage for data persistence.",
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description:
        "An app that fetches and displays weather data using the OpenWeatherMap API. It includes current conditions and 5-day forecasts with responsive UI.",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">My projects</h1>
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} id={p.id} title={p.title} desc={p.description} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
