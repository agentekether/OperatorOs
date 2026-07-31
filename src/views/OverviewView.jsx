import React, { useState } from 'react';
import { COMMUNITY_HEALTH, COMMUNITY_FEED } from '../data/mockData';
import { 
  ArrowRight, 
  ChevronRight, 
  Activity,
  Users,
  ShieldAlert,
  FileText,
  MessageSquare,
  BookOpen,
  CheckCircle2,
  Mail,
  Zap
} from 'lucide-react';

export default function OverviewView({ operators, activeOsm, onSelectOperator, onOpenIntervention }) {
  const [timeRange, setTimeRange] = useState('30D');

  const atRiskOperators = operators.filter(o => o.riskLevel === 'critical' || o.riskLevel === 'at-risk')
    .sort((a, b) => b.riskScore - a.riskScore);
  
  const { healthScore, riskDistribution } = COMMUNITY_HEALTH;

  // Evidence Queue Sample
  const evidenceQueue = [
    {
      id: 'ev-1',
      name: 'Marcus L.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      title: '"My exact cold calling script"',
      stage: 'Stage 3',
      operator: operators[0]
    },
    {
      id: 'ev-2',
      name: 'Ana Delgado',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      title: 'Offer Framework Document',
      stage: 'Stage 4',
      operator: operators[1]
    },
    {
      id: 'ev-3',
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      title: 'Outbound Campaign Screenshots',
      stage: 'Stage 2',
      operator: operators[2]
    }
  ];

  return (
    <div className="grid-main-sidebar" style={{
      minHeight: '100vh',
      background: '#0B0B0D'
    }}>
      
      {/* ─── LEFT COLUMN: MAIN WORKSPACE (70%) ─── */}
      <div style={{
        padding: 'var(--spacing-page-v) var(--spacing-page-h) 64px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        borderRight: '1px solid rgba(255, 255, 255, 0.05)',
        overflowY: 'auto'
      }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              MANAGER DASHBOARD
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '6px' }}>
              Community Overview
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#A1A1AA' }}>
              What's happening across your transformation community today.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: '#71717A' }}>
              Thursday, Jul 30, 2026
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 10px',
              borderRadius: '6px',
              background: '#18181B',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#F5F5F4',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>
              OSM · {activeOsm}
            </span>
          </div>
        </div>

        {/* 4 Top Premium Metric Cards with Full-Width SVG Sparklines */}
        <div className="grid-4-cols" style={{}}>
          
          {/* 1. HEALTH SCORE */}
          <div style={{
            background: '#121214',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '16px', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Activity size={14} color="#32D583" />
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  HEALTH SCORE
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-mono)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  84
                </span>
                <span style={{ fontSize: '0.875rem', color: '#71717A', fontFamily: 'var(--font-mono)' }}>/100</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#32D583', fontWeight: 500 }}>
                ↑ 3 pts this week
              </span>
            </div>
            {/* Sparkline */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60px', zIndex: 1 }}>
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="grad-green" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#32D583" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#32D583" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 30 L 20 25 L 40 32 L 60 15 L 80 20 L 100 5 L 100 40 L 0 40 Z" fill="url(#grad-green)" />
                <path d="M 0 30 L 20 25 L 40 32 L 60 15 L 80 20 L 100 5" fill="none" stroke="#32D583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* 2. ACTIVE OPERATORS */}
          <div style={{
            background: '#121214',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '16px', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Users size={14} color="#A1A1AA" />
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  ACTIVE OPERATORS
                </span>
              </div>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-mono)', letterSpacing: '-0.04em', lineHeight: 1, display: 'block', marginBottom: '4px' }}>
                57
              </span>
              <span style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>
                Healthy<br/><strong style={{ color: '#F59E0B' }}>45</strong> Watchlist
              </span>
            </div>
            {/* Sparkline */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60px', zIndex: 1 }}>
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="grad-yellow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 35 L 20 32 L 40 34 L 60 25 L 80 20 L 100 10 L 100 40 L 0 40 Z" fill="url(#grad-yellow)" />
                <path d="M 0 35 L 20 32 L 40 34 L 60 25 L 80 20 L 100 10" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* 3. AT RISK / CRITICAL */}
          <div style={{
            background: '#121214',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '16px', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <ShieldAlert size={14} color="#EF4444" />
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  AT RISK / CRITICAL
                </span>
              </div>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-mono)', letterSpacing: '-0.04em', lineHeight: 1, display: 'block', marginBottom: '4px' }}>
                29
              </span>
              <span style={{ fontSize: '0.75rem', color: '#EF4444', fontWeight: 500 }}>
                5 Critical
              </span>
            </div>
            {/* Sparkline */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60px', zIndex: 1 }}>
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="grad-red" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 35 L 20 35 L 40 30 L 60 25 L 80 25 L 100 15 L 100 40 L 0 40 Z" fill="url(#grad-red)" />
                <path d="M 0 35 L 20 35 L 40 30 L 60 25 L 80 25 L 100 15" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* 4. PENDING REVIEWS */}
          <div style={{
            background: '#121214',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '160px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '16px', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <FileText size={14} color="#A855F7" />
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  PENDING REVIEWS
                </span>
              </div>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', fontFamily: 'var(--font-mono)', letterSpacing: '-0.04em', lineHeight: 1, display: 'block', marginBottom: '4px' }}>
                12
              </span>
              <span style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>
                Evidence submitted
              </span>
            </div>
            {/* Sparkline */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '60px', zIndex: 1 }}>
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="grad-purple" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 35 L 20 28 L 40 30 L 60 20 L 80 25 L 100 15 L 100 40 L 0 40 Z" fill="url(#grad-purple)" />
                <path d="M 0 35 L 20 28 L 40 30 L 60 20 L 80 25 L 100 15" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

        </div>

        {/* ─── MAIN AREA (2-COLUMN GRID) ─── */}
        <div className="grid-2-cols" style={{}}>
          
          {/* LEFT: Needs Attention & Pending Evidence */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* NEEDS ATTENTION */}
            <div style={{
              background: '#121214',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  NEEDS ATTENTION
                </span>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.15)', color: '#EF4444',
                  fontSize: '0.65rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px'
                }}>2</span>
              </div>

              {/* Lucas Vance */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" alt="Lucas" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFF' }}>Lucas Vance</span>
                      <span style={{ fontSize: '0.65rem', color: '#EF4444', fontWeight: 600 }}>At Risk</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#71717A' }}>Tools Connected · Last active 2 days ago</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#EF4444', background: 'rgba(239,68,68,0.1)', padding: '2px 6px', borderRadius: '4px' }}>65</span>
                  <button onClick={() => onOpenIntervention(operators[0])} style={{ background: '#FFF', color: '#000', border: 'none', borderRadius: '6px', padding: '6px 12px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    Intervene <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Sofia Ramirez */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Sofia" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFF' }}>Sofia Ramirez</span>
                      <span style={{ fontSize: '0.65rem', color: '#F59E0B', fontWeight: 600 }}>Watchlist</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#71717A' }}>Stage 2 - Build Your Foundation</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#F59E0B', background: 'rgba(245,158,11,0.1)', padding: '2px 6px', borderRadius: '4px' }}>48</span>
                  <button onClick={() => onSelectOperator(operators[1])} style={{ background: 'transparent', color: '#FFF', border: 'none', padding: '6px 4px', fontSize: '0.75rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    View <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* PENDING EVIDENCE REVIEWS */}
            <div style={{
              background: '#121214',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  PENDING EVIDENCE REVIEWS
                </span>
                <span style={{
                  background: 'rgba(255, 255, 255, 0.1)', color: '#FFF',
                  fontSize: '0.65rem', fontWeight: 700, padding: '2px 6px', borderRadius: '4px'
                }}>3</span>
              </div>

              {evidenceQueue.map((item, idx) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src={item.avatar} alt={item.name} style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#FFF', display: 'block' }}>{item.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#71717A' }}>{item.title}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.65rem', color: '#A1A1AA', background: '#18181B', padding: '2px 6px', borderRadius: '4px' }}>{item.stage}</span>
                    <ChevronRight size={14} color="#71717A" />
                  </div>
                </div>
              ))}
              
              <div style={{ paddingTop: '12px', marginTop: '4px' }}>
                <button style={{ background: 'none', border: 'none', color: '#A1A1AA', fontSize: '0.75rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', padding: 0, cursor: 'pointer' }}>
                  Review All Evidence <ArrowRight size={12} />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: Community Health Trend Line Chart */}
          <div style={{
            background: '#121214',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  COMMUNITY HEALTH TREND
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '0.65rem', color: '#71717A', cursor: 'pointer' }}>7D</span>
                  <span style={{ fontSize: '0.65rem', color: '#FFF', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}>30D</span>
                  <span style={{ fontSize: '0.65rem', color: '#71717A', cursor: 'pointer' }}>90D</span>
                </div>
              </div>

              {/* Chart SVG Canvas */}
              <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '16px' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#32D583" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  {[0, 50, 100, 150, 200].map(y => (
                    <line key={y} x1="25" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  ))}
                  
                  <text x="0" y="25" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">100</text>
                  <text x="0" y="75" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">75</text>
                  <text x="0" y="125" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">50</text>
                  <text x="0" y="175" fill="#71717A" fontSize="10" fontFamily="var(--font-mono)">25</text>

                  {/* Area Fill */}
                  <path d="M 25 140 L 70 115 L 120 100 L 170 95 L 220 85 L 270 70 L 320 90 L 370 85 L 390 80 L 390 200 L 25 200 Z" fill="url(#trendGradient)" />
                  {/* Line */}
                  <path d="M 25 140 L 70 115 L 120 100 L 170 95 L 220 85 L 270 70 L 320 90 L 370 85 L 390 80" fill="none" stroke="#32D583" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Data Points */}
                  <circle cx="70" cy="115" r="3" fill="#32D583" />
                  <circle cx="170" cy="95" r="3" fill="#32D583" />
                  <circle cx="270" cy="70" r="3" fill="#F59E0B" />
                  <circle cx="390" cy="80" r="4" fill="#F59E0B" stroke="#121214" strokeWidth="2" />
                </svg>

                {/* Floating Tooltip */}
                <div style={{
                  position: 'absolute', right: '0', bottom: '60px',
                  background: '#18181B', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '6px', padding: '6px 10px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}>
                  <span style={{ fontSize: '0.65rem', color: '#A1A1AA' }}>Jul 30</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: '#FFF', fontFamily: 'var(--font-mono)' }}>84</span>
                    <span style={{ fontSize: '0.65rem', color: '#32D583', fontWeight: 600 }}>↑ 3</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '25px', marginTop: '8px', fontSize: '0.65rem', color: '#71717A', fontFamily: 'var(--font-mono)' }}>
                  <span>Jun 30</span><span>Jul 7</span><span>Jul 14</span><span>Jul 21</span><span>Jul 30</span>
                </div>
              </div>
            </div>

            {/* Banner */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '12px' }}>
              <CheckCircle2 size={16} color="#32D583" />
              <div>
                <span style={{ fontSize: '0.75rem', color: '#FFF', display: 'block', fontWeight: 500 }}>Good momentum this month.</span>
                <span style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>Keep supporting your at risk operators to improve the score.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM ROW: QUICK ACTIONS ─── */}
        <div>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            QUICK ACTIONS
          </span>
          <div className="grid-4-cols">
            
            <div style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(239, 68, 68, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
                <Activity size={14} />
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#FFF', display: 'block' }}>Intervene</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>Support at risk operators</span>
              </div>
            </div>

            <div style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(59, 130, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                <MessageSquare size={14} />
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#FFF', display: 'block' }}>Message</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>Send announcement</span>
              </div>
            </div>

            <div style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A855F7' }}>
                <FileText size={14} />
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#FFF', display: 'block' }}>Review Evidence</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>12 pending</span>
              </div>
            </div>

            <div style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B' }}>
                <BookOpen size={14} />
              </div>
              <div>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#FFF', display: 'block' }}>Create Playbook</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>New playbook</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ─── RIGHT UTILITY COLUMN (30%) ─── */}
      <div style={{
        padding: 'var(--spacing-page-v) var(--spacing-card) 64px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        background: '#0B0B0D',
        borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
        overflowY: 'auto'
      }}>
        
        {/* RISK DISTRIBUTION */}
        <div>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            RISK DISTRIBUTION
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {/* SVG Donut */}
            <div style={{ position: 'relative', width: '110px', height: '110px' }}>
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="40" fill="none" stroke="#18181B" strokeWidth="16" />
                <circle cx="55" cy="55" r="40" fill="none" stroke="#32D583" strokeWidth="16" strokeDasharray="251" strokeDashoffset="125" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} />
                <circle cx="55" cy="55" r="40" fill="none" stroke="#F59E0B" strokeWidth="16" strokeDasharray="251" strokeDashoffset="180" style={{ transform: 'rotate(90deg)', transformOrigin: '50% 50%' }} />
                <circle cx="55" cy="55" r="40" fill="none" stroke="#F97316" strokeWidth="16" strokeDasharray="251" strokeDashoffset="210" style={{ transform: 'rotate(190deg)', transformOrigin: '50% 50%' }} />
                <circle cx="55" cy="55" r="40" fill="none" stroke="#EF4444" strokeWidth="16" strokeDasharray="251" strokeDashoffset="230" style={{ transform: 'rotate(240deg)', transformOrigin: '50% 50%' }} />
              </svg>
            </div>
            {/* Legend */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#32D583' }}/> <span style={{ fontSize:'0.75rem', color:'#A1A1AA' }}>Healthy</span></div>
                <span style={{ fontSize:'0.75rem', color:'#32D583', fontFamily:'var(--font-mono)' }}>57</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#F59E0B' }}/> <span style={{ fontSize:'0.75rem', color:'#A1A1AA' }}>Watchlist</span></div>
                <span style={{ fontSize:'0.75rem', color:'#F59E0B', fontFamily:'var(--font-mono)' }}>45</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#F97316' }}/> <span style={{ fontSize:'0.75rem', color:'#A1A1AA' }}>At Risk</span></div>
                <span style={{ fontSize:'0.75rem', color:'#F97316', fontFamily:'var(--font-mono)' }}>28</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#EF4444' }}/> <span style={{ fontSize:'0.75rem', color:'#A1A1AA' }}>Critical</span></div>
                <span style={{ fontSize:'0.75rem', color:'#EF4444', fontFamily:'var(--font-mono)' }}>12</span>
              </div>
            </div>
          </div>
        </div>

        {/* CELEBRATE */}
        <div>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            CELEBRATE
          </span>
          <div style={{ background: '#121214', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Ana Delgado" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FFF' }}>Ana Delgado</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#32D583', marginBottom: '16px', lineHeight: 1.4 }}>
              Closed first retainer client for $4,500/mo! 🎉
            </p>
            <button style={{ width: '100%', background: 'rgba(255,255,255,0.05)', color: '#FFF', border: 'none', borderRadius: '6px', padding: '8px', fontSize: '0.75rem', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
              Send Congrats / Next Step <ArrowRight size={14} color="#A1A1AA" />
            </button>
          </div>
        </div>

        {/* LIVE COMMUNITY FEED */}
        <div>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
            LIVE COMMUNITY FEED
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFF' }}>Ana Delgado</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>10m ago</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>Unlocked: First Client! 🎉</p>
            </div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFF' }}>Marcus L.</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>1h ago</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>Published "My exact cold calling script"</p>
            </div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFF' }}>Julian S. (Coach)</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>3h ago</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>New Playbook Published: Objection Handling Masterclass</p>
            </div>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#FFF' }}>David Kim</span>
                <span style={{ fontSize: '0.65rem', color: '#71717A' }}>4h ago</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#A1A1AA' }}>Completed Mission: Connect Outbound Infrastructure</p>
            </div>
            <button style={{ background: 'none', border: 'none', color: '#A1A1AA', fontSize: '0.75rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', padding: 0, cursor: 'pointer' }}>
              View Full Feed <ArrowRight size={12} />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
