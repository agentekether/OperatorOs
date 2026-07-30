import React from 'react';
import { ShieldAlert, PartyPopper, CheckCircle2, ChevronRight, FileSearch, ShieldCheck } from 'lucide-react';

export default function TodayView({ operators, activeOsm, onSelectOperator, onOpenIntervention }) {
  // 1. Triage: Critical & At-Risk
  const atRiskOperators = operators.filter(o => o.riskLevel === 'critical' || o.riskLevel === 'at-risk')
    .sort((a, b) => b.riskScore - a.riskScore);

  // 2. Pending Reviews (Evidence Engine)
  const pendingReviews = operators.filter(o => o.pendingReviews && o.pendingReviews > 0);

  // 3. Celebrations (Achievements Engine)
  const celebrations = operators.filter(o => o.isCelebration);

  return (
    <div style={{ padding: '28px', maxWidth: '1100px', margin: '0 auto' }}>
      
      <div style={{ marginBottom: '32px' }}>
        <h1 className="h1-title">Good morning, {activeOsm.split(' ')[0]}</h1>
        <p className="text-sub" style={{ marginTop: '4px' }}>Here is your operational triage for today.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '28px' }}>
        
        {/* Left Column: Triage & Pending Reviews */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Action Required / Risk Triage */}
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldAlert size={18} color="var(--risk-critical)" /> Immediate Action Required ({atRiskOperators.length})
            </h2>
            
            {atRiskOperators.length === 0 ? (
              <div className="glass-card" style={{ padding: '32px', textAlign: 'center' }}>
                <ShieldCheck size={32} color="var(--risk-healthy)" style={{ margin: '0 auto 16px auto' }} />
                <h3 style={{ color: '#FFF' }}>All clear!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>No operators are currently at risk.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {atRiskOperators.map(op => (
                  <div key={op.id} className="glass-card risk-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div className={`status-indicator ${op.riskLevel}`} style={{ width: '4px', height: '40px', borderRadius: '4px' }} />
                      <img src={op.avatar} alt={op.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <strong style={{ fontSize: '1rem', color: '#FFF' }}>{op.name}</strong>
                          <span className={`badge badge-${op.riskLevel}`}>{op.riskScore} Risk Score</span>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Stage: {op.stage}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {op.suggestedIntervention && (
                        <button 
                          className="primary-button"
                          onClick={(e) => { e.stopPropagation(); onOpenIntervention(op); }}
                        >
                          Execute Playbook
                        </button>
                      )}
                      <button 
                        className="icon-button"
                        onClick={() => onSelectOperator(op)}
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pending Evidence Reviews */}
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileSearch size={18} color="var(--accent-purple)" /> Pending Evidence Reviews ({pendingReviews.length})
            </h2>
            
            {pendingReviews.length === 0 ? (
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No pending evidence to review.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {pendingReviews.map(op => (
                  <div key={op.id} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src={op.avatar} alt={op.name} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                      <div>
                        <strong style={{ fontSize: '0.9rem', color: '#FFF', display: 'block' }}>{op.name}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Submitted {op.pendingReviews} item(s) for review</span>
                      </div>
                    </div>
                    <button 
                      style={{ background: 'var(--bg-input)', border: '1px solid var(--border-subtle)', padding: '6px 12px', borderRadius: '4px', color: '#FFF', fontSize: '0.8rem', cursor: 'pointer' }}
                      onClick={() => onSelectOperator(op)}
                    >
                      Review Evidence
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Celebrations */}
        <div>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PartyPopper size={18} color="var(--risk-healthy)" /> Celebrate Wins
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {celebrations.map(op => (
              <div key={op.id} className="glass-card" style={{ padding: '20px', borderTop: '3px solid var(--risk-healthy)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <img src={op.avatar} alt={op.name} style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: '#FFF' }}>{op.name}</strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{op.stage}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--risk-healthy)', fontWeight: 600, marginBottom: '16px' }}>
                  {op.celebrationMsg}
                </p>
                
                {op.suggestedIntervention && (
                  <button 
                    className="primary-button" 
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => onOpenIntervention(op)}
                  >
                    Assign Next Step Playbook
                  </button>
                )}
              </div>
            ))}
            
            {celebrations.length === 0 && (
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)' }}>No new milestones reached today.</p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
