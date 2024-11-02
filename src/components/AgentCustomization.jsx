import React, { useState } from 'react';
import styled from 'styled-components';

const CustomizationContainer = styled.div`
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

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

function AgentCustomization() {
  const [agents, setAgents] = useState([
    { id: 1, name: 'The Boss', role: 'Project Overseer', skills: 'Leadership, Decision-Making' },
    { id: 2, name: 'The Critic', role: 'Quality Assurance', skills: 'Critical Analysis, Feedback' },
  ]);

  const updateAgent = (id, key, value) => {
    setAgents(agents.map(agent => agent.id === id ? { ...agent, [key]: value } : agent));
  };

  return (
    <CustomizationContainer>
      <h2>Agent Customization</h2>
      {agents.map((agent) => (
        <AgentCard key={agent.id}>
          <h3>{agent.name}</h3>
          <p>Role: {agent.role}</p>
          <p>Skills: {agent.skills}</p>
          <Input
            type="text"
            placeholder="Update Skills"
            onChange={(e) => updateAgent(agent.id, 'skills', e.target.value)}
          />
        </AgentCard>
      ))}
    </CustomizationContainer>
  );
}

export default AgentCustomization;
