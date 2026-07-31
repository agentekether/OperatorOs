import React from 'react';
import { 
  Home, 
  Compass, 
  Target,
  BookOpen, 
  MessageSquare, 
  User, 
  Settings, 
  LayoutDashboard, 
  Users, 
  Layers, 
  Activity, 
  ChevronDown 
} from 'lucide-react';

export default function Sidebar({ 
  appMode, 
  onSwitchMode, 
  activeTab, 
  setActiveTab, 
  activeOsm, 
  operatorName = "Julian Kether" 
}) {
  const managerNavItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'operators', label: 'Operators', icon: Users },
    { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
    { id: 'playbooks', label: 'Playbooks', icon: Layers },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const operatorNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'journey', label: 'Transformation', icon: Compass },
    { id: 'missions', label: 'Missions', icon: Target },
    { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
    { id: 'coach', label: 'Coach', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  const currentNavItems = appMode === 'manager' ? managerNavItems : operatorNavItems;

  return (
    <aside style={{
      width: '240px',
      minWidth: '240px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      left: 0,
      background: '#0B0B0D',
      borderRight: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '20px 16px 16px',
      zIndex: 50,
      userSelect: 'none'
    }}>
      {/* Top Section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        
        {/* Brand */}
        <div style={{ padding: '0 8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <Activity size={18} color="var(--text-primary)" />
            <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              OperatorOS
            </span>
            <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', padding: '1px 5px', border: '1px solid var(--border-subtle)', borderRadius: '3px', fontWeight: 500 }}>
              OS
            </span>
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', lineHeight: 1.3 }}>
            Operating System<br />for Operators
          </span>
        </div>

        {/* Navigation Section with Editorial Kicker */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{
            fontSize: '0.6875rem',
            fontWeight: 600,
            color: 'var(--text-muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            paddingLeft: '12px'
          }}>
            {appMode === 'manager' ? 'MANAGER' : 'OPERATOR'}
          </span>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {currentNavItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? '#18181B' : 'transparent',
                    border: isActive ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 500 : 400,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--bg-hover)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  <Icon size={16} color={isActive ? 'var(--text-primary)' : 'var(--text-muted)'} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

      </div>

      {/* Bottom Section: Mode Toggle + User Widget */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        {/* Sleek Mode Switcher */}
        <div style={{
          background: 'var(--bg-dark)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '3px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2px'
        }}>
          <button
            onClick={() => {
              if (onSwitchMode) {
                onSwitchMode('operator');
              } else {
                // Fallback for any older usage
                setAppMode && setAppMode('operator');
              }
            }}
            style={{
              padding: '6px 8px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '0.6875rem',
              fontWeight: 500,
              background: appMode === 'operator' ? 'var(--bg-elevated)' : 'transparent',
              color: appMode === 'operator' ? 'var(--text-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              textAlign: 'center'
            }}
          >
            Operator
          </button>
          <button
            onClick={() => {
              if (onSwitchMode) {
                onSwitchMode('manager');
              } else {
                setAppMode && setAppMode('manager');
              }
            }}
            style={{
              padding: '6px 8px',
              borderRadius: '4px',
              border: 'none',
              fontSize: '0.6875rem',
              fontWeight: 500,
              background: appMode === 'manager' ? 'var(--bg-elevated)' : 'transparent',
              color: appMode === 'manager' ? 'var(--text-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
              textAlign: 'center'
            }}
          >
            Manager
          </button>
        </div>

        {/* User Profile Footer Card */}
        <div style={{
          padding: '10px 10px',
          borderRadius: 'var(--radius-md)',
          background: 'transparent',
          border: '1px solid transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--bg-hover)';
          e.currentTarget.style.borderColor = 'var(--border-subtle)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.borderColor = 'transparent';
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {appMode === 'operator' ? (
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                alt={operatorName}
                style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 600, fontSize: '0.75rem'
              }}>
                {activeOsm.slice(0, 2)}
              </div>
            )}
            <div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-primary)', display: 'block', lineHeight: 1.2 }}>
                {appMode === 'operator' ? operatorName : activeOsm}
              </span>
              <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                {appMode === 'operator' ? 'Operator' : 'Success Manager'}
              </span>
            </div>
          </div>
          <ChevronDown size={14} color="var(--text-muted)" />
        </div>

      </div>
    </aside>
  );
}
