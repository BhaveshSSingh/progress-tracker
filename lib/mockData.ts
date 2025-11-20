export const GOALS = {
  dsa: {
    current: 124,
    target: 500,
    unit: 'Hours',
    color: 'hsl(var(--chart-1))',
  },
  projects: {
    current: 1,
    target: 2,
    unit: 'Capstone Projects',
    color: 'hsl(var(--chart-2))',
  },
  aiCourse: {
    current: 45,
    target: 100,
    unit: '% Completed',
    color: 'hsl(var(--chart-3))',
  },
  applications: {
    current: 12,
    target: 100,
    unit: 'Applications',
    color: 'hsl(var(--chart-4))',
  }
};

export const WEEKLY_GOALS = [
  { id: 1, text: "Solve 10 Hard DP problems", completed: true },
  { id: 2, text: "Finish AI Course Module 4", completed: false },
  { id: 3, text: "Apply to 15 companies", completed: false },
  { id: 4, text: "Mock Interview with Peer", completed: false },
];

export const MONTHLY_GOALS = [
  { id: 1, text: "Complete System Design Primer", completed: false },
  { id: 2, text: "Build RAG Chatbot MVP", completed: true },
  { id: 3, text: "Reach 250 DSA Hours", completed: false },
];

export const CHART_DATA = {
  activity: [
    { date: "Mon", hours: 4, questions: 3 },
    { date: "Tue", hours: 6, questions: 5 },
    { date: "Wed", hours: 3, questions: 2 },
    { date: "Thu", hours: 8, questions: 8 },
    { date: "Fri", hours: 5, questions: 4 },
    { date: "Sat", hours: 9, questions: 10 },
    { date: "Sun", hours: 2, questions: 1 },
  ],
  applications: [
    { status: "Applied", count: 12, fill: "var(--color-applied)" },
    { status: "Online Test", count: 4, fill: "var(--color-test)" },
    { status: "Interview", count: 2, fill: "var(--color-interview)" },
    { status: "Offer", count: 0, fill: "var(--color-offer)" },
    { status: "Rejected", count: 5, fill: "var(--color-rejected)" },
  ]
};

export const MOCK_PROJECTS = [
  {
    _id: "1",
    name: "AI Resume Screener",
    tasks: ["Setup Python Env", "Integrate OpenAI API", "Frontend UI"],
    hours: 24,
    status: "In Progress",
  },
  {
    _id: "2",
    name: "E-commerce Microservices",
    tasks: ["Auth Service", "Product Service", "Gateway"],
    hours: 45,
    status: "Completed",
  }
];

export const MOCK_APPLICATIONS = [
  {
    _id: "1",
    company: "Google",
    role: "Software Engineer, Early Career",
    dateApplied: "2024-03-15",
    status: "Online Test",
    notes: "OA scheduled for next week",
  },
  {
    _id: "2",
    company: "Amazon",
    role: "SDE I",
    dateApplied: "2024-03-10",
    status: "Rejected",
    notes: "Cooling off period 6 months",
  },
  {
    _id: "3",
    company: "StartUp Inc",
    role: "Full Stack Dev",
    dateApplied: "2024-03-18",
    status: "Interview",
    notes: "System Design round pending",
  }
];
