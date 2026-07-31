import React from 'react';
import { Settings, Sliders, ShieldCheck, Flame, Layers } from 'lucide-react';

export default function SettingsView() {
  return (
    <div style={{ padding: 'var(--spacing-page-v) var(--spacing-page-h) 64px', width: '100%', minHeight: '100vh', background: 'var(--bg-dark)' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 className="h1-title">System Settings & Engine Rules</h1>
        <p className="text-sub" style={{ marginTop: '2px' }}>
          Configure Risk Engine weights, Stage SLAs, and cohort operational parameters.
        </p>
      </div>

      <div className="grid-2-cols">

        {/* Risk Engine Rules Configuration */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Flame size={18} color="var(--risk-at-risk)" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF' }}>
              Risk Algorithm Point Weights
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.85rem', color: '#FFF' }}>No login for 5 days (`RISK_NO_LOGIN_5D`)</span>
              <span className="badge badge-watchlist">+10 pts</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.85rem', color: '#FFF' }}>No outreach in sprint week (`RISK_NO_OUTREACH`)</span>
              <span className="badge badge-at-risk">+20 pts</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.85rem', color: '#FFF' }}>Missed Thursday Mastermind Call (`RISK_MISSED_CALL`)</span>
              <span className="badge badge-at-risk">+15 pts</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span style={{ fontSize: '0.85rem', color: '#FFF' }}>In stage for 10+ days without progress (`RISK_LATENCY_10D`)</span>
              <span className="badge badge-critical">+30 pts</span>
            </div>
          </div>
        </div>

        {/* System SLAs */}
        <div className="glass-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Layers size={18} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFF' }}>
              Milestone Max SLA Thresholds
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#FFF', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span>Onboarding Stage SLA</span>
              <strong>2 Days</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#FFF', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span>Tools Connected Stage SLA</span>
              <strong>7 Days</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#FFF', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span>First Outreach Stage SLA</span>
              <strong>10 Days</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#FFF', background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: 'var(--radius-md)' }}>
              <span>First Client Milestone SLA</span>
              <strong>21 Days</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
