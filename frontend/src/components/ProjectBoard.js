import React, { useState } from "react";
import "./ProjectBoard.css"; // Import styles

const ProjectBoard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "AI-Powered Study Assistant",
      description: "An AI bot to help students with their studies.",
      techStack: ["React", "Node.js", "MongoDB"],
      members: 4,
    },
    {
      id: 2,
      title: "Open Source Blogging Platform",
      description: "A blogging site for developers to share knowledge.",
      techStack: ["Next.js", "Firebase", "TailwindCSS"],
      members: 3,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    techStack: "",
  });

  // Function to handle form input
  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  // Function to add a new project
  const handleAddProject = () => {
    if (!newProject.title || !newProject.description || !newProject.techStack)
      return;

    setProjects([
      ...projects,
      { id: projects.length + 1, ...newProject, members: 1 },
    ]);
    setNewProject({ title: "", description: "", techStack: "" });
    setShowForm(false);
  };

  return (
    <div className="project-board">
      <h2>🚀 Project Collaboration Board</h2>
      <button className="add-project-btn" onClick={() => setShowForm(true)}>
        ➕ Create New Project
      </button>

      {/* Project Cards */}
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
            <p>👥 {project.members} Members</p>
            <button className="join-btn">Join Project</button>
          </div>
        ))}
      </div>

      {/* New Project Form (Popup) */}
      {showForm && (
        <div className="form-popup">
          <div className="form-container">
            <h3>Create a New Project</h3>
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              value={newProject.title}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Project Description"
              value={newProject.description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="techStack"
              placeholder="Tech Stack (comma separated)"
              value={newProject.techStack}
              onChange={(e) =>
                setNewProject({
                  ...newProject,
                  techStack: e.target.value.split(","),
                })
              }
            />
            <button className="submit-btn" onClick={handleAddProject}>
              🚀 Add Project
            </button>
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectBoard;
