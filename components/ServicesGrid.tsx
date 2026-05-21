import { services } from "@/lib/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ locale }: { locale: string }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((s, i) => <ServiceCard key={s.slug} service={s} locale={locale} index={i} />)}
    </div>
  );
}
