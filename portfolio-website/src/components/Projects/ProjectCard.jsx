import { Link } from "react-router-dom";
function ProjectCard(props) {
  return (
    <div className="w-full max-w-xs bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img src="" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {props.title}
        </h3>
        <p className="text-sm text-gray-600 text-justify">{props.desc}</p>
      </div>
      <div className="flex justify-center my-4">
        <Link
          to={`/projects/${props.id}`}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
