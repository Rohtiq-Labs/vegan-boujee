import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Experience — Vegan & Boujee",
  description:
    "Begin your transformation. Book a consultation with Chantel Justene at Vegan & Boujee in Upland, CA.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return children;
}
