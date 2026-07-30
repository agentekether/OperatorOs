import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function WelcomeView({ onEnterPrototype }) {
  const paragraphs = [
    "After our conversation a few weeks ago, I couldn't stop thinking about the operational challenges behind building a high-performance community.",
    "So I decided to explore an idea.",
    "This prototype isn't based on your internal systems, and it isn't meant to represent how Gridlocked works today.",
    "It's simply my attempt to imagine what an operating system for communities like this could become.",
    "I know many of my assumptions are probably wrong.",
    "That's part of the process.",
    "I've found that the best way for me to understand complex problems is to build.",
    "Every project becomes an opportunity to learn, challenge my own thinking, and explore ideas that I wouldn't discover otherwise.",
    "This prototype is simply the result of that curiosity.",
    "Whether it ever becomes anything or not, I'm grateful that our conversation inspired me to build it."
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
      padding: '80px 24px',
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
