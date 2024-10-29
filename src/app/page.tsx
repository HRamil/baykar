import BestOfBest from "@/components/bestOfBest";
import CollectionPart from "@/components/collectionPart";
import SliderComponents from "@/components/sliderComponents";
import SneakersPart from "@/components/sneakersPart";

export default function Home() {
  return (
    <div>
      <SneakersPart />
      <BestOfBest />
      <SliderComponents />
      <CollectionPart />
    </div>
  );
}