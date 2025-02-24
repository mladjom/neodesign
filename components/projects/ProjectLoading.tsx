import { Skeleton } from "@/components/ui/skeleton";

export function ProjectHeroSkeleton() {
  return (
    <section className="pt-20 md:pt-32">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-12 w-3/4" />
        </div>
      </div>
    </section>
  );
}

export function ProjectOverviewSkeleton() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <Skeleton className="h-6 w-24 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
          </div>
          <Skeleton className="aspect-video w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export function ProjectProcessSkeleton() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="space-y-12">
          <Skeleton className="h-10 w-48 mx-auto" />
          <div className="space-y-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-24 w-full" />
                </div>
                <Skeleton className="aspect-video w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectResultsSkeleton() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        <div className="space-y-12">
          <Skeleton className="h-10 w-48 mx-auto" />
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-12 w-24 mx-auto" />
                <Skeleton className="h-6 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjectLoading() {
  return (
    <div className="space-y-20">
      <ProjectHeroSkeleton />
      <ProjectOverviewSkeleton />
      <ProjectProcessSkeleton />
      <ProjectResultsSkeleton />
    </div>
  );
}