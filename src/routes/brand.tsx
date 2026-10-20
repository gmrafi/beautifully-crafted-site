import { createFileRoute } from "@tanstack/react-router";
import { BrandGuide } from "@/components/brand-guide";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/brand")({
  head: () => pageMeta("Brand Guidelines", "The Algorism Press identity: the AP logo, clear space, colours, typography, name, and correct use on screen and in print."),
  component: BrandPage,
});

function BrandPage() {
  return <BrandGuide lang="en" />;
}
