export const revalidate = 60; // Revalidate every 60 seconds

import Hero from "@/components/Hero";
import NavTabs from "@/components/NavTabs";
import PropertyFilters from "@/components/PropertyFilters";
import PropertyListings from "@/components/PropertyListings";
import Head from "next/head";

export const metadata = {
  title: "Drive Vest | Property Management",
  description:
    "Manage properties with Drive Vest's modern platform. Streamline leasing, payments, and tenant communication effortlessly.",
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <PropertyFilters />
      <NavTabs />
      <PropertyListings title={true} seeAllLink={true} />
    </>
  );
}
