import React, { useState } from 'react';
import { PLAYBOOKS } from '../data/mockData';
import { Layers, CheckSquare, Download, Video, FileCode, CheckCircle2 } from 'lucide-react';

export default function PlaybooksView({ onOpenIntervention }) {
  const [selectedPlaybook, setSelectedPlaybook] = useState(PLAYBOOKS[0]);
  const [checkedSteps, setCheckedSteps] = useState({});

  const toggleStep = (stepIdx) => {
    setCheckedSteps(prev => ({
      ...prev,
      [stepIdx]: !prev[stepIdx]
    }));
  };

  return (
    <div style={{ padding: '28px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
            Standard Operating Playbooks
          </span>
          <h1 className="h1-title" style={{ marginTop: '2px' }}>Operational Playbooks Catalog</h1>
          <p className="text-sub" style={{ marginTop: '2px' }}>
            Repeatable process frameworks designed to resolve 80% of operator bottlenecks automatically.
          </p>
        </div>
      </div>

      {/* 2-Column Layout */}
      <div className="grid-2-cols">

        {/* Playbook Catalog Selector (Left) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {PLAYBOOKS.map((pb) => {
            const isSelected = selectedPlaybook?.id === pb.id;

            return (
              <div
                key={pb.id}
                className="glass-card glass-card-interactive"
                onClick={() => setSelectedPlaybook(pb)}
                style={{
                  padding: '18px',
                  borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                  background: isSelected ? 'rgba(6, 182, 212, 0.08)' : 'var(--bg-card)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.725rem', background: 'var(--bg-input)', color: 'var(--accent-cyan)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(6, 182, 212, 0.2)', fontWeight: 600 }}>
                    {pb.targetStage}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{pb.steps.length} Steps</span>
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF' }}>
                  {pb.title}
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {pb.objective}
                </p>
              </div>
            );
          })}
        </div>

        {/* Playbook Runner (Right) */}
        <div>
          {selectedPlaybook ? (
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <Layers size={20} color="var(--accent-cyan)" />
                <span style={{ fontSize: '0.775rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Active Execution Framework
                </span>
              </div>

              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFF' }}>
                {selectedPlaybook.title}
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {selectedPlaybook.objective}
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>Duration: <strong style={{ color: '#FFF' }}>{selectedPlaybook.estimatedDuration || '7 Days'}</strong></span>
                <span>Stage: <strong style={{ color: '#FFF' }}>{selectedPlaybook.targetStage}</strong></span>
              </div>

              {/* Checklist Section */}
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginBottom: '12px' }}>
                  Step-by-Step Execution Checklist
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {selectedPlaybook.steps.map((step, idx) => {
                    const isDone = checkedSteps[idx];

                    return (
                      <div
                        key={idx}
                        onClick={() => toggleStep(idx)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          background: 'var(--bg-surface)',
                          padding: '12px 16px',
                          borderRadius: 'var(--radius-md)',
                          border: isDone ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <div style={{ marginTop: '2px' }}>
                          {isDone ? (
                            <CheckCircle2 size={18} color="var(--risk-healthy)" />
                          ) : (
                            <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '2px solid var(--text-muted)' }} />
                          )}
                        </div>
                        <div>
                          <strong style={{ fontSize: '0.875rem', color: isDone ? '#6EE7B7' : '#FFF', textDecoration: isDone ? 'line-through' : 'none' }}>
                            {step.title}
                          </strong>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Resources & Assets */}
              <div className="grid-2-cols" style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                
                <div style={{ background: 'var(--bg-surface)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-purple)', fontSize: '0.825rem', fontWeight: 700 }}>
                    <Video size={16} /> Video Guide
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: 600, marginTop: '4px' }}>
                    {selectedPlaybook.videoGuide || 'Walkthrough Masterclass'}
                  </p>
                </div>

                <div style={{ background: 'var(--bg-surface)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontSize: '0.825rem', fontWeight: 700 }}>
                    <Download size={16} /> Asset Template
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: 600, marginTop: '4px' }}>
                    {selectedPlaybook.templateLink || 'Standard Template Pack (.zip)'}
                  </p>
                </div>

              </div>

              {/* Resources Checklist & Evidence */}
              {selectedPlaybook.resources && (
                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.725rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                    Included Resources
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedPlaybook.resources.map((res, idx) => (
                      <span key={idx} style={{ fontSize: '0.775rem', padding: '4px 10px', background: 'var(--bg-input)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: 'var(--text-primary)' }}>
                        • {res}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedPlaybook.requiredEvidence && (
                <div style={{
                  marginTop: '14px',
                  padding: '12px 14px',
                  background: 'rgba(50, 213, 131, 0.08)',
                  border: '1px solid rgba(50, 213, 131, 0.25)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <span style={{ fontSize: '0.725rem', color: '#32D583', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
                      Required Evidence
                    </span>
                    <strong style={{ fontSize: '0.85rem', color: '#FFF', marginTop: '2px', display: 'block' }}>
                      {selectedPlaybook.requiredEvidence}
                    </strong>
                  </div>
                  <CheckCircle2 size={18} color="#32D583" />
                </div>
              )}

              {selectedPlaybook.relatedKnowledge && (
                <div style={{
                  marginTop: '14px',
                  padding: '12px 14px',
                  background: 'rgba(139, 92, 246, 0.08)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  <span style={{ fontSize: '0.725rem', color: 'var(--accent-purple)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Related Knowledge Articles
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {selectedPlaybook.relatedKnowledge.map((art, idx) => (
                      <span key={idx} style={{ fontSize: '0.775rem', color: '#FFF', background: 'rgba(139, 92, 246, 0.15)', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                        📖 {art}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
              <p className="text-sub">Select a playbook from the catalog to run steps.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
