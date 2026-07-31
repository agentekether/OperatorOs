import React, { useState } from 'react';
import { Search, Play, FileText, Sparkles, Video, Copy, Check, ExternalLink } from 'lucide-react';
import { KNOWLEDGE_ITEMS } from '../data/mockData';
import KnowledgeAssetReader from '../components/KnowledgeAssetReader';

export default function KnowledgeView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(KNOWLEDGE_ITEMS[0]);
  const [copiedId, setCopiedId] = useState(null);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);

  const filteredItems = KNOWLEDGE_ITEMS.filter(k => 
    k.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.category.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div style={{ padding: '28px', maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
            Knowledge Engine Pipeline
          </span>
          <h1 className="h1-title" style={{ marginTop: '2px' }}>Knowledge Base & SOP Hub</h1>
          <p className="text-sub" style={{ marginTop: '2px' }}>
            Question → Answer → Video → Transcript → AI Summary → Verified SOP
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ position: 'relative', marginBottom: '28px' }}>
        <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          className="input-field"
          placeholder="Search knowledge by keyword (e.g. DNS, Smartlead, Cold Email, Objection Handling)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ paddingLeft: '44px', fontSize: '0.95rem', borderRadius: 'var(--radius-lg)' }}
        />
      </div>

      {/* 2-Column Split: Left (List of Knowledge Assets) & Right (Selected Asset Reader) */}
      <div className="grid-2-cols" style={{}}>

        {/* Left Column: Asset Catalog */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredItems.map((item) => {
            const isSelected = selectedItem?.id === item.id;

            return (
              <div
                key={item.id}
                className="glass-card glass-card-interactive"
                onClick={() => handleSelectItem(item)}
                style={{
                  padding: '16px',
                  borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                  background: isSelected ? 'rgba(6, 182, 212, 0.08)' : 'var(--bg-card)',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.725rem', background: 'var(--bg-input)', color: 'var(--accent-cyan)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(6, 182, 212, 0.2)', fontWeight: 600 }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.readingTime || item.videoDuration}</span>
                </div>

                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '6px', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>Playbook: <strong style={{ color: 'var(--text-primary)' }}>{item.relatedPlaybook || item.stage}</strong></span>
                  <span>{item.lastUpdated || `By ${item.author}`}</span>
                </div>
              </div>
            );
          })}
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
