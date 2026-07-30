import React from 'react';
import { ArrowRight, Compass, LayoutDashboard, Sparkles } from 'lucide-react';

export default function WorkspaceSelectView({ onSelectWorkspace }) {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: '#0B0B0D',
      color: '#F5F5F4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 24px',
      animation: 'fadeInWorkspace 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
    }}>
      <style>{`
        @keyframes fadeInWorkspace {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <main style={{
        width: '100%',
        maxWidth: '720px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        
        {/* Header */}
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          color: '#71717A',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
          display: 'block'
        }}>
          Explore Prototype
        </span>

        <h1 style={{
          fontSize: '2.25rem',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.03em',
          lineHeight: 1.2,
          marginBottom: '8px'
        }}>
          Select a workspace.
        </h1>

        <p style={{
          fontSize: '1rem',
          color: '#A1A1AA',
          marginBottom: '40px',
          lineHeight: 1.6
        }}>
          Choose an experience to enter the prototype. No authentication required.
        </p>

        {/* 2-Column Choice Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%'
        }}>
          
          {/* Option 1: Operator Workspace */}
          <div
            onClick={() => onSelectWorkspace('operator')}
            style={{
              background: '#121214',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#18181B',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginBottom: '20px'
              }}>
                <Compass size={20} />
              </div>

              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}>
                Operator Workspace
              </h2>

              <p style={{
                fontSize: '0.875rem',
                color: '#A1A1AA',
                lineHeight: 1.6,
                margin: 0
              }}>
                Personal transformation dashboard. Track your offer stage, complete missions, and connect with your coach.
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#FFFFFF',
              marginTop: '24px'
            }}>
              Explore Operator
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Option 2: Manager Workspace */}
          <div
            onClick={() => onSelectWorkspace('manager')}
            style={{
              background: '#121214',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#18181B',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                marginBottom: '20px'
              }}>
                <LayoutDashboard size={20} />
              </div>

              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#FFFFFF',
                marginBottom: '8px',
                letterSpacing: '-0.02em'
              }}>
                Manager Workspace
              </h2>

              <p style={{
                fontSize: '0.875rem',
                color: '#A1A1AA',
                lineHeight: 1.6,
                margin: 0
              }}>
                Community command center. Monitor overall health score, identify operators needing attention, and review evidence.
              </p>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#FFFFFF',
              marginTop: '24px'
            }}>
              Explore Manager
              <ArrowRight size={14} />
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
