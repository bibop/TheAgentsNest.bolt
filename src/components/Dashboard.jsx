import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const DashboardCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardCard>
        <h2>Active Projects</h2>
        <p>You have 3 active projects</p>
      </DashboardCard>
      <DashboardCard>
        <h2>Available Agents</h2>
        <p>15 agents are ready for deployment</p>
      </DashboardCard>
      <DashboardCard>
        <h2>Recent Activity</h2>
        <p>Last project update: 2 hours ago</p>
      </DashboardCard>
    </DashboardContainer>
  );
}

export default Dashboard;
