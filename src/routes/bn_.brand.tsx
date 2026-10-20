import { createFileRoute } from "@tanstack/react-router";
import { BrandGuide } from "@/components/brand-guide";
import { pageMeta } from "@/lib/page-meta";

export const Route = createFileRoute("/bn_/brand")({
  head: () => pageMeta("ব্র্যান্ড নির্দেশিকা", "অ্যালগোরিজম প্রেসের পরিচয়: AP লোগো, ফাঁকা জায়গা, রং, টাইপোগ্রাফি, নাম এবং স্ক্রিন ও মুদ্রণে সঠিক ব্যবহার।"),
  component: BrandPageBn,
});

function BrandPageBn() {
  return <BrandGuide lang="bn" />;
}
