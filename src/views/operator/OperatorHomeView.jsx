import React from 'react';
import { 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  BookOpen, 
  Lock, 
  Flag, 
  Users, 
  TrendingUp, 
  HelpCircle,
  MoreHorizontal,
  Flame
} from 'lucide-react';

export default function OperatorHomeView({ operator, setOperatorTab }) {
  if (!operator) return null;

  const firstName = operator.name ? operator.name.split(' ')[0] : 'Julian';
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const milestones = [
    { id: 1, title: '1. Foundation', status: 'completed' },
    { id: 2, title: '2. Identity', status: 'completed' },
    { id: 3, title: '3. Build Your Offer', status: 'active' },
    { id: 4, title: '4. Outreach', status: 'locked' },
    { id: 5, title: '5. Conversations', status: 'locked' },
    { id: 6, title: '6. Clients', status: 'locked' }
  ];

  const recentActivity = [
    {
      id: 'act-1',
      type: 'mission',
      title: 'Mission completed',
      subtitle: 'Define Your Ideal Client',
      time: '2h ago',
      icon: CheckCircle2,
      iconColor: '#32D583',
      iconBg: 'rgba(50, 213, 131, 0.12)'
    },
    {
      id: 'act-2',
      type: 'evidence',
      title: 'Evidence submitted',
      subtitle: 'Value Proposition Canvas',
      time: '5h ago',
      icon: Clock,
      iconColor: '#F59E0B',
      iconBg: 'rgba(245, 158, 11, 0.12)'
    },
    {
      id: 'act-3',
      type: 'coach',
      title: 'Coach feedback received',
      subtitle: 'On your offer positioning',
      time: '1d ago',
      icon: MessageSquare,
      iconColor: '#60A5FA',
      iconBg: 'rgba(96, 165, 250, 0.12)'
    },
    {
      id: 'act-4',
      type: 'lesson',
      title: 'Lesson completed',
      subtitle: 'Pricing with Confidence',
      time: '1d ago',
      icon: BookOpen,
      iconColor: '#A1A1AA',
      iconBg: 'rgba(161, 161, 170, 0.12)'
    }
  ];

  return (
    <div className="grid-main-sidebar" style={{
      minHeight: '100vh',
      background: '#0B0B0D'
    }}>
      
      {/* ─── LEFT COLUMN: MAIN WORKSPACE ─── */}
      <div style={{
        padding: 'var(--spacing-page-v) var(--spacing-page-h) 64px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        borderRight: '1px solid var(--border-subtle)',
        overflowY: 'auto'
      }}>
        
        {/* Top Welcome Header */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                DASHBOARD
              </span>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Welcome back, {firstName}.
              </h1>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {currentDate}
              </span>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)',
                background: '#18181B',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontSize: '0.75rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}>
                <Zap size={13} color="#F59E0B" /> Quick Actions
              </button>
            </div>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
            Focus on today. The system handles the rest.
          </p>
        </div>

        {/* 4 Hero Metric Cards (Compact Dashboard) */}
        <div className="grid-4-cols" style={{ padding: '8px 0' }}>
          {/* Analysis Score */}
          <div className="mobile-metric-card">
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                ANALYSIS SCORE
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  {operator.analysisScore || 82}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>/100</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#32D583', fontWeight: 500 }}>
                ↑ 6 pts this week
              </span>
            </div>
            <div style={{ position: 'relative', width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="46" height="46" viewBox="0 0 46 46">
                <circle cx="23" cy="23" r="18" fill="none" stroke="#1F1F23" strokeWidth="3.5" />
                <circle cx="23" cy="23" r="18" fill="none" stroke="#32D583" strokeWidth="3.5" strokeDasharray="113" strokeDashoffset="48" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} />
              </svg>
              <span style={{ position: 'absolute', fontSize: '0.7rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-mono)' }}>
                {operator.analysisScore || 82}
              </span>
            </div>
          </div>

          {/* Stages Completed */}
          <div className="mobile-metric-card">
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                STAGES COMPLETED
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  3
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>/12</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                25% of your journey
              </span>
            </div>
            <div style={{ position: 'relative', width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="46" height="46" viewBox="0 0 46 46">
                <circle cx="23" cy="23" r="18" fill="none" stroke="#1F1F23" strokeWidth="3.5" />
                <circle cx="23" cy="23" r="18" fill="none" stroke="#F5F5F4" strokeWidth="3.5" strokeDasharray="113" strokeDashoffset="85" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} />
              </svg>
              <span style={{ position: 'absolute', fontSize: '0.65rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-mono)' }}>
                25%
              </span>
            </div>
          </div>

          {/* Missions Completed */}
          <div className="mobile-metric-card">
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                MISSIONS COMPLETED
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  14
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>/48</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                29% completion
              </span>
            </div>
            <div style={{ position: 'relative', width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="46" height="46" viewBox="0 0 46 46">
                <circle cx="23" cy="23" r="18" fill="none" stroke="#1F1F23" strokeWidth="3.5" />
                <circle cx="23" cy="23" r="18" fill="none" stroke="#A855F7" strokeWidth="3.5" strokeDasharray="113" strokeDashoffset="80" strokeLinecap="round" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} />
              </svg>
              <span style={{ position: 'absolute', fontSize: '0.65rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-mono)' }}>
                29%
              </span>
            </div>
          </div>

          {/* Current Streak */}
          <div className="mobile-metric-card">
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                CURRENT STREAK
              </span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  7
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>days</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#32D583', fontWeight: 500 }}>
                Keep it up.
              </span>
            </div>
            <div style={{
              width: '44px', height: '44px', borderRadius: '50%',
              background: 'rgba(50, 213, 131, 0.12)', border: '1px solid rgba(50, 213, 131, 0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <Flame size={20} color="#32D583" />
            </div>
          </div>
        </div>

        {/* "YOUR TRANSFORMATION" Immersive Feature Block */}
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            YOUR TRANSFORMATION
          </span>

          <div 
            className="stage-card-grid"
            style={{
              background: '#121214',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '24px 28px'
            }}
          >
            {/* Left: Stage Title, Description & Checklist */}
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                Current Stage
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                Build Your Offer
              </h2>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '12px', fontWeight: 500 }}>
                Stage 3 of 12
              </span>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px', maxWidth: '340px' }}>
                Define your offer, position it clearly and create massive value for your ideal client.
              </p>

              {/* Compact What you'll accomplish checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>
                  What you&apos;ll accomplish:
                </span>
                {[
                  'Define your ideal client',
                  'Build your offer',
                  'Validate your position',
                  'Create your value proposition'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={13} color="#32D583" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOperatorTab('journey')}
                style={{
                  background: 'var(--text-primary)',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  color: '#0B0B0D',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: '10px 18px',
                  transition: 'all var(--transition-fast)'
                }}
              >
                View Stage Details <ArrowRight size={14} />
              </button>
            </div>

            {/* Center: Compact Circular Progress Ring (96px) */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '96px', height: '96px' }}>
                <svg width="96" height="96" viewBox="0 0 96 96">
                  <circle
                    cx="48" cy="48" r="38"
                    fill="none"
                    stroke="#1F1F23"
                    strokeWidth="6"
                  />
                  <circle
                    cx="48" cy="48" r="38"
                    fill="none"
                    stroke="#F5F5F4"
                    strokeWidth="6"
                    strokeDasharray="239"
                    strokeDashoffset="79"
                    strokeLinecap="round"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.8s ease' }}
                  />
                </svg>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', lineHeight: 1 }}>
                    67%
                  </span>
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Progress
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Stage Stepper (Desktop Only) */}
            <div className="desktop-only" style={{ flexDirection: 'column', gap: '12px', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '24px' }}>
              {milestones.map(m => (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    opacity: m.status === 'locked' ? 0.35 : 1
                  }}
                >
                  <div style={{
                    width: '18px', height: '18px', borderRadius: '50%',
                    background: m.status === 'completed' ? '#32D583' : m.status === 'active' ? 'var(--text-primary)' : '#18181B',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {m.status === 'completed' && <CheckCircle2 size={12} color="#0B0B0D" />}
                    {m.status === 'active' && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0B0B0D' }} />}
                    {m.status === 'locked' && <Lock size={10} color="var(--text-muted)" />}
                  </div>
                  <span style={{
                    fontSize: '0.8125rem',
                    fontWeight: m.status === 'active' ? 600 : 400,
                    color: m.status === 'active' ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}>
                    {m.title}
                  </span>
                  {m.status === 'completed' && (
                    <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>Completed</span>
                  )}
                  {m.status === 'active' && (
                    <span style={{ fontSize: '0.6875rem', color: '#32D583', marginLeft: 'auto', fontWeight: 500 }}>In Progress</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* "RECENT ACTIVITY" Timeline */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              RECENT ACTIVITY
            </span>
            <button
              style={{
                background: 'none', border: 'none', color: 'var(--text-secondary)',
                fontSize: '0.8125rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer'
              }}
            >
              View all <ArrowRight size={13} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recentActivity.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 0',
                    borderBottom: idx === recentActivity.length - 1 ? 'none' : '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '50%',
                      background: item.iconBg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.iconColor
                    }}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                        {item.title}
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ─── RIGHT COLUMN: UTILITY WIDGETS ─── */}
      <div style={{
        padding: 'var(--spacing-page-v) var(--spacing-card) 64px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        background: '#0E0E11',
        overflowY: 'auto'
      }}>
        
        {/* "YOUR COACH" Block */}
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            YOUR COACH
          </span>

          <div style={{
            background: '#121214',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                  alt="Alejandro"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div>
                  <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                    Alejandro
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Performance Coach</span>
                    <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#32D583' }} />
                    <span style={{ fontSize: '0.6875rem', color: '#32D583', fontWeight: 500 }}>Available</span>
                  </div>
                </div>
              </div>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                <MoreHorizontal size={16} />
              </button>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px', fontStyle: 'italic' }}>
              "Focus on one thing today that moves your offer forward."
            </p>

            <button
              onClick={() => setOperatorTab('coach')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: 0
              }}
            >
              Send a message <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* "NEXT BEST ACTION" Block */}
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            NEXT BEST ACTION
          </span>

          <div style={{
            background: '#121214',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Flag size={14} color="#32D583" />
              <span style={{ fontSize: '0.75rem', color: '#32D583', fontWeight: 500 }}>Continue Mission</span>
            </div>

            <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>
              Create Your Offer Framework
            </h3>

            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '20px' }}>
              Est. time: 25 min
            </span>

            <button
              onClick={() => setOperatorTab('missions')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: '8px',
                background: '#F5F5F4',
                color: '#0B0B0D',
                fontSize: '0.875rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Continue <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* "COMMUNITY HEALTH" Stats Block */}
        <div>
          <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            COMMUNITY HEALTH
          </span>

          <div style={{
            background: '#121214',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Active this week</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>623</span>
                  <span style={{ fontSize: '0.75rem', color: '#32D583' }}>↑ 14%</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Engagement rate</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>68%</span>
                  <span style={{ fontSize: '0.75rem', color: '#32D583' }}>↑ 5%</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Questions answered</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>156</span>
                  <span style={{ fontSize: '0.75rem', color: '#32D583' }}>↑ 23%</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Events this week</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>3</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>View</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert('Opening Circle Community...')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '0.8125rem',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                padding: 0
              }}
            >
              View Community <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
