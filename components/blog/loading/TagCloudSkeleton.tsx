import { Skeleton } from '@/components/ui/skeleton';

export function TagCloudSkeleton() {
    return (
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-6 w-20 rounded-full" />
        ))}
      </div>
    );
  }