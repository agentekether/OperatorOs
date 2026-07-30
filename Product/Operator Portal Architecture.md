# Operator Portal Architecture

The **Operator Portal** is the second experience within OperatorOS, designed specifically for the community member (Operator) progressing through a coaching program.

---

## Design & Product Principles

1. **Mobile-First & Extremely Simple:** It must feel like a lightweight, daily-use application designed for execution.
2. **Execution over Learning:** OperatorOS does NOT replace Circle or Skool. The learning experience, courses, community discussions, and events live in those external platforms.
3. **Answering One Question:** The portal exists to answer: *"What should I do next to move forward?"*
4. **Shared Data Model:** The Manager and Operator interact with the same backend (Journey Engine, Risk Engine, Analysis Engine). Every action completed by the Operator generates events that immediately update the Manager's dashboard.

---

## Navigation & Screen Structure

The portal consists of 6 core screens, accessible via a mobile-friendly navigation bar:

1. **Home:** The daily summary dashboard. Shows Welcome message, Analysis Score, Current Mission, Today's Actions, Upcoming Coaching, and quick access links.
2. **Journey:** A visual timeline of the 11 stages (from *Joined* to *Certified*), highlighting the current stage and the upcoming milestone.
3. **Missions:** Replaces traditional tasks. Missions group related execution steps (e.g., *Watch Module in Circle*, *Download Template*, *Contact 20 prospects*).
4. **Knowledge:** A searchable execution library (SOPs, FAQs, AI Summaries, Checklists). Does not duplicate course content, but provides direct links ("Open original lesson in Circle").
5. **Coach:** A dedicated space for 1-on-1 feedback, coach messages, assigned interventions, and call scheduling.
6. **Profile:** Operator's personal stats, achievements, certifications, and activity timeline.

---

## The Integration Philosophy

When an Operator needs to consume content, OperatorOS simply redirects them via deep links:
- `[Watch Module] -> Open in Circle`
- `[Join Mastermind] -> Open in Skool`

OperatorOS tracks the *completion* of the action, not the content itself. This ensures OperatorOS remains a pure execution and coaching layer.
