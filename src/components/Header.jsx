import React from 'react';
import { Activity, Search, LayoutDashboard, User } from 'lucide-react';

export default function Header({ operators, activeOsm, setActiveOsm, searchQuery, setSearchQuery, appMode, setAppMode }) {
  const atRiskCount = operators.filter(o => o.riskLevel === 'critical' || o.riskLevel === 'at-risk').length;

  return (
    <header className="header-bar" style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 24px',
      height: '52px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Activity size={18} color="var(--text-primary)" />
        <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>OperatorOS</span>
        <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', padding: '1px 6px', border: '1px solid var(--border-subtle)', borderRadius: '3px', fontWeight: 500 }}>v1.1</span>
      </div>

      {/* Mode Toggle */}
      <div className="hide-on-mobile" style={{ display: 'flex', background: 'var(--bg-dark)', borderRadius: 'var(--radius-md)', padding: '2px', border: '1px solid var(--border-subtle)' }}>
        <button
          onClick={() => setAppMode('manager')}
          style={{
            padding: '4px 12px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            fontSize: '0.75rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: appMode === 'manager' ? 'var(--bg-elevated)' : 'transparent',
            color: appMode === 'manager' ? 'var(--text-primary)' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          <LayoutDashboard size={12} /> Manager
        </button>
        <button
          onClick={() => setAppMode('operator')}
          style={{
            padding: '4px 12px',
            borderRadius: 'var(--radius-sm)',
            border: 'none',
            fontSize: '0.75rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            background: appMode === 'operator' ? 'var(--bg-elevated)' : 'transparent',
            color: appMode === 'operator' ? 'var(--text-primary)' : 'var(--text-muted)',
            cursor: 'pointer',
            transition: 'all var(--transition-fast)'
          }}
        >
          <User size={12} /> Operator
        </button>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        
        {appMode === 'manager' ? (
          <>
            <div className="hide-on-mobile" style={{ position: 'relative' }}>
              <Search size={13} color="var(--text-muted)" style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                className="input-field"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ paddingLeft: '28px', width: '140px', fontSize: '0.75rem', height: '30px', borderRadius: 'var(--radius-md)' }}
              />
            </div>
            
            {atRiskCount > 0 && (
              <span style={{ fontSize: '0.6875rem', fontWeight: 500, color: '#FCA5A5', padding: '2px 8px', background: 'var(--risk-critical-bg)', borderRadius: 'var(--radius-sm)' }}>
                {atRiskCount} at risk
              </span>
            )}

            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '26px', height: '26px', borderRadius: '50%',
                background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 600, fontSize: '0.6875rem'
              }}>
                {activeOsm.slice(0, 2)}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)' }}>{activeOsm}</span>
            </div>
          </>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Lucas Vance" style={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }} />
             <span className="hide-on-mobile" style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Lucas Vance</span>
          </div>
        )}
      </div>
    </header>
  );
}
