import React from 'react';
import { Play, Sparkles, Copy, Check, X } from 'lucide-react';

export default function KnowledgeAssetReader({
  item,
  onCopyLink,
  copiedId,
  onClose,
  isModal = false
}) {
  if (!item) return null;

  return (
    <div
      className="glass-card"
      style={{
        padding: isModal ? '20px' : '24px',
        position: 'relative',
        background: '#121214',
        border: '1px solid var(--border-subtle)',
        borderRadius: '16px',
        maxHeight: isModal ? '85vh' : 'auto',
        overflowY: isModal ? 'auto' : 'visible'
      }}
    >
      {/* Top Header Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span className="badge badge-healthy">Verified SOP Asset</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {onCopyLink && (
            <button
              className="btn btn-secondary"
              onClick={() => onCopyLink(item.id)}
              style={{ fontSize: '0.775rem', padding: '4px 10px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {copiedId === item.id ? <Check size={14} color="var(--risk-healthy)" /> : <Copy size={14} />}
              {copiedId === item.id ? 'Link Copied!' : 'Copy Link for Operator'}
            </button>
          )}
          {isModal && onClose && (
            <button
              onClick={onClose}
              style={{
                background: 'var(--bg-input)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Close"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF', lineHeight: 1.3 }}>
        {item.title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginTop: '8px', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
        <span>Category: <strong style={{ color: '#FFF' }}>{item.category}</strong></span>
        <span>•</span>
        <span>Reading time: <strong style={{ color: '#FFF' }}>{item.readingTime || item.videoDuration}</strong></span>
        <span>•</span>
        <span>Updated: <strong style={{ color: '#FFF' }}>{item.lastUpdated || 'July 2026'}</strong></span>
      </div>

      {/* Related Playbook Link Box */}
      {item.relatedPlaybook && (
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
              {item.relatedPlaybook}
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
          Play Mastermind Video Extract ({item.videoDuration || '04:15'})
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
          {item.summary}
        </p>
        {item.transcriptSnippet && (
          <div style={{ marginTop: '10px', padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: 'var(--radius-sm)', fontStyle: 'italic', fontSize: '0.775rem', color: 'var(--text-secondary)' }}>
            {item.transcriptSnippet}
          </div>
        )}
      </div>

      {/* Actionable SOP Checklist */}
      {item.sopSteps && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontSize: '0.925rem', fontWeight: 700, color: '#FFF', marginBottom: '10px' }}>
            Actionable SOP Checklist Steps
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {item.sopSteps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-surface)', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--bg-input)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>
                  {idx + 1}
                </span>
                <span style={{ fontSize: '0.825rem', color: '#FFF' }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
