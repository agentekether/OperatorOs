// Mock Data Source for OperatorOS Prototype

export const INITIAL_OPERATORS = [
  {
    id: 'op-101',
    name: 'Lucas Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    email: 'lucas@vancemedia.co',
    coach: 'Julian S.',
    stage: 'Tools Connected',
    stageNumber: 4,
    riskScore: 65,
    riskLevel: 'critical',
    analysisScore: 42,
    analysisBreakdown: {
      consistency: 30, // 0-100
      missionCompletion: 60,
      communityActivity: 20,
      coachFeedback: 50,
      evidenceSubmitted: 50
    },
    analysisTrend: '-12 pts vs last week',
    lastLoginDays: 7,
    daysInStage: 11,
    riskSignals: [
      { code: 'RISK_NO_LOGIN_7D', label: 'No login in 7 days', points: 20 },
      { code: 'RISK_NO_OUTREACH', label: '0 prospects contacted this sprint', points: 20 },
      { code: 'RISK_LATENCY_10D', label: 'In stage for 11 days (SLA: 7d)', points: 25 }
    ],
    suggestedIntervention: {
      title: 'Emergency Outreach Revival Call',
      description: 'Lucas is stuck connecting tools and hasn\'t logged in for a week. Assign Outreach Revival Playbook and schedule 15-min blocker call.',
      playbookId: 'pb-outreach-revival'
    },
    events: [
      { id: 'evt-1', date: '2026-07-22', type: 'Login', source: 'Circle', text: 'Logged into Circle community' },
      { id: 'evt-2', date: '2026-07-20', type: 'Evidence Uploaded', source: 'OperatorOS', text: 'Submitted Tool Integration Form' },
      { id: 'evt-3', date: '2026-07-18', type: 'Circle Post Created', source: 'Circle', text: 'Asked: How do I configure Smartlead custom tracking domain?' }
    ],
    notes: [
      { id: 'n-1', date: '2026-07-21', author: 'Julian S.', text: 'Lucas mentioned feeling overwhelmed with cold email DNS setup during Thursday Q&A.' }
    ],
    missions: [
      {
        id: 'm-1',
        title: 'Connect Outbound Infrastructure',
        businessObjective: 'Set up your domains and warming sequences so you can acquire clients at scale without landing in spam.',
        estimatedTime: '45 mins',
        status: 'in-progress',
        steps: [
          { id: 's-1', title: 'Watch the "Infrastructure Scaling" strategy module', isDone: true, isExternal: true },
          { id: 's-2', title: 'Register 3 secondary domains', isDone: true, requiresEvidence: false },
          { id: 's-3', title: 'Configure DMARC/SPF/DKIM to secure deliverability', isDone: false, requiresEvidence: true },
          { id: 's-4', title: 'Start warm-up protocol', isDone: false, requiresEvidence: true }
        ],
        resources: ['DNS Checklist SOP', 'Cold Email Deliverability Guide'],
        reward: '+15 Analysis Score'
      }
    ],
    coachingTimeline: [
      { id: 'ct-1', type: 'feedback', date: '2026-07-23', text: 'Lucas, you\'re getting stuck on the technical setup. Don\'t overthink it. Just use the default settings in the template and I\'ll review it on our next call.' },
      { id: 'ct-2', type: 'intervention', date: '2026-07-19', text: 'Assigned DNS Tech Walkthrough Playbook.' }
    ],
    evidence: [
      { id: 'ev-1', date: '2026-07-20', missionId: 'm-1', status: 'approved', type: 'screenshot', text: 'Cloudflare DNS Records Screenshot' }
    ],
    achievements: [
      { id: 'ach-1', title: 'Profile Complete', date: '2026-07-10', icon: 'User' }
    ],
    pendingReviews: 1
  },
  {
    id: 'op-104',
    name: 'Ana Delgado',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    email: 'ana@delgadoconsulting.co',
    coach: 'Julian S.',
    stage: 'First Client',
    stageNumber: 8,
    riskScore: 0,
    riskLevel: 'healthy',
    analysisScore: 98,
    analysisBreakdown: {
      consistency: 100,
      missionCompletion: 95,
      communityActivity: 100,
      coachFeedback: 100,
      evidenceSubmitted: 95
    },
    analysisTrend: '+5 pts vs last week',
    lastLoginDays: 0,
    daysInStage: 1,
    isCelebration: true,
    celebrationMsg: 'Closed first retainer client for $4,500/mo! 🎉',
    riskSignals: [],
    suggestedIntervention: {
      title: 'Send Client Onboarding SOP',
      description: 'Ana achieved her first client! Congratulate in main community and assign Client Fulfillment SOP.',
      playbookId: 'pb-client-fulfillment'
    },
    events: [
      { id: 'evt-8', date: '2026-07-29', type: 'Evidence Uploaded', source: 'Stripe', text: 'Stripe payment link generated ($4,500 MRR)' },
      { id: 'evt-9', date: '2026-07-29', type: 'Circle Post Created', source: 'Circle', text: 'Shared WIN in #wins channel!' }
    ],
    notes: [
      { id: 'n-3', date: '2026-07-29', author: 'Julian S.', text: 'Huge milestone victory! Ana converted her 2nd sales call into a signed retainer.' }
    ],
    missions: [
      {
        id: 'm-4',
        title: 'Acquire Your First Retainer Client',
        businessObjective: 'Close your first high-ticket deal and collect cash to validate your offer in the market.',
        estimatedTime: '1-2 weeks',
        status: 'completed',
        steps: [
          { id: 's-13', title: 'Conduct 5 discovery calls', isDone: true },
          { id: 's-14', title: 'Present tailored proposals', isDone: true },
          { id: 's-15', title: 'Collect initial payment via Stripe', isDone: true, requiresEvidence: true }
        ],
        resources: ['Sales Script', 'Objection Handling Playbook'],
        reward: 'First Client Badge'
      }
    ],
    coachingTimeline: [
      { id: 'ct-4', type: 'feedback', date: '2026-07-29', text: 'Absolutely incredible work, Ana! You followed the process perfectly.' }
    ],
    evidence: [
      { id: 'ev-2', date: '2026-07-29', missionId: 'm-4', status: 'approved', type: 'integration', text: 'Stripe Integration Confirmed Payment' }
    ],
    achievements: [
      { id: 'ach-2', title: 'First Client', date: '2026-07-29', icon: 'Trophy' },
      { id: 'ach-3', title: '7-Day Consistency', date: '2026-07-28', icon: 'Flame' }
    ],
    pendingReviews: 0
  }
];

export const JOURNEY_MILESTONES = [
  { 
    step: 1, 
    name: 'Joined', 
    sla: 'Day 0',
    objective: 'Enter the community and set your intentions.',
    expectedOutcome: 'You understand the rules of the game and how to succeed.',
    requiredMissions: [],
    resources: [],
    evidenceRequired: 'None',
    reward: 'Access to community',
  },
  { 
    step: 2, 
    name: 'Onboarding', 
    sla: 'Day 2',
    objective: 'Complete your profile and understand the operating system.',
    expectedOutcome: 'The coaching team knows exactly what your goals are.',
    requiredMissions: ['Complete Baseline Diagnostic'],
    resources: ['Welcome Module'],
    evidenceRequired: 'Baseline Form Submission',
    reward: 'Profile Badge',
  },
  { step: 3, name: 'Profile Complete', sla: 'Day 4', objective: 'Upload Avatar and Bio.', expectedOutcome: '', requiredMissions: [], resources: [], evidenceRequired: '', reward: '' },
  { 
    step: 4, 
    name: 'Tools Connected', 
    sla: 'Day 7',
    objective: 'Set up your technical infrastructure for scale.',
    expectedOutcome: 'You can acquire clients at scale without landing in spam.',
    requiredMissions: ['Connect Outbound Infrastructure'],
    resources: ['DNS Checklist SOP'],
    evidenceRequired: 'Instantly/Smartlead Workspace Screenshot',
    reward: '+15 Analysis Score',
  },
  { step: 5, name: 'First Outreach', sla: 'Day 10', objective: 'Send your first 100 campaigns.', expectedOutcome: '', requiredMissions: [], resources: [], evidenceRequired: '', reward: '' },
  { step: 6, name: 'First Reply', sla: 'Day 12', objective: 'Get a positive response.', expectedOutcome: '', requiredMissions: [], resources: [], evidenceRequired: '', reward: '' },
  { step: 7, name: 'First Sales Call', sla: 'Day 15', objective: 'Conduct a discovery call.', expectedOutcome: '', requiredMissions: [], resources: [], evidenceRequired: '', reward: '' },
  { 
    step: 8, 
    name: 'First Client', 
    sla: 'Day 21',
    objective: 'Close your first retainer and validate your offer.',
    expectedOutcome: 'Cash collected and confidence secured.',
    requiredMissions: ['Acquire Your First Retainer Client'],
    resources: ['Sales Script SOP'],
    evidenceRequired: 'Stripe Payment / Signed Contract',
    reward: 'First Client Badge & Community Shoutout',
  },
  { step: 9, name: 'First Campaign', sla: 'Day 30', objective: 'Scale to 1,000 leads.', expectedOutcome: '', requiredMissions: [], resources: [], evidenceRequired: '', reward: '' },
  { step: 10, name: 'Case Study', sla: 'Day 45', objective: 'Deliver results.', expectedOutcome: '', requiredMissions: [], resources: [], evidenceRequired: '', reward: '' },
  { step: 11, name: 'Certified', sla: 'Day 60', objective: 'Graduate.', expectedOutcome: '', requiredMissions: [], resources: [], evidenceRequired: '', reward: '' }
];

export const COMMUNITY_HEALTH = {
  healthScore: 84,
  activeOperators: 142,
  missionVelocity: '+12% vs last week',
  interventionsSuccessRate: '76%',
  evidenceSubmitted: 345,
  riskDistribution: {
    critical: 12,
    atRisk: 28,
    watchlist: 45,
    healthy: 57
  }
};

export const COMMUNITY_FEED = [
  { id: 'cf-1', type: 'achievement', operator: 'Ana Delgado', text: 'Unlocked: First Client! 🎉', source: 'OperatorOS', time: '10m ago' },
  { id: 'cf-2', type: 'post', operator: 'Marcus L.', text: 'Published "My exact cold calling script that booked 4 meetings today"', source: 'Circle', time: '1h ago' },
  { id: 'cf-3', type: 'announcement', operator: 'Julian S. (Coach)', text: 'New Playbook Published: Objection Handling Masterclass', source: 'OperatorOS', time: '3h ago' },
  { id: 'cf-4', type: 'evidence', operator: 'David Kim', text: 'Completed Mission: Connect Outbound Infrastructure', source: 'OperatorOS', time: '4h ago' }
];

export const KNOWLEDGE_ITEMS = [];
export const PLAYBOOKS = [];
