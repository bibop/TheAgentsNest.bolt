import React, { useState } from 'react';
import styled from 'styled-components';

const AgentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AgentCard = styled.div`
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

function AgentManagement() {
  const [agents, setAgents] = useState([
    { id: 1, name: 'The Boss', role: 'Project Overseer' },
    { id: 2, name: 'The Critic', role: 'Quality Assurance' },
  ]);

  const addAgent = () => {
    const newAgent = {
      id: agents.length + 1,
      name: `New Agent ${agents.length + 1}`,
      role: 'Unassigned',
    };
    setAgents([...agents, newAgent]);
  };

  return (
    <AgentContainer>
      <h2>Agent Management</h2>
      <Button onClick={addAgent}>Add New Agent</Button>
      {agents.map((agent) => (
        <AgentCard key={agent.id}>
          <h3>{agent.name}</h3>
          <p>Role: {agent.role}</p>
        </AgentCard>
      ))}
    </AgentContainer>
  );
}

export default AgentManagement;
