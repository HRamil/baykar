import CollectionList from '../collectionList'
import Image from 'next/image'

//style
import './collectionPart.scss'

//image
import desktop1 from '@/images/desktop1.svg'
import desktop2 from '@/images/desktop2.svg'
import desktop3 from '@/images/desktop3.svg'

export default function CollectionPart() {
    return (
        <div className='collectionPart'>
            <div className="title container-fluid">
                <h4>
                    Grow your collection
                </h4>
                <p>
                    Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                    Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
                </p>
            </div>

            <div className='container-fluid d-flex collection'>
                <CollectionList />
                <div className="images">
                    <Image src={desktop1} alt='collection'/>
                    <Image src={desktop2} alt='collection' />
                    <Image src={desktop3} alt='collection' />
                </div>
            </div>
        </div>
    )
}