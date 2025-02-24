import { Skeleton } from "@/components/ui/skeleton";

export function ProjectFilterSkeleton() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-24" />
      ))}
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-0">
        <Skeleton className="aspect-video rounded-t-lg" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex gap-2 flex-wrap">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-16" />
          ))}
        </div>
        <div>
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3 mt-1" />
        </div>
      </div>
    </div>
  );
}

export function ProjectGridSkeleton() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function FeaturedCaseStudySkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-2 w-2 rounded-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
          <Skeleton className="h-10 w-32" />
        </div>
        <Skeleton className="aspect-video rounded-lg" />
      </div>
    </div>
  );
}