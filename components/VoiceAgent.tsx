'use client';
import { useEffect, useState } from 'react';

export default function VoiceAgent() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Load ElevenLabs convai widget script
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  return (
    <>
      {/* Floating voice button */}
      <button
        onClick={() => setOpen(true)}
        className="voice-agent-btn"
        aria-label="Praat met onze AI agent"
        title="Praat met onze AI"
      >
        <span className="voice-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
            <line x1="12" y1="19" x2="12" y2="23"/>
            <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>
        </span>
        <span className="voice-label">Praat met AI</span>
        <span className="voice-waves">
          <span/><span/><span/>
        </span>
      </button>

      {/* Voice Agent Modal */}
      {open && (
        <div className="voice-modal-overlay" onClick={() => setOpen(false)}>
          <div className="voice-modal" onClick={e => e.stopPropagation()}>
            <div className="voice-modal-header">
              <div className="voice-avatar">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" y1="19" x2="12" y2="23"/>
                  <line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              </div>
              <div>
                <p className="voice-modal-title">Sora — AI Consultant</p>
                <p className="voice-modal-sub">Seiketsu Systems</p>
              </div>
              <button className="voice-close" onClick={() => setOpen(false)} aria-label="Sluiten">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="voice-modal-body">
              {loaded ? (
                // ElevenLabs Conversational AI widget
                // Replace ELEVENLABS_AGENT_ID_PLACEHOLDER with your actual ElevenLabs agent ID
                // @ts-ignore
                <elevenlabs-convai agent-id="ELEVENLABS_AGENT_ID_PLACEHOLDER" />
              ) : (
                <div className="voice-loading">
                  <div className="voice-orb">
                    <div className="voice-ring" />
                    <div className="voice-ring voice-ring-2" />
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1.5">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    </svg>
                  </div>
                  <p className="voice-loading-text">Sora wordt geladen...</p>
                </div>
              )}
              <p className="voice-hint">Klik op de microfoon om een gesprek te starten</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
