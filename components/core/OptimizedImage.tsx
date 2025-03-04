import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  aspectRatio?: number;
  className?: string;
}

export function OptimizedImage({
  alt,
  aspectRatio,
  className,
  fill = false,
  ...props
}: OptimizedImageProps) {
  // Function to determine sizes based on usage pattern
  const getSizes = () => {
    if (props.sizes) return props.sizes;
    
    // Default responsive sizes if not provided
    return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  };

  if (fill) {
    return (
      <div 
        className={cn(
          'relative overflow-hidden', 
          aspectRatio && `aspect-[${aspectRatio}]`,
          className
        )}
      >
        <Image
          {...props}
          alt={alt}
          fill
          sizes={getSizes()}
          className={cn('object-cover', className)}
        />
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      sizes={getSizes()}
      className={cn(className)}
    />
  );
}