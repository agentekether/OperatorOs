import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WelcomeView({ onEnterPrototype }) {
  const paragraphs = [
    "After our conversation a few weeks ago, I couldn't stop thinking about the challenge of building communities that create real transformation.",
    "Having built communities myself, it brought back a question I'd been thinking about for a while: How do you actually measure progress, identify when someone needs support, and help Community Success Managers create better outcomes?",
    "So I decided to explore an idea.",
    "I genuinely enjoyed building this. For me, building is one of the best ways to learn.",
    "This prototype isn't based on your internal systems. It's simply my attempt to imagine an execution layer that complements platforms like Circle, giving Community Success Managers a single operational workspace to guide members, monitor progress, and surface opportunities to help.",
    "I know many of my assumptions are probably wrong—and that's part of the process. Every project is an opportunity to learn, challenge my thinking, and explore new ideas.",
    "Whether any of these ideas are useful or not, I'm grateful that our conversation inspired me to build this."
  ];

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: '#0B0B0D',
      color: '#F5F5F4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'max(80px, var(--spacing-page-v)) var(--spacing-page-h)',
      animation: 'fadeInWelcome 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
    }}>
      <style>{`
        @keyframes fadeInWelcome {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <main style={{
        width: '100%',
        maxWidth: '720px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        
        {/* Small Label */}
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          color: '#71717A',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '16px',
          display: 'block'
        }}>
          Concept Prototype
        </span>

        {/* Large Title */}
        <h1 style={{
          fontSize: '2.75rem',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '-0.035em',
          lineHeight: 1.15,
          marginBottom: '40px'
        }}>
          Inspired by Gridlocked.
        </h1>

        {/* Body Copy - Thoughtful Letter */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginBottom: '48px',
          width: '100%'
        }}>
          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              style={{
                fontSize: '1.0625rem',
                color: '#A1A1AA',
                lineHeight: 1.75,
                margin: 0,
                letterSpacing: '-0.005em'
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Primary Button */}
        <button
          onClick={onEnterPrototype}
          style={{
            background: '#FFFFFF',
            color: '#0B0B0D',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 28px',
            fontSize: '0.9375rem',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.2s ease',
            boxShadow: '0 4px 16px rgba(255, 255, 255, 0.08)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.14)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.08)';
          }}
        >
          Enter Prototype
          <ArrowRight size={16} />
        </button>

        {/* Secondary Note */}
        <span style={{
          fontSize: '0.75rem',
          color: '#52525B',
          marginTop: '16px',
          display: 'block',
          letterSpacing: '-0.01em'
        }}>
          This is a concept prototype built independently as a learning exercise.
        </span>

      </main>
    </div>
  );
}
