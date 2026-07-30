import React from 'react';
import { JOURNEY_MILESTONES } from '../../data/mockData';
import { CheckCircle2, Lock, ArrowRight } from 'lucide-react';

export default function OperatorJourneyView({ operator }) {
  if (!operator) return null;

  return (
    <div style={{
      padding: '36px 48px 64px',
      width: '100%',
      minHeight: '100vh',
      background: 'var(--bg-dark)'
    }}>
      
      {/* Header */}
      <div style={{ marginBottom: '40px', maxWidth: '800px' }}>
        <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
          JOURNEY MAP
        </span>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '8px' }}>
          Transformation
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          Your complete journey. Focus on the current active stage; future stages unlock as you prove execution.
        </p>
      </div>

      {/* Stepper List */}
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px' }}>
        {JOURNEY_MILESTONES.map((m) => {
          const isCompleted = m.step < operator.stageNumber;
          const isCurrent = m.step === operator.stageNumber;
          const isLocked = m.step > operator.stageNumber;

          return (
            <div
              key={m.step}
              style={{
                padding: isCurrent ? '28px 24px' : '18px 0',
                borderBottom: '1px solid var(--border-subtle)',
                background: isCurrent ? '#121214' : 'transparent',
                borderRadius: isCurrent ? '12px' : '0',
                border: isCurrent ? '1px solid var(--border-subtle)' : 'none',
                marginBottom: isCurrent ? '16px' : '0',
                opacity: isLocked ? 0.35 : 1
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '26px', height: '26px', borderRadius: '50%', flexShrink: 0, marginTop: '2px',
                  background: isCompleted ? '#32D583' : isCurrent ? 'var(--text-primary)' : '#18181B',
                  border: isLocked ? '1px solid var(--border-subtle)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: isCompleted || isCurrent ? '#0B0B0D' : 'var(--text-muted)',
                  fontSize: '0.75rem', fontWeight: 700
                }}>
                  {isCompleted ? <CheckCircle2 size={14} /> : isLocked ? <Lock size={12} /> : m.step}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{
                      fontSize: isCurrent ? '1.25rem' : '0.9375rem',
                      fontWeight: isCurrent ? 700 : 500,
                      color: isLocked ? 'var(--text-muted)' : 'var(--text-primary)'
                    }}>
                      {m.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {m.sla}
                    </span>
                  </div>

                  {/* Expanded content for current active stage */}
                  {isCurrent && (
                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {m.objective}
                      </p>

                      {m.expectedOutcome && (
                        <div style={{ padding: '12px 16px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>
                            Expected Outcome
                          </span>
                          <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                            {m.expectedOutcome}
                          </span>
                        </div>
                      )}
                      
                      {m.requiredMissions.length > 0 && (
                        <div>
                          <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                            Required Missions
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {m.requiredMissions.map((rm, i) => (
                              <div key={i} style={{ fontSize: '0.875rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ color: '#32D583' }}>·</span> {rm}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {m.evidenceRequired && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                          <span>Evidence: <strong style={{ color: 'var(--text-primary)' }}>{m.evidenceRequired}</strong></span>
                          {m.reward && <span style={{ color: '#32D583', fontWeight: 600 }}>Reward: {m.reward}</span>}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
