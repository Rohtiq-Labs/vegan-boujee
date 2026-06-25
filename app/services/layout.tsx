import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences — Vegan & Boujee",
  description:
    "Choose your transformation. Hair, brows, lashes, and beauty enhancing treatments — every experience at Vegan & Boujee is designed with intention.",
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return children;
}
