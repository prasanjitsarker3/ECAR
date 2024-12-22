import Banner from "@/components/FrontPage/Banner";
import CarBrand from "@/components/FrontPage/CarBrand";
import DiscountBanner from "@/components/FrontPage/DiscountBanner";
import FeaturedProduct from "@/components/FrontPage/FeaturedProduct";
import FutureBanner from "@/components/FrontPage/FutureBanner";
import MainBanner from "@/components/FrontPage/MainBanner";
import PopularCar from "@/components/FrontPage/PopularCar";

export default function Home() {
  return (
    <div className="bg-[#0B0F12]">
      {/* <Banner /> */}
      <MainBanner />
      <CarBrand />
      <FutureBanner />
      <PopularCar />
      <FeaturedProduct />
      <DiscountBanner />
    </div>
  );
}
