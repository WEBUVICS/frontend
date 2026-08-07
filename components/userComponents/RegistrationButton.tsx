import { cn } from "@/lib/utils";
import { recruitmentConfig } from "@/lib/recruitment-config";

interface RegistrationButtonProps {
  className?: string;
  variant?: "primary" | "announcement";
}

export function RegistrationButton({
  className,
  variant = "primary",
}: RegistrationButtonProps) {
  if (!recruitmentConfig.isActive || !recruitmentConfig.applicationUrl) {
    return null;
  }

  return (
    <a
      href={recruitmentConfig.applicationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg text-sm font-semibold text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "announcement"
          ? "min-h-9 bg-[#2f6fd6] px-4 py-1.5 hover:bg-[#245db5] focus-visible:outline-[#2f6fd6]"
          : "min-h-11 bg-blue-600 px-6 py-2.5 shadow-md hover:bg-blue-700 focus-visible:outline-blue-600",
        className
      )}
    >
      {recruitmentConfig.applicationLabel}
      {variant === "announcement" && (
        <span aria-hidden="true" className="ml-1.5">
          →
        </span>
      )}
    </a>
  );
}
