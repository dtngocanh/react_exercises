import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Project Details</h2>
        <p className="text-gray-700">
          This is project with ID: <strong>{id}</strong>
        </p>
      </div>
    </div>
  );
}

export default ProjectDetail;
