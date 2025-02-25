'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { BlogCategory } from '@/types/blog';

interface CategoryFilterProps {
  categories: BlogCategory[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || '';

  const createCategoryURL = (categorySlug: string) => {
    const params = new URLSearchParams(searchParams);
    if (categorySlug) {
      params.set('category', categorySlug);
    } else {
      params.delete('category');
    }
    params.delete('page'); // Reset to first page on category change
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link href={createCategoryURL('')}>
        <Badge
          variant={!currentCategory ? 'default' : 'outline'}
          className={cn(
            'cursor-pointer',
            !currentCategory ? 'bg-primary' : 'hover:bg-muted'
          )}
        >
          All
        </Badge>
      </Link>
      {categories.map((category) => (
        <Link key={category.slug} href={createCategoryURL(category.slug)}>
          <Badge
            variant={currentCategory === category.slug ? 'default' : 'outline'}
            className={cn(
              'cursor-pointer',
              currentCategory === category.slug ? 'bg-primary' : 'hover:bg-muted'
            )}
          >
            {category.name} ({category.count})
          </Badge>
        </Link>
      ))}
    </div>
  );
}