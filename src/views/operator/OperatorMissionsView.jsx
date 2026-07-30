import React, { useState } from 'react';
import { CheckCircle2, Circle, ExternalLink, Upload, Clock, ArrowRight } from 'lucide-react';

export default function OperatorMissionsView({ operator }) {
  if (!operator) return null;
  const [simulatedEvidence, setSimulatedEvidence] = useState(false);
  const activeMission = operator.missions?.find(m => m.status === 'in-progress');

  if (!activeMission) {
    return (
      <div style={{ padding: '36px 48px 64px', width: '100%', minHeight: '100vh', background: 'var(--bg-dark)' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>Missions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>No active missions. Wait for your coach to unlock the next stage.</p>
      </div>
    );
  }

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
          CURRENT MISSION
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', marginBottom: '12px' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            {activeMission.title}
          </h1>
          <span style={{
            fontSize: '0.8125rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            flexShrink: 0,
            padding: '6px 12px',
            borderRadius: '6px',
            background: '#121214',
            border: '1px solid var(--border-subtle)'
          }}>
            <Clock size={14} /> {activeMission.estimatedTime}
          </span>
        </div>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {activeMission.businessObjective}
        </p>
      </div>

      {/* External Platform Link */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', maxWidth: '800px' }}>
        <button
          onClick={() => alert('Opening course lesson in Circle...')}
          style={{
            background: '#121214',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            padding: '8px 16px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8125rem',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          <ExternalLink size={14} /> Open Lesson in Circle
        </button>
      </div>

      {/* Checklist */}
      <div style={{ marginBottom: '40px', maxWidth: '800px' }}>
        <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
          MISSION CHECKLIST
        </span>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {activeMission.steps.map((step, idx) => (
            <div
              key={step.id}
              style={{
                padding: '20px 0',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ marginTop: '2px', flexShrink: 0 }}>
                {step.isDone ? <CheckCircle2 size={18} color="#32D583" /> : <Circle size={18} color="var(--text-muted)" />}
              </div>

              <div style={{ flex: 1 }}>
                <span style={{
                  fontSize: '0.9375rem',
                  color: step.isDone ? 'var(--text-muted)' : 'var(--text-primary)',
                  textDecoration: step.isDone ? 'line-through' : 'none',
                  fontWeight: step.isDone ? 400 : 500
                }}>
                  {step.title}
                </span>

                {step.requiresEvidence && !step.isDone && (
                  <div style={{
                    marginTop: '14px',
                    padding: '16px',
                    background: '#121214',
                    border: '1px dashed var(--border-subtle)',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                      Evidence required. Submit proof to unlock the next step and complete this mission.
                    </p>
                    {!simulatedEvidence ? (
                      <button
                        onClick={() => setSimulatedEvidence(true)}
                        style={{
                          background: '#F5F5F4',
                          color: '#0B0B0D',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '8px 14px',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <Upload size={14} /> Submit Evidence
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.8125rem', color: '#32D583', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
                        <CheckCircle2 size={14} /> Submitted. Pending review by coach.
                      </span>
                    )}
                  </div>
                )}

                {step.requiresEvidence && step.isDone && (
                  <span style={{ fontSize: '0.75rem', color: '#32D583', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 500 }}>
                    <CheckCircle2 size={12} /> Approved
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Reward & Submit */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '24px',
        borderTop: '1px solid var(--border-subtle)',
        maxWidth: '800px'
      }}>
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            REWARD
          </span>
          <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#32D583', display: 'block', marginTop: '2px' }}>
            {activeMission.reward}
          </span>
        </div>
        <button
          disabled={!simulatedEvidence}
          style={{
            background: '#F5F5F4',
            color: '#0B0B0D',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: simulatedEvidence ? 'pointer' : 'not-allowed',
            opacity: simulatedEvidence ? 1 : 0.4
          }}
        >
          Submit for Review
        </button>
      </div>

    </div>
  );
}
