import BestOfBest from "@/components/bestOfBest";
import CollectionPart from "@/components/collectionPart";
// import ShoesCollected from "@/components/shoesCollected";
// import ShoesCollectedMap from "@/components/shoesCollectedMap";
import SliderComponents from "@/components/sliderComponents";
import SneakersPart from "@/components/sneakersPart";
import WhyJoinUs from "@/components/whyJoinUs";

export default function Home() {
  return (
    <div>
      <SneakersPart />
      <BestOfBest />
      <WhyJoinUs />
      <SliderComponents />
      <CollectionPart />
      {/* <ShoesCollected />
      <ShoesCollectedMap /> */}
    </div>
  );
}