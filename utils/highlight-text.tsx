import React from 'react';

/**
 * Highlights parts of text that match a search query
 * @param text The text to highlight
 * @param query The search query
 * @returns JSX with highlighted text
 */
export function highlightText(text: string, query: string): React.ReactNode {
  if (!query.trim()) {
    return text;
  }

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => (
        regex.test(part) ? (
          <span key={i} className="bg-blue-500/30 text-blue-100 px-0.5 rounded">
            {part}
          </span>
        ) : (
          part
        )
      ))}
    </>
  );
}