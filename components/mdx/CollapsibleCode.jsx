"use client";

import React, { useState } from 'react';

export default function CollapsibleCode({ children, title = 'Code Example', language = 'javascript' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '0.375rem',
      marginBottom: '1.5rem',
      overflow: 'hidden'
    }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '0.75rem 1rem',
          textAlign: 'left',
          background: '#f9fafb',
          cursor: 'pointer',
          border: 'none',
          borderBottom: isOpen ? '1px solid #e5e7eb' : 'none'
        }}
      >
        <span style={{ fontWeight: 'medium' }}>{title}</span>
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div style={{ padding: '1rem' }}>
          <pre style={{
            margin: 0,
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '0.25rem',
            overflow: 'auto'
          }}>
            <code className={`language-${language}`}>
              {children}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}