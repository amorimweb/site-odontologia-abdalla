import type { ReactElement } from 'react';

const paths: Record<string, ReactElement> = {
  document: <><rect x="5.5" y="3" width="13" height="18" rx="1" /><line x1="8.5" y1="8" x2="15.5" y2="8" /><line x1="8.5" y1="12" x2="15.5" y2="12" /><line x1="8.5" y1="16" x2="13" y2="16" /></>,
  align: <><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="16" y2="12" /><line x1="4" y1="18" x2="12" y2="18" /></>,
  sparkle: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" /></>,
  heart: <><path d="M12 20.5s-6.7-4.1-9-7.9C1.2 9.3 2.6 6 6 5.5c2-.3 3.6.8 4.2 2.3C10.8 6.3 12.4 5.2 14.4 5.5c3.4.5 4.8 3.8 3 6.1-2.3 3.8-5.4 7.9-5.4 7.9z" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="12" y1="9" x2="12" y2="15" /></>,
};

export function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name] ?? paths.document}
    </svg>
  );
}
