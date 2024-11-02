// AI Agent Profiles
const agents = [
  { name: 'The Boss', role: 'Project Overseer', skills: ['leadership', 'decision-making', 'project management'] },
  { name: 'The Critic', role: 'Quality Assurance', skills: ['critical analysis', 'quality control', 'feedback'] },
  { name: 'The Planner', role: 'Strategic Planning', skills: ['planning', 'resource allocation', 'risk management'] },
  { name: 'The Designer', role: 'UX/UI Design', skills: ['user experience', 'interface design', 'prototyping'] },
  { name: 'The Developer', role: 'Software Development', skills: ['coding', 'system architecture', 'debugging'] },
];

export function invokeTeam(project) {
  // Simple AI logic to assemble a team based on project details
  const teamSize = Math.floor(Math.random() * 3) + 3; // Random team size between 3 and 5
  const selectedAgents = [];

  // Always include The Boss
  selectedAgents.push(agents.find(agent => agent.name === 'The Boss'));

  // Select other agents based on project needs
  while (selectedAgents.length < teamSize) {
    const randomAgent = agents[Math.floor(Math.random() * agents.length)];
    if (!selectedAgents.includes(randomAgent)) {
      selectedAgents.push(randomAgent);
    }
  }

  return selectedAgents;
}

export function suggestTasks(project) {
  // Simple AI logic to suggest tasks based on project details
  const commonTasks = [
    'Define project scope',
    'Create project timeline',
    'Assign team roles',
    'Set up development environment',
    'Design user interface mockups',
    'Develop core features',
    'Conduct user testing',
    'Prepare documentation',
  ];

  const projectSpecificTasks = [];

  if (project.name.toLowerCase().includes('mvp')) {
    projectSpecificTasks.push('Identify core MVP features', 'Create MVP roadmap');
  }

  if (project.status === 'Planning') {
    projectSpecificTasks.push('Conduct stakeholder interviews', 'Perform market research');
  }

  const suggestedTasks = [...commonTasks, ...projectSpecificTasks];
  return suggestedTasks.slice(0, 5); // Return top 5 suggested tasks
}
