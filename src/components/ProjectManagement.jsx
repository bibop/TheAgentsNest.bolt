import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

function ProjectManagement() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', status: 'In Progress' },
    { id: 2, name: 'Project Beta', status: 'Planning' },
  ]);

  const addProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `New Project ${projects.length + 1}`,
      status: 'Planning',
    };
    setProjects([...projects, newProject]);
  };

  return (
    <ProjectContainer>
      <h2>Project Management</h2>
      <Button onClick={addProject}>Add New Project</Button>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <h3>{project.name}</h3>
          <p>Status: {project.status}</p>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
}

export default ProjectManagement;
