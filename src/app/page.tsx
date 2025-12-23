import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Liro Digital Agency",
};

export default function Home() {
  return (
    <HomeMain />
  );
}
