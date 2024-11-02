import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProjectManagement from './components/ProjectManagement';
import AgentManagement from './components/AgentManagement';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectManagement />} />
            <Route path="/agents" element={<AgentManagement />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
