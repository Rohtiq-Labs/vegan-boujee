import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Journal — Vegan & Boujee",
  description:
    "An editorial gallery of transformations, confidence, and self-expression at Vegan & Boujee.",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return children;
}
