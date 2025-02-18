// /app/chat/components/LivePreview.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface LivePreviewProps {
  code: string;
}

const LivePreview: React.FC<LivePreviewProps> = ({ code }) => {
    console.log(code)
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
      }
    }
  }, [code]);

  return <iframe ref={iframeRef} title="Live Preview" className="w-full h-full border rounded-md" />;
};

export default LivePreview;
