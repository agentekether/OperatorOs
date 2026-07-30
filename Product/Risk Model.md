# Risk Engine & Scoring Model

Risk in OperatorOS is calculated dynamically by evaluating negative behavior signals, inactivity periods, and missed operational commitments.

---

## Dynamic Risk Score Formula

$$\text{Total Risk Score} = \sum (\text{Active Signals}) - \text{Intervention Mitigation Credit}$$

---

## Signal Matrix & Point Allocation

| Signal Code | Signal Trigger Condition | Weight | Severity Level | Auto-Suggested Intervention |
| :--- | :--- | :---: | :---: | :--- |
| `RISK_NO_LOGIN_5D` | No app login for **5 consecutive days** | **+10** | Low 🟡 | Send automated WhatsApp/Email nudge |
| `RISK_NO_LOGIN_7D` | No app login for **7 consecutive days** | **+20** | Medium 🟠 | Flag for 1-on-1 check-in |
| `RISK_NO_OUTREACH` | 0 prospects contacted in current sprint week | **+20** | Medium 🟠 | Assign `Outreach Revival Playbook` |
| `RISK_NO_QUESTIONS` | 0 questions asked or active posts in 10 days | **+10** | Low 🟡 | Prompt coach to ask feedback question |
| `RISK_MISSED_CALL` | Missed mandatory weekly mastermind call | **+15** | Medium 🟠 | Send call recording & attendance check |
| `RISK_LATENCY_10D` | No milestone advancement for **10 days** | **+30** | High 🔴 | Emergency 15-min intervention call |
| `RISK_FAILED_ASSIGN` | Assignment submitted failed review twice | **+25** | High 🔴 | Coach review & video teardown |

---

## Risk Score Tiers & Action Thresholds

```text
  0 - 15  Points ──🟢 HEALTHY    ── Low priority / Standard community cadence
 16 - 35  Points ──🟡 WATCHLIST  ── OSM checks in within 48 hours
 36 - 60  Points ──🟠 AT-RISK    ── Priority intervention on Today Screen
 61 - 100+ Points ──🔴 CRITICAL   ── Immediate intervention required (Emergency flag)
```

---

## Mitigation & Decay Rules
- **Intervention Completed**: Completing an assigned intervention reduces risk by **-20 points**.
- **Milestone Achieved**: Advancing a stage resets milestone latency risk to **0**.
- **Active Login**: Logging in after a lapse reduces `NO_LOGIN` penalty by **50%**.
