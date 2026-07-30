import React from 'react';
import { Home, Compass, Target, BookOpen, MessageSquare, User } from 'lucide-react';

export default function OperatorNavigation({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'journey', label: 'Journey', icon: Compass },
    { id: 'missions', label: 'Missions', icon: Target },
    { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
    { id: 'coach', label: 'Coach', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <nav style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '0',
      overflowX: 'auto'
    }}>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 16px',
              background: 'transparent',
              border: 'none',
              borderBottom: isActive ? '1px solid var(--text-primary)' : '1px solid transparent',
              color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
              fontWeight: isActive ? 500 : 400,
              fontSize: '0.8125rem',
              cursor: 'pointer',
              transition: 'color var(--transition-fast)',
              whiteSpace: 'nowrap'
            }}
          >
            <Icon size={14} />
            <span className="hide-on-mobile">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
