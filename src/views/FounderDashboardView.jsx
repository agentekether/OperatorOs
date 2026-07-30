import React from 'react';
import { COMMUNITY_HEALTH } from '../data/mockData';
import { Activity, Users, ShieldAlert, Sparkles, TrendingUp, TrendingDown, Target, Zap } from 'lucide-react';

export default function FounderDashboardView() {
  const { healthScore, activeOperators, missionVelocity, interventionsSuccessRate, evidenceSubmitted, riskDistribution, leaderboards } = COMMUNITY_HEALTH;

  return (
    <div style={{ padding: '28px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ marginBottom: '32px' }}>
        <h1 className="h1-title">Community Health Dashboard</h1>
        <p className="text-sub" style={{ marginTop: '4px' }}>Real-time execution telemetry across all active operators.</p>
      </div>

      {/* Primary KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '16px', borderRadius: '50%' }}>
            <Activity size={32} color="var(--risk-healthy)" />
          </div>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Community Health Score</span>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', lineHeight: 1.1 }}>{healthScore}</div>
          </div>
        </div>

        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(6, 182, 212, 0.15)', padding: '16px', borderRadius: '50%' }}>
            <Target size={32} color="var(--accent-cyan)" />
          </div>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Mission Velocity</span>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FFF', lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              {missionVelocity} <TrendingUp size={20} color="var(--risk-healthy)" />
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '16px', borderRadius: '50%' }}>
            <ShieldAlert size={32} color="var(--accent-purple)" />
          </div>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Intervention Success</span>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF', lineHeight: 1.1 }}>{interventionsSuccessRate}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '24px' }}>
        
        {/* Risk Distribution Widget */}
        <div className="glass-card">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users size={18} color="var(--text-muted)" /> Population Risk Distribution
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="dot dot-healthy" /> <span style={{ color: '#FFF', fontSize: '0.9rem' }}>Healthy</span></div>
              <strong style={{ color: 'var(--risk-healthy)' }}>{riskDistribution.healthy} Operators</strong>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="dot dot-watchlist" /> <span style={{ color: '#FFF', fontSize: '0.9rem' }}>Watchlist</span></div>
              <strong style={{ color: 'var(--risk-watchlist)' }}>{riskDistribution.watchlist} Operators</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="dot dot-at-risk" /> <span style={{ color: '#FFF', fontSize: '0.9rem' }}>At Risk</span></div>
              <strong style={{ color: 'var(--risk-at-risk)' }}>{riskDistribution.atRisk} Operators</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div className="dot dot-critical" /> <span style={{ color: '#FFF', fontSize: '0.9rem' }}>Critical</span></div>
              <strong style={{ color: 'var(--risk-critical)' }}>{riskDistribution.critical} Operators</strong>
            </div>

          </div>
        </div>

        {/* Leaderboards */}
        <div className="glass-card">
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFF', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="var(--accent-cyan)" /> Execution Leaderboards
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div>
              <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '10px' }}>Top Consistency (Logins & Execution)</h3>
              {leaderboards.consistency.map((user, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)', marginBottom: '8px', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.9rem', color: '#FFF' }}>{idx + 1}. {user.name}</span>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--risk-healthy)', display: 'flex', alignItems: 'center', gap: '4px' }}><Zap size={12} /> {user.streak}</span>
                    <strong style={{ fontSize: '0.85rem', color: '#FFF' }}>{user.score} / 100</strong>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '10px' }}>Top Momentum (Missions Completed)</h3>
              {leaderboards.momentum.map((user, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)', marginBottom: '8px', border: '1px solid var(--border-subtle)' }}>
                  <span style={{ fontSize: '0.9rem', color: '#FFF' }}>{idx + 1}. {user.name}</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)' }}>{user.completedMissions} Missions</strong>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
