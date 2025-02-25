import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

const icons = {
  default: Info,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle,
};

interface CalloutProps {
  type?: keyof typeof icons;
  title?: string;
  children?: React.ReactNode;
}

export function Callout({
  type = "default",
  title,
  children
}: CalloutProps) {
  const Icon = icons[type];

  return (
    <Alert>
      <Icon className={cn(
        "h-4 w-4",
        type === "error" && "text-destructive",
        type === "warning" && "text-warning",
        type === "success" && "text-success",
        type === "info" && "text-info"
      )} />
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
