import { ReactNode } from "react";

// Section variants
export type SectionBackground = "default" | "muted" | "primary";

// Button variants
export type ButtonVariant = 
  | "default" 
  | "destructive" 
  | "outline" 
  | "secondary" 
  | "ghost" 
  | "link" 
  | "gradient";

// Button sizes
export type ButtonSize = "default" | "sm" | "lg" | "icon" | "pill";

// Badge variants
export type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

// Common props for section components
export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// Analytics event type
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Common animation variants
export const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const staggerChildrenVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

export const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};