import { Skeleton } from '@/components/ui/skeleton';

export function CategoryFilterSkeleton() {
    return (
      <div className="flex flex-wrap gap-2 mb-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="h-6 w-16 rounded-full" />
        ))}
      </div>
    );
  }