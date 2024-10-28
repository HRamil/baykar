import ChoosenSneakers from "@/components/choosenSneakers";
import Header from "@/components/header";
import BottomCollectComponent from "../bottomCollectComponent";

//style
import './sneakersPart.scss'

export default function SneakersPart() {
    return (
        <div className='sneakersPart'>
            <Header />
            <ChoosenSneakers />
            <BottomCollectComponent />
        </div>
    )
}