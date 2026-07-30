# Information Architecture (6 Screen Framework)

OperatorOS limits top-level navigation to **6 core screens**.

---

## Navigation Tree

```text
OperatorOS
├── 1. Today (Daily Operational Command Center)
│   ├── At-Risk Operators Priority Feed
│   ├── Celebration & Wins Feed (First Client, First Reply)
│   └── Interventions To-Do Checklist
│
├── 2. Operators (Directory & Cohort Matrix)
│   ├── Risk Filter (Critical, At-Risk, Watchlist, Healthy)
│   ├── Stage Filter (Onboarding -> Certified)
│   ├── Search & Multi-column Data Grid
│   └── Bulk Actions (Assign Coach, Send Announcement)
│
├── 3. Operator Profile (Deep Dive Command View)
│   ├── Header (Stage, Risk Score, Coach Badge, Quick Actions)
│   ├── Milestone Timeline (Interactive Stage Progress)
│   ├── Activity Log (Logins, Q&A, Calls, Submissions)
│   ├── Internal OSM Notes & Audit Trail
│   └── AI Suggested Intervention Engine
│
├── 4. Knowledge (Centralized Knowledge Engine Hub)
│   ├── Semantic Search Bar
│   ├── Q&A Archive & Video Transcripts
│   └── SOP Library by Stage
│
├── 5. Playbooks (Standard Process Execution Templates)
│   ├── Playbook Catalog
│   ├── Interactive Checklist & Video Tutorials
│   └── Resource Download Templates & Coach Notes
│
└── 6. Settings (System Configuration)
    ├── Risk Scoring Threshold Controls
    ├── Stage SLAs & Milestones Setup
    └── Team & Coach Permissions
```

---

## 4 PM Questions Blueprint per Screen

| Screen | 1. Decision to Make | 2. Required Info | 3. Primary Action | 4. OSM Success Metric |
| :--- | :--- | :--- | :--- | :--- |
| **Today** | Which 4-5 operators need immediate help right now? | Risk score, trigger reason, days in delay, recent wins. | Trigger intervention / Send check-in nudge. | Zero unhandled critical risk signals at end of day. |
| **Operators** | What is the macro distribution of health across my cohort? | Risk breakdown, stage density, last login dates, assigned coaches. | Filter high-risk cohorts & assign resources. | Balanced progression across stages without bottlenecks. |
| **Profile** | Why is this specific operator stuck and how do I unblock them? | Complete activity timeline, missed signals, previous notes, Q&A history. | Execute targeted playbook intervention. | Operator moves to next milestone within 5 days. |
| **Knowledge**| Has this exact operator problem been solved before? | Keywords, Q&A transcripts, video clips, step-by-step SOPs. | Share video timestamp or SOP link with operator. | Response time reduced from hours to `< 3 minutes`. |
| **Playbooks**| What exact step-by-step standard process should the operator follow? | Playbook checklist, resources, video guide, template files. | Assign playbook to operator. | High playbook completion rate & minimal human error. |
