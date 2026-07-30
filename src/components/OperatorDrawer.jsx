import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/mockData';

export default function OperatorDrawer({ operator, onClose, onOpenIntervention, onAddNote }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!operator) return null;

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) { onAddNote(operator.id, noteText); setNoteText(''); }
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'journey', label: 'Journey' },
    { id: 'evidence', label: `Evidence (${operator.evidence?.length || 0})` },
    { id: 'coaching', label: 'Timeline' },
    { id: 'notes', label: `Notes (${operator.notes?.length || 0})` }
  ];

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      zIndex: 1000, display: 'flex', justifyContent: 'flex-end',
      background: 'rgba(0, 0, 0, 0.6)',
      animation: 'fadeIn 0.18s ease'
    }} onClick={onClose}>
      
      <div 
        style={{
          width: 'min(540px, 90vw)', height: '100%',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-subtle)',
          display: 'flex', flexDirection: 'column',
          animation: 'slideLeft 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Bar */}
        <div style={{
          padding: '12px 20px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.04em' }}>Inspector</span>
            <span className={`badge badge-${operator.riskLevel}`}>{operator.riskLevel}</span>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent', border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)', borderRadius: 'var(--radius-sm)',
            width: '28px', height: '28px',
            display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
          }}>
            <X size={14} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src={operator.avatar} alt={operator.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{operator.name}</h2>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{operator.email} · {operator.stage}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Score</span>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{operator.analysisScore}</div>
            </div>
          </div>

          {/* Primary Focus: Intervention */}
          {operator.suggestedIntervention ? (
            <div style={{
              borderLeft: '2px solid var(--state-danger)',
              padding: '16px 16px 16px 20px',
              marginBottom: '24px',
              background: 'var(--bg-elevated)',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)', fontSize: '0.6875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                <Zap size={12} /> Recommended Action
              </div>
              <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>{operator.suggestedIntervention.title}</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>{operator.suggestedIntervention.description}</p>
              <button className="primary-button" style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => { onClose(); onOpenIntervention(operator); }}
              >
                Execute Playbook <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <div style={{
              borderLeft: '2px solid var(--state-success)',
              padding: '12px 16px 12px 20px',
              marginBottom: '24px',
              background: 'var(--bg-elevated)',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0'
            }}>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>No intervention required. Operator is performing well.</span>
            </div>
          )}

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--border-subtle)', marginBottom: '20px' }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 12px', background: 'none', border: 'none',
                  borderBottom: activeTab === tab.id ? '1px solid var(--text-primary)' : '1px solid transparent',
                  color: activeTab === tab.id ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer'
                }}
              >{tab.label}</button>
            ))}
          </div>

          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {operator.riskSignals && operator.riskSignals.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>Risk Signals</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                    {operator.riskSignals.map((signal, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>{signal.label}</span>
                        <span style={{ color: '#FCA5A5', fontWeight: 600, fontSize: '0.8125rem', fontFamily: 'var(--font-mono)' }}>+{signal.points}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h4 style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>Event Stream</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  {operator.events && operator.events.length > 0 ? operator.events.map(evt => (
                    <div key={evt.id} style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>{evt.type}</span>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{evt.date}</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{evt.text} · via {evt.source}</p>
                    </div>
                  )) : <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>No events.</p>}
                </div>
              </div>
            </div>
          )}

          {/* JOURNEY */}
          {activeTab === 'journey' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {JOURNEY_MILESTONES.map(m => {
                const isCompleted = m.step < operator.stageNumber;
                const isCurrent = m.step === operator.stageNumber;
                return (
                  <div key={m.step} style={{ display: 'flex', gap: '12px', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)', opacity: isCompleted || isCurrent ? 1 : 0.3 }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%', marginTop: '2px',
                      background: isCompleted ? 'var(--state-success)' : isCurrent ? 'var(--text-primary)' : 'var(--bg-elevated)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isCompleted || isCurrent ? 'var(--bg-dark)' : 'var(--text-muted)',
                      fontSize: '0.625rem', fontWeight: 600, flexShrink: 0
                    }}>
                      {isCompleted ? <CheckCircle2 size={12} /> : m.step}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: isCurrent ? 600 : 400, color: isCurrent ? 'var(--text-primary)' : 'var(--text-secondary)', display: 'block' }}>{m.name}</span>
                      {isCurrent && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.objective}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* EVIDENCE */}
          {activeTab === 'evidence' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {operator.evidence && operator.evidence.length > 0 ? operator.evidence.map(ev => (
                <div key={ev.id} style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>{ev.text}</span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--state-success)', fontWeight: 500 }}>Approved</span>
                  </div>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{ev.type} · {ev.date}</span>
                </div>
              )) : <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>No evidence uploaded.</p>}
            </div>
          )}

          {/* COACHING TIMELINE */}
          {activeTab === 'coaching' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {operator.coachingTimeline && operator.coachingTimeline.length > 0 ? operator.coachingTimeline.map(ct => (
                <div key={ct.id} style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{ct.type === 'intervention' ? 'Action' : 'Feedback'}</span>
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{ct.date}</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{ct.text}</p>
                </div>
              )) : <p style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>No timeline entries.</p>}
            </div>
          )}

          {/* NOTES */}
          {activeTab === 'notes' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <form onSubmit={handleNoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <textarea className="input-field" placeholder="Add a note..." rows={3} value={noteText} onChange={(e) => setNoteText(e.target.value)} style={{ resize: 'none' }} />
                <button type="submit" className="primary-button" style={{ alignSelf: 'flex-end', padding: '5px 12px', fontSize: '0.75rem' }}>Save</button>
              </form>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {operator.notes && operator.notes.map(note => (
                  <div key={note.id} style={{ padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{note.author}</span>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{note.date}</span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{note.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
