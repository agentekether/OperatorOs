import React, { useState } from 'react';
import { Search, ExternalLink, Download } from 'lucide-react';
import { KNOWLEDGE_ITEMS } from '../../data/mockData';
import KnowledgeAssetReader from '../../components/KnowledgeAssetReader';

export default function OperatorKnowledgeView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(KNOWLEDGE_ITEMS[0]);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const filteredItems = KNOWLEDGE_ITEMS.filter(k => 
    k.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    if (window.innerWidth <= 767) {
      setMobileModalOpen(true);
    }
  };

  const handleCopySopLink = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div style={{
      padding: 'var(--spacing-page-v) var(--spacing-page-h) 64px',
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

      <div className="grid-2-cols">
        {/* Left Column: Asset Catalog */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filteredItems.length > 0 ? filteredItems.map(item => {
            const isSelected = selectedItem?.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectItem(item)}
                style={{
                  padding: '18px 16px',
                  borderBottom: '1px solid var(--border-subtle)',
                  background: isSelected ? 'rgba(6, 182, 212, 0.06)' : 'transparent',
                  border: isSelected ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid transparent',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.readingTime || '4 min read'}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>•</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Updated {item.lastUpdated || 'July 2026'}</span>
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '2px', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                  {item.summary}
                </p>
                {item.relatedPlaybook && (
                  <div style={{ marginBottom: '14px', fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                    Related Playbook: <strong style={{ color: 'var(--text-primary)' }}>{item.relatedPlaybook}</strong>
                  </div>
                )}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert('Downloading template...');
                    }}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      alert('Opening Circle...');
                    }}
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
            );
          }) : (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', padding: '24px 0' }}>No knowledge items available yet.</p>
          )}
        </div>

        {/* Right Column: Deep Reader (Video + AI Summary + SOP Steps) - Desktop Only */}
        <div className="desktop-only">
          {selectedItem ? (
            <KnowledgeAssetReader
              item={selectedItem}
              onCopyLink={handleCopySopLink}
              copiedId={copiedId}
            />
          ) : (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
              <p className="text-sub">Select an asset from the list to view video, AI summary & SOP steps.</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Pop-Up Modal (Mobile Only when clicking an item) */}
      {mobileModalOpen && selectedItem && (
        <div
          className="sidebar-overlay open"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            zIndex: 1000
          }}
          onClick={() => setMobileModalOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '560px',
              maxHeight: '88vh',
              overflowY: 'auto',
              position: 'relative',
              zIndex: 1001
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <KnowledgeAssetReader
              item={selectedItem}
              onCopyLink={handleCopySopLink}
              copiedId={copiedId}
              onClose={() => setMobileModalOpen(false)}
              isModal={true}
            />
          </div>
        </div>
      )}

    </div>
  );
}
