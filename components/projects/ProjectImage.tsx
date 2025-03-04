import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  animation?: boolean;
}

export function ProjectImage({
  src,
  alt,
  className,
  priority = false,
  fill = false,
  width,
  height,
  animation = true,
}: ProjectImageProps) {
  const imageProps = {
    src,
    alt,
    className: cn("object-cover rounded-lg", className),
    priority,
    ...(fill ? { fill: true } : { width, height }),
  };
  
  // Use next/image for proper optimization
  if (!animation) {
    return <Image {...imageProps} />;
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn("overflow-hidden rounded-lg", fill && "relative")}
      style={fill ? { width: '100%', height: '100%' } : {}}
    >
      <Image {...imageProps} />
    </motion.div>
  );
}