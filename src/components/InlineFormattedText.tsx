import React from 'react';

interface InlineFormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Splits Arabic text by backticks (`...`) and renders code segments
 * inside a dir="ltr" monospace chip so C++ identifiers, escape sequences,
 * and operators never get garbled by RTL bidirectional ordering.
 */
export const InlineFormattedText: React.FC<InlineFormattedTextProps> = ({
  text,
  className = '',
}) => {
  const parts = text.split(/(`[^`]+`|C\+\+)/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
          const codeText = part.slice(1, -1);
          return (
            <code
              key={index}
              dir="ltr"
              className="inline-block mx-1 px-2 py-0.5 rounded bg-[#0A0E17] border border-[#00F0FF]/25 text-[#00F0FF] font-mono text-[0.92em] leading-normal align-baseline"
            >
              {codeText}
            </code>
          );
        }
        if (part === 'C++') {
          return (
            <bdi
              key={index}
              dir="ltr"
              className="font-mono font-bold text-[#00F0FF] mx-0.5"
            >
              C++
            </bdi>
          );
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
};
