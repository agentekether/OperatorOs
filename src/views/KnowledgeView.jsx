import React, { useState } from 'react';
import { Search, Play, FileText, Sparkles, Video, Copy, Check, ExternalLink } from 'lucide-react';
import { KNOWLEDGE_ITEMS } from '../data/mockData';

export default function KnowledgeView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(KNOWLEDGE_ITEMS[0]);
  const [copiedId, setCopiedId] = useState(null);

  const filteredItems = KNOWLEDGE_ITEMS.filter(k => 
    k.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    k.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                onClick={() => setSelectedItem(item)}
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

        {/* Right Column: Deep Reader (Video + AI Summary + SOP Steps) */}
        <div>
          {selectedItem ? (
            <div className="glass-card" style={{ padding: '24px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span className="badge badge-healthy">Verified SOP Asset</span>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleCopySopLink(selectedItem.id)}
                  style={{ fontSize: '0.775rem', padding: '4px 10px' }}
                >
                  {copiedId === selectedItem.id ? <Check size={14} color="var(--risk-healthy)" /> : <Copy size={14} />}
                  {copiedId === selectedItem.id ? 'Link Copied!' : 'Copy Link for Operator'}
                </button>
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF', lineHeight: 1.3 }}>
                {selectedItem.title}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginTop: '8px', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                <span>Category: <strong style={{ color: '#FFF' }}>{selectedItem.category}</strong></span>
                <span>•</span>
                <span>Reading time: <strong style={{ color: '#FFF' }}>{selectedItem.readingTime || selectedItem.videoDuration}</strong></span>
                <span>•</span>
                <span>Updated: <strong style={{ color: '#FFF' }}>{selectedItem.lastUpdated || 'July 2026'}</strong></span>
              </div>

              {/* Related Playbook Link Box */}
              {selectedItem.relatedPlaybook && (
                <div style={{
                  marginTop: '14px',
                  padding: '10px 14px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.825rem'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600, display: 'block' }}>
                      Related Playbook
                    </span>
                    <strong style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem' }}>
                      {selectedItem.relatedPlaybook}
                    </strong>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Connected OS Asset →
                  </span>
                </div>
              )}

              {/* Simulated Video Player */}
              <div style={{
                marginTop: '18px',
                aspectRatio: '16/9',
                background: '#05080F',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-subtle)',
                position: 'relative'
              }}>
                <Play size={48} color="var(--accent-cyan)" style={{ filter: 'drop-shadow(0 0 10px var(--accent-cyan))' }} />
                <span style={{ fontSize: '0.85rem', color: '#FFF', fontWeight: 600, marginTop: '10px' }}>
                  Play Mastermind Video Extract ({selectedItem.videoDuration})
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Auto-synced transcript timestamp at 02:14</span>
              </div>

              {/* AI Summary Box */}
              <div style={{
                marginTop: '20px',
                background: 'rgba(139, 92, 246, 0.08)',
                border: '1px solid rgba(139, 92, 246, 0.25)',
                padding: '14px',
                borderRadius: 'var(--radius-md)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Sparkles size={16} color="var(--accent-purple)" />
                  <strong style={{ fontSize: '0.85rem', color: '#DDD' }}>AI Executive Summary</strong>
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-primary)' }}>
                  {selectedItem.summary}
                </p>
                <div style={{ marginTop: '10px', padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: 'var(--radius-sm)', fontStyle: 'italic', fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
                  {selectedItem.transcriptSnippet}
                </div>
              </div>

              {/* Actionable SOP Checklist */}
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: '#FFF', marginBottom: '10px' }}>
                  Actionable SOP Checklist Steps
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedItem.sopSteps.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-surface)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg-input)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                        {idx + 1}
                      </span>
                      <span style={{ fontSize: '0.825rem', color: '#FFF' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
              <p className="text-sub">Select an asset from the list to view video, AI summary & SOP steps.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
