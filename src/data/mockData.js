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

export const KNOWLEDGE_ITEMS = [
  {
    id: 'k-1',
    title: 'How the Operator Journey Works',
    summary: 'Understand the certification process, key milestones, and what success looks like throughout your journey.',
    readingTime: '4 min read',
    category: 'Getting Started',
    lastUpdated: 'July 28, 2026',
    relatedPlaybook: 'Land Your First Client',
    stage: 'Foundation',
    author: 'Julian S.',
    videoDuration: '04:15',
    transcriptSnippet: '"Your transformation as an operator is broken down into sequential milestones. You do not skip stages; you build momentum."',
    sopSteps: [
      'Review the 6 core certification milestones.',
      'Complete your Foundation profile and tool connections.',
      'Attend the weekly coaching kickoff call.'
    ]
  },
  {
    id: 'k-2',
    title: 'Pilot Campaign vs Full Campaign',
    summary: 'Learn when to offer each campaign type, the expected outcomes, and how they fit into your business model.',
    readingTime: '5 min read',
    category: 'Getting Started',
    lastUpdated: 'July 27, 2026',
    relatedPlaybook: 'Client Acquisition',
    stage: 'Build Your Offer',
    author: 'Julian S.',
    videoDuration: '05:30',
    transcriptSnippet: '"A pilot campaign removes risk for the client. Sell a 30-day proof of concept before locking in a 6-month retainer."',
    sopSteps: [
      'Assess the client\'s current asset library and budget.',
      'Pitch the 30-day pilot campaign to reduce friction.',
      'Define clear success KPIs for conversion to full retainer.'
    ]
  },
  {
    id: 'k-3',
    title: 'The Operator Mindset',
    summary: 'Why consistent execution beats perfect strategy, and how successful operators build momentum over time.',
    readingTime: '3 min read',
    category: 'Getting Started',
    lastUpdated: 'July 25, 2026',
    relatedPlaybook: 'Weekly Execution System',
    stage: 'Foundation',
    author: 'Julian S.',
    videoDuration: '03:45',
    transcriptSnippet: '"Perfection is the enemy of execution. Send the outreach, launch the campaign, iterate based on real market feedback."',
    sopSteps: [
      'Block 90 minutes every morning for revenue-generating activity.',
      'Track daily actions in your OperatorOS scorecard.',
      'Review weekly output with your coach.'
    ]
  },
  {
    id: 'k-4',
    title: 'Cold Outreach Fundamentals',
    summary: 'Learn the principles behind effective outreach, personalization, follow-up, and consistency.',
    readingTime: '8 min read',
    category: 'Client Acquisition',
    lastUpdated: 'July 29, 2026',
    relatedPlaybook: 'Land Your First Client',
    stage: 'Outreach',
    author: 'Julian S.',
    videoDuration: '08:20',
    transcriptSnippet: '"Volume without relevance is spam; relevance without volume is a hobby. Balance targeted personalization with daily volume."',
    sopSteps: [
      'Build a verified prospect list of at least 50 target accounts.',
      'Draft a 3-step sequence focusing on their bottleneck.',
      'Send 20 personalized outreach messages daily.'
    ]
  },
  {
    id: 'k-5',
    title: 'Using Upwork Effectively',
    summary: 'Build proposals that stand out and create a repeatable client acquisition process.',
    readingTime: '6 min read',
    category: 'Client Acquisition',
    lastUpdated: 'July 26, 2026',
    relatedPlaybook: 'Land Your First Client',
    stage: 'Outreach',
    author: 'Julian S.',
    videoDuration: '06:10',
    transcriptSnippet: '"Do not copy-paste generic cover letters. Record a 90-second Loom addressing their specific job post requirements."',
    sopSteps: [
      'Filter Upwork jobs posted in the last 24 hours with verified payment.',
      'Record a tailored 90-second Loom breakdown.',
      'Attach relevant past pilot campaign case studies.'
    ]
  },
  {
    id: 'k-6',
    title: 'Discovery Calls',
    summary: 'Prepare, qualify prospects, and confidently move conversations toward the next step.',
    readingTime: '7 min read',
    category: 'Client Acquisition',
    lastUpdated: 'July 29, 2026',
    relatedPlaybook: 'Land Your First Client',
    stage: 'Conversations',
    author: 'Julian S.',
    videoDuration: '07:45',
    transcriptSnippet: '"The person asking the questions controls the conversation. Uncover their revenue bottleneck before presenting your solution."',
    sopSteps: [
      'Research prospect\'s existing campaigns prior to the call.',
      'Use the 15-minute diagnostic framework to uncover bottlenecks.',
      'Present the Pilot Campaign option as the natural next step.'
    ]
  },
  {
    id: 'k-7',
    title: 'Launching Your First Campaign',
    summary: 'Everything required before launching a campaign successfully.',
    readingTime: '6 min read',
    category: 'Campaign Operations',
    lastUpdated: 'July 28, 2026',
    relatedPlaybook: 'Launch Your First Campaign',
    stage: 'Clients',
    author: 'Julian S.',
    videoDuration: '06:40',
    transcriptSnippet: '"Never launch distribution without a complete onboarding checklist. Ensure DNS, assets, and clippers are assigned first."',
    sopSteps: [
      'Complete the client kickoff call and intake form.',
      'Collect raw video/content assets in the shared drive.',
      'Assign distribution tasks to clippers with quality guidelines.'
    ]
  },
  {
    id: 'k-8',
    title: 'Managing Clippers',
    summary: 'Coordinate work, review quality, and maintain campaign consistency.',
    readingTime: '5 min read',
    category: 'Campaign Operations',
    lastUpdated: 'July 24, 2026',
    relatedPlaybook: 'Hiring Your First Team',
    stage: 'Clients',
    author: 'Julian S.',
    videoDuration: '05:15',
    transcriptSnippet: '"Clear SOPs eliminate 90% of editing revisions. Provide visual examples of good and bad clips."',
    sopSteps: [
      'Create a visual style guide for your clipper team.',
      'Implement a 2-stage QA review pipeline before client delivery.',
      'Conduct weekly feedback syncs with clippers.'
    ]
  },
  {
    id: 'k-9',
    title: 'Weekly Campaign Reviews',
    summary: 'A repeatable process to monitor campaign health and identify issues early.',
    readingTime: '5 min read',
    category: 'Campaign Operations',
    lastUpdated: 'July 30, 2026',
    relatedPlaybook: 'Weekly Execution System',
    stage: 'Clients',
    author: 'Julian S.',
    videoDuration: '05:00',
    transcriptSnippet: '"Data tells a story. Look at CTR, conversion, and output volume every Thursday to catch dips before the client notices."',
    sopSteps: [
      'Pull weekly performance metrics across all active campaigns.',
      'Identify any underperforming channels or clippers.',
      'Send a Loom summary report to the client every Friday.'
    ]
  },
  {
    id: 'k-10',
    title: 'Frequently Asked Questions',
    summary: 'Essential answers to the most common questions operators have about tools, coaching, and execution.',
    readingTime: '4 min read',
    category: 'Community',
    lastUpdated: 'July 30, 2026',
    relatedPlaybook: 'Operator Recovery Playbook',
    stage: 'Foundation',
    author: 'Julian S.',
    videoDuration: '04:00',
    transcriptSnippet: '"If you are stuck for more than 48 hours on any technical setup, post in Circle or book an emergency blocker call."',
    sopSteps: [
      'Search Circle community archive before posting.',
      'Use the structured question template for technical help.',
      'Tag your assigned coach for 24h response SLA.'
    ]
  },
  {
    id: 'k-11',
    title: 'Weekly Coaching Recaps',
    summary: 'Summaries and key takeaways from live coaching sessions and community Q&A.',
    readingTime: '6 min read',
    category: 'Community',
    lastUpdated: 'July 29, 2026',
    relatedPlaybook: 'Weekly Execution System',
    stage: 'Outreach',
    author: 'Julian S.',
    videoDuration: '06:30',
    transcriptSnippet: '"This week we broke down 3 live sales calls and analyzed why pricing presentation changes win rates."',
    sopSteps: [
      'Watch the weekly mastermind recording recap.',
      'Note one actionable change for your outreach this sprint.',
      'Submit your accountability check-in by Friday.'
    ]
  },
  {
    id: 'k-12',
    title: 'Community Best Practices',
    summary: 'How to give and receive feedback, share evidence, and collaborate effectively inside Circle.',
    readingTime: '3 min read',
    category: 'Community',
    lastUpdated: 'July 22, 2026',
    relatedPlaybook: 'Hiring Your First Team',
    stage: 'Foundation',
    author: 'Julian S.',
    videoDuration: '03:10',
    transcriptSnippet: '"When you share your wins and evidence, you elevate the entire collective. Give feedback to at least two peers weekly."',
    sopSteps: [
      'Share your weekly mission evidence publicly in Circle.',
      'Provide constructive feedback on 2 peer proposals.',
      'Participate in Thursday live breakout rooms.'
    ]
  }
];

export const PLAYBOOKS = [
  {
    id: 'pb-first-client',
    title: 'Land Your First Client',
    objective: 'Close your first paying client using the Operator acquisition process.',
    estimatedDuration: '7 Days',
    targetStage: '7 Days • Client Acquisition',
    progress: '2/5 Steps Completed',
    steps: [
      { title: 'Build Prospect List', detail: 'Identify 50 qualified target accounts in your niche with verified contact info.' },
      { title: 'Send First Outreach', detail: 'Launch personalized cold email or LinkedIn sequences using templates.' },
      { title: 'Book Discovery Call', detail: 'Qualify interest and schedule a 30-minute discovery call.' },
      { title: 'Deliver Proposal', detail: 'Present tailored offer and pilot campaign pricing.' },
      { title: 'Close Pilot Campaign', detail: 'Sign client agreement and collect onboarding assets.' }
    ],
    resources: ['Outreach Templates', 'Discovery Call Script', 'Proposal Template'],
    requiredEvidence: 'Upload your first signed client agreement.',
    relatedKnowledge: ['How the Operator Journey Works', 'Cold Outreach Fundamentals', 'Discovery Calls'],
    videoGuide: 'Client Acquisition Walkthrough (12 mins)',
    templateLink: 'Client Proposal & Pilot Agreement Template (.docx)'
  },
  {
    id: 'pb-first-campaign',
    title: 'Launch Your First Campaign',
    objective: 'Successfully launch and manage your first distribution campaign.',
    estimatedDuration: '14 Days',
    targetStage: '14 Days • Campaign Operations',
    progress: '0/5 Steps Completed',
    steps: [
      { title: 'Client Kickoff', detail: 'Conduct kickoff meeting and complete initial intake assessment.' },
      { title: 'Collect Assets', detail: 'Gather raw content, brand guidelines, and access credentials.' },
      { title: 'Assign Clippers', detail: 'Brief editing team and assign initial batch of short-form clips.' },
      { title: 'Launch Distribution', detail: 'Publish content across selected distribution channels according to schedule.' },
      { title: 'Review Performance', detail: 'Analyze week-one metrics and optimize distribution hooks.' }
    ],
    resources: ['Campaign Launch Checklist', 'Asset Collection Portal', 'Clipper SOP'],
    requiredEvidence: 'Campaign Launch Checklist completed.',
    relatedKnowledge: ['Launching Your First Campaign', 'Pilot Campaign vs Full Campaign', 'Managing Clippers'],
    videoGuide: 'Campaign Kickoff & Setup Masterclass (15 mins)',
    templateLink: 'Campaign Operations Tracker (.xlsx)'
  },
  {
    id: 'pb-weekly-execution',
    title: 'Weekly Execution System',
    objective: 'Build a consistent weekly operating rhythm.',
    estimatedDuration: 'Weekly Rhythm',
    targetStage: '5 Days • Execution Rhythm',
    progress: '0/5 Steps Completed',
    steps: [
      { title: 'Monday: Prospecting', detail: 'Build target lists and launch 20 new outreach conversations.' },
      { title: 'Tuesday: Follow Ups', detail: 'Follow up on active conversations and nurture pipeline.' },
      { title: 'Wednesday: Discovery Calls', detail: 'Conduct scheduled discovery calls and qualify prospects.' },
      { title: 'Thursday: Campaign Reviews', detail: 'Review active client campaigns and QA clipper output.' },
      { title: 'Friday: Reporting & Reflection', detail: 'Send client update Looms and complete weekly OperatorOS scorecard.' }
    ],
    resources: ['Weekly Sprint Planner', 'Outreach Metric Tracker', 'Reflection Template'],
    requiredEvidence: 'Complete weekly activity review.',
    relatedKnowledge: ['The Operator Mindset', 'Weekly Campaign Reviews', 'Weekly Coaching Recaps'],
    videoGuide: 'The Weekly Operator Rhythm (8 mins)',
    templateLink: 'Operator Weekly Scorecard Template (.notion)'
  },
  {
    id: 'pb-hiring-team',
    title: 'Hiring Your First Team',
    objective: 'Understand when and who to hire as your business grows.',
    estimatedDuration: '21 Days',
    targetStage: '21 Days • Team Building',
    progress: '0/4 Steps Completed',
    steps: [
      { title: 'Virtual Assistant', detail: 'Hire VA for list building, lead scraping, and CRM hygiene.' },
      { title: 'Campaign Coordinator', detail: 'Onboard coordinator to manage clipper deadlines and asset flow.' },
      { title: 'Account Manager', detail: 'Bring on Account Manager for weekly client communication and reporting.' },
      { title: 'General Manager', detail: 'Promote or hire GM to oversee end-to-end operator business.' }
    ],
    resources: ['Role Scorecards', 'Interview Questions', 'Compensation Benchmark Table'],
    requiredEvidence: 'Hiring plan completed.',
    relatedKnowledge: ['Managing Clippers', 'Community Best Practices', 'Using Upwork Effectively'],
    videoGuide: 'Scaling From Solo to Team (14 mins)',
    templateLink: 'Team Role Scorecards & Job Posts (.zip)'
  },
  {
    id: 'pb-recovery',
    title: 'Operator Recovery Playbook',
    objective: 'Know exactly what to do when execution stalls.',
    estimatedDuration: '3 Days',
    targetStage: '3 Days • Intervention',
    progress: '0/5 Steps Completed',
    steps: [
      { title: 'Review Activity', detail: 'Audit last 14 days of outreach and campaign execution.' },
      { title: 'Identify Blocker', detail: 'Pinpoint exact bottleneck (mindset, offer, technical, or volume).' },
      { title: 'Schedule Coaching', detail: 'Book 15-minute emergency intervention call with your coach.' },
      { title: 'Create Action Plan', detail: 'Document 3 micro-actions for the next 48 hours.' },
      { title: 'Follow Up', detail: 'Submit evidence of recovery execution to coach.' }
    ],
    resources: ['Blocker Diagnostic Form', 'Emergency Outreach Playbook', 'Coach Booking Link'],
    requiredEvidence: 'Recovery plan documented.',
    relatedKnowledge: ['Frequently Asked Questions', 'The Operator Mindset', 'How the Operator Journey Works'],
    videoGuide: 'Breaking Through Execution Plateaus (10 mins)',
    templateLink: 'Emergency Recovery Scorecard (.pdf)'
  }
];
