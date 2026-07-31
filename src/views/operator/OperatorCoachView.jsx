import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';

export default function OperatorCoachView({ operator }) {
  if (!operator) return null;

  return (
    <div style={{
      padding: 'var(--spacing-page-v) var(--spacing-page-h) 64px',
      width: '100%',
      minHeight: '100vh',
      background: 'var(--bg-dark)'
    }}>
      
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '40px', maxWidth: '800px' }}>
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            COACHING & FEEDBACK
          </span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '8px' }}>
            Coach Timeline
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
            Feedback and guidance from your assigned coach ({operator.coach}).
          </p>
        </div>
        <button style={{
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
        }}>
          <Calendar size={14} /> Schedule Check-in Call
        </button>
      </div>

      {/* Pending Alert */}
      {operator.pendingReviews > 0 && (
        <div style={{
          padding: '16px 20px',
          marginBottom: '32px',
          maxWidth: '800px',
          background: '#121214',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '8px',
          color: '#F59E0B',
          fontSize: '0.875rem',
          fontWeight: 500
        }}>
          {operator.pendingReviews} item(s) under review by {operator.coach}.
        </div>
      )}

      {/* Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px' }}>
        {operator.coachingTimeline && operator.coachingTimeline.length > 0 ? (
          operator.coachingTimeline.map((ct) => (
            <div key={ct.id} style={{ padding: '24px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MessageSquare size={13} /> {ct.type === 'intervention' ? 'Action Assigned' : 'Coach Feedback'}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{ct.date}</span>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {ct.text}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', padding: '24px 0' }}>No coaching history yet.</p>
        )}
      </div>
    </div>
  );
}
