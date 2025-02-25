'use client';

import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ShareLinksProps {
  url: string;
  title: string;
}

export function ShareLinks({ url, title }: ShareLinksProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  
  useEffect(() => {
    // Set the full URL when component mounts (client-side)
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.origin + url);
    }
  }, [url]);
  
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsCopied(true);
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <div className="flex gap-2">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded"
        >
          <FaTwitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </a>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded"
        >
          <FaFacebookF className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded"
        >
          <FaLinkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </a>
        <Button
          onClick={copyToClipboard}
          variant="outline"
          size="icon"
          className={cn("h-8 w-8", isCopied && "text-green-500")}
        >
          {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy link</span>
        </Button>
      </div>
    </div>
  );
}