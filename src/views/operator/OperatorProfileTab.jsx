import React from 'react';
import { User, Activity, Trophy, Mail } from 'lucide-react';

export default function OperatorProfileTab({ operator }) {
  if (!operator) return null;

  return (
    <div style={{
      padding: '36px 48px 64px',
      width: '100%',
      minHeight: '100vh',
      background: 'var(--bg-dark)'
    }}>
      
      {/* Profile Header */}
      <div style={{ marginBottom: '40px', maxWidth: '800px', display: 'flex', alignItems: 'center', gap: '24px', paddingBottom: '32px', borderBottom: '1px solid var(--border-subtle)' }}>
        <img 
          src={operator.avatar} 
          alt={operator.name} 
          style={{ width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            OPERATOR PROFILE
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '4px' }}>
            {operator.name}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            <Mail size={16} /> {operator.email}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '960px' }}>
        
        {/* Stats Column */}
        <div style={{
          background: '#121214',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
            Execution Stats
          </h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              <Activity size={18} /> Analysis Score
            </div>
            <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{operator.analysisScore}/100</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              <Trophy size={18} /> Current Stage
            </div>
            <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{operator.stage}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              <User size={18} /> Assigned Coach
            </div>
            <strong style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{operator.coach}</strong>
          </div>
        </div>

        {/* Activity Timeline Column */}
        <div style={{
          background: '#121214',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '20px' }}>
            Recent Activity Log
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {operator.activity?.slice(0, 5).map((act, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--text-primary)', marginTop: '6px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>{act.text}</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{act.date}</span>
                </div>
              </div>
            )) || <p style={{ fontSize: '0.9375rem', color: 'var(--text-muted)' }}>No recent activity.</p>}
          </div>
        </div>

      </div>

    </div>
  );
}
