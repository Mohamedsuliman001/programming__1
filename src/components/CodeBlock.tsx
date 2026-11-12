import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { tokenizeCppLine } from '../utils/quizLogic';

interface CodeBlockProps {
  code: string;
  label?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  label = 'main.cpp',
}) => {
  const [copied, setCopied] = useState(false);
  const lines = code.trim().split('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard fallback ignored in restricted iframe
    }
  };

  return (
    <div
      dir="ltr"
      className="my-4 rounded-xl overflow-hidden bg-[#070A10] border border-[#00F0FF]/25 shadow-lg"
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D1322] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00F0FF]" />
          <span className="font-mono text-xs font-medium text-slate-300 tracking-wide">
            {label}
          </span>
          <span className="text-slate-600 text-xs">·</span>
          <span className="font-mono text-[11px] text-[#FFB800]">C++17</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label="نسخ الكود البرمجي"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Lines */}
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm sm:text-base leading-relaxed">
          {lines.map((line, lineIdx) => {
            const tokens = tokenizeCppLine(line);
            return (
              <div
                key={lineIdx}
                className="table-row hover:bg-slate-900/50 transition-colors"
              >
                <span className="table-cell pr-4 select-none text-right text-xs text-slate-600 font-mono tabular-nums w-8">
                  {lineIdx + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {tokens.map((token, tIdx) => {
                    switch (token.type) {
                      case 'keyword':
                        return (
                          <span
                            key={tIdx}
                            className="text-[#00F0FF] font-semibold"
                          >
                            {token.value}
                          </span>
                        );
                      case 'type':
                        return (
                          <span
                            key={tIdx}
                            className="text-[#FFB800] font-medium"
                          >
                            {token.value}
                          </span>
                        );
                      case 'function':
                        return (
                          <span key={tIdx} className="text-sky-300 font-medium">
                            {token.value}
                          </span>
                        );
                      case 'string':
                        return (
                          <span key={tIdx} className="text-emerald-400">
                            {token.value}
                          </span>
                        );
                      case 'number':
                        return (
                          <span key={tIdx} className="text-amber-300">
                            {token.value}
                          </span>
                        );
                      case 'operator':
                        return (
                          <span key={tIdx} className="text-rose-300">
                            {token.value}
                          </span>
                        );
                      default:
                        return (
                          <span key={tIdx} className="text-slate-100">
                            {token.value}
                          </span>
                        );
                    }
                  })}
                </span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
};
