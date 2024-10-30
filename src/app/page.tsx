import BestOfBest from "@/components/bestOfBest";
import CollectionPart from "@/components/collectionPart";
import SliderComponents from "@/components/sliderComponents";
import SneakersPart from "@/components/sneakersPart";
import WhyJoinUs from "@/components/whyJoinUs";
import WorldMap from "@/components/worldMap";

export default function Home() {
  return (
    <div>
      <SneakersPart />
      <BestOfBest />
      <WhyJoinUs />
      <SliderComponents />
      <CollectionPart />
      <WorldMap />
    </div>
  );
}