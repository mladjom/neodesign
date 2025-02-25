import { Skeleton } from '@/components/ui/skeleton';

export function TableOfContentsSkeleton() {
    return (
      <div className="space-y-2">
        <Skeleton className="h-5 w-36 mb-3" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-5 w-full" />
          ))}
        </div>
      </div>
    );
  }