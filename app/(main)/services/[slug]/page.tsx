import BannerHeader from "@/components/BannerHeader";
import ServiceDetailsContent from "@/components/ServiceDetailsContent";
import { notFound } from "next/navigation";

interface ListItem {
  text: string;
}

interface Paragraph {
  text: string;
}

interface Section {
  id: string;
  title: string;
  paragraphs: Paragraph[];
  listItems?: ListItem[];
}

interface CTA {
  text: string;
  buttonText: string;
  link: string;
}

interface Meta {
  title: string;
  description: string;
  keywords: string[];
}

interface PageData {
  title: string;
  description: string;
  heroImage?: string;
  sections: Section[];
  meta?: Meta;
  cta?: CTA;
}

interface Service {
  id: string;
  title: string;
  slug: string;
  image?: string;
  page: PageData;
}

// ✅ Fetch data on the server
async function getService(slug: string): Promise<Service | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
      ? process.env.NEXT_PUBLIC_BASE_URL
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/admin/services/${slug}`, {
      cache: "no-store", // ensures fresh data each request
      next: { revalidate: 60 }, // or you can use ISR (60 seconds)
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) return notFound();

  const { page } = service;

  const formattedSections = page.sections?.map((section: any) => ({
    title: section.title,
    paragraphs: section.paragraphs?.map((p: any) => p.text) || [],
    listItems: section.listItems?.map((l: any) => ({ text: l.text })) || [],
  }));

  return (
    <div>
      {/* Hero Banner */}
      {page.heroImage && (
        <BannerHeader
          title={page.title}
          subtitle=""
          caption="Areas of Services"
          iconClass="flaticon-courthouse"
          backgroundImage={page.heroImage}
          overlayDark={5}
        />
      )}

      {/* Service Details */}
      <ServiceDetailsContent sections={formattedSections} />

      {/* CTA */}
      {page.cta && (
        <div className="max-w-4xl mx-auto py-10 text-center">
          <p className="text-lg mb-4">{page.cta.text}</p>
          <a
            href={page.cta.link}
            className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/80 transition"
          >
            {page.cta.buttonText}
          </a>
        </div>
      )}
    </div>
  );
}
