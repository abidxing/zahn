import type { Locale } from "@/lib/i18n";
import { AUSTRIAN_HEALTH_INSURERS } from "@/lib/healthInsurance";

const pillClass =
  "inline-flex min-w-[4.5rem] items-center justify-center rounded-full border border-primary/25 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:border-primary/50 hover:bg-primary/[0.06]";

export default function HealthInsuranceFundLinks({ locale: _locale }: { locale: Locale }) {
  return (
    <div className="flex flex-wrap gap-3">
      {AUSTRIAN_HEALTH_INSURERS.map((ins) => (
        <a
          key={ins.id}
          href={ins.href}
          target="_blank"
          rel="noopener noreferrer"
          className={pillClass}
        >
          {ins.label}
        </a>
      ))}
    </div>
  );
}
