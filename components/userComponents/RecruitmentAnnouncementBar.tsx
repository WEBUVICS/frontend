"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { recruitmentConfig } from "@/lib/recruitment-config";
import { RegistrationButton } from "@/components/userComponents/RegistrationButton";

const dismissalKey = `uvics-recruitment-announcement-${recruitmentConfig.batchName || "active"}`;

export default function RecruitmentAnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
      setIsVisible(sessionStorage.getItem(dismissalKey) !== "dismissed");
    } catch {
      setIsVisible(true);
    }
  }, []);

  if (
    !recruitmentConfig.isActive ||
    !recruitmentConfig.showAnnouncementBar ||
    !isVisible
  ) {
    return null;
  }

  const dismissAnnouncement = () => {
    setIsVisible(false);

    try {
      sessionStorage.setItem(dismissalKey, "dismissed");
    } catch {
      // The bar is still dismissed for the current rendered page.
    }
  };

  return (
    <aside
      aria-label={recruitmentConfig.label}
      className="border-b border-orange-200 bg-orange-50 text-gray-900"
    >
      <div className="mx-auto flex min-h-12 max-w-7xl items-center gap-2 px-4 py-1 sm:gap-4 sm:px-6">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="rounded-md bg-[#ff9e3d] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {recruitmentConfig.label}
          </span>
          <p className="leading-5">
            <span className="font-semibold">
              UVICS {recruitmentConfig.batchName}: {recruitmentConfig.title}
            </span>
            {recruitmentConfig.deadline && (
              <span className="ml-2 text-gray-600">
                {recruitmentConfig.deadlineLabel}: {recruitmentConfig.deadline}
              </span>
            )}
          </p>
        </div>

        <RegistrationButton variant="announcement" />

        <button
          type="button"
          onClick={dismissAnnouncement}
          aria-label={recruitmentConfig.dismissLabel}
          className="flex min-h-10 min-w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-gray-600 transition-colors duration-150 hover:bg-orange-100 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6fd6]"
        >
          <X aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}
