import React, { useState } from 'react';
import { Filter, ArrowRight } from 'lucide-react';

export default function OperatorsView({ operators, onSelectOperator, onOpenIntervention }) {
  const [riskFilter, setRiskFilter] = useState('all');
  const [stageFilter, setStageFilter] = useState('all');

  const filteredOperators = operators.filter((op) => {
    if (riskFilter !== 'all' && op.riskLevel !== riskFilter) return false;
    if (stageFilter !== 'all' && op.stage !== stageFilter) return false;
    return true;
  });

  return (
    <div style={{
      padding: 'var(--spacing-page-v) var(--spacing-page-h) 64px',
      width: '100%',
      minHeight: '100vh',
      background: 'var(--bg-dark)'
    }}>
      
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '28px' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            OPERATORS DIRECTORY
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '4px' }}>
            All Operators
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            {filteredOperators.length} of {operators.length} members in your community
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--border-subtle)',
        flexWrap: 'wrap'
      }}>
        <Filter size={14} color="var(--text-muted)" />
        
        <select
          className="input-field"
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          style={{ width: 'auto', padding: '6px 12px', fontSize: '0.8125rem', background: '#121214' }}
        >
          <option value="all">All Risk Levels</option>
          <option value="critical">Critical</option>
          <option value="at-risk">At Risk</option>
          <option value="watchlist">Watchlist</option>
          <option value="healthy">Healthy</option>
        </select>

        <select
          className="input-field"
          value={stageFilter}
          onChange={(e) => setStageFilter(e.target.value)}
          style={{ width: 'auto', padding: '6px 12px', fontSize: '0.8125rem', background: '#121214' }}
        >
          <option value="all">All Journey Stages</option>
          <option value="Onboarding">Onboarding</option>
          <option value="Tools Connected">Tools Connected</option>
          <option value="First Outreach">First Outreach</option>
          <option value="First Sales Call">First Sales Call</option>
          <option value="First Client">First Client</option>
        </select>

        {(riskFilter !== 'all' || stageFilter !== 'all') && (
          <button
            onClick={() => { setRiskFilter('all'); setStageFilter('all'); }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Table (Desktop Only) */}
      <div className="table-responsive desktop-only">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              {['Operator', 'Stage & Progress', 'Risk Score', 'Inactivity', 'Coach', ''].map(h => (
                <th
                  key={h}
                  style={{
                    padding: '12px 0',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredOperators.map((op) => {
              const progressPct = Math.round((op.stageNumber / 11) * 100);
              return (
                <tr
                  key={op.id}
                  onClick={() => onSelectOperator(op)}
                  className="table-row-hover"
                  style={{ borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer' }}
                >
                  <td style={{ padding: '16px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img
                        src={op.avatar}
                        alt={op.name}
                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                      <div>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                          {op.name}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {op.email}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '16px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>{op.stage}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {op.stageNumber}/11
                      </span>
                    </div>
                    <div style={{ width: '140px', height: '3px', background: '#18181B', borderRadius: '2px', marginTop: '6px' }}>
                      <div style={{ width: `${progressPct}%`, height: '100%', background: 'var(--text-primary)', borderRadius: '2px' }} />
                    </div>
                  </td>

                  <td style={{ padding: '16px 0' }}>
                    <span className={`badge badge-${op.riskLevel}`}>
                      {op.riskScore}
                    </span>
                  </td>

                  <td style={{ padding: '16px 0' }}>
                    <span style={{
                      fontSize: '0.8125rem',
                      color: op.lastLoginDays >= 5 ? '#EF4444' : 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: op.lastLoginDays >= 5 ? 600 : 400
                    }}>
                      {op.lastLoginDays === 0 ? 'Today' : `${op.lastLoginDays}d ago`}
                    </span>
                    <span style={{ fontSize: '0.75rem', display: 'block', color: 'var(--text-muted)' }}>
                      {op.daysInStage}d in stage
                    </span>
                  </td>

                  <td style={{ padding: '16px 0', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {op.coach}
                  </td>

                  <td style={{ padding: '16px 0', textAlign: 'right' }}>
                    {op.suggestedIntervention && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenIntervention(op);
                        }}
                        style={{
                          background: '#F5F5F4',
                          color: '#0B0B0D',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '6px 12px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        Intervene <ArrowRight size={13} />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Operator Directory Cards (Mobile Only) */}
      <div className="mobile-only" style={{ flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
        {filteredOperators.map((op) => {
          const progressPct = Math.round((op.stageNumber / 11) * 100);
          return (
            <div
              key={op.id}
              onClick={() => onSelectOperator(op)}
              style={{
                background: '#121214',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                cursor: 'pointer'
              }}
            >
              {/* Top Row: Avatar + Name + Risk Score */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src={op.avatar}
                    alt={op.name}
                    style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                      {op.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {op.email}
                    </span>
                  </div>
                </div>
                <span className={`badge badge-${op.riskLevel}`}>
                  {op.riskScore}
                </span>
              </div>

              {/* Middle Row: Stage & Progress Bar */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>{op.stage}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {op.stageNumber}/11 • {progressPct}%
                  </span>
                </div>
                <div style={{ width: '100%', height: '4px', background: '#18181B', borderRadius: '2px' }}>
                  <div style={{ width: `${progressPct}%`, height: '100%', background: 'var(--text-primary)', borderRadius: '2px' }} />
                </div>
              </div>

              {/* Bottom Row: Last Login, Coach, Intervene */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '4px', borderTop: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Coach: {op.coach}</span> • <span style={{ color: op.lastLoginDays >= 5 ? '#EF4444' : 'var(--text-secondary)' }}>{op.lastLoginDays === 0 ? 'Today' : `${op.lastLoginDays}d ago`}</span>
                </div>

                {op.suggestedIntervention && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenIntervention(op);
                    }}
                    style={{
                      background: '#F5F5F4',
                      color: '#0B0B0D',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    Intervene <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
