import React from 'react';
import { LayoutDashboard, Users, BookOpen, Layers, Settings } from 'lucide-react';

export default function Navigation({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'operators', label: 'Operators', icon: Users },
    { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
    { id: 'playbooks', label: 'Playbooks', icon: Layers },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <nav style={{
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 24px',
      display: 'flex',
      gap: '0'
    }}>
      {navItems.map(item => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              padding: '10px 16px',
              background: 'none',
              border: 'none',
              borderBottom: isActive ? '1px solid var(--text-primary)' : '1px solid transparent',
              color: isActive ? 'var(--text-primary)' : 'var(--text-muted)',
              fontSize: '0.8125rem',
              fontWeight: isActive ? 500 : 400,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'color var(--transition-fast)'
            }}
          >
            <Icon size={14} />
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
