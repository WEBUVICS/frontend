import { recruitmentConfig } from "@/lib/recruitment-config";
import { RegistrationButton } from "@/components/userComponents/RegistrationButton";

export default function RecruitmentSection() {
  if (!recruitmentConfig.isActive || !recruitmentConfig.showHomeSection) {
    return null;
  }

  return (
    <section
      aria-labelledby="open-recruitment-title"
      className="w-full bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 text-left sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 shadow-md">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-12">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                  {recruitmentConfig.label}
                </p>
                {recruitmentConfig.batchName && (
                  <p className="mt-2 text-sm font-semibold text-gray-600">
                    UVICS {recruitmentConfig.batchName}
                  </p>
                )}
                <h2
                  id="open-recruitment-title"
                  className="mt-2 font-quick text-2xl font-bold text-gray-900 sm:text-3xl"
                >
                  {recruitmentConfig.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-gray-600">
                  {recruitmentConfig.shortMessage}
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-white p-5 text-center sm:p-6">
                {recruitmentConfig.deadline && (
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-600">
                      {recruitmentConfig.deadlineLabel}
                    </p>
                    <p className="mt-1 font-quick text-xl font-bold text-gray-900">
                      {recruitmentConfig.deadline}
                    </p>
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <RegistrationButton className="w-full" />
                  {recruitmentConfig.detailsUrl && (
                    <a
                      href={recruitmentConfig.detailsUrl}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 transition-colors duration-150 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      {recruitmentConfig.detailsLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {recruitmentConfig.benefits.length > 0 && (
              <div className="mt-8 grid gap-5 border-t border-blue-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {recruitmentConfig.benefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <h3 className="font-quick font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
