'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { BlogTag } from '@/types/blog';

interface TagCloudProps {
  tags: BlogTag[];
  limit?: number;
}

export function TagCloud({ tags, limit }: TagCloudProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get('tag') || '';
  
  const displayTags = limit ? tags.slice(0, limit) : tags;

  const createTagURL = (tagSlug: string) => {
    const params = new URLSearchParams(searchParams);
    if (tagSlug) {
      params.set('tag', tagSlug);
    } else {
      params.delete('tag');
    }
    params.delete('page'); // Reset to first page on tag change
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-wrap gap-2">
      {displayTags.map((tag) => (
        <Link key={tag.slug} href={createTagURL(tag.slug)}>
          <Badge
            variant={currentTag === tag.slug ? 'default' : 'outline'}
            className={cn(
              'cursor-pointer',
              currentTag === tag.slug ? 'bg-primary' : 'hover:bg-muted'
            )}
          >
            {tag.name} ({tag.count})
          </Badge>
        </Link>
      ))}
      {limit && tags.length > limit && (
        <Link href="/blog/tags">
          <Badge variant="outline" className="cursor-pointer hover:bg-muted">
            +{tags.length - limit} more
          </Badge>
        </Link>
      )}
    </div>
  );
}