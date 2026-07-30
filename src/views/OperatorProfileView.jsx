import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, AlertCircle, Map, User, CheckCircle2, FileSearch } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/mockData';

export default function OperatorProfileView({ operator, onBack, onOpenIntervention, onAddNote }) {
  if (!operator) return null;

  const [noteText, setNoteText] = useState('');
  const [activeTab, setActiveTab] = useState('overview'); // overview, timeline, evidence

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    if (noteText.trim()) {
      onAddNote(operator.id, noteText);
      setNoteText('');
    }
  };

  return (
    <div style={{ padding: '28px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Back & Breadcrumb */}
      <button 
        onClick={onBack}
        style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '24px' }}
      >
        <ArrowLeft size={16} /> Back to Directory
      </button>

      {/* Header Profile Info */}
      <div className="glass-card" style={{ padding: '32px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img src={operator.avatar} alt={operator.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <h1 className="h1-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {operator.name}
              {operator.riskLevel === 'critical' && <span className="badge badge-critical" style={{ fontSize: '0.75rem' }}>Critical Risk</span>}
            </h1>
            <div style={{ display: 'flex', gap: '16px', marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span>{operator.email}</span>
              <span>•</span>
              <span>Coach: {operator.coach}</span>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Analysis Score</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>{operator.analysisScore}</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)' }}>
        <button 
          onClick={() => setActiveTab('overview')}
          style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'overview' ? '2px solid var(--accent-cyan)' : '2px solid transparent', color: activeTab === 'overview' ? 'var(--accent-cyan)' : 'var(--text-muted)', fontWeight: 700, cursor: 'pointer' }}
        >
          <User size={14} style={{ display: 'inline', marginRight: '6px' }} /> Overview
        </button>
        <button 
          onClick={() => setActiveTab('timeline')}
          style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'timeline' ? '2px solid var(--accent-cyan)' : '2px solid transparent', color: activeTab === 'timeline' ? 'var(--accent-cyan)' : 'var(--text-muted)', fontWeight: 700, cursor: 'pointer' }}
        >
          <Map size={14} style={{ display: 'inline', marginRight: '6px' }} /> Journey Timeline
        </button>
        <button 
          onClick={() => setActiveTab('evidence')}
          style={{ padding: '12px 24px', background: 'none', border: 'none', borderBottom: activeTab === 'evidence' ? '2px solid var(--accent-cyan)' : '2px solid transparent', color: activeTab === 'evidence' ? 'var(--accent-cyan)' : 'var(--text-muted)', fontWeight: 700, cursor: 'pointer' }}
        >
          <FileSearch size={14} style={{ display: 'inline', marginRight: '6px' }} /> Evidence Logs
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '28px' }}>
        
        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {activeTab === 'overview' && (
            <>
              {/* Risk Signals */}
              {operator.riskSignals && operator.riskSignals.length > 0 && (
                <div className="glass-card" style={{ borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={18} color="var(--risk-critical)" /> Active Risk Signals
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {operator.riskSignals.map((signal, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ color: '#FFF', fontSize: '0.9rem' }}>{signal.label}</span>
                        <span style={{ color: 'var(--risk-critical)', fontWeight: 700, fontSize: '0.9rem' }}>+{signal.points}</span>
                      </div>
                    ))}
                  </div>
                  {operator.suggestedIntervention && (
                    <div style={{ marginTop: '20px', padding: '16px', background: 'var(--bg-input)', borderLeft: '3px solid var(--accent-purple)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
                      <strong style={{ display: 'block', color: 'var(--accent-purple)', fontSize: '0.9rem', marginBottom: '4px' }}>AI Recommended Playbook: {operator.suggestedIntervention.title}</strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '12px' }}>{operator.suggestedIntervention.description}</p>
                      <button className="primary-button" onClick={() => onOpenIntervention(operator)}>Review Intervention</button>
                    </div>
                  )}
                </div>
              )}

              {/* Event Stream (The New Event Engine) */}
              <div className="glass-card">
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px' }}>Recent Events Stream</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {operator.events && operator.events.length > 0 ? operator.events.map(evt => (
                    <div key={evt.id} style={{ padding: '12px', borderLeft: '2px solid var(--border-subtle)', background: 'var(--bg-input)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ fontSize: '0.85rem', color: '#FFF' }}>{evt.type} <span style={{ color: 'var(--accent-cyan)', fontWeight: 400 }}>via {evt.source}</span></strong>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{evt.date}</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{evt.text}</p>
                    </div>
                  )) : (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No recent events recorded.</p>
                  )}
                </div>
              </div>
            </>
          )}

          {activeTab === 'timeline' && (
            <div className="glass-card">
               <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '24px' }}>Journey Timeline</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                 {JOURNEY_MILESTONES.map((m) => {
                   const isCompleted = m.step < operator.stageNumber;
                   const isCurrent = m.step === operator.stageNumber;
                   return (
                     <div key={m.step} style={{ display: 'flex', gap: '16px', opacity: isCompleted || isCurrent ? 1 : 0.4 }}>
                       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                         <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: isCompleted ? 'var(--risk-healthy)' : isCurrent ? 'var(--accent-cyan)' : 'var(--bg-input)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                           {isCompleted && <CheckCircle2 size={14} color="#FFF" />}
                         </div>
                         <div style={{ width: '2px', height: '100%', background: 'var(--border-subtle)', margin: '8px 0' }} />
                       </div>
                       <div style={{ paddingBottom: '24px' }}>
                         <strong style={{ color: '#FFF', fontSize: '1rem', display: 'block' }}>{m.name}</strong>
                         <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{m.objective}</span>
                       </div>
                     </div>
                   );
                 })}
               </div>
            </div>
          )}

          {activeTab === 'evidence' && (
            <div className="glass-card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '24px' }}>Submitted Evidence Log</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {operator.evidence && operator.evidence.length > 0 ? operator.evidence.map(ev => (
                  <div key={ev.id} style={{ display: 'flex', gap: '16px', padding: '16px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '8px', color: 'var(--risk-healthy)' }}>
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                       <strong style={{ color: '#FFF', fontSize: '0.95rem', display: 'block', marginBottom: '4px' }}>{ev.text}</strong>
                       <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                         <span>Type: {ev.type}</span>
                         <span>Approved: {ev.date}</span>
                       </div>
                    </div>
                  </div>
                )) : (
                  <p style={{ color: 'var(--text-muted)' }}>No evidence submitted yet.</p>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Right Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Achievements */}
          {operator.achievements && operator.achievements.length > 0 && (
            <div className="glass-card">
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px' }}>Achievements</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {operator.achievements.map(ach => (
                  <div key={ach.id} style={{ background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)', color: '#FCD34D', padding: '6px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                    {ach.title}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internal Notes */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={16} color="var(--text-muted)" /> Internal Notes
            </h3>
            
            <form onSubmit={handleNoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <textarea 
                className="input-field" 
                placeholder="Log a private note..." 
                rows={3} 
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                style={{ resize: 'none' }}
              />
              <button type="submit" className="primary-button" style={{ alignSelf: 'flex-end', padding: '6px 16px', fontSize: '0.8rem' }}>Save Note</button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {operator.notes.map(note => (
                <div key={note.id} style={{ paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ fontSize: '0.8rem', color: '#FFF' }}>{note.author}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{note.date}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{note.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
