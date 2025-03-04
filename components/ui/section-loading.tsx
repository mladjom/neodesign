import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export interface SectionLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  showTitle?: boolean;
  subtitle?: boolean;
  items?: number;
  itemHeight?: string;
  layout?: "grid" | "list";
  columns?: 1 | 2 | 3 | 4;
}

export function SectionLoading({
  className,
  showTitle = true,
  subtitle = true,
  items = 3,
  itemHeight = "h-48",
  layout = "grid",
  columns = 3,
  ...props
}: SectionLoadingProps) {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      {showTitle && <Skeleton className="h-10 w-3/4 max-w-lg mx-auto" />}
      {subtitle && <Skeleton className="h-6 w-2/3 max-w-md mx-auto" />}
      
      <div 
        className={cn(
          layout === "grid" && `grid gap-6 grid-cols-1 md:grid-cols-${columns}`,
          layout === "list" && "space-y-4"
        )}
      >
        {Array.from({ length: items }).map((_, index) => (
          <Skeleton 
            key={index}
            className={cn(
              itemHeight,
              "w-full rounded-md"
            )} 
          />
        ))}
      </div>
    </div>
  );
}