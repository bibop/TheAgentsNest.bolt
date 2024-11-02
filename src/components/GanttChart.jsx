import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin-top: 2rem;
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const GanttChart = ({ projects }) => {
  return (
    <ChartContainer>
      <h3>Project Timelines</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.name}</strong>: {project.timeline}
          </li>
        ))}
      </ul>
    </ChartContainer>
  );
};

export { GanttChart };
