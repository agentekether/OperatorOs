import React, { useState } from 'react';
import { Search, ExternalLink, Download } from 'lucide-react';
import { KNOWLEDGE_ITEMS } from '../../data/mockData';

export default function OperatorKnowledgeView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = KNOWLEDGE_ITEMS.filter(k => 
    k.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      padding: '36px 48px 64px',
      width: '100%',
      minHeight: '100vh',
      background: 'var(--bg-dark)'
    }}>
      
      <div style={{ marginBottom: '36px', maxWidth: '800px' }}>
        <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
          KNOWLEDGE LIBRARY
        </span>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.03em', marginBottom: '8px' }}>
          Knowledge
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          SOPs, templates, and execution guides to help you complete your transformation.
        </p>
      </div>

      <div style={{ position: 'relative', marginBottom: '32px', maxWidth: '600px' }}>
        <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          className="input-field"
          placeholder="Search guides (e.g. Offer, DNS, Objections)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ paddingLeft: '38px', fontSize: '0.875rem', padding: '10px 14px 10px 38px', background: '#121214' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px' }}>
        {filteredItems.length > 0 ? filteredItems.map(item => (
          <div key={item.id} style={{ padding: '20px 0', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
              {item.category}
            </span>
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px', marginBottom: '8px' }}>
              {item.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
              {item.summary}
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => alert('Downloading template...')}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Download size={12} /> Template
              </button>
              <button
                onClick={() => alert('Opening Circle...')}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <ExternalLink size={12} /> View in Circle
              </button>
            </div>
          </div>
        )) : (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', padding: '24px 0' }}>No knowledge items available yet.</p>
        )}
      </div>
    </div>
  );
}
