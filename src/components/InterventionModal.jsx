import React, { useState } from 'react';
import { X, Send, Calendar, PlayCircle, CheckCircle2, MessageSquare } from 'lucide-react';

export default function InterventionModal({ operator, onClose, onExecuteIntervention }) {
  const [actionType, setActionType] = useState('message');
  const [customNote, setCustomNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!operator) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onExecuteIntervention(operator.id, actionType, customNote);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={operator.avatar}
              alt={operator.name}
              style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>
                Intervene: {operator.name}
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Stage: {operator.stage} • Risk Score: <strong style={{ color: '#FCA5A5' }}>+{operator.riskScore}</strong>
              </p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div style={{ padding: '30px 0', textAlign: 'center' }}>
            <CheckCircle2 size={48} color="var(--risk-healthy)" style={{ marginBottom: '12px' }} />
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFF' }}>Intervention Executed!</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Risk score reduced by -20 points. Activity logged to profile.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Suggested Intervention Banner */}
            <div style={{
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: 'var(--radius-md)',
              padding: '14px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                AI Suggested Action
              </span>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFF', marginTop: '2px' }}>
                {operator.suggestedIntervention?.title || 'Direct OSM Intervention'}
              </h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {operator.suggestedIntervention?.description}
              </p>
            </div>

            {/* Action Type Selector */}
            <label style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>
              Select Intervention Method
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
              <button
                type="button"
                className={`btn ${actionType === 'message' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActionType('message')}
                style={{ padding: '12px' }}
              >
                <MessageSquare size={16} /> Direct Nudge
              </button>

              <button
                type="button"
                className={`btn ${actionType === 'call' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActionType('call')}
                style={{ padding: '12px' }}
              >
                <Calendar size={16} /> Schedule Call
              </button>

              <button
                type="button"
                className={`btn ${actionType === 'playbook' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActionType('playbook')}
                style={{ padding: '12px' }}
              >
                <PlayCircle size={16} /> Assign Playbook
              </button>
            </div>

            {/* Note Textarea */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                Intervention Note / Message Preview
              </label>
              <textarea
                className="input-field"
                rows={3}
                placeholder="Write message to operator or note reason for intervention..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
              />
            </div>

            {/* Submit Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                <Send size={16} /> Confirm & Execute
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
