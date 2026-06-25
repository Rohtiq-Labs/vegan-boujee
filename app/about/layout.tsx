import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chantel's Story — Vegan & Boujee",
  description:
    "The founder story behind Vegan & Boujee. Conscious beauty, personal transformation, and a space for women to come home to themselves.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return children;
}
