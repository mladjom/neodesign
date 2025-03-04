import React from 'react';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  centered?: boolean;
  container?: boolean;
  background?: 'default' | 'muted' | 'primary';
  animate?: boolean;
  motionProps?: MotionProps;
  children: React.ReactNode;
}

export function SectionWrapper({
  title,
  subtitle,
  centered = false,
  container = true,
  background = 'default',
  animate = true,
  motionProps,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  const backgroundClasses = {
    default: '',
    muted: 'bg-muted/50',
    primary: 'bg-primary text-primary-foreground',
  };

  // Base section with styling
  const Section = ({ children }: { children: React.ReactNode }) => (
    <section
      className={cn(
        'py-20',
        backgroundClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );

  // Content wrapper with optional container
  const Content = ({ children }: { children: React.ReactNode }) => (
    <div className={container ? 'container px-4' : ''}>
      {children}
    </div>
  );

  // Heading component with title and subtitle
  const Heading = () => {
    if (!title && !subtitle) return null;

    return (
      <div className={cn("space-y-4 mb-12", centered && "text-center")}>
        {title && <h2 className="text-3xl font-bold">{title}</h2>}
        {subtitle && (
          <p className={cn(
            "text-xl text-muted-foreground",
            centered && "max-w-2xl mx-auto"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    );
  };

  // Determine whether to use motion or regular div
  const ContentWrapper = animate 
    ? motion.div
    : React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
        ({ children, ...props }, ref) => (
          <div ref={ref} {...props}>{children}</div>
        )
      );
  
  if (!animate) {
    (ContentWrapper as React.ComponentType).displayName = 'ContentWrapper';
  }

  // Default animation variants if using motion
  const defaultMotionProps: MotionProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <Section>
      <Content>
        <ContentWrapper
          className={cn("space-y-12", centered && "items-center")}
          {...(defaultMotionProps as any)}
          {...(motionProps as any)}
        >
          <Heading />
          {children}
        </ContentWrapper>
      </Content>
    </Section>
  );
}